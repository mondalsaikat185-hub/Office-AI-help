import { useStore } from './store';
import { rateLimiter } from './rateLimiter';

const MAX_AUTO_RETRIES = 2;
const RETRY_DELAY_MS = [2000, 5000]; // 2s then 5s

async function withAutoRetry<T>(
  fn: () => Promise<T>,
  attempt: number = 0,
  canRetry: () => boolean = () => true
): Promise<T> {
  try {
    return await fn();
  } catch (e: any) {
    const isRetryable =
      !e.message?.includes('429') &&
      !e.message?.includes('quota') &&
      !e.message?.includes('Quota') &&
      canRetry() &&
      attempt < MAX_AUTO_RETRIES;

    if (isRetryable) {
      console.warn(`[Gemini] Retry ${attempt + 1}/${MAX_AUTO_RETRIES} after ${RETRY_DELAY_MS[attempt]}ms due to error: ${e.message}`);
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS[attempt]));
      return withAutoRetry(fn, attempt + 1, canRetry);
    }
    throw e;
  }
}

export async function callGeminiStream(prompt: string, onChunk: (text: string) => void, opts: { temp?: number, maxOut?: number, imageBase64?: string, imageBase64s?: string[] } = {}) {
  let { apiKeys, mistralKey, selectedModel } = useStore.getState();
  
  // Set model RPM
  rateLimiter.setModelRPM(selectedModel);
  
  const envKey = process.env.GEMINI_API_KEY;
  const keysToTry = [...apiKeys];
  
  if (envKey && envKey !== 'MY_GEMINI_API_KEY' && envKey.trim().length > 0) {
    keysToTry.unshift({ key: envKey, label: 'Default Environment Key', added: Date.now(), usage: { date: new Date().toISOString().slice(0, 10), tokens: 0 } });
  }
  
  if (!keysToTry.length) throw new Error('No API key configured. Please add one in Settings.');

  const errors = [];
  
  for (let i = 0; i < keysToTry.length; i++) {
    const keyObj = keysToTry[i];
    
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:streamGenerateContent?key=${keyObj.key}&alt=sse`;
      const parts: any[] = [{ text: prompt }];

      if (opts.imageBase64s && opts.imageBase64s.length > 0) {
         for (const b64 of opts.imageBase64s) {
           const mimeType = b64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)?.[1] || 'image/jpeg';
           const base64Data = b64.split(',')[1] || b64;
           parts.unshift({
              inlineData: { mimeType, data: base64Data }
           });
         }
      } else if (opts.imageBase64) {
         const mimeType = opts.imageBase64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)?.[1] || 'image/jpeg';
         const base64Data = opts.imageBase64.split(',')[1] || opts.imageBase64;
         parts.unshift({
            inlineData: { mimeType, data: base64Data }
         });
      }

      const body = {
        contents: [{ parts }],
        generationConfig: { 
          temperature: opts.temp ?? 0.4, 
          maxOutputTokens: opts.maxOut ?? 16384 
        },
      };
      
      let hasSentChunk = false;

      const result = await withAutoRetry(async () => {
        // Wait for a rate limit slot before sending the request
        await rateLimiter.waitForSlot(keyObj.key);

        const controller = new AbortController();
        let timeoutId = setTimeout(() => controller.abort(), 45000); // 45s timeout for connection

        const res = await fetch(url, {
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(body),
          signal: controller.signal
        });
        
        if (!res.ok) {
           clearTimeout(timeoutId);
           const errorText = await res.text();
           if (res.status === 429 || /quota|exhausted/i.test(errorText)) {
             await rateLimiter.handleRateLimit(keyObj.key);
             throw new Error(`quota exceeded: ${errorText}`);
           }
           throw new Error(errorText);
        }
        
        if (!res.body) {
           clearTimeout(timeoutId);
           throw new Error("No response body");
        }

        // Record request slot on successful status response
        rateLimiter.recordRequest(keyObj.key);

        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let done = false;
        let totalTokens = 0;
        let truncated = false;
        let buffer = '';

        // Reset activity timeout helper
        const resetActivityTimeout = () => {
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => controller.abort(), 20000); // 20s inactivity timeout
        };

        // Clear connection timeout
        clearTimeout(timeoutId);

        while (!done) {
          resetActivityTimeout();
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            buffer += chunk;
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            
            for (const line of lines) {
              if (line.trim() === '') continue;
              if (line.startsWith('data: ')) {
                const dataStr = line.slice(6);
                if (dataStr === '[DONE]') continue;
                try {
                  const data = JSON.parse(dataStr);
                  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (text) {
                     onChunk(text);
                     hasSentChunk = true;
                  }
                  
                  if (data.candidates?.[0]?.finishReason === 'MAX_TOKENS') {
                     truncated = true;
                  }
                  if (data.usageMetadata?.totalTokenCount) {
                     totalTokens = data.usageMetadata.totalTokenCount;
                  }
                } catch (e) {
                  console.error("Stream parse error:", e);
                }
              }
            }
          }
        }
        
        if (timeoutId) clearTimeout(timeoutId);
        
        return { tokens: totalTokens, truncated };
      }, 0, () => !hasSentChunk);
      
      // Update key usage in store
      if (result.tokens > 0 && keyObj.label !== 'Default Environment Key') {
        const store = useStore.getState();
        const updatedKeys = store.apiKeys.map(k => {
          if (k.key === keyObj.key) {
            const isToday = k.usage?.date === new Date().toISOString().slice(0, 10);
            return {
              ...k,
              usage: {
                date: new Date().toISOString().slice(0, 10),
                tokens: (isToday ? (k.usage?.tokens || 0) : 0) + result.tokens
              }
            };
          }
          return k;
        });
        store.saveUserData({ apiKeys: updatedKeys });
      }

      return result;
    } catch (e: any) {
      errors.push(`${keyObj.label}: ${e.message}`);
    }
  }
  
  if (mistralKey) {
     // fallback to mistral without streaming
     try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000);
      const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method:'POST',
        headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+ mistralKey},
        body:JSON.stringify({model:'mistral-small-latest', messages:[{role:'user', content:prompt}], temperature:opts.temp ?? 0.4, max_tokens:opts.maxOut ?? 8192}),
        signal: controller.signal
      });
      const json = await res.json();
      clearTimeout(timeoutId);
      if(json.error) throw new Error(json.error.message);
      const outputText = json.choices[0].message.content;
      onChunk(outputText);
      return { tokens: json.usage?.total_tokens || 0, truncated: false };
    } catch(e: any) {
      errors.push('Mistral: '+e.message);
    }
  }
  
  throw new Error('All API keys failed:\n' + errors.join('\n'));
}

export async function callGemini(prompt: string, opts: { temp?: number, maxOut?: number, imageBase64?: string, imageBase64s?: string[] } = {}) {
  let { apiKeys, mistralKey, selectedModel } = useStore.getState();
  
  // Set model RPM
  rateLimiter.setModelRPM(selectedModel);
  
  // Try to get key from environment first, then user's custom keys
  const envKey = process.env.GEMINI_API_KEY;
  const keysToTry = [...apiKeys];
  
  if (envKey && envKey !== 'MY_GEMINI_API_KEY' && envKey.trim().length > 0) {
    keysToTry.unshift({ key: envKey, label: 'Default Environment Key', added: Date.now(), usage: { date: new Date().toISOString().slice(0, 10), tokens: 0 } });
  }
  
  if (!keysToTry.length) throw new Error('No API key configured. Please add one in Settings.');
  
  const today = new Date().toISOString().slice(0, 10);
  const errors = [];
  
  for (let i = 0; i < keysToTry.length; i++) {
    const keyObj = keysToTry[i];
    
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${keyObj.key}`;
      const parts: any[] = [{ text: prompt }];

      if (opts.imageBase64s && opts.imageBase64s.length > 0) {
         for (const b64 of opts.imageBase64s) {
           const mimeType = b64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)?.[1] || 'image/jpeg';
           const base64Data = b64.split(',')[1] || b64;
           parts.unshift({
              inlineData: { mimeType, data: base64Data }
           });
         }
      } else if (opts.imageBase64) {
         const mimeType = opts.imageBase64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)?.[1] || 'image/jpeg';
         const base64Data = opts.imageBase64.split(',')[1] || opts.imageBase64;
         parts.unshift({
            inlineData: { mimeType, data: base64Data }
         });
      }

      const body = {
        contents: [{ parts }],
        generationConfig: { 
          temperature: opts.temp ?? 0.4, 
          maxOutputTokens: opts.maxOut ?? 8192 
        },
      };
      
      const result = await withAutoRetry(async () => {
        // Wait for a rate limit slot before sending the request
        await rateLimiter.waitForSlot(keyObj.key);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000); // 45s timeout

        const res = await fetch(url, {
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(body),
          signal: controller.signal
        });
        const json = await res.json();
        clearTimeout(timeoutId);
        
        if (json.error) {
          if (json.error.code === 429 || /quota|exhausted/i.test(json.error.message || '')) {
            await rateLimiter.handleRateLimit(keyObj.key);
            throw new Error(`quota exceeded: ${json.error.message || 'Quota error'}`);
          }
          throw new Error(json.error.message || 'Unknown API error');
        }

        // Record request slot on successful response
        rateLimiter.recordRequest(keyObj.key);
        
        let text = json.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const tokens = json.usageMetadata?.totalTokenCount || 0;
        
        // Auto-continuation logic for truncated output
        const finishReason = json.candidates?.[0]?.finishReason || '';
        let truncated = false;
        if (finishReason === 'MAX_TOKENS') {
           console.warn('Gemini output truncated (MAX_TOKENS)');
           truncated = true;
        }
        
        return { text, tokens, truncated };
      });
      
      // Update key usage in store
      if (keyObj.label !== 'Default Environment Key') {
        const store = useStore.getState();
        const updatedKeys = store.apiKeys.map(k => {
          if (k.key === keyObj.key) {
            const isToday = k.usage?.date === new Date().toISOString().slice(0, 10);
            return {
              ...k,
              usage: {
                date: new Date().toISOString().slice(0, 10),
                tokens: (isToday ? (k.usage?.tokens || 0) : 0) + result.tokens
              }
            };
          }
          return k;
        });
        store.saveUserData({ apiKeys: updatedKeys });
      }

      return result;
    } catch (e: any) {
      errors.push(`${keyObj.label}: ${e.message}`);
    }
  }
  
  if (mistralKey) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000);
      const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method:'POST',
        headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+ mistralKey},
        body:JSON.stringify({model:'mistral-small-latest', messages:[{role:'user', content:prompt}], temperature:opts.temp ?? 0.4, max_tokens:opts.maxOut ?? 8192}),
        signal: controller.signal
      });
      const json = await res.json();
      clearTimeout(timeoutId);
      if(json.error) throw new Error(json.error.message);
      return { text: json.choices[0].message.content, tokens: json.usage?.total_tokens || 0 };
    } catch(e: any) {
      errors.push('Mistral: '+e.message);
    }
  }
  
  throw new Error('All API keys failed:\n' + errors.join('\n'));
}

