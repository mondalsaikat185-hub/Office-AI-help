import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

/**
 * Self-Learning Engine for Office AI
 * 
 * DESIGN PRINCIPLE:
 * - Collects signals passively (no extra user action needed)
 * - Stores learning data in Firestore under user's document
 * - Feeds learned preferences back into AI prompts
 * - Degrades gracefully if learning data is unavailable
 */

interface LearningData {
  templateUsage: Record<string, { count: number; lastUsed: number; avgEditDistance: number }>;
  editPatterns: Array<{
    mode: string;
    originalLength: number;
    editedLength: number;
    editRatio: number;   // edited/original — lower = AI was better
    timestamp: number;
  }>;
  phraseFreq: Record<string, number>;  // phrase → usage count
  styleProfile: {
    avgLetterLength: number;
    preferredSalutation: string;
    preferredClosing: string;
    formalityScore: number;  // 1-5
    usesHindi: boolean;
  };
  recentSubjects: string[];  // last 20 subjects for autocomplete
}

export class LearningEngine {
  private data: LearningData = this.getDefaults();
  private saveTimeout: any = null;
  
  private getDefaults(): LearningData {
    return {
      templateUsage: {},
      editPatterns: [],
      phraseFreq: {},
      styleProfile: {
        avgLetterLength: 500,
        preferredSalutation: 'Sir/Madam,',
        preferredClosing: 'Yours faithfully,',
        formalityScore: 4,
        usesHindi: false
      },
      recentSubjects: []
    };
  }

  /** Load learning data from Firestore (call after auth) */
  async load(userId: string): Promise<void> {
    try {
      const userDocRef = doc(db, 'officeai_users', userId);
      const snap = await getDoc(userDocRef);
      if (snap.exists()) {
        const docData = snap.data();
        if (docData && docData.learningData) {
          const loaded = docData.learningData;
          this.data = {
            templateUsage: loaded.templateUsage || {},
            editPatterns: loaded.editPatterns || [],
            phraseFreq: loaded.phraseFreq || {},
            styleProfile: {
              ...this.getDefaults().styleProfile,
              ...(loaded.styleProfile || {})
            },
            recentSubjects: loaded.recentSubjects || []
          };
        }
      }
    } catch (e) {
      console.error("[LearningEngine] Failed to load learning data:", e);
    }
  }

  /** Save learning data to Firestore (debounced, 10s) */
  async save(userId: string): Promise<void> {
    if (this.saveTimeout) clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(async () => {
      try {
        const userDocRef = doc(db, 'officeai_users', userId);
        const dataToSave = JSON.parse(JSON.stringify(this.data));
        await setDoc(userDocRef, { learningData: dataToSave }, { merge: true });
        console.log("[LearningEngine] Learning data successfully saved.");
      } catch (e) {
        console.error("[LearningEngine] Failed to save learning data:", e);
      }
    }, 10000);
  }

  /** Record that a template was used */
  recordTemplateUse(templateId: string, editDistance: number): void {
    const existing = this.data.templateUsage[templateId] || { count: 0, lastUsed: 0, avgEditDistance: 0 };
    existing.count++;
    existing.lastUsed = Date.now();
    existing.avgEditDistance = (existing.avgEditDistance * (existing.count - 1) + editDistance) / existing.count;
    this.data.templateUsage[templateId] = existing;
  }

  /** Record AI output vs user's edited version */
  recordEdit(mode: string, original: string, edited: string): void {
    if (!original || !edited) return;
    this.data.editPatterns.push({
      mode,
      originalLength: original.length,
      editedLength: edited.length,
      editRatio: this.levenshteinRatio(original, edited),
      timestamp: Date.now()
    });
    // Keep only last 50 patterns
    if (this.data.editPatterns.length > 50) {
      this.data.editPatterns = this.data.editPatterns.slice(-50);
    }
    // Update style profile
    this.updateStyleProfile(edited);
  }

  /** Get personalized prompt additions based on learned patterns */
  getPromptEnhancements(mode: string): string {
    const parts: string[] = [];
    
    // Style preference
    const sp = this.data.styleProfile;
    if (sp.avgLetterLength > 0) {
      parts.push(`User typically writes letters of approximately ${Math.round(sp.avgLetterLength)} words.`);
    }
    if (sp.formalityScore >= 4) {
      parts.push('User prefers highly formal government English with standard official phrases.');
    }
    
    // Edit pattern analysis
    const recentEdits = this.data.editPatterns.filter(e => e.mode === mode).slice(-10);
    if (recentEdits.length >= 3) {
      const avgRatio = recentEdits.reduce((a, e) => a + e.editRatio, 0) / recentEdits.length;
      if (avgRatio > 0.3) {
        parts.push('Note: User frequently edits AI output significantly. Be more thorough and detailed in your draft.');
      }
    }
    
    return parts.length > 0 ? '\n\nUSER PREFERENCE CONTEXT:\n' + parts.join('\n') : '';
  }

  /** Get sorted template list (most used first) */
  getSortedTemplateIds(): string[] {
    return Object.entries(this.data.templateUsage)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([id]) => id);
  }

  /** Record a subject for autocomplete */
  recordSubject(subject: string): void {
    if (!subject || !subject.trim()) return;
    const trimmed = subject.trim();
    this.data.recentSubjects = [trimmed, ...this.data.recentSubjects.filter(s => s !== trimmed)].slice(0, 20);
  }

  /** Get subject suggestions */
  getSubjectSuggestions(query: string): string[] {
    if (!query || !query.trim()) return this.data.recentSubjects.slice(0, 5);
    const q = query.toLowerCase().trim();
    return this.data.recentSubjects.filter(s => s.toLowerCase().includes(q)).slice(0, 5);
  }

  private updateStyleProfile(text: string): void {
    const words = text.trim().split(/\s+/).length;
    const sp = this.data.styleProfile;
    sp.avgLetterLength = Math.round((sp.avgLetterLength + words) / 2);
    sp.usesHindi = /[\u0900-\u097F]/.test(text);
  }

  private levenshteinRatio(a: string, b: string): number {
    const maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 0;
    let diff = 0;
    const minLen = Math.min(a.length, b.length);
    for (let i = 0; i < minLen; i++) {
      if (a[i] !== b[i]) diff++;
    }
    diff += Math.abs(a.length - b.length);
    return diff / maxLen;
  }
}

export const learningEngine = new LearningEngine();
