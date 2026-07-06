import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '../../lib/store';
import { callGemini, callGeminiStream, RAG } from '../../lib/gemini';
import { Folder, FileText, Bot, PenTool, Mic, Paperclip, X } from 'lucide-react';
import { Document, Packer, Paragraph, TextRun, AlignmentType, TabStopType, BorderStyle, ImageRun, Table, TableRow, TableCell, WidthType, UnderlineType } from 'docx';
import { Letterhead, Template } from '../../types';
import { defaultTemplates } from '../../lib/defaultTemplates';
import { learningEngine } from '../../lib/learningEngine';
import TemplateWizard from '../wizard/TemplateWizard';
import WizardResult from '../wizard/WizardResult';
import { TEMPLATE_RULES } from '../../lib/templateRules';
import { downloadDocxDocument } from '../../lib/export/docxExport';
// @ts-ignore
import html2pdf from 'html2pdf.js';
// @ts-ignore
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function WriteScreen() {
  // =========================================================================
  // SECTION 1: COMPONENT STATE & INITIALIZATION
  // =========================================================================
  const [params, setParams] = useSearchParams();
  const mode = params.get('mode') || 'ai';
  const { user, workspaces, activeWorkspaceId, activeDirectoryId, activeFileId, activeSignatureId, setActiveSignature, saveUserData, saveLetter, letters, drafts, setDraft, templates, phrases, addressBook, loadSingleLetter } = useStore();
  const ws = workspaces.find(w => w.id === activeWorkspaceId);
  const sig = ws?.signatures.find(s => s.id === activeSignatureId);
  const dir = ws?.directories.find(d => d.id === activeDirectoryId);
  const file = dir?.files.find(f => f.id === activeFileId);
  
  const currentDraftId = activeFileId || 'unsaved';
  const draftState = drafts[currentDraftId] || { subject: '', details: '', refText: '', extraIns: '', recipientTo: '', output: '', copyTo: '', salutation: 'Sir/Madam,' };

  const [subject, setSubject] = useState('');
  const [showSubjectSuggestions, setShowSubjectSuggestions] = useState(false);
  const originalOutputRef = useRef('');
  const [details, setDetails] = useState('');
  const [refText, setRefText] = useState('');
  const [extraIns, setExtraIns] = useState('');
  const [recipientTo, setRecipientTo] = useState('');
  const [copyTo, setCopyTo] = useState('');
  const [enclosures, setEnclosures] = useState('');
  const [salutation, setSalutation] = useState('');
  const [din, setDin] = useState('');
  const [includeDin, setIncludeDin] = useState(false);
  const [includeLetterhead, setIncludeLetterhead] = useState(true);
  const [styleRefText, setStyleRefText] = useState('');
  const [styleImageBase64, setStyleImageBase64] = useState('');
  const [previewMode, setPreviewMode] = useState<'preview'|'edit'>('preview');
  const [output, setOutput] = useState('');
  const [generating, setGenerating] = useState(false);
  const [paperSize, setPaperSize] = useState<'A4' | 'A3' | 'Legal'>('A4');
  const [outputLang, setOutputLang] = useState<'English' | 'Bengali' | 'Hindi' | 'Odia' | 'English-Hindi Mixed'>('English');
  const [tokensUsed, setTokensUsed] = useState(0);
  const [isTruncated, setIsTruncated] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [uiMessage, setUiMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [downloadName, setDownloadName] = useState('');
  const [lastSavedId, setLastSavedId] = useState<string | null>(null);
  const [magicInput, setMagicInput] = useState('');
  const [magicImages, setMagicImages] = useState<string[]>([]);
  const [isMagicLoading, setIsMagicLoading] = useState(false);
  const [legalCheck, setLegalCheck] = useState('');
  const [isLegalChecking, setIsLegalChecking] = useState(false);

  const [templateSearch, setTemplateSearch] = useState('');
  const [templateCategory, setTemplateCategory] = useState<string>('All');

  // Wizard state variables
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardTemplateId, setWizardTemplateId] = useState<string | undefined>(undefined);
  const [wizardValues, setWizardValues] = useState<Record<string, string>>({});
  const [wizardSelectedRules, setWizardSelectedRules] = useState<string[]>([]);
  const [wizardSelectedTone, setWizardSelectedTone] = useState<'Formal' | 'Strong' | 'Moderate'>('Formal');
  const [wizardSelectedLanguage, setWizardSelectedLanguage] = useState<string>('English');
  const [wizardStep, setWizardStep] = useState<1 | 2 | 3>(1);

  const wizardTemplate = useMemo(() => {
    if (!wizardTemplateId) return null;
    const all = [...defaultTemplates, ...(templates || [])];
    return all.find(t => t.id === wizardTemplateId) || null;
  }, [wizardTemplateId, templates]);

  const CATEGORIES = ['All', 'Leave & Service', 'GPF', 'GST', 'Customs', 'General', 'Custom'];

  const filteredTemplates = useMemo(() => {
    const userTemplatesWithCategory = (templates || []).map(t => ({
      ...t,
      category: t.category || 'Custom'
    }));
    const all = [...defaultTemplates, ...userTemplatesWithCategory];
    return all.filter(t => {
      const matchCategory = templateCategory === 'All' || t.category === templateCategory;
      const matchSearch = !templateSearch ||
        t.name.toLowerCase().includes(templateSearch.toLowerCase()) ||
        t.subject.toLowerCase().includes(templateSearch.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [templates, templateSearch, templateCategory]);

  const [legalDocType, setLegalDocType] = useState('Refund Rejection Order (Section 27)');
  const [arnNo, setArnNo] = useState('');
  const [arnDate, setArnDate] = useState('');
  const [boeNo, setBoeNo] = useState('');
  const [boeDate, setBoeDate] = useState('');
  const [importerName, setImporterName] = useState('');
  const [iec, setIec] = useState('');
  const [amount, setAmount] = useState('');
  const [goods, setGoods] = useState('');
  const [scnDate, setScnDate] = useState('');

  const handleMagicFill = async () => {
    if (!magicInput && magicImages.length === 0) return displayAlert("Please paste some text or attach a scanned document image first!");
    setIsMagicLoading(true);
    try {
      const prompt = `You are a strict data extraction AI for an Indian CGST/Customs office assistant. A user ${magicImages.length > 0 ? 'attached scanned document image(s)' + (magicInput ? ' and pasted notes' : '') : 'pasted raw notes, a draft, or scattered case details'}.${magicImages.length > 0 ? '\nFIRST read ALL text in the attached image(s) carefully (letters, notices, seals, handwritten notes), THEN extract.' : ''}
Your ONLY task is to extract details WITHOUT modifying, summarizing, altering punctuation, or changing any wording. If a field is absent, return an empty string for it.

Input:
"""
${magicInput}
"""

Extract into this exact JSON format:
{
  "type": "'letter', 'note', or 'order'. Default 'letter' if unsure.",
  "subject": "EXACT subject line (excluding 'Sub:' or 'Subject:'). If no explicit subject, compose a one-line subject from the facts (this is the ONLY field you may compose).",
  "salutation": "EXACT salutation if present (e.g., 'Sir/Madam,').",
  "recipientTo": "EXACT recipient address block (exclude 'To,'). Preserve line breaks.",
  "refText": "EXACT reference text / ref numbers with dates if present.",
  "details": "The EXACT complete body/facts. STRICTLY copy-paste. DO NOT summarize or rewrite.",
  "copyTo": "EXACT 'Copy to' / 'Copy submitted to' list if present. Preserve line breaks.",
  "enclosures": "EXACT enclosure list if present.",
  "din": "DIN number if present (format like CBIC-20260106XXXXXXXX).",
  "arnNo": "ARN number if present.",
  "arnDate": "ARN date if present (YYYY-MM-DD if convertible).",
  "boeNo": "Bill of Entry / Shipping Bill number if present.",
  "boeDate": "BOE date if present (YYYY-MM-DD if convertible).",
  "importerName": "Importer / taxpayer / noticee name if present.",
  "iec": "IEC or GSTIN if present.",
  "amount": "Principal disputed/refund/demand amount in Rs. if present (numbers only).",
  "goods": "Description of goods/services if present.",
  "scnDate": "SCN date if present (YYYY-MM-DD if convertible)."
}
Return ONLY a valid JSON object. No markdown, no backticks, no explanation.`;
      
      const res = await callGemini(prompt, { maxOut: 8192, temp: 0.1, imageBase64s: magicImages.length > 0 ? magicImages : undefined });
      let parsedItem;
      try {
        let raw = res.text.replace(/^\s*```(?:json)?/i, '').replace(/```\s*$/, '').trim();
        const jsonMatch = raw.match(/\{[\s\S]*\}/);
        parsedItem = JSON.parse(jsonMatch ? jsonMatch[0] : raw);
      } catch (err) {
        throw new Error("AI returned invalid data format. Try again or paste a smaller portion.");
      }
      
      if (parsedItem.type && ['letter', 'note', 'order'].includes(parsedItem.type.toLowerCase())) {
         const t = parsedItem.type.toLowerCase();
         if (t === 'letter') {
             setParams({ mode: 'format' });
         } else {
             setParams({ mode: t });
         }
      }
      if (parsedItem.subject) setSubject(parsedItem.subject);
      if (parsedItem.recipientTo) setRecipientTo(parsedItem.recipientTo);
      if (parsedItem.refText) setRefText(parsedItem.refText);
      if (parsedItem.salutation) setSalutation(parsedItem.salutation);
      if (parsedItem.details) setDetails(parsedItem.details);
      if (parsedItem.copyTo) setCopyTo(parsedItem.copyTo);
      if (parsedItem.enclosures) setEnclosures(parsedItem.enclosures);
      if (parsedItem.din) { setDin(parsedItem.din); setIncludeDin(true); }
      if (parsedItem.arnNo) setArnNo(parsedItem.arnNo);
      if (parsedItem.arnDate) setArnDate(parsedItem.arnDate);
      if (parsedItem.boeNo) setBoeNo(parsedItem.boeNo);
      if (parsedItem.boeDate) setBoeDate(parsedItem.boeDate);
      if (parsedItem.importerName) setImporterName(parsedItem.importerName);
      if (parsedItem.iec) setIec(parsedItem.iec);
      if (parsedItem.amount) setAmount(String(parsedItem.amount));
      if (parsedItem.goods) setGoods(parsedItem.goods);
      if (parsedItem.scnDate) setScnDate(parsedItem.scnDate);

      const extracted = ['subject','recipientTo','refText','details','copyTo','enclosures','din','arnNo','boeNo','importerName','iec','amount','goods','scnDate'].filter(k => parsedItem[k]);
      setMagicInput('');
      setMagicImages([]);
      displayAlert(`Magic fill successful! Detected type: ${parsedItem.type || 'letter'} • ${extracted.length} fields auto-filled`);
    } catch(err: any) {
      displayAlert("Magic fill failed: " + err.message);
    } finally {
      setIsMagicLoading(false);
    }
  };

  const handleLegalCheck = async () => {
    if (!output) return;
    setIsLegalChecking(true);
    setLegalCheck('');
    try {
      const ruleSet = wizardTemplateId ? TEMPLATE_RULES.find(r => r.templateId === wizardTemplateId) : null;
      const selectedRuleInfo = ruleSet
        ? ruleSet.rules.filter(r => wizardSelectedRules.includes(r.id)).map(r => `${r.act} ${r.section} — ${r.title}`).join('\n')
        : '';
      const prompt = `You are a senior legal vetting officer of Indian CGST & Customs. Vet the following draft ${mode === 'legal' ? 'quasi-judicial order' : mode === 'note' ? 'note sheet' : 'official letter'} STRICTLY and report problems only.

Check for:
1. WRONG or MISQUOTED legal provisions (section/rule numbers vs what they actually govern under CGST Act 2017, CGST Rules 2017, Customs Act 1962).
2. LIMITATION issues — e.g. Section 73(10)/74(10) time limits, Section 27/28 Customs limitation, appeal periods.
3. INTERNAL INCONSISTENCIES — dates that contradict each other, amount mismatches (figures vs words), name/GSTIN inconsistencies.
4. MISSING MANDATORY ELEMENTS — DIN (CBIC Circular 122/41/2019), signature block, personal-hearing opportunity in orders (Section 75(4)), preamble/appeal provision in orders.
5. FORMAT of DIN, GSTIN, ARN if present (only if visibly malformed).
${selectedRuleInfo ? 'Provisions the officer selected for this document:\n' + selectedRuleInfo : ''}
Today's date: ${new Date().toISOString().slice(0,10)}

---BEGIN DRAFT---
${output}
---END DRAFT---

Reply in this exact format, in ${outputLang === 'Bengali' ? 'Bengali' : 'English'}:
VERDICT: [SAFE / MINOR ISSUES / SERIOUS ISSUES]
Then a numbered list — each item starts with ⚠️ (minor) or ❌ (serious), states the problem in ONE sentence, and gives the fix in ONE sentence. If nothing is wrong, reply only: VERDICT: SAFE — followed by one line confirming what was verified. Do NOT rewrite the draft. Maximum 10 items.`;
      const res = await callGemini(prompt, { temp: 0.2, maxOut: 4096 });
      setLegalCheck(res.text || 'No response');
    } catch (e: any) {
      setLegalCheck('❌ Check failed: ' + e.message);
    } finally {
      setIsLegalChecking(false);
    }
  };

  const displayAlert = useCallback((msg: string) => {
    setUiMessage(msg);
    setTimeout(() => setUiMessage(''), 5000);
  }, []);

  const handleSaveToFirebase = useCallback(async (silent = false) => {
    if (!output || !ws || !dir || !file || !sig) {
        if (!silent) displayAlert('Cannot save: missing workspace, directory, file, or signature.');
        return;
    }
    try {
        const docId = lastSavedId || Date.now().toString(36);
        const newLetter = {
            id: docId,
            workspaceId: ws.id, workspaceName: ws.name,
            directoryId: dir.id, directoryName: dir.name,
            fileId: file.id, fileName: file.name, fileNumber: file.fileNumber,
            subject, mode: mode as any, body: output, bodyHtml: '',
            signatureId: sig.id, signatureName: sig.name, signatureDesig: sig.designation,
            confidentiality: 'routine' as any, recipient: recipientTo, copyTo: copyTo ? copyTo.split('\n') : [], enclosures: '', salutation: '',
            createdAt: Date.now()
        };
        await saveLetter(newLetter);
        setLastSavedId(docId);

        // Learning engine tracking
        learningEngine.recordEdit(mode, originalOutputRef.current, output);
        learningEngine.recordSubject(subject);
        if (user) {
          learningEngine.save(user.uid);
        }

        if (!silent) displayAlert("Record saved to cloud!");
    } catch (e: any) {
        if (!silent) displayAlert("Save failed: " + e.message);
    }
  }, [output, ws, dir, file, sig, subject, mode, recipientTo, copyTo, lastSavedId, saveLetter, displayAlert, user]);

  // =========================================================================
  // SECTION 3: CLOUD STORAGE & MANUAL SAVE HANDLERS
  // =========================================================================
  const handleManualSave = useCallback(async () => {
    try {
      const obj = { 
        subject, details, refText, extraIns, recipientTo, output, copyTo, enclosures, salutation, din, includeDin, includeLetterhead, legalDocType, arnNo, arnDate, boeNo, boeDate, importerName, iec, amount, goods, scnDate,
        wizardTemplateId, wizardValues, wizardSelectedRules, wizardSelectedTone, wizardSelectedLanguage
      };
      setDraft(currentDraftId, obj);
      await saveUserData();

      // Learning engine tracking
      learningEngine.recordEdit(mode, originalOutputRef.current, output);
      learningEngine.recordSubject(subject);
      if (user) {
        learningEngine.save(user.uid);
      }

      setSaveMessage('Saved to cloud!');
      setTimeout(() => setSaveMessage(''), 3000);
      
      const { tgBotToken, tgChatId } = useStore.getState();
      if (tgBotToken && tgChatId && output) {
        import('../../lib/telegram').then(m => {
          m.sendTelegramNotification(tgBotToken, tgChatId, `📄 *Letter Saved*: ${subject || 'Untitled'}\n\n*Draft length*: ${output.length} characters`);
        });
      }
    } catch(err) {
      setSaveMessage('Local save only (cloud failed)');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  }, [subject, details, refText, extraIns, recipientTo, output, copyTo, enclosures, salutation, din, includeDin, includeLetterhead, legalDocType, arnNo, arnDate, boeNo, boeDate, importerName, iec, amount, goods, scnDate, wizardTemplateId, wizardValues, wizardSelectedRules, wizardSelectedTone, wizardSelectedLanguage, currentDraftId, setDraft, saveUserData, user, mode]);

  const applyTemplate = (tId: string) => {
    if (!tId) return;
    const allT = [...defaultTemplates, ...templates];
    const t = allT.find(x => x.id === tId) as any;
    if (!t) return;
    if (t.subject) setSubject(t.subject);
    let newDet = '';
    if (t.opening) newDet += t.opening + '\n\n';
    if (t.closing) newDet += '\n\n' + t.closing;
    setDetails(prev => newDet ? newDet : prev);
    if (t.copyTo && t.copyTo.length > 0) {
      setCopyTo(t.copyTo.join('\n'));
    }
  };

  // =========================================================================
  // SECTION 2: DRAFT & LOCALSTORAGE AUTOSAVE SYNC
  // =========================================================================
  // Load draft from local component mount based on activeFileId
  useEffect(() => {
     const st = drafts[currentDraftId];
     const localSt = localStorage.getItem(`draft_${currentDraftId}`);
     let finalSt = { subject: '', details: '', refText: '', extraIns: '', recipientTo: '', output: '', copyTo: '', enclosures: '', salutation: '', din: '', includeDin: false, includeLetterhead: true, styleRefText: '', styleImageBase64: '', legalDocType: 'Refund Rejection Order (Section 27)', arnNo: '', arnDate: '', boeNo: '', boeDate: '', importerName: '', iec: '', amount: '', goods: '', scnDate: '', wizardTemplateId: undefined as string | undefined, wizardValues: {} as Record<string, string>, wizardSelectedRules: [] as string[], wizardSelectedTone: 'Formal' as 'Formal' | 'Strong' | 'Moderate', wizardSelectedLanguage: 'English' };
     if (localSt) {
       try { 
         const parsed = JSON.parse(localSt);
         if (parsed && Array.isArray(parsed.copyTo)) {
           parsed.copyTo = parsed.copyTo.join('\n');
         }
         finalSt = { ...finalSt, ...parsed }; 
       } catch(e) {}
     } else if (st) {
       let loadedCopyTo = '';
       if (st.copyTo) {
         if (Array.isArray(st.copyTo)) {
           loadedCopyTo = st.copyTo.join('\n');
         } else {
           loadedCopyTo = String(st.copyTo);
         }
       }
       finalSt = {
         ...finalSt,
         ...st,
         copyTo: loadedCopyTo
       } as any;
     }
     
     setSubject(finalSt.subject || '');
     setDetails(finalSt.details || '');
     setRefText(finalSt.refText || '');
     setStyleRefText(finalSt.styleRefText || '');
     setStyleImageBase64(finalSt.styleImageBase64 || '');
     setExtraIns(finalSt.extraIns || '');
     setRecipientTo(finalSt.recipientTo || '');
     setCopyTo(finalSt.copyTo || '');
     setEnclosures(finalSt.enclosures || '');
     setSalutation(finalSt.salutation !== undefined && finalSt.salutation !== '' ? finalSt.salutation : 'Sir/Madam,');
     setOutput(finalSt.output || '');
     setIncludeDin(finalSt.includeDin || false);
     setIncludeLetterhead(finalSt.includeLetterhead !== undefined ? finalSt.includeLetterhead : true);
     setDin(finalSt.din || '');
     setLegalDocType(finalSt.legalDocType || 'Refund Rejection Order (Section 27)');
     setArnNo(finalSt.arnNo || '');
     setArnDate(finalSt.arnDate || '');
     setBoeNo(finalSt.boeNo || '');
     setBoeDate(finalSt.boeDate || '');
     setImporterName(finalSt.importerName || '');
     setIec(finalSt.iec || '');
     setAmount(finalSt.amount || '');
     setGoods(finalSt.goods || '');
     setScnDate(finalSt.scnDate || '');
     setWizardTemplateId(finalSt.wizardTemplateId || undefined);
     setWizardValues(finalSt.wizardValues || {});
     setWizardSelectedRules(finalSt.wizardSelectedRules || []);
     setWizardSelectedTone(finalSt.wizardSelectedTone || 'Formal');
     setWizardSelectedLanguage(finalSt.wizardSelectedLanguage || 'English');
  }, [currentDraftId]);

  // Auto-save draft on changes locally
  useEffect(() => {
     const obj = { 
       subject, details, refText, styleRefText, styleImageBase64, extraIns, recipientTo, output, copyTo, enclosures, salutation, din, includeDin, includeLetterhead, legalDocType, arnNo, arnDate, boeNo, boeDate, importerName, iec, amount, goods, scnDate,
       wizardTemplateId, wizardValues, wizardSelectedRules, wizardSelectedTone, wizardSelectedLanguage
     };
     setDraft(currentDraftId, obj);
     localStorage.setItem(`draft_${currentDraftId}`, JSON.stringify(obj));
  }, [
    subject, details, refText, styleRefText, styleImageBase64, extraIns, recipientTo, output, copyTo, enclosures, salutation, din, includeDin, includeLetterhead, legalDocType, arnNo, arnDate, boeNo, boeDate, importerName, iec, amount, goods, scnDate, 
    wizardTemplateId, wizardValues, wizardSelectedRules, wizardSelectedTone, wizardSelectedLanguage,
    currentDraftId, setDraft
  ]);

  // Handle Smart Reply from Inbox
  useEffect(() => {
    const sourceId = params.get('sourceId');
    const act = params.get('action');
    if (sourceId && act === 'reply') {
       const state = useStore.getState();
       const item = state.inbox.find(x => x.id === sourceId);
       if (item && item.note) {
          if (!refText) setRefText(item.note);
          
          if (item.workspaceId) {
             if (state.activeWorkspaceId !== item.workspaceId) {
                state.setActiveWorkspace(item.workspaceId);
             }
             // Auto-select first directory and first file in the workspace
             const ws = state.workspaces.find(w => w.id === item.workspaceId);
             if (ws && ws.directories && ws.directories.length > 0) {
                const firstDir = ws.directories[0];
                state.setActiveDirectory(firstDir.id);
                if (firstDir.files && firstDir.files.length > 0) {
                   state.setActiveFile(firstDir.files[0].id);
                }
             }
          }

          const suggMatch = item.note.match(/Suggested Reply: (.*)/);
          if (suggMatch && !details) {
             setDetails(suggMatch[1]);
          } else if (!details) {
             setDetails("Reply to this letter...");
          }
          
          const subjMatch = item.note.match(/Subject: (.*)/);
          if (subjMatch && !subject) setSubject('Reply: ' + subjMatch[1]);
          const senderMatch = item.note.match(/From: (.*)/);
          if (senderMatch && !recipientTo) setRecipientTo(senderMatch[1]);
       }
    }
  }, [params, refText, details, subject, recipientTo]);

  // Handle editId from History (loads on-demand if not already in store)
  useEffect(() => {
    const editId = params.get('editId');
    if (editId) {
       const setupLetter = async () => {
          const letter = await loadSingleLetter(editId);
          if (letter) {
             setSubject(letter.subject || '');
             setDetails('');
             setRecipientTo(letter.recipient || '');
             setOutput(letter.body || '');
             if (letter.copyTo && letter.copyTo.length > 0) {
                setCopyTo(letter.copyTo.join('\n'));
             } else {
                setCopyTo('');
             }
             setEnclosures(letter.enclosures || '');
             setSalutation(letter.salutation || '');
             setLastSavedId(letter.id);
          }
       };
       setupLetter();
    }
  }, [params, loadSingleLetter]);

  // =========================================================================
  // SECTION 4: GEMINI AI PROMPT ENGINE & STREAMING GENERATOR
  // =========================================================================
  const handleGenerate = useCallback(async () => {
    if (!ws || !sig) return displayAlert("Please select a workspace and signature first");
    if (!details) return displayAlert("Details/Draft cannot be empty");
    
    setGenerating(true);
    setLastSavedId(null);
    try {
      let prompt = '';
      const allTemplates = [...defaultTemplates, ...templates];
      let templateContext = '';
      if (allTemplates.length > 0) {
         // Only select top 3 templates that have some keyword overlap with the subject or details
         const query = (subject + ' ' + details).toLowerCase();
         const scored = allTemplates.map(t => {
            const tText = (t.name + ' ' + t.subject).toLowerCase();
            const words = tText.split(/\s+/).filter(w => w.length > 3);
            let score = 0;
            for(const w of words) if (query.includes(w)) score++;
            return { t, score };
         }).filter(x => x.score > 0).sort((a,b) => b.score - a.score).slice(0, 3);
         
         if (scored.length > 0) {
            templateContext = `\nAVAILABLE TEMPLATES COLLECTION:\n${scored.map(x => `- [${x.t.name}]: Subject is "${x.t.subject || x.t.name}". Opening: "${x.t.opening || ''}". Closing: "${x.t.closing || ''}"`).join('\n')}\nIf the request matches any of these templates' intent, you MUST strictly use its Opening and Closing phrasing.`;
         }
      }
        
      const styleInstruction = styleRefText || styleImageBase64 ? `\n\n**CRITICAL STYLE REFERENCE INSTRUCTION:**\nThe user has provided a Style Reference (from an older file/doc). You MUST MATCH ITS FORMATTING, LAYOUT, AND STYLE EXACTLY. For example, if the style reference uses a certain column structure for names/designations, YOU MUST create your Markdown Table with those EXACT columns. If the style uses specific phrases (like "placed opposite for your kind perusal", or "benefited notionally with effect from"), adopt those linguistic patterns perfectly.` : '';

      const tableInstruction = `\n- **CRITICAL TABULAR RULE**: IF there are 2 or more officers, individuals, or items mentioned in the details with their respective details (e.g., Sl. No., Name, Designation), YOU MUST STRICTLY FORMAT THAT DATA AS A MARKDOWN TABLE (e.g. | Sl.No. | Name | Designation |). DO NOT output them as plain text lists.`;

      if (mode === 'ai') {
        prompt = `You are an expert Indian Government office correspondence drafter. Write a formal letter following Government of India conventions.

OFFICE: ${ws.office_en || ws.name}
SUBJECT: ${subject}
TO: ${recipientTo || '[recipient]'}
DETAILS / FACTS / INSTRUCTIONS: ${details}
${refText ? 'REFERENCE TEXT AND SOURCE RULES (CRITICAL: You MUST strictly adapt any provided rules, formats, or wordings from this text into your output):\n' + refText : ''}
${extraIns ? 'EXTRA INSTRUCTIONS: ' + extraIns : ''}
${templateContext}${styleInstruction}

OUTPUT FORMAT (plain text only):
- Just the body of the letter
- Use formal Indian government English
- If the REFERENCE TEXT mentions specific rules or standard phrasings, ALWAYS adopt them literally as required.
- DO NOT add letterhead, file number, date, signature block
- DO NOT add "Yours faithfully," or any closing
- DO NOT include the Subject, Salutation (e.g. Sir/Madam), or any introductory greetings. We add them automatically.
- **CRITICAL STYLE RULE**: The tone must be highly formal and polite. Official letters should often start with specific standard formal phrases such as "With due respect, I beg to state that...", "Please refer to...", or "I am directed to inform you that..." (Select the most appropriate formal opening based on the context).
- Be detailed and clear. Explain facts and directives thoroughly. Do not write short, abrupt sentences merely to complete the prompt. Formulate well-rounded paragraphs.${tableInstruction}`;
      } else if (mode === 'format') {
         prompt = `Format the following draft into a clean, properly structured Indian government office letter body. Fix grammar, polish phrasing, structure paragraphs, but DO NOT change facts or meaning. Output plain text only.
- If REFERENCE TEXT is provided, ensure your structure, rule citations, and exact language follows it closely.
- DO NOT add "Yours faithfully," or any closing.
- DO NOT include the Subject, Salutation (e.g. Sir/Madam), or any introductory greetings. We add them automatically.
${refText ? '\nREFERENCE TEXT AND SOURCE RULES (CRITICAL):\n' + refText : ''}
${extraIns ? '\nEXTRA INSTRUCTIONS: ' + extraIns : ''}
${templateContext}${styleInstruction}

DRAFT:
${details}${tableInstruction}`;
      } else if (mode === 'order') {
         prompt = `You are an AI drafting an Official Order (e.g. posting, transfer, permission, grant, sanction) for an Indian Government office. The tone is authoritative, formal, and precise.
FACTS / ORDER DETAILS: ${details}
${refText ? 'REFERENCE: ' + refText : ''}
${extraIns ? 'EXTRA: ' + extraIns : ''}
${templateContext}${styleInstruction}

OUTPUT FORMAT (plain text):
- If the FACTS / ORDER DETAILS provided is already a fully drafted order, DO NOT rewrite it from scratch. Simply correct any grammar issues, polish it, and format it properly using Markdown, while STRICTLY maintaining its original structure, paragraphs, and facts.
- DO NOT INCLUDE ANY FILE NUMBERS OR DATES.
- DO NOT INCLUDE LETTERHEAD, SIGNATURE BLOCK, SUBJECT OR SALUTATIONS in the body text.
- DO NOT start the text with the word "ORDER" or "आदेश".
- DO NOT generate the "Copy to:" list in your output.
- Start directly with the text of the order, e.g. "With reference to...", "In pursuance of...", "Permission is hereby granted..."
- Write clearly and format cleanly. You may use markdown **bold** syntax for names or important dates.${tableInstruction}
- Ensure all directives or references are described clearly and elaborately. Describe facts thoroughly.`;
      } else if (mode === 'note') {
         prompt = `You are an AI drafting an official Note Sheet (internal noting) to a higher authority in an Indian Government office. The tone MUST be extremely polite, courteous, and permission-seeking. You must suggest actions, request permission, or seek approval, but NEVER assume authority (e.g. use "may kindly be approved", "kindly grant permission", "it is respectfully submitted").
SUBJECT: ${subject}
FACTS / PROPOSAL: ${details}
${refText ? 'REFERENCE: ' + refText : ''}
${extraIns ? 'EXTRA: ' + extraIns : ''}
${templateContext}${styleInstruction}

OUTPUT FORMAT (plain text):
- If the FACTS / PROPOSAL provided is already a fully drafted note, DO NOT rewrite it from scratch. Simply polish it and format it properly using Markdown, while STRICTLY maintaining its original paragraph structure, numbering, and facts.
- DO NOT INCLUDE ANY FILE NUMBERS OR DATES.
- DO NOT INCLUDE THE SUBJECT LINE AGAIN. YOU MUST START DIRECTLY WITH SUBMITTED.
- ALWAYS start the very first line with exactly "**Submitted:-**"
- The second line can be a polite summary like "**For kind perusal please:-** (Placed opposite may be seen)" or similar, depending on the context. You may use markdown **bold** syntax.
- Write the main body paragraphs clearly and respectfully. Always refer to higher authorities courteously.${tableInstruction}
- The conclusion MUST explicitly seek permission/approval/guidance depending on the context.
- Conclude with a bolded humble request for orders/approval, e.g., "**Put up for approval / orders, please.**" or "**May kindly grant permission, please.**"
- DO NOT INCLUDE THE SUBJECT AGAIN IF NOT NECESSARY.`;
      } else if (mode === 'legal') {
         prompt = `You are an expert Customs/GST officer drafting a formal speaking order.
Document Type: ${legalDocType}
Jurisdiction: Gopalpur Customs Division, Odisha

MANDATORY STRUCTURE (follow exactly):
1. Preamble (appeal rights, court fee)
2. Brief Facts (numbered paragraphs, use TABLE format for BoE details)
3. Submissions of the Noticee (summarize their reply)
4. Discussion (Issue-wise analysis)
5. Findings and Grounds
6. Appropriation
7. ORDER (final dispositive order)
8. Signature block + Copy to

Case Details:
ARN: ${arnNo} ${arnDate ? `dated ${arnDate}` : ''}
Importer: ${importerName} ${iec ? `, IEC: ${iec}` : ''}
Amount: Rs. ${amount}
BoE: ${boeNo} ${boeDate ? `dated ${boeDate}` : ''}
Goods: ${goods}
SCN Date: ${scnDate || '[SCN Date]'}

Write a complete, formal, legally sound speaking order in English.
Use proper legal citations. Do NOT abbreviate. Write COMPLETE paragraphs.
${extraIns ? '\nEXTRA INSTRUCTIONS: ' + extraIns : ''}${styleInstruction}`;
      }

      const ragQuery = subject + ' ' + details;
      const ragContext = RAG.buildContext(ragQuery);
      if (ragContext) prompt += ragContext;
      
      // Append learning engine prompt enhancements
      const learningEnhancement = learningEngine.getPromptEnhancements(mode);
      if (learningEnhancement) prompt += learningEnhancement;
      
      if (outputLang !== 'English') {
        if (outputLang === 'English-Hindi Mixed') {
          prompt += `\n\nCRITICAL REQUIREMENT: You MUST generate the finalized content in a mixed English and Hindi language style typical for Indian government offices (often called Hinglish or bilingual style), where official terminology or quotes can remain in English while the sentence structures or transitions use Hindi, or vice versa, to serve a bilingual workflow.`;
        } else {
          prompt += `\n\nCRITICAL REQUIREMENT: You MUST generate the finalized content entirely in ${outputLang} language. Do not output English. Maintain official government terminology in ${outputLang}.`;
        }
      }

      setTokensUsed(0);
      setIsTruncated(false);
      setOutput(''); // clear output before streaming
      
      let accumulated = '';
      const res = await callGeminiStream(prompt, (chunk) => {
         accumulated += chunk;
         setOutput(prev => prev + chunk);
      }, { temp: 0.35, maxOut: 16384, imageBase64: styleImageBase64 });
      
      originalOutputRef.current = accumulated;
      setTokensUsed(res.tokens);
      setIsTruncated(res.truncated);
      return res.truncated;
    } catch (e: any) {
      let msg = e.message || String(e);
      const isNetworkError = msg.includes('fetch') || msg.includes('Failed to fetch') || msg.includes('abort');
      const isQuotaError = msg.includes('Quota') || msg.includes('quota') || msg.includes('429');

      if (isQuotaError) {
        msg = '⚠️ API Quota শেষ। অন্য API key ব্যবহার করুন বা কিছুক্ষণ পরে চেষ্টা করুন।';
      } else if (isNetworkError) {
        msg = '🌐 নেটওয়ার্ক সমস্যা। ইন্টারনেট সংযোগ পরীক্ষা করুন এবং আবার চেষ্টা করুন।';
      } else {
        msg = `API Error: ${msg}\n\n💡 আবার Generate বাটন চাপুন — সাধারণত দ্বিতীয়বারে কাজ হয়।`;
      }
      displayAlert(msg);
      if (!output) setOutput('Generation failed. Please try again.\n\nError Details:\n' + msg);
      return false;
    } finally {
      setGenerating(false);
    }
  }, [ws, sig, details, subject, templates, styleRefText, styleImageBase64, mode, recipientTo, refText, extraIns, outputLang, displayAlert, legalDocType, arnNo, arnDate, boeNo, boeDate, importerName, iec, amount, goods, scnDate]);

  const handleContinueGenerating = async () => {
     setGenerating(true);
     try {
       setIsTruncated(false);
       const lastPortion = originalOutputRef.current.slice(-800);
       const continuePrompt = `You were drafting an official Indian Government letter/note. 
Continue exactly from where you left off. 
The text so far ends with: "...${lastPortion}"
DO NOT repeat what was already written. Just continue writing the next words seamlessly. DO NOT add "Yours faithfully" or signatures.`;
       
       let accumulated = originalOutputRef.current;
       const res = await callGeminiStream(continuePrompt, (chunk) => {
          accumulated += chunk;
          setOutput(prev => prev + chunk);
       }, { temp: 0.35, maxOut: 16384 });
       
       originalOutputRef.current = accumulated;
       setTokensUsed(prev => prev + res.tokens);
       setIsTruncated(res.truncated);
       return res.truncated;
     } catch (e: any) {
       let msg = e.message || String(e);
       const isNetworkError = msg.includes('fetch') || msg.includes('Failed to fetch') || msg.includes('abort');
       const isQuotaError = msg.includes('Quota') || msg.includes('quota') || msg.includes('429');

       if (isQuotaError) {
         msg = '⚠️ API Quota শেষ। অন্য API key ব্যবহার করুন বা কিছুক্ষণ পরে চেষ্টা করুন।';
       } else if (isNetworkError) {
         msg = '🌐 নেটওয়ার্ক সমস্যা। ইন্টারনেট সংযোগ পরীক্ষা করুন এবং আবার চেষ্টা করুন।';
       } else {
         msg = `API Error: ${msg}\n\n💡 আবার Generate বাটন চাপুন — সাধারণত দ্বিতীয়বারে কাজ হয়।`;
       }
       displayAlert(msg);
       return false;
     } finally {
       setGenerating(false);
     }
  };

  const regenerateFromWizard = useCallback(async (
     template: Template,
     values: Record<string, string>,
     selectedRules: string[],
     tone: 'Formal' | 'Strong' | 'Moderate',
     language: string
   ) => {
     // Template-এর subject set করো
     setSubject(template.subject
       .replace(/\[ARN No\.\]/g, values.arnNo || '[ARN No.]')
       .replace(/\[BoE No\.\]/g, values.boeNo || '[BoE No.]')
       .replace(/\[Importer Name\]/g, values.importerName || '[Importer Name]')
     );

     // Selected rules থেকে rules text তৈরি করো
     const allRules = TEMPLATE_RULES.find(r => r.templateId === template.id);
     const selectedRuleTexts = selectedRules.map(ruleId => {
       if (ruleId.startsWith('custom:')) return ruleId.replace('custom:', '');
       const rule = allRules?.rules.find(r => r.id === ruleId);
       return rule ? `${rule.section} of ${rule.act} (${rule.title})` : ruleId;
     });

     // Details build করো
     const detailsLines: string[] = [
       `Template: ${template.name}`,
       '',
       '--- CASE DETAILS ---',
       ...Object.entries(values)
         .filter(([, v]) => v)
         .map(([k, v]) => `${k}: ${v}`),
       '',
       '--- APPLICABLE LAWS & RULES ---',
       ...selectedRuleTexts.map(r => `• ${r}`),
       '',
       `Tone: ${tone}`,
       `Language: ${language}`,
     ];

     if (values.extraIns) {
       detailsLines.push('', '--- SPECIAL INSTRUCTIONS ---', values.extraIns);
     }

     setDetails(detailsLines.join('\n'));
     setExtraIns('');

     // Template opening text set করো
     if (template.opening) {
       setRefText(template.opening);
     }

     // Auto-generate trigger করো (URL param-এ 'ai' mode set করো)
     setParams({ mode: 'ai' });

     // ছোট delay-এর পর generate করো
     await new Promise(r => setTimeout(r, 100));
     
     let truncated = await handleGenerate();
     let continueCount = 0;
     while (truncated && continueCount < 3) {
        await new Promise(r => setTimeout(r, 1500)); // rate limit safety
        truncated = await handleContinueGenerating();
        continueCount++;
     }
   }, [setSubject, setDetails, setExtraIns, setRefText, setParams, handleGenerate, handleContinueGenerating]);

   const handleWizardComplete = useCallback(async ({
     template, values, selectedRules, tone, language
   }: {
     template: Template;
     values: Record<string, string>;
     selectedRules: string[];
     tone: string;
     language: string;
   }) => {
     // Wizard বন্ধ করো
     setWizardOpen(false);

     // Save wizard parameters to draft state
     setWizardTemplateId(template.id);
     setWizardValues(values);
     setWizardSelectedRules(selectedRules);
     setWizardSelectedTone(tone as any);
     setWizardSelectedLanguage(language);

     await regenerateFromWizard(template, values, selectedRules, tone as any, language);
   }, [regenerateFromWizard]);

  // =========================================================================
  // SECTION 5: DOCUMENT EXPORTERS (PDF, DOCX, & PRINT)
  // =========================================================================
  const handlePdfDownload = useCallback(() => {
    const element = document.getElementById('print-area');
    if (!element) {
      alert("No content to PDF.");
      return;
    }
    
    const noPdfElements = element.querySelectorAll('.no-pdf');
    noPdfElements.forEach(el => (el as HTMLElement).style.display = 'none');

    // Determine format
    let format = 'a4';
    if (paperSize === 'Legal') format = 'legal';
    if (paperSize === 'A3') format = 'a3';
    
    const opt = {
      margin:       0,
      filename:     `${subject || 'Document'}.pdf`,
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'mm', format: format, orientation: 'portrait' as const }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
        noPdfElements.forEach(el => (el as HTMLElement).style.display = '');
        handleSaveToFirebase(true);
    });
  }, [paperSize, subject, handleSaveToFirebase]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Enter to Generate
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleGenerate();
      }
      // Ctrl/Cmd + S to Save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleManualSave();
      }
      // Ctrl/Cmd + D to Download
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        handlePdfDownload();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerate, handleManualSave, handlePdfDownload]);

  const handleOldWordDownload = () => {
    const printArea = document.getElementById('print-area');
    if (!printArea) return displayAlert("No content to export.");
    const isNote = mode === 'note';
    const safeSubject = subject || 'Document';
    const fileName = `${isNote ? 'NoteSheet' : 'Letter'}_${safeSubject.replace(/[^a-z0-9]/gi, '_').slice(0, 40)}_${new Date().toISOString().slice(0, 10)}_old.doc`;
    
    // Create an HTML blob that MS Word can interpret as a .doc
    const htmlString = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${subject || 'Document'}</title>
        <style>
          body { font-family: "Times New Roman", Times, serif; font-size: 14pt; line-height: 1.5; }
          .font-bold { font-weight: bold; }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .text-left { text-align: left; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mb-16 { margin-bottom: 4rem; }
          .mt-12 { margin-top: 3rem; }
          .ml-4 { margin-left: 1rem; }
          .ml-6 { margin-left: 1.5rem; }
          .ml-12 { margin-left: 3rem; }
          .underline { text-decoration: underline; }
          .min-[1.5em], div[class*="min-h-"] { margin-bottom: 1rem; }
          .flex { display: flex; }
          .justify-between { justify-content: space-between; }
          .justify-center { justify-content: center; }
          .justify-end { justify-content: flex-end; }
          .items-center { align-items: center; }
          .w-full { width: 100%; }
          .whitespace-pre-wrap { white-space: pre-wrap; }
          .indent-12 { text-indent: 3rem; }
          table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { font-weight: bold; }
        </style>
      </head>
      <body>
        ${printArea.innerHTML}
      </body>
      </html>
    `;
    
    const blob = new Blob(['\ufeff', htmlString], {
        type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
    setDownloadName(fileName);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    displayAlert("Downloaded Older Word (.doc) version!");
    handleSaveToFirebase(true);
  };

  const handleWordDownload = () => downloadDocxDocument({ mode, copyTo, din, dir, displayAlert, enclosures, extraIns, file, handleSaveToFirebase, includeDin, includeLetterhead, output, paperSize, recipientTo, salutation, setDownloadName, setDownloadUrl, sig, subject, ws });

  // handleSaveToFirebase was moved above to prevent TDZ issues

  // =========================================================================
  // SECTION 6: JSX LAYOUT & COMPONENT UI RENDERING
  // =========================================================================
  return (
    <div className="space-y-4 flex flex-col md:flex-row gap-8 relative">
      {uiMessage && (
        <div className="fixed bottom-4 right-4 z-[99999] bg-red-600 text-white px-6 py-4 border border-red-500 shadow-2xl animate-fade-in break-words max-w-sm text-sm font-bold tracking-widest uppercase shadow-red-500/50">
          {uiMessage}
        </div>
      )}
      {/* Left: Input Form */}
      <div className="flex-1 space-y-6">
        <h2 className="text-[#22C55E] font-bold uppercase tracking-widest text-xs border-b-2 border-black/10 dark:border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          Write Editor
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            <button onClick={() => { setWizardTemplateId(undefined); setParams({mode: 'ai'}); }} className={`px-3 py-1 text-[10px] uppercase font-bold ${mode === 'ai' && !wizardTemplate ? 'bg-[#22C55E] text-black' : 'border border-black/20 dark:border-white/20'}`}>AI Gen</button>
            <button onClick={() => { setWizardTemplateId(undefined); setParams({mode: 'format'}); }} className={`px-3 py-1 text-[10px] uppercase font-bold ${mode === 'format' ? 'bg-[#22C55E] text-black' : 'border border-black/20 dark:border-white/20'}`}>Format</button>
            <button onClick={() => { setWizardTemplateId(undefined); setParams({mode: 'note'}); }} className={`px-3 py-1 text-[10px] uppercase font-bold ${mode === 'note' ? 'bg-[#22C55E] text-black' : 'border border-black/20 dark:border-white/20'}`}>Note</button>
            <button onClick={() => { setWizardTemplateId(undefined); setParams({mode: 'order'}); }} className={`px-3 py-1 text-[10px] uppercase font-bold ${mode === 'order' ? 'bg-[#22C55E] text-black' : 'border border-black/20 dark:border-white/20'}`}>Order</button>
            <button onClick={() => { setWizardTemplateId(undefined); setParams({mode: 'legal'}); }} className={`px-3 py-1 text-[10px] uppercase font-bold ${mode === 'legal' ? 'bg-[#22C55E] text-black' : 'border border-black/20 dark:border-white/20'}`}>Legal</button>
          </div>
        </h2>

        {!ws && (
          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 text-sm text-black dark:text-white/70">
            Please setup or select a Workspace from Settings or Header.
          </div>
        )}

        {ws && (
          <>
            {/* Template Wizard Open Button */}
            {!wizardTemplate && (
              <button
                onClick={() => {
                  setWizardStep(1);
                  setWizardOpen(true);
                }}
                className="w-full border-2 border-[#22C55E] bg-[#22C55E]/5
                  hover:bg-[#22C55E] hover:text-black
                  text-[#22C55E] font-bold uppercase tracking-widest
                  py-3 text-xs transition-colors mb-4
                  flex items-center justify-center gap-2 rounded"
              >
                ✨ Template Wizard খুলুন
                <span className="text-[10px] opacity-60 normal-case font-normal">
                  (ধাপে ধাপে document তৈরি করুন)
                </span>
              </button>
            )}

            {wizardTemplate ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">
                    Wizard Active Mode
                  </span>
                  <button
                    onClick={() => {
                      setWizardTemplateId(undefined);
                      setWizardValues({});
                      setWizardSelectedRules([]);
                      setWizardSelectedTone('Formal');
                      setWizardSelectedLanguage('English');
                    }}
                    type="button"
                    className="text-[10px] font-bold text-red-500 hover:text-red-600 uppercase tracking-wider"
                  >
                    ✕ সাধারণ মোডে ফিরে যান
                  </button>
                </div>
                <WizardResult
                  templateName={wizardTemplate.name}
                  templateId={wizardTemplateId!}
                  values={wizardValues}
                  selectedRules={wizardSelectedRules}
                  tone={wizardSelectedTone}
                  onToneChange={(t) => {
                    setWizardSelectedTone(t);
                    regenerateFromWizard(wizardTemplate, wizardValues, wizardSelectedRules, t, wizardSelectedLanguage);
                  }}
                  language={wizardSelectedLanguage}
                  onLanguageChange={(l) => {
                    setWizardSelectedLanguage(l);
                    regenerateFromWizard(wizardTemplate, wizardValues, wizardSelectedRules, wizardSelectedTone, l);
                  }}
                  onEditInfo={() => {
                    setWizardStep(2);
                    setWizardOpen(true);
                  }}
                  onEditRules={() => {
                    setWizardStep(3);
                    setWizardOpen(true);
                  }}
                  onRegenerate={() => {
                    regenerateFromWizard(wizardTemplate, wizardValues, wizardSelectedRules, wizardSelectedTone, wizardSelectedLanguage);
                  }}
                />
              </div>
            ) : (
              <>
                <div className="mb-4 border border-[#22C55E]/50 bg-[#22C55E]/5 p-3">
             <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E] flex items-center gap-2 mb-2">
                 ⚡ AI Magic Paste (Instantly populate fields)
             </label>
             <textarea 
                value={magicInput} 
                onChange={e => setMagicInput(e.target.value)} 
                className="w-full bg-white/50 dark:bg-black/50 border border-[#22C55E]/30 p-2 text-xs text-black dark:text-white focus:border-[#22C55E] outline-none resize-y min-h-[60px]" 
                placeholder="Paste raw text, draft, or OCR text here. AI will extract Recipient, Subject, Ref, and Body..."
                disabled={isMagicLoading}
             />
             {magicImages.length > 0 && (
               <div className="flex gap-2 mt-2 flex-wrap">
                 {magicImages.map((img, i) => (
                   <div key={i} className="relative group">
                     <img src={img} className="h-16 w-16 object-cover border border-[#22C55E]/40" />
                     <button onClick={() => setMagicImages(magicImages.filter((_, j) => j !== i))} className="absolute -top-1.5 -right-1.5 bg-red-500 text-white w-4 h-4 text-[9px] leading-4 text-center font-bold">✕</button>
                   </div>
                 ))}
               </div>
             )}
             <div className="flex justify-between items-center mt-2 gap-2">
                <label className="border border-[#22C55E]/40 text-[#22C55E] px-3 py-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer hover:bg-[#22C55E]/10 transition-colors">
                  📷 Attach Scan/Photo
                  <input type="file" accept="image/*" multiple className="hidden" disabled={isMagicLoading} onChange={e => {
                    const files = Array.from(e.target.files || []).slice(0, 4 - magicImages.length);
                    files.forEach(f => {
                      const reader = new FileReader();
                      reader.onload = ev => setMagicImages(prev => prev.length < 4 ? [...prev, ev.target?.result as string] : prev);
                      reader.readAsDataURL(f);
                    });
                    e.target.value = '';
                  }} />
                </label>
                <button 
                  onClick={handleMagicFill} 
                  disabled={isMagicLoading || (!magicInput && magicImages.length === 0)}
                  className="bg-[#22C55E] hover:bg-[#1eb354] text-black px-4 py-1 text-[10px] font-bold uppercase tracking-wider disabled:opacity-50 transition-colors"
                >
                  {isMagicLoading ? 'Extracting...' : 'Auto-Fill Fields'}
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-start font-sans">
             <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Signatory Authority</label>
                <select value={activeSignatureId || ''} onChange={e => setActiveSignature(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white cursor-pointer outline-none">
                   {(ws.signatures || []).filter(s => s.active).map(s => (
                     <option key={s.id} value={s.id}>{s.name} ({s.designation})</option>
                   ))}
                </select>
             </div>
             
             <div className="space-y-2 border border-black/10 dark:border-white/10 p-3 bg-black/5 dark:bg-white/5 rounded">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Apply Template</label>
                
                {/* Search Bar */}
                <div className="relative">
                   <input
                     type="text"
                     value={templateSearch}
                     onChange={e => setTemplateSearch(e.target.value)}
                     placeholder="🔍 Search templates..."
                     className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white focus:border-[#22C55E] outline-none"
                   />
                   {templateSearch && (
                      <button 
                        type="button"
                        onClick={() => setTemplateSearch('')} 
                        className="absolute right-2 top-2 text-black/50 dark:text-white/50 hover:text-red-500 text-xs"
                      >
                        ✕
                      </button>
                   )}
                </div>

                {/* Category Chips */}
                <div className="flex flex-wrap gap-1 mt-1">
                   {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setTemplateCategory(cat)}
                        className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider transition-colors ${
                          templateCategory === cat
                            ? 'bg-[#22C55E] text-black font-extrabold'
                            : 'bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-[#22C55E]/20'
                        }`}
                      >
                        {cat === 'Leave & Service' ? 'Leave' : cat}
                      </button>
                   ))}
                </div>

                {/* Filtered Template List */}
                <div className="max-h-40 overflow-y-auto border border-black/10 dark:border-white/10 mt-2 bg-white dark:bg-neutral-900 divide-y divide-black/5 dark:divide-white/5 rounded">
                   {filteredTemplates.length === 0 ? (
                      <div className="p-2 text-xs text-black/50 dark:text-white/50 text-center">No templates found</div>
                   ) : (
                      filteredTemplates.map(t => (
                         <button
                           key={t.id}
                           type="button"
                           onClick={() => applyTemplate(t.id)}
                           className="w-full text-left p-2 hover:bg-[#22C55E]/10 text-xs text-black dark:text-white transition-colors block truncate"
                           title={`${t.name}\nSubject: ${t.subject || ''}`}
                         >
                            <span className="font-semibold block truncate">{t.name}</span>
                            <span className="text-[9px] opacity-65 block truncate">{t.subject}</span>
                         </button>
                      ))
                   )}
                </div>
             </div>
          </div>

          <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
               <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E] flex items-center gap-2">
                 <input type="checkbox" checked={includeDin} onChange={e => setIncludeDin(e.target.checked)} className="accent-[#22C55E]" />
                 DIN (Document Identification Number)
               </label>
               <button 
                  onClick={() => {
                     setIncludeDin(true);
                     const d = new Date();
                     const y = d.getFullYear();
                     const m = String(d.getMonth() + 1).padStart(2,'0');
                     const random = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
                     setDin(`${y}${m}72ZN${random}`); // Format approximation
                  }}
                  className="px-2 py-1 text-[9px] uppercase font-bold border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-black transition-colors"
               >
                  Generate Format DIN
               </button>
            </div>
            {includeDin && <input value={din} onChange={e => setDin(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white focus:border-[#22C55E] outline-none" placeholder="e.g. 20240572ZN1234567"/>}
          </div>

          <div className="space-y-1">
             <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E] flex items-center gap-2 cursor-pointer">
               <input type="checkbox" checked={includeLetterhead} onChange={e => setIncludeLetterhead(e.target.checked)} className="accent-[#22C55E]" />
               Include Letterhead (লেটারহেড অন্তর্ভুক্ত করুন)
             </label>
          </div>

          {mode === 'legal' && (
            <div className="border border-[#22C55E]/30 bg-black/5 dark:bg-white/5 p-4 space-y-4 rounded">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#22C55E] border-b border-[#22C55E]/20 pb-2">Speaking Order Details (Customs/GST)</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Document Type *</label>
                <select 
                  value={legalDocType} 
                  onChange={e => setLegalDocType(e.target.value)} 
                  className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white cursor-pointer outline-none"
                >
                  <option value="Refund Rejection Order (Section 27)">Refund Rejection Order (Section 27)</option>
                  <option value="Demand Cum SCN">Demand Cum SCN</option>
                  <option value="Personal Hearing Notice">Personal Hearing Notice</option>
                  <option value="OIO (Order-in-Original)">OIO (Order-in-Original)</option>
                  <option value="Seizure Memo">Seizure Memo</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">ARN No.</label>
                  <input type="text" value={arnNo} onChange={e => setArnNo(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]" placeholder="e.g. AD0506240001234"/>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">ARN Date</label>
                  <input type="date" value={arnDate} onChange={e => setArnDate(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]"/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">BoE / Invoice No.</label>
                  <input type="text" value={boeNo} onChange={e => setBoeNo(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]" placeholder="e.g. 5463728"/>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">BoE Date</label>
                  <input type="date" value={boeDate} onChange={e => setBoeDate(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]"/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Importer Name</label>
                  <input type="text" value={importerName} onChange={e => setImporterName(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]" placeholder="e.g. ABC Impex Pvt Ltd"/>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">IEC Code</label>
                  <input type="text" value={iec} onChange={e => setIec(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]" placeholder="e.g. 0512345678"/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Disputed Amount (Rs.)</label>
                  <input type="text" value={amount} onChange={e => setAmount(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]" placeholder="e.g. 1,25,000"/>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">SCN Date</label>
                  <input type="date" value={scnDate} onChange={e => setScnDate(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]"/>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Description of Goods</label>
                <textarea value={goods} onChange={e => setGoods(e.target.value)} rows={2} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white outline-none focus:border-[#22C55E]" placeholder="e.g. Coal, Iron Ore, Machinery parts..."/>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Subject *</label>
            <div className="relative">
              <input 
                value={subject} 
                onChange={e => {
                  setSubject(e.target.value);
                  setShowSubjectSuggestions(true);
                }} 
                onFocus={() => setShowSubjectSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSubjectSuggestions(false), 200)}
                className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" 
                placeholder="Brief subject line"
              />
              {showSubjectSuggestions && learningEngine.getSubjectSuggestions(subject).length > 0 && (
                <div className="absolute z-50 left-0 right-0 mt-1 bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 shadow-lg max-h-40 overflow-y-auto">
                  {learningEngine.getSubjectSuggestions(subject).map((sug, sIdx) => (
                    <div 
                      key={sIdx} 
                      onMouseDown={() => {
                        setSubject(sug);
                        setShowSubjectSuggestions(false);
                      }}
                      className="p-2 text-xs text-black dark:text-white hover:bg-[#22C55E]/10 cursor-pointer border-b border-black/5 dark:border-white/5 last:border-0"
                    >
                      {sug}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {mode !== 'note' && mode !== 'legal' && (
            <>
              <div className="space-y-1">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Recipient (To)</label>
                  {addressBook && addressBook.length > 0 && (
                    <select
                      onChange={e => {
                        if (e.target.value) {
                          const ab = addressBook.find(a => a.id === e.target.value);
                          if (ab) {
                            setRecipientTo(`${ab.desig}\n${ab.office}\n${ab.address}`);
                            if (ab.salutation) setSalutation(ab.salutation);
                          }
                          e.target.value = '';
                        }
                      }}
                      className="bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-1 text-[10px] outline-none max-w-[150px] cursor-pointer"
                    >
                      <option value="">-- Address Book --</option>
                      {addressBook.map(ab => (
                        <option key={ab.id} value={ab.id}>{ab.name || ab.desig}</option>
                      ))}
                    </select>
                  )}
                </div>
                <textarea value={recipientTo} onChange={e => setRecipientTo(e.target.value)} rows={3} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" placeholder="e.g. The Commissioner..."/>
              </div>
              <div className="space-y-1">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Salutation</label>
                 <select value={salutation} onChange={e => setSalutation(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white cursor-pointer outline-none mb-1">
                    <option value="">None</option>
                    <option value="Sir/Madam,">Sir/Madam,</option>
                    <option value="Sir,">Sir,</option>
                    <option value="Madam,">Madam,</option>
                    <option value="Dear Sir,">Dear Sir,</option>
                    <option value="Dear Madam,">Dear Madam,</option>
                    <option value="Respected Sir,">Respected Sir,</option>
                    <option value="Respected Madam,">Respected Madam,</option>
                 </select>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Copy To (Forwarding)</label>
                  {addressBook && addressBook.length > 0 && (
                    <select
                      onChange={e => {
                        if (e.target.value) {
                          const ab = addressBook.find(a => a.id === e.target.value);
                          if (ab) {
                            setCopyTo(prev => prev + (prev ? '\n' : '') + `${ab.desig}, ${ab.office}`);
                          }
                          e.target.value = '';
                        }
                      }}
                      className="bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-1 text-[10px] outline-none max-w-[150px] cursor-pointer"
                    >
                      <option value="">-- Address Book --</option>
                      {addressBook.map(ab => (
                        <option key={ab.id} value={ab.id}>{ab.name || ab.desig}</option>
                      ))}
                    </select>
                  )}
                </div>
                <textarea value={copyTo} onChange={e => setCopyTo(e.target.value)} rows={2} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" placeholder="e.g. 1. The Secretary...\n2. The District Magistrate..."/>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Enclosures</label>
                <input value={enclosures} onChange={e => setEnclosures(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" placeholder="e.g. As above, or 1. Copy of Aadhar..."/>
              </div>
            </>
          )}

          <div className="space-y-1 relative">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Details / Facts / Context *</label>
              {(phrases && phrases.length > 0) && (
                <div className="flex gap-2 items-center">
                  <span className="text-[9px] uppercase font-bold text-gray-500">Insert Phrase:</span>
                  <select 
                    onChange={e => { if(e.target.value) { setDetails(prev => prev + (prev ? '\n\n' : '') + e.target.value); e.target.value = ''; } }} 
                    className="bg-white dark:bg-neutral-900 border border-[#22C55E]/50 p-1 text-[10px] outline-none max-w-[150px] cursor-pointer"
                  >
                    <option value="">-- Choose --</option>
                    {phrases.map(p => (
                      <option key={p.id} value={p.text}>{p.category}: {p.text.substring(0, 20)}...</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <textarea value={details} onChange={e => setDetails(e.target.value)} rows={6} className="w-full bg-white/50 dark:bg-black/50 border border-[#22C55E]/50 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" placeholder="State facts, applicable rules, or just paste rough draft."/>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Reference Text & Rules (Optional)</label>
            <textarea value={refText} onChange={e => setRefText(e.target.value)} rows={3} className="w-full bg-amber-500/10 border border-amber-500/30 p-3 text-black dark:text-white focus:border-amber-500 outline-none" placeholder="Paste specific rules, citations, or instructions the AI must follow exactly..."/>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Style/Format Reference (Optional)</label>
                <div className="relative">
                    <input type="file" accept="image/*" id="styleImageUpload" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setStyleImageBase64(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                        }
                    }} />
                    <label htmlFor="styleImageUpload" className="flex items-center gap-1 cursor-pointer text-xs bg-[#22C55E]/10 text-[#22C55E] hover:bg-[#22C55E]/20 px-2 py-1 rounded transition-colors group relative" title="Upload a screenshot or photo of an old letter to match its visual style">
                        <Paperclip size={12} />
                        Attach Image
                    </label>
                </div>
            </div>
            {styleImageBase64 && (
                <div className="relative inline-block mb-2 group">
                    <img src={styleImageBase64} alt="Style Reference" className="h-16 rounded border border-[#22C55E]/30 object-cover" />
                    <button onClick={() => setStyleImageBase64('')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X size={12} />
                    </button>
                </div>
            )}
            <textarea value={styleRefText} onChange={e => setStyleRefText(e.target.value)} rows={3} className="w-full bg-blue-500/10 border border-blue-500/30 p-3 text-black dark:text-white focus:border-blue-500 outline-none" placeholder="Paste the text of a previous successful letter here to match its tone, format, and structure exactly..."/>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Extra AI Instructions</label>
            <input value={extraIns} onChange={e => setExtraIns(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" placeholder="e.g. 'Be firm', 'Cite Section 54'"/>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Output Language</label>
            <select value={outputLang} onChange={(e: any) => setOutputLang(e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white uppercase text-xs font-bold transition-all hover:bg-black/5 dark:hover:bg-white/5 outline-none">
               <option value="English">English</option>
               <option value="Bengali">Bengali / বাংলা</option>
               <option value="Hindi">Hindi / हिन्दी</option>
               <option value="Odia">Odia / ଓଡ଼ିଆ</option>
               <option value="English-Hindi Mixed">English-Hindi Mixed (Govt Style)</option>
            </select>
          </div>
        </div>

        <button 
          onClick={async () => {
             let truncated = await handleGenerate();
             let continueCount = 0;
             while (truncated && continueCount < 3) {
                await new Promise(r => setTimeout(r, 1500)); // rate limit safety
                truncated = await handleContinueGenerating();
                continueCount++;
             }
          }} 
          disabled={generating || !details} 
          className="w-full bg-[#22C55E] hover:bg-[#1fb355] text-black font-bold uppercase tracking-widest py-4 transition-colors disabled:opacity-50 mt-4 rounded"
        >
          {generating ? 'Generating...' : '✨ Generate Draft'}
        </button>
        {tokensUsed > 0 && <p className="text-center text-[10px] text-black/50 dark:text-white/50 mt-2 font-mono">Cost: ~{tokensUsed} tokens used</p>}
        {output && <p className="text-center text-[10px] text-black/50 dark:text-white/50 mt-1 font-mono">Word Count: {output.trim().split(/\s+/).length} words</p>}

        <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
          <button onClick={() => handleSaveToFirebase()} className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 rounded transition-colors">
            💾 Save to Cloud
          </button>
          {output && (
            <button onClick={handleLegalCheck} disabled={isLegalChecking} className="bg-amber-600 hover:bg-amber-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 rounded transition-colors disabled:opacity-50">
              {isLegalChecking ? '⚖️ Vetting...' : '⚖️ Legal Check'}
            </button>
          )}
          {saveMessage && <span className="text-xs text-[#22C55E] font-bold">{saveMessage}</span>}
        </div>
        {legalCheck && (
          <div className={`mt-3 border-2 p-4 text-xs whitespace-pre-wrap font-mono relative ${legalCheck.includes('SERIOUS') ? 'border-red-500/60 bg-red-500/5' : legalCheck.includes('MINOR') ? 'border-amber-500/60 bg-amber-500/5' : 'border-[#22C55E]/60 bg-[#22C55E]/5'}`}>
            <button onClick={() => setLegalCheck('')} className="absolute top-2 right-2 text-black/40 dark:text-white/40 hover:text-red-500 font-bold">✕</button>
            <p className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-60">⚖️ Legal Vetting Report</p>
            {legalCheck}
          </div>
        )}
      </>
    )}
  </>
)}
      </div>

      {/* Right: Output Preview */}
      <div className="flex-1 space-y-6 md:sticky md:top-24 self-start relative z-0">
        <h2 className="text-black dark:text-white/40 font-bold uppercase tracking-widest text-xs border-b-2 border-black/10 dark:border-white/10 pb-4">Live Preview</h2>
        
        {output ? (
          <>
            {/* Mobile: simplified text preview */}
            <div className="block md:hidden bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-4 rounded text-sm font-serif max-h-80 overflow-y-auto">
              <p className="font-bold text-xs text-[#22C55E] mb-2 uppercase tracking-widest">
                Preview (Simplified)
              </p>
              <p className="font-bold underline mb-2">Sub: {subject}</p>
              <div className="whitespace-pre-wrap text-xs leading-relaxed">{output}</div>
            </div>

            {/* Desktop: full A4 preview */}
            <div className="hidden md:block bg-neutral-200 dark:bg-neutral-800 p-2 sm:p-4 rounded-md overflow-x-auto flex justify-center">
              <div 
                 id="print-area"
                 className="bg-white text-black shadow-2xl relative flex-shrink-0"
                 style={{ width: paperSize === 'A4' ? '210mm' : paperSize === 'A3' ? '297mm' : '216mm', minHeight: paperSize === 'A4' ? '297mm' : paperSize === 'A3' ? '420mm' : '356mm', transform: 'scale(1)', transformOrigin: 'top center' }}
              >
                 <div className={`font-serif text-[12pt] leading-normal outline-none ${mode === 'note' ? 'py-[20mm] pl-[35mm] pr-[20mm]' : 'p-[20mm]'}`}>
                    
                    {/* Dynamic Letterhead for preview */}
                    <div contentEditable={false} className="select-none">
                      {mode !== 'note' && includeLetterhead && ws?.letterhead && (
                        <div className="relative text-center mb-8 border-b-2 pb-4" style={{ borderColor: ws.letterhead.color ? `#${ws.letterhead.color}` : '#1a3a8a', color: ws.letterhead.color ? `#${ws.letterhead.color}` : '#1a3a8a' }}>
                          
                          <table style={{ width: '100%', marginBottom: '0.5rem', borderCollapse: 'collapse', border: 'none' }}>
                            <tbody>
                              <tr>
                                <td style={{ width: '20%', textAlign: 'left', verticalAlign: 'middle', border: 'none', padding: 0 }}>
                                  {ws.letterhead.logo1 && <img src={ws.letterhead.logo1} className="h-20 object-contain mix-blend-multiply" />}
                                </td>
                                <td style={{ width: '60%', textAlign: 'center', verticalAlign: 'middle', border: 'none', padding: 0 }}>
                                  {ws.letterhead.logo2 && <img src={ws.letterhead.logo2} className="h-20 object-contain mix-blend-multiply mx-auto" />}
                                </td>
                                <td style={{ width: '20%', textAlign: 'right', verticalAlign: 'middle', border: 'none', padding: 0 }}>
                                  {ws.letterhead.logo3 && <img src={ws.letterhead.logo3} className="h-20 object-contain mix-blend-multiply ml-auto" />}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          
                          <div className="flex flex-col items-center justify-center space-y-0.5">
                          {[1,2,3,4,5,6].map(i => {
                            const lineStr = ws.letterhead?.[`l${i}` as keyof Letterhead] as string;
                            if (!lineStr) return null;
                            const baseSize = ws.letterhead?.[`s${i}` as keyof Letterhead] as number || [24,20,16,16,14,14][i-1] || 16;
                            const actualPt = Math.max(8, baseSize - 3);
                            // 1 pt is ~1.333 px. We use this to make HTML exactly match DOCX scaling.
                            const pxSize = actualPt * 1.333;
                            if (lineStr.includes('|')) {
                               const [l, r] = lineStr.split('|');
                               return (
                                 <table key={i} style={{ width: '100%', fontSize: `${pxSize}px`, lineHeight: '1.15', fontWeight: 'bold', fontFamily: 'sans-serif', borderCollapse: 'collapse', border: 'none' }}>
                                   <tbody>
                                     <tr>
                                       <td style={{ width: '50%', textAlign: 'right', paddingRight: '1rem', border: 'none' }}>{l.trim()}</td>
                                       <td style={{ width: '50%', textAlign: 'left', paddingLeft: '1rem', border: 'none' }}>{r.trim()}</td>
                                     </tr>
                                   </tbody>
                                 </table>
                               );
                            }
                            return <div key={i} className="font-bold font-sans text-center" style={{ fontSize: `${pxSize}px`, lineHeight: '1.15' }}>{lineStr}</div>;
                          })}
                          </div>
                        </div>
                      )}
                      {mode !== 'note' && includeLetterhead && !ws?.letterhead && (
                        <div className="text-center mb-8 border-b-2 border-[#1a3a8a] pb-4">
                          {ws?.office_hi && <div className="text-xs text-gray-600 font-sans font-bold">{ws.office_hi}</div>}
                          <div className="text-xl font-bold text-[#1a3a8a] font-sans uppercase">{ws?.office_en || ws?.name || 'OFFICE NAME'}</div>
                          {ws?.address && <div className="text-xs text-gray-800 font-sans mt-1">{ws.address}</div>}
                        </div>
                      )}
                      {/* Letter mode specific fields */}
                      {mode === 'order' && (
                        <div className="mb-6 space-y-4">
                           <div className="flex justify-between font-bold mb-4">
                             <span>C. No. {file?.fileNumber || dir?.filePrefix || '[FILE NO]'}</span>
                             <span>Date: {new Date().toLocaleDateString('en-IN')}</span>
                           </div>
                           {includeDin && din && <div className="text-center font-bold mb-4 tracking-widest uppercase">DIN: {din}</div>}
                           <div className="text-center font-bold underline text-lg">आदेश / ORDER</div>
                        </div>
                      )}
                      
                      {mode === 'ai' && (
                        <div className="mb-6 space-y-4">
                          <div className="flex justify-between font-bold">
                            <span>C. No. {file?.fileNumber || dir?.filePrefix || '[FILE NO]'}</span>
                            <span>Date: {new Date().toLocaleDateString('en-IN')}</span>
                          </div>
                          {includeDin && din && <div className="font-bold tracking-widest uppercase text-right">DIN: {din}</div>}
                          {recipientTo && (
                            <div className="mb-4">
                              <div>To,</div>
                              <div className="whitespace-pre-wrap ml-12">{recipientTo}</div>
                            </div>
                          )}
                          {salutation && <div className="mt-4 mb-4">{salutation}</div>}
                          {subject && <div className="font-bold underline ml-12 mb-4">Sub: {subject}</div>}
                        </div>
                      )}
                      
                      {mode === 'format' && (
                        <div className="mb-6 space-y-4">
                          <div className="flex justify-between font-bold">
                            <span>C. No. {file?.fileNumber || dir?.filePrefix || '[FILE NO]'}</span>
                            <span>Date: {new Date().toLocaleDateString('en-IN')}</span>
                          </div>
                          {includeDin && din && <div className="font-bold tracking-widest uppercase text-right">DIN: {din}</div>}
                          {recipientTo && (
                            <div className="mb-4">
                              <div>To,</div>
                              <div className="whitespace-pre-wrap ml-12">{recipientTo}</div>
                            </div>
                          )}
                          {salutation && <div className="mt-4 mb-4">{salutation}</div>}
                          {subject && <div className="font-bold underline ml-12 mb-4">Sub: {subject}</div>}
                        </div>
                      )}
                      
                      {mode === 'note' && (
                        <div className="mb-6 space-y-4">
                          {subject && <div className="font-bold underline ml-12">Sub: {subject}</div>}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end mb-2 opacity-50 hover:opacity-100 transition-opacity print:hidden no-pdf">
                      <button onClick={() => setPreviewMode('preview')} className={`text-[10px] uppercase font-bold px-3 py-1 border border-r-0 border-black/20 dark:border-white/20 ${previewMode === 'preview' ? 'bg-[#22C55E] text-black border-[#22C55E]' : ''}`}>Preview</button>
                      <button onClick={() => setPreviewMode('edit')} className={`text-[10px] uppercase font-bold px-3 py-1 border border-black/20 dark:border-white/20 ${previewMode === 'edit' ? 'bg-[#22C55E] text-black border-[#22C55E]' : ''}`}>Edit Markdown</button>
                    </div>

                    <div className="relative group mb-10">
                      {previewMode === 'edit' ? (
                          <textarea
                              value={output}
                              onChange={(e) => setOutput(e.target.value)}
                              className="w-full min-h-[300px] outline-none bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-2 font-mono text-sm block"
                              placeholder="Generated letter body will appear here (Markdown supported)..."
                           />
                      ) : (
                          <div className="text-justify text-[15px] leading-relaxed break-words px-2 font-serif">
                            {output ? (
                              <ReactMarkdown 
                                 remarkPlugins={[remarkGfm]}
                                 components={{
                                    p: ({node, ...props}) => {
                                        const childrenArr = React.Children.toArray(props.children);
                                        const textContent = childrenArr.join('');
                                        const isMainHeaders = typeof textContent === 'string' && (textContent.includes('Submitted') || textContent.includes('For kind perusal') || textContent.includes('Put up for'));
                                        return <p className={`mb-4 ${isMainHeaders ? 'text-left font-bold' : 'indent-12 text-justify'}`} {...props} />;
                                    },
                                    table: ({node, ...props}) => <table className="w-full border-collapse border border-black/50 dark:border-white/50 my-4 table-auto text-[12pt]" {...props} />,
                                    th: ({node, ...props}) => <th className="border border-black/50 dark:border-white/50 p-2 font-bold text-center" {...props} />,
                                    td: ({node, ...props}) => <td className="border border-black/50 dark:border-white/50 p-2" {...props} />,
                                    li: ({node, ...props}) => <li className="ml-8 list-decimal mb-1" {...props} />,
                                    ul: ({node, ...props}) => <ul className="mb-4" {...props} />,
                                    ol: ({node, ...props}) => <ol className="mb-4" {...props} />
                                 }}
                              >
                                {output}
                              </ReactMarkdown>
                            ) : <span className="text-gray-400 italic">Generated letter body will appear here...</span>}
                          </div>
                      )}
                      
                      {isTruncated && !generating && (
                        <div className="absolute -bottom-10 right-0 z-10 w-full flex justify-end print:hidden">
                           <button 
                             onClick={handleContinueGenerating}
                             className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg rounded"
                           >
                              ⚠️ Output Cut Short - Continue Writing
                           </button>
                        </div>
                      )}
                    </div>

                    <div contentEditable={false} className="select-none">
                      {mode !== 'note' && (
                        <>
                          <div className="flex mt-2 mb-4">
                             <div className="w-[55%] text-left">
                                {enclosures ? (
                                  <div className="font-bold text-left mb-8">Enclosures: {enclosures}</div>
                               ) : (extraIns.toLowerCase().includes('encl') || output.toLowerCase().includes('encl')) ? (
                                  <div className="font-bold text-left mb-8">Enclosures: As above</div>
                               ) : null}
                             </div>
                             <div className="w-[45%] flex flex-col items-center text-center">
                                  {mode !== 'order' && <p className="mb-12">Yours faithfully,</p>}
                                  {mode === 'order' && <p className="mb-12"></p>}
                                  <p className="font-bold">({sig?.name})</p>
                                  <p className="whitespace-pre-line">{sig?.designation}</p>
                                  {sig?.section && <p className="whitespace-pre-line">{sig?.section}</p>}
                             </div>
                          </div>
                          

                          {copyTo && (
                             <div className="mt-16 text-left">
                                <p className="font-bold mb-4">Copy to:</p>
                                <div className="ml-4 mb-16">
                                   {copyTo.split('\n').filter(Boolean).map((line, idx) => {
                                      let text = line.trim();
                                      if (text.toLowerCase().startsWith('copy to')) {
                                         text = text.substring(7).trim();
                                      }
                                      return <div key={idx} className="indent-[-1.5rem] pl-6 mb-2">{idx + 1}. {text}</div>;
                                   })}
                                </div>
                                {mode !== 'order' && (
                                   <div className="flex justify-end">
                                      <div className="w-[45%] flex flex-col items-center text-center">
                                         <p className="font-bold">({sig?.name})</p>
                                         <p className="whitespace-pre-line">{sig?.designation}</p>
                                         {sig?.section && <p className="whitespace-pre-line">{sig?.section}</p>}
                                      </div>
                                   </div>
                                )}
                             </div>
                          )}
                        </>
                      )}
                      {mode === 'note' && (
                        <div className="flex justify-start mt-12">
                           <div className="w-[45%] flex flex-col items-start text-left">
                             <p className="font-bold">({sig?.name})</p>
                             <p className="whitespace-pre-line">{sig?.designation}</p>
                             {sig?.section && <p className="whitespace-pre-line">{sig?.section}</p>}
                           </div>
                        </div>
                      )}
                    </div>

                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               <div>
                  <select value={paperSize} onChange={e => setPaperSize(e.target.value as any)} className="w-full bg-white dark:bg-neutral-900 border border-[#22C55E] p-1 text-[10px] text-[#22C55E] outline-none font-bold uppercase tracking-widest cursor-pointer mb-2">
                     <option value="Legal">Legal (8.5x14)</option>
                     <option value="A3">A3 (11.7x16.5)</option>
                     <option value="A4">A4 (8.3x11.7)</option>
                  </select>
                 <button onClick={handleWordDownload} className="w-full border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-black font-bold uppercase tracking-widest py-3 transition-colors mb-2">
                   Generate Word (.docx)
                 </button>
                 <button onClick={handleOldWordDownload} className="w-full border-2 border-[#22C55E]/50 text-[#22C55E]/80 hover:bg-[#22C55E]/20 font-bold uppercase tracking-widest py-3 transition-colors mb-2 text-[10px]">
                   Word (Older Version 97-2003 .doc)
                 </button>
                 <button onClick={handlePdfDownload} className="w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold uppercase tracking-widest py-3 transition-colors mb-2">
                   Download PDF
                 </button>
                 <button onClick={() => window.print()} className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase tracking-widest py-3 transition-colors">
                   Print
                 </button>
               </div>
               <div className="flex items-end">
                 <button onClick={() => handleSaveToFirebase(false)} className="w-full bg-white/10 hover:bg-white/20 text-black dark:text-white font-bold uppercase tracking-widest py-3 transition-colors border border-black/10 dark:border-white/10">
                   Save Record
                 </button>
               </div>
            </div>
            {downloadUrl && (
              <div className="mt-4 p-4 border border-[#22C55E] bg-[#22C55E]/10 flex flex-col gap-2">
                <p className="text-sm font-bold text-[#22C55E]">Download Ready</p>
                <p className="text-xs">If the automatic download didn't work (due to preview restrictions), click the button below or right-click and choose "Save Link As..."</p>
                <a 
                  href={downloadUrl} 
                  download={downloadName}
                  className="bg-[#22C55E] text-black text-center font-bold uppercase tracking-widest p-2 block mt-2"
                >
                  Download {downloadName}
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="h-64 border-2 border-dashed border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white/30 text-xs font-mono uppercase tracking-widest text-center px-8">
            Output preview will appear here.<br/>Ensure API key is configured.
          </div>
        )}
      </div>

      <TemplateWizard
        isOpen={wizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={handleWizardComplete}
        initialTemplate={wizardTemplate}
        initialStep={wizardStep}
        initialValues={wizardValues}
        initialSelectedRules={wizardSelectedRules}
        initialTone={wizardSelectedTone}
        initialLanguage={wizardSelectedLanguage}
      />
    </div>
  );
}