// Semantic Chunker & RAG Implementation
const ENGLISH_STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'arent', 'as', 'at',
  'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by',
  'can', 'cant', 'cannot', 'could', 'couldnt', 'did', 'didnt', 'do', 'does', 'doesnt', 'doing', 'dont', 'down', 'during',
  'each', 'few', 'for', 'from', 'further', 'had', 'hadnt', 'has', 'hasnt', 'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes',
  'her', 'here', 'heres', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i', 'id', 'ill', 'im', 'ive', 'if', 'in',
  'into', 'is', 'isnt', 'it', 'its', 'itself', 'lets', 'me', 'more', 'most', 'mustnt', 'my', 'myself',
  'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own',
  'same', 'shant', 'she', 'shed', 'shell', 'shes', 'should', 'shouldnt', 'so', 'some', 'such', 'than', 'that', 'thats', 'the',
  'their', 'theirs', 'them', 'themselves', 'then', 'there', 'theres', 'these', 'they', 'theyd', 'theyll', 'theyre', 'theyve',
  'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasnt', 'we', 'wed', 'well', 'were', 'weve',
  'werent', 'what', 'whats', 'when', 'whens', 'where', 'wheres', 'which', 'while', 'who', 'whos', 'whom', 'why', 'whys', 'with',
  'wont', 'would', 'wouldnt', 'you', 'youd', 'youll', 'youre', 'youve', 'your', 'yours', 'yourself', 'yourselves'
]);

export const RAG = {
  chunk(text: string, maxChunkSize=500) {
    if(!text || text.length <= maxChunkSize) return text ? [{text, index:0}] : [];
    const chunks = [];
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
    let currentChunk = '';
    let chunkIndex = 0;
    for(const para of paragraphs) {
      if(para.length > maxChunkSize) {
        if(currentChunk.trim()) { chunks.push({text:currentChunk.trim(), index:chunkIndex++}); currentChunk = ''; }
        const sentences = para.match(/[^.!?\u0964]+[.!?\u0964]+\s*/g) || [para];
        let sentChunk = '';
        for(const sent of sentences) {
          if((sentChunk + sent).length > maxChunkSize && sentChunk.trim()) {
            chunks.push({text:sentChunk.trim(), index:chunkIndex++});
            sentChunk = sent;
          } else {
            sentChunk += sent;
          }
        }
        if(sentChunk.trim()) { currentChunk = sentChunk; }
        continue;
      }
      if((currentChunk + '\n\n' + para).length > maxChunkSize && currentChunk.trim()) {
        chunks.push({text:currentChunk.trim(), index:chunkIndex++});
        currentChunk = para;
      } else {
        currentChunk = currentChunk ? currentChunk + '\n\n' + para : para;
      }
    }
    if(currentChunk.trim()) chunks.push({text:currentChunk.trim(), index:chunkIndex++});
    return chunks;
  },
  _tokenize(text: string) {
    const rawTokens = (text||'').toLowerCase().replace(/[^\w\s\u0980-\u09FF\u0900-\u097F]/g,' ').split(/\s+/);
    return rawTokens.filter(w => w.length > 2 && !ENGLISH_STOPWORDS.has(w));
  },
  _termFreq(tokens: string[]) {
    const tf: any = {};
    for(const t of tokens) tf[t] = (tf[t]||0) + 1;
    return tf;
  },
  similarity(text1: string, text2: string) {
    const t1 = this._tokenize(text1), t2 = this._tokenize(text2);
    if(!t1.length || !t2.length) return 0;
    const tf1 = this._termFreq(t1), tf2 = this._termFreq(t2);
    const allTerms = new Set([...Object.keys(tf1), ...Object.keys(tf2)]);
    let dot=0, mag1=0, mag2=0;
    for(const t of allTerms) {
      const a = tf1[t]||0, b = tf2[t]||0;
      dot += a*b; mag1 += a*a; mag2 += b*b;
    }
    return mag1 && mag2 ? dot / (Math.sqrt(mag1) * Math.sqrt(mag2)) : 0;
  },
  similarityTfIdf(queryTokens: string[], docTokens: string[], idfs: { [term: string]: number }) {
    if (!queryTokens.length || !docTokens.length) return 0;
    const tfQ = this._termFreq(queryTokens);
    const tfD = this._termFreq(docTokens);
    
    const allTerms = new Set([...Object.keys(tfQ), ...Object.keys(tfD)]);
    let dot = 0;
    let magQ = 0;
    let magD = 0;
    
    for (const t of allTerms) {
      const idf = idfs[t] ?? 1.0;
      const valQ = (tfQ[t] || 0) * idf;
      const valD = (tfD[t] || 0) * idf;
      dot += valQ * valD;
      magQ += valQ * valQ;
      magD += valD * valD;
    }
    
    return magQ && magD ? dot / (Math.sqrt(magQ) * Math.sqrt(magD)) : 0;
  },
  retrieve(query: string, opts: any = {}) {
    const maxResults = opts.maxResults || 3;
    const minScore = opts.minScore || 0.08;
    const state = useStore.getState();
    const wsLetters = state.letters.filter(l => l.workspaceId === state.activeWorkspaceId);
    
    if(!wsLetters.length) return [];
    
    try {
      // ── TF-IDF Retrieval with English Stopwords ──
      const allChunks: { text: string; source: string; date: number; mode: string; tokens: string[] }[] = [];
      
      for(const letter of wsLetters.slice(0, 50)) {
        const fullText = 'Subject: ' + (letter.subject||'') + '\n' + (letter.body||'');
        const chunks = this.chunk(fullText);
        for(const chunk of chunks) {
          allChunks.push({
            text: chunk.text,
            source: letter.subject || 'Untitled',
            date: letter.createdAt,
            mode: letter.mode,
            tokens: this._tokenize(chunk.text)
          });
        }
      }
      
      const N = allChunks.length;
      if (N === 0) return [];
      
      // Calculate Document Frequency (DF)
      const df: { [term: string]: number } = {};
      for (const chunk of allChunks) {
        const uniqueTokens = new Set(chunk.tokens);
        for (const t of uniqueTokens) {
          df[t] = (df[t] || 0) + 1;
        }
      }
      
      // Calculate Inverse Document Frequency (IDF)
      const idfs: { [term: string]: number } = {};
      for (const term in df) {
        idfs[term] = Math.log(1 + N / df[term]);
      }
      
      const queryTokens = this._tokenize(query);
      const scored = [];
      
      for(const chunk of allChunks) {
        const score = this.similarityTfIdf(queryTokens, chunk.tokens, idfs);
        if(score >= minScore) {
          scored.push({ text: chunk.text, score, source: chunk.source, date: chunk.date, mode: chunk.mode });
        }
      }
      
      scored.sort((a,b) => b.score - a.score);
      return scored.slice(0, maxResults);
      
    } catch (err) {
      console.error("TF-IDF RAG search failed, falling back to simple similarity matching:", err);
      // ── Fallback: Simple Similarity Matching ──
      const scored: any[] = [];
      for(const letter of wsLetters.slice(0, 50)) {
        const fullText = 'Subject: ' + (letter.subject||'') + '\n' + (letter.body||'');
        const chunks = this.chunk(fullText);
        for(const chunk of chunks) {
          const score = this.similarity(query, chunk.text);
          if(score >= minScore) {
            scored.push({ text: chunk.text, score, source: letter.subject || 'Untitled', date: letter.createdAt, mode: letter.mode });
          }
        }
      }
      scored.sort((a,b) => b.score - a.score);
      return scored.slice(0, maxResults);
    }
  },
  buildContext(query: string) {
    const chunks = this.retrieve