import React, { useState, useEffect } from 'react';
import { useStore } from '../../lib/store';
import { Key, Building2, PenTool, Database, LogOut, Moon, Sun, Plus, Trash2, Edit } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { Workspace, SignatureBlock, Phrase, Template, Letterhead } from '../../types';
import { defaultTemplates } from '../../lib/defaultTemplates';
import { rateLimiter } from '../../lib/rateLimiter';
import { testGeminiKey } from '../../lib/gemini';

function AddressBookEditor({ addressBook = [], saveUserData, setActiveSection }: any) {
  const [newEntry, setNewEntry] = useState({ name: '', desig: '', office: '', address: '', salutation: 'Sir/Madam,' });
  const [importText, setImportText] = useState('');

  const handleCreate = () => {
    if(!newEntry.desig || !newEntry.office) return;
    const item = { ...newEntry, id: Date.now().toString(36) };
    saveUserData({ addressBook: [...addressBook, item] });
    setNewEntry({ name: '', desig: '', office: '', address: '', salutation: 'Sir/Madam,' });
  };

  const handleDelete = (id: string) => {
    saveUserData({ addressBook: addressBook.filter((a:any) => a.id !== id) });
  };

  const handleImport = () => {
    try {
      const lines = importText.split('\n');
      const items: any[] = [];
      lines.forEach(line => {
        const parts = line.split('\t');
        if(parts.length >= 2) {
          items.push({
             id: Date.now().toString(36) + Math.random().toString(36).substring(2),
             name: parts[0] || '',
             desig: parts[1] || '',
             office: parts[2] || '',
             address: parts[3] || '',
             salutation: parts[4] || 'Sir/Madam,'
          });
        }
      });
      if(items.length > 0) {
        saveUserData({ addressBook: [...addressBook, ...items] });
        setImportText('');
        alert(`Imported ${items.length} records successfully.`);
      } else {
        alert('No valid records found. Please ensure TSV format (Name Tab Designation...).');
      }
    } catch(e:any) {
      alert("Import failed: " + e.message);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b-2 border-indigo-500/20 pb-4">
         <h1 className="text-3xl font-black uppercase tracking-tighter text-indigo-400">Address Book</h1>
         <button onClick={() => setActiveSection('main')} className="text-xs font-bold uppercase tracking-widest hover:text-indigo-400">← Back</button>
      </div>
      
      <div className="border border-indigo-500/30 p-4 bg-indigo-500/5 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Add New Entry</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
           <input value={newEntry.name} onChange={e => setNewEntry({...newEntry, name: e.target.value})} placeholder="Name (e.g. Shri PK Das)" className="bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs" />
           <input value={newEntry.desig} onChange={e => setNewEntry({...newEntry, desig: e.target.value})} placeholder="Designation *" className="bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs" />
           <input value={newEntry.office} onChange={e => setNewEntry({...newEntry, office: e.target.value})} placeholder="Office *" className="bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs" />
           <input value={newEntry.address} onChange={e => setNewEntry({...newEntry, address: e.target.value})} placeholder="Full Address" className="bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs" />
           <select value={newEntry.salutation} onChange={e => setNewEntry({...newEntry, salutation: e.target.value})} className="bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs text-black dark:text-white cursor-pointer outline-none">
              <option value="Sir/Madam,">Sir/Madam,</option>
              <option value="Dear Sir,">Dear Sir,</option>
              <option value="Dear Madam,">Dear Madam,</option>
              <option value="Respected Sir,">Respected Sir,</option>
              <option value="Respected Madam,">Respected Madam,</option>
              <option value="Sir,">Sir,</option>
              <option value="Madam,">Madam,</option>
           </select>
           <button onClick={handleCreate} disabled={!newEntry.desig || !newEntry.office} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 disabled:opacity-50">Save</button>
        </div>
      </div>

      <div className="border border-indigo-500/30 p-4 bg-indigo-500/5 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Batch Import (Excel/TSV)</h3>
        <p className="text-[10px] text-black/50 dark:text-white/50">Paste data from Excel. Format: Name [TAB] Designation [TAB] Office [TAB] Address [TAB] Salutation</p>
        <textarea value={importText} onChange={e => setImportText(e.target.value)} rows={3} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs" placeholder="Paste tab-separated values here..." />
        <button onClick={handleImport} disabled={!importText} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 disabled:opacity-50">Process Import</button>
      </div>

      <div className="space-y-2">
        {addressBook.map((ab:any) => (
          <div key={ab.id} className="border border-black/10 dark:border-white/10 p-3 flex justify-between items-center bg-black/5 dark:bg-white/5">
            <div>
              <div className="font-bold text-sm">{ab.desig} {ab.name ? `(${ab.name})` : ''}</div>
              <div className="text-xs text-black/60 dark:text-white/60">{ab.office} • {ab.address}</div>
            </div>
            <button onClick={() => handleDelete(ab.id)} className="text-red-500 p-2 hover:bg-red-500/10"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
        {addressBook.length === 0 && <p className="text-center text-xs text-black/50 dark:text-white/50 p-4">No addresses in directory.</p>}
      </div>
    </div>
  );
}

function WorkspaceEditor({ workspaces, saveUserData, setActiveSection }: any) {
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const handleUpdateWs = async (id: string, updates: Partial<Workspace>) => {
    const updated = workspaces.map((w: Workspace) => w.id === id ? { ...w, ...updates } : w);
    await saveUserData({ workspaces: updated });
  };

  const handleUpdateLetterhead = async (id: string, field: keyof Letterhead, value: string) => {
    const ws = workspaces.find((w: Workspace) => w.id === id);
    if (ws) {
      handleUpdateWs(id, { letterhead: { ...(ws.letterhead || {l1:'',l2:'',l3:'',l4:'',l5:'',l6:''}), [field]: value } });
    }
  };

  const handleLogoUpload = (id: string, field: keyof Letterhead, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        handleUpdateLetterhead(id, field, e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const [newSigName, setNewSigName] = useState('');
  const [newSigDesig, setNewSigDesig] = useState('');
  const [newSigSection, setNewSigSection] = useState('');

  const handleAddSig = (id: string) => {
    if (!newSigName || !newSigDesig) return alert('Name and Designation required');
    const ws = workspaces.find((w: Workspace) => w.id === id);
    if (!ws) return;
    const s = { id: Date.now().toString(), name: newSigName, designation: newSigDesig, section: newSigSection, active: true };
    handleUpdateWs(id, { signatures: [...(ws.signatures || []), s] });
    setNewSigName(''); setNewSigDesig(''); setNewSigSection('');
  };

  const handleRemoveSig = (wsId: string, sigId: string) => {
    const ws = workspaces.find((w: Workspace) => w.id === wsId);
    if (!ws) return;
    handleUpdateWs(wsId, { signatures: ws.signatures.filter((s: SignatureBlock) => s.id !== sigId) });
  };

  const handleToggleSigActive = (wsId: string, sigId: string) => {
    const ws = workspaces.find((w: Workspace) => w.id === wsId);
    if (!ws) return;
    const updated = ws.signatures.map((s: SignatureBlock) =>
      s.id === sigId ? { ...s, active: !s.active } : s
    );
    handleUpdateWs(wsId, { signatures: updated });
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
       <header className="mb-8 border-b-2 border-black/10 dark:border-white/10 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">Workspaces</h1>
            <p className="text-black dark:text-white/50 text-sm mt-2">Manage your offices, signatures, and dynamic letterheads.</p>
          </div>
          <button onClick={() => setActiveSection('main')} className="border-2 border-black/20 dark:border-white/20 hover:border-[#22C55E] px-4 py-2 font-bold uppercase tracking-widest text-xs transition-colors">← Back</button>
       </header>
       <div className="space-y-8">
          {workspaces.map((ws: Workspace) => (
            <div key={ws.id} className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-[#22C55E]">{ws.name}</h3>
                  <p className="text-xs text-black dark:text-white/50 font-mono mt-1">{ws.office_en} • {ws.address}</p>
                </div>
                <button onClick={() => setEditingId(editingId === ws.id ? null : ws.id)} className="border border-black/20 dark:border-white/20 px-3 py-1 text-xs uppercase font-bold tracking-widest hover:border-[#22C55E] flex items-center gap-2">
                  <Edit className="w-3 h-3" /> {editingId === ws.id ? 'Close Edit' : 'Edit Details'}
                </button>
              </div>

              {/* ── Signatures Section — ALWAYS VISIBLE ── */}
              <div className="space-y-4 mb-6 mt-6">
                  <h4 className="font-bold uppercase tracking-wide text-xs border-b border-black/10 dark:border-white/10 pb-2 text-black dark:text-white/40">Signatures in this Workspace</h4>
                  {ws.signatures?.map((s: SignatureBlock) => (
                      <div key={s.id} className="flex justify-between items-center bg-white/50 dark:bg-black/50 p-3 border border-black/10 dark:border-white/10">
                        <div>
                          <p className="font-bold text-sm tracking-wide">{s.name} <span className="text-black dark:text-white/40 font-normal">({s.designation})</span></p>
                          <p className="text-[10px] text-black dark:text-white/50 uppercase tracking-widest">{s.section}</p>
                        </div>
                        <div className="flex gap-2 items-center flex-wrap justify-end">
                          <button
                            onClick={() => handleToggleSigActive(ws.id, s.id)}
                            className={`text-[10px] px-2 py-1 font-bold uppercase tracking-widest border transition-colors ${s.active ? 'bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/50 hover:bg-red-500/10 hover:text-red-400 hover:border-red-400/50' : 'bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 border-black/20 dark:border-white/20 hover:bg-[#22C55E]/10 hover:text-[#22C55E] hover:border-[#22C55E]/50'}`}
                            title={s.active ? 'Click to Deactivate' : 'Click to Activate'}
                          >
                            {s.active ? '✓ Active' : 'Inactive'}
                          </button>
                          <button onClick={() => handleRemoveSig(ws.id, s.id)} className="text-red-500 hover:bg-red-500/10 p-2"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                  ))}
                  {(!ws.signatures || ws.signatures.length === 0) && <p className="text-xs text-black dark:text-white/30 italic">No signatures yet</p>}

                  <div className="mt-4 p-4 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                    <p className="font-bold uppercase text-[10px] tracking-widest text-[#22C55E] mb-2">Add New Signature</p>
                    <div className="flex flex-col md:flex-row gap-2">
                       <input value={newSigName} onChange={(e) => setNewSigName(e.target.value)} placeholder="Name (e.g. Prakash Dhal)" className="flex-1 bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" />
                       <input value={newSigDesig} onChange={(e) => setNewSigDesig(e.target.value)} placeholder="Designation (e.g. Superintendent)" className="flex-1 bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" />
                       <input value={newSigSection} onChange={(e) => setNewSigSection(e.target.value)} placeholder="Section (Optional)" className="flex-1 bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" />
                       <button onClick={() => handleAddSig(ws.id)} className="bg-[#22C55E] text-black font-bold text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-[#1fb355] whitespace-nowrap"><Plus className="w-4 h-4 inline mr-1"/> Add</button>
                    </div>
                  </div>
              </div>

              {/* ── Letterhead / Logo Section — VISIBLE ONLY WHEN EDIT DETAILS IS OPEN ── */}
              {editingId === ws.id && (
                <div className="flex flex-col gap-8 mt-2 border-t-2 border-[#22C55E]/30 pt-6">
                  
                  {/* Live Preview Panel (Top) */}
                  <div className="w-full border-b border-black/10 dark:border-white/10 pb-8">
                     <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-4">Live Letterhead Preview</p>
                     <div className="bg-neutral-200 dark:bg-neutral-800 p-4 rounded-md overflow-x-auto flex justify-center items-start">
                        <div className="bg-white text-black shadow-lg relative w-full max-w-[210mm]" style={{ minHeight: '150px', padding: '12.7mm 19mm 10mm 19mm' }}>
                              {ws.letterhead && (
                                <div className="relative text-center border-b-2 pb-4" style={{ borderColor: ws.letterhead.color ? `#${ws.letterhead.color}` : '#1a3a8a', color: ws.letterhead.color ? `#${ws.letterhead.color}` : '#1a3a8a' }}>
                                  
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
                        </div>
                     </div>
                  </div>

                  {/* Input Fields (Bottom) */}
                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Workspace Name (Internal)</label>
                        <input value={ws.name} onChange={e => handleUpdateWs(ws.id, { name: e.target.value })} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-black dark:text-white text-sm" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Office English</label>
                        <input value={ws.office_en} onChange={e => handleUpdateWs(ws.id, { office_en: e.target.value })} className="w-full bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-black dark:text-white text-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 border-b border-black/10 dark:border-white/10 pb-2 gap-4">
                      <h4 className="font-bold uppercase tracking-wider text-sm text-[#22C55E]">Dynamic Letterhead Format</h4>
                      <div className="flex items-center gap-4">
                         <input type="color" value={ws.letterhead?.color ? `#${ws.letterhead.color}` : '#1a3a8a'} onChange={e => handleUpdateLetterhead(ws.id, 'color', e.target.value.substring(1))} />
                         <button onClick={() => {
                            handleUpdateWs(ws.id, {
                               letterhead: { l1: 'भारत सरकार | GOVERNMENT OF INDIA', l2: 'OFFICE OF THE PRINCIPAL CHIEF COMMISSIONER OF CGST & CENTRAL EXCISE', l3: 'BHUBANESWAR ZONE, C.R. BUILDING, RAJASWA VIHAR, BHUBANESWAR - 751007', l4: 'Email: ccu-cexbbst@nic.in', l5: '', l6: '', s1: 24, s2: 20, s3: 16, s4: 12, s5: 12, s6: 12, color: '1A3A8A' }
                            })
                         }} className="text-[10px] uppercase tracking-widest font-bold border border-black/20 dark:border-white/20 px-2 py-1 hover:border-[#22C55E]">Load GPF Defaults</button>
                      </div>
                    </div>
                    <p className="text-xs text-black dark:text-white/50 mb-2">Use `|` to separate Hindi on the left and English on the right (e.g. "भारत सरकार | Govt of India")</p>
                    
                    <div className="space-y-4">
                       {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="flex flex-col space-y-1">
                           <div className="flex justify-between items-end">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E]">Line {i}</label>
                              <label className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/50">Size (px)</label>
                           </div>
                           <div className="flex gap-2">
                              <input value={ws.letterhead?.[`l${i}` as keyof Letterhead] as string || ''} onChange={e => handleUpdateLetterhead(ws.id, `l${i}` as keyof Letterhead, e.target.value)} className="flex-1 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white text-base" placeholder={i === 1 ? 'e.g. भारत सरकार | Government of India' : ''} />
                              <input type="number" min="8" max="48" value={ws.letterhead?.[`s${i}` as keyof Letterhead] as number || 16} onChange={e => handleUpdateLetterhead(ws.id, `s${i}` as keyof Letterhead, e.target.value)} className="w-20 sm:w-24 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white text-base" />
                           </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-black/10 dark:border-white/10">
                      {[ 
                        { id: 1, label: 'Left Logo' }, 
                        { id: 2, label: 'Center Logo (Ashok Stambh)' }, 
                        { id: 3, label: 'Right Logo' } 
                      ].map(logo => (
                        <div key={logo.id} className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">{logo.label}</label>
                           <input type="file" accept="image/*" onChange={e => e.target.files?.[0] && handleLogoUpload(ws.id, `logo${logo.id}` as keyof Letterhead, e.target.files[0])} className="w-full text-[10px] file:mr-2 file:py-2 file:px-4 file:border-0 file:text-black file:bg-white/60 hover:file:bg-white border border-black/20 dark:border-white/20 p-1" />
                           {ws.letterhead?.[`logo${logo.id}` as keyof Letterhead] && <div className="flex justify-between items-center"><img src={ws.letterhead[`logo${logo.id}` as keyof Letterhead] as string} className="h-16 mt-2 object-contain bg-white/10 p-1" /><button onClick={() => handleUpdateLetterhead(ws.id, `logo${logo.id}` as keyof Letterhead, '')} className="text-red-500 text-xs font-bold uppercase hover:underline">Remove</button></div>}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          ))}
       </div>
    </div>
  );
}

function TemplatesEditor({ templates, phrases, saveUserData, setActiveSection }: any) {
  const [newTemplate, setNewTemplate] = useState<Partial<Template>>({ name: '', subject: '', opening: '', closing: '', copyTo: [] });
  const [newPhrase, setNewPhrase] = useState<Partial<Phrase>>({ category: 'General', text: '' });

  const handleAddTemplate = async () => {
    if (!newTemplate.name) return alert('Template name is required');
    const t = { id: Date.now().toString(), ...newTemplate } as Template;
    await saveUserData({ templates: [...(templates || []), t] });
    setNewTemplate({ name: '', subject: '', opening: '', closing: '', copyTo: [] });
  };

  const handleRemoveTemplate = async (id: string) => {
    await saveUserData({ templates: (templates || []).filter((t: Template) => t.id !== id) });
  };

  const handleAddPhrase = async () => {
    if (!newPhrase.text) return;
    const p = { id: Date.now().toString(), ...newPhrase } as Phrase;
    await saveUserData({ phrases: [...(phrases || []), p] });
    setNewPhrase({ ...newPhrase, text: '' });
  };

  const handleRemovePhrase = async (id: string) => {
    await saveUserData({ phrases: (phrases || []).filter((p: Phrase) => p.id !== id) });
  };

  const handleExportTemplates = () => {
    const data = JSON.stringify({ templates, phrases }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ais_templates_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportTemplates = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.templates || json.phrases) {
           const confirmImport = window.confirm('Importing will merge with your existing templates. Proceed?');
           if (!confirmImport) return;
           const newTemplates = [...(templates || []), ...(json.templates || [])];
           // remove duplicates mostly if they have the same ID it might cause issues, let's just append
           const newPhrases = [...(phrases || []), ...(json.phrases || [])];
           await saveUserData({ templates: newTemplates, phrases: newPhrases });
           alert('Templates and Phrases imported successfully.');
        } else {
           alert('Invalid file format. Ensure it is a valid JSON with templates and phrases arrays.');
        }
      } catch (err) {
        alert('Error parsing JSON file.');
      }
    };
    reader.readAsText(file);
    // clear value
    e.target.value = '';
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
       <header className="mb-8 border-b-2 border-black/10 dark:border-white/10 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-amber-500">Templates & Phrases</h1>
            <p className="text-black dark:text-white/50 text-sm mt-2">Manage standard templates and reusable text snippets.</p>
          </div>
          <div className="flex items-center gap-4">
             <label className="border-2 border-black/20 dark:border-white/20 hover:border-amber-500 px-4 py-2 font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer">
                 Import
                 <input type="file" accept=".json" onChange={handleImportTemplates} className="hidden" />
             </label>
             <button onClick={handleExportTemplates} className="border-2 border-black/20 dark:border-white/20 hover:border-amber-500 px-4 py-2 font-bold uppercase tracking-widest text-xs transition-colors">Export</button>
             <button onClick={() => setActiveSection('main')} className="border-2 border-black/20 dark:border-white/20 hover:border-amber-500 px-4 py-2 font-bold uppercase tracking-widest text-xs transition-colors">← Back</button>
          </div>
       </header>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Templates Section */}
         <div className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-amber-500 mb-6">Document Templates</h2>
            
            <div className="space-y-4 mb-4">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-amber-500 border-b border-black/10 dark:border-white/10 pb-1">My Custom Templates</h3>
              {(templates || []).map((t: Template) => (
                <div key={t.id} className="bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 p-4 relative group">
                  <h3 className="font-bold text-sm tracking-wide mb-1">{t.name}</h3>
                  <p className="text-xs text-black/60 dark:text-white/60 line-clamp-2"><strong>Sub:</strong> {t.subject || 'N/A'}</p>
                  <button onClick={() => handleRemoveTemplate(t.id)} className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-500/10"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
              {(!templates || templates.length === 0) && <p className="text-xs text-black dark:text-white/30 italic">No custom templates available</p>}
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-black/40 dark:text-white/40 border-b border-black/10 dark:border-white/10 pb-1">Default Built-in Templates (Read Only)</h3>
               <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
                 {defaultTemplates.map((t: Template) => (
                   <div key={t.id} className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-3 opacity-70">
                     <h3 className="font-bold text-xs tracking-wide mb-1">{t.name}</h3>
                     <p className="text-[10px] text-black/60 dark:text-white/60 line-clamp-1"><strong>Sub:</strong> {t.subject || 'N/A'}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-amber-500">Create New Template</h3>
              <input value={newTemplate.name} onChange={e => setNewTemplate({...newTemplate, name: e.target.value})} placeholder="Template Name *" className="w-full bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" />
              <input value={newTemplate.subject} onChange={e => setNewTemplate({...newTemplate, subject: e.target.value})} placeholder="Default Subject" className="w-full bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" />
              <textarea value={newTemplate.opening} onChange={e => setNewTemplate({...newTemplate, opening: e.target.value})} placeholder="Opening lines / standard reference..." className="w-full bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" rows={2}/>
              <textarea value={newTemplate.closing} onChange={e => setNewTemplate({...newTemplate, closing: e.target.value})} placeholder="Closing lines / standard requests..." className="w-full bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" rows={2}/>
              <button onClick={handleAddTemplate} className="w-full bg-amber-500 text-black font-bold uppercase tracking-widest py-3 text-xs hover:bg-amber-400 transition-colors">Add Template</button>
            </div>
         </div>

         {/* Phrases Section */}
         <div className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#22C55E] mb-6">Phrase Library</h2>
            
            <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto">
              {(phrases || []).map((p: Phrase) => (
                <div key={p.id} className="bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 p-3 flex justify-between items-start gap-4 hover:border-[#22C55E] transition-colors">
                  <div>
                    <span className="inline-block px-1.5 py-0.5 bg-black/10 dark:bg-white/10 text-[9px] font-bold uppercase tracking-widest mb-1">{p.category}</span>
                    <p className="text-sm">{p.text}</p>
                  </div>
                  <button onClick={() => handleRemovePhrase(p.id)} className="text-red-500 hover:bg-red-500/10 p-2"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
              {(!phrases || phrases.length === 0) && <p className="text-xs text-black dark:text-white/30 italic">No phrases available</p>}
            </div>

            <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-[#22C55E]">Add New Phrase</h3>
              <select value={newPhrase.category} onChange={e => setNewPhrase({...newPhrase, category: e.target.value})} className="w-full bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs">
                 <option>General</option>
                 <option>Enquiry</option>
                 <option>Approval</option>
                 <option>Forwarding</option>
                 <option>Summons</option>
                 <option>RTI</option>
              </select>
              <textarea value={newPhrase.text} onChange={e => setNewPhrase({...newPhrase, text: e.target.value})} placeholder="Standard phrase text..." className="w-full bg-white dark:bg-black border border-black/20 dark:border-white/20 p-2 text-xs" rows={2}/>
              <button onClick={handleAddPhrase} className="w-full bg-[#22C55E] text-black font-bold uppercase tracking-widest py-3 text-xs hover:bg-[#1fb355] transition-colors">Add Phrase</button>
            </div>
         </div>
       </div>
    </div>
  );
}

export default function SettingsScreen() {
  const { user, apiKeys, theme, setTheme, saveUserData, workspaces, phrases, templates, addressBook, tgBotToken, tgChatId } = useStore();
  const [newKey, setNewKey] = useState('');
  const [customRpm, setCustomRpm] = useState<number>(rateLimiter.getRPM());
  
  const [activeSection, setActiveSection] = useState<'main'|'workspaces'|'phrases'|'templates'|'addressBook'>('main');
  const [tgTokenVal, setTgTokenVal] = useState(tgBotToken || '');
  const [tgChatVal, setTgChatVal] = useState(tgChatId || '');

  const [keyStatus, setKeyStatus] = useState<Record<string, { checking: boolean, status?: 'valid' | 'invalid' | 'quota', message?: string }>>({});

  const handleTestKey = async (keyString: string) => {
    setKeyStatus(prev => ({ ...prev, [keyString]: { checking: true } }));
    const result = await testGeminiKey(keyString);
    if (result.success) {
      setKeyStatus(prev => ({ ...prev, [keyString]: { checking: false, status: 'valid', message: result.message } }));
    } else {
      const isQuota = /quota|limit|exhausted/i.test(result.message);
      setKeyStatus(prev => ({ ...prev, [keyString]: { checking: false, status: isQuota ? 'quota' : 'invalid', message: result.message } }));
    }
  };

  useEffect(() => {
    // Auto-test all keys when Settings Screen loads
    apiKeys.forEach(k => {
      if (k.key && !keyStatus[k.key]) {
        handleTestKey(k.key);
      }
    });
  }, [apiKeys]);

  useEffect(() => {
    setTgTokenVal(tgBotToken || '');
    setTgChatVal(tgChatId || '');
  }, [tgBotToken, tgChatId]);


  const handleAddKey = async () => {
    if (!newKey.startsWith('AIza') || newKey.length < 30) {
      alert("Invalid Gemini Key");
      return;
    }
    const ks = [...apiKeys, {
      key: newKey, label: 'Key ' + (apiKeys.length + 1), added: Date.now(), usage: { date: new Date().toISOString().slice(0,10), tokens: 0 }
    }];
    await saveUserData({ apiKeys: ks });
    setNewKey('');
  };

  const handleRemoveKey = async (idx: number) => {
    if(apiKeys.length === 1) return alert("Cannot remove the last key");
    if(confirm("Remove this API key?")) {
      const ks = [...apiKeys];
      ks.splice(idx, 1);
      await saveUserData({ apiKeys: ks });
    }
  };

  const handleSignOut = () => {
    if(confirm('Are you sure you want to sign out? Your data remains in the cloud.')) {
      auth.signOut();
    }
  };

  if (activeSection === 'workspaces') {
    return <WorkspaceEditor workspaces={workspaces} saveUserData={saveUserData} setActiveSection={setActiveSection} />;
  }

  if (activeSection === 'templates') {
    return <TemplatesEditor templates={templates} phrases={phrases} saveUserData={saveUserData} setActiveSection={setActiveSection} />;
  }

  if (activeSection === 'addressBook') {
    return <AddressBookEditor addressBook={addressBook} saveUserData={saveUserData} setActiveSection={setActiveSection} />;
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header className="mb-8 border-b-2 border-black/10 dark:border-white/10 pb-4">
        <h1 className="text-3xl font-black uppercase tracking-tighter">System Setup</h1>
        <p className="text-black dark:text-white/50 text-sm mt-2">Manage API keys, signatures, address book, and account synchronisation.</p>
      </header>

      {/* API Keys */}
      <section className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5">
        <div className="flex items-center gap-3 mb-6">
          <Key className="w-5 h-5 text-[#22C55E]" />
          <h2 className="text-lg font-bold uppercase tracking-widest text-[#22C55E]">API Configuration</h2>
        </div>
        
        <div className="space-y-4 mb-6">
          {apiKeys.map((k, i) => {
            const status = keyStatus[k.key];
            return (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50 gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-sm tracking-wide">{k.label}</p>
                    {status?.checking && (
                      <span className="text-[9px] font-bold text-blue-500 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 animate-pulse uppercase tracking-wider">Checking...</span>
                    )}
                    {status?.status === 'valid' && (
                      <span className="text-[9px] font-bold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 uppercase tracking-wider">Active & Working</span>
                    )}
                    {status?.status === 'invalid' && (
                      <span className="text-[9px] font-bold text-red-500 bg-red-500/10 border border-red-500/30 px-2 py-0.5 uppercase tracking-wider cursor-help" title={status.message}>Invalid API Key</span>
                    )}
                    {status?.status === 'quota' && (
                      <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 uppercase tracking-wider cursor-help" title={status.message}>Quota Exceeded</span>
                    )}
                    {!status && (
                      <span className="text-[9px] font-bold text-gray-400 bg-gray-400/10 border border-gray-400/20 px-2 py-0.5 uppercase tracking-wider">Untested</span>
                    )}
                  </div>
                  <p className="text-[10px] text-black dark:text-white/50 font-mono mt-1">...{k.key.slice(-8)} • Used Today: {k.usage?.tokens || 0}</p>
                  {status?.status === 'invalid' && (
                    <p className="text-[10px] text-red-500 font-mono mt-1 max-w-md break-words">{status.message}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button 
                    onClick={() => handleTestKey(k.key)}
                    disabled={status?.checking}
                    className="border border-[#22C55E]/50 text-[#22C55E] hover:bg-[#22C55E]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
                  >
                    {status?.checking ? 'Testing...' : 'Test Key'}
                  </button>
                  <button onClick={() => {
                    const ks = [...apiKeys];
                    ks.splice(i, 1);
                    saveUserData({ apiKeys: ks });
                  }} className="text-red-500 hover:bg-red-500/10 p-2 text-xs font-bold uppercase tracking-widest transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4">
          <input 
            type="password" 
            value={newKey} 
            onChange={e => setNewKey(e.target.value)} 
            className="flex-1 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-3 text-black dark:text-white focus:border-[#22C55E] outline-none" 
            placeholder="AIzaSy..."
          />
          <button onClick={handleAddKey} className="bg-[#22C55E] hover:bg-[#1fb355] text-black font-bold uppercase tracking-widest px-6 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Key
          </button>
        </div>
        <p className="text-xs text-black/50 dark:text-white/50 mt-4">
          To get a free Gemini API key, visit <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">aistudio.google.com/app/apikey</a>.
        </p>

        <div className="space-y-2 mt-6 border-t border-black/10 dark:border-white/10 pt-6">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#22C55E] block">
            API Rate Limit (RPM)
          </label>
          <input
            type="number"
            min={1}
            max={1000}
            value={customRpm}
            onChange={e => {
              const rpm = parseInt(e.target.value) || 10;
              rateLimiter.setCustomRPM(rpm);
              setCustomRpm(rpm);
            }}
            className="w-24 bg-white/50 dark:bg-black/50 border p-2 text-xs text-black dark:text-white focus:border-[#22C55E] outline-none"
          />
          <p className="text-[9px] text-gray-500">
            Free tier: 10 RPM, Tier 1: 150-300 RPM. Check Google AI Studio for your limit.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Workspaces & Signatures */}
        <section onClick={() => setActiveSection('workspaces')} className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5 hover:border-[#22C55E] transition-colors cursor-pointer group">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-5 h-5 text-blue-400 group-hover:text-[#22C55E] transition-colors" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-blue-400 group-hover:text-[#22C55E] transition-colors">Workspaces</h2>
          </div>
          <p className="text-sm text-black dark:text-white/60 mb-6">Manage offices, designations, default directories and letterheads.</p>
          <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400 group-hover:text-[#22C55E] group-hover:translate-x-2 transition-all">Manage →</div>
        </section>

        {/* Templates & Phrase Library */}
        <section onClick={() => setActiveSection('templates')} className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5 hover:border-[#22C55E] transition-colors cursor-pointer group">
          <div className="flex items-center gap-3 mb-4">
            <PenTool className="w-5 h-5 text-amber-500 group-hover:text-[#22C55E] transition-colors" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-amber-500 group-hover:text-[#22C55E] transition-colors">Templates & Phrases</h2>
          </div>
          <p className="text-sm text-black dark:text-white/60 mb-6">Define reusable government phrases, notes, and workflow templates.</p>
          <div className="text-[10px] uppercase font-bold tracking-widest text-amber-500 group-hover:text-[#22C55E] group-hover:translate-x-2 transition-all">Manage →</div>
        </section>

        {/* Address Book */}
        <section onClick={() => setActiveSection('addressBook')} className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5 hover:border-[#22C55E] transition-colors cursor-pointer group">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">📓</span>
            <h2 className="text-lg font-bold uppercase tracking-widest text-indigo-400 group-hover:text-[#22C55E] transition-colors">Address Book</h2>
          </div>
          <p className="text-sm text-black dark:text-white/60 mb-6">Manage common recipient addresses, designations, and contacts.</p>
          <div className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 group-hover:text-[#22C55E] group-hover:translate-x-2 transition-all">Manage →</div>
        </section>
      </div>

      {/* Account & Sync & Backup */}
      <section className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-5 h-5 text-purple-400" />
          <h2 className="text-lg font-bold uppercase tracking-widest text-purple-400">System State, Backup & Account</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
             <div className="p-4 border border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50">
               <div>
                 <p className="font-bold text-sm tracking-wide">Google Cloud Sync</p>
                 <p className="text-[10px] text-black dark:text-white/50 font-mono mt-1">Logged in as {user?.email}</p>
                 <button onClick={handleSignOut} className="flex items-center gap-2 border border-red-500/50 hover:bg-red-500/10 text-red-500 font-bold uppercase tracking-widest px-4 py-2 text-xs transition-colors mt-4">
                   <LogOut className="w-4 h-4" /> Sign Out
                 </button>
               </div>
             </div>

             <div className="p-4 border border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50">
               <div>
                 <p className="font-bold text-sm tracking-wide">Appearance</p>
                 <p className="text-[10px] text-black dark:text-white/50 font-mono mt-1">Current Theme: {theme}</p>
                 <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-black/20 dark:border-white/20 font-bold uppercase tracking-widest px-4 py-2 text-xs transition-colors mt-4">
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} Toggle Theme
                 </button>
               </div>
             </div>

             <div className="p-4 border border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50">
               <div>
                 <p className="font-bold text-sm tracking-wide mb-2 text-[#0088cc]">Telegram Integration</p>
                 <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-black/50 dark:text-white/50">Bot Token</label>
                      <input 
                        type="password" 
                        placeholder="123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
                        value={tgTokenVal} 
                        onChange={e => setTgTokenVal(e.target.value)}
                        className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs font-mono outline-none focus:border-[#0088cc]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-black/50 dark:text-white/50">Chat ID</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 123456789 or @channelname" 
                        value={tgChatVal} 
                        onChange={e => setTgChatVal(e.target.value)}
                        className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs font-mono outline-none focus:border-[#0088cc]" 
                      />
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          saveUserData({ tgBotToken: tgTokenVal, tgChatId: tgChatVal });
                          alert("Telegram Configuration Saved Successfully!");
                        }}
                        className="flex-1 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold uppercase tracking-widest text-[10px] py-2 transition-colors"
                      >
                        Save
                      </button>
                      <button 
                        onClick={async () => {
                          if (!tgTokenVal || !tgChatVal) return alert("Please enter both Token and Chat ID.");
                          try {
                            const res = await fetch(`https://api.telegram.org/bot${tgTokenVal}/sendMessage`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ chat_id: tgChatVal, text: "👋 *Connection Successful!*\n\nHello from your app! Telegram integration is working perfectly.", parse_mode: "Markdown" })
                            });
                            const data = await res.json();
                            if (data.ok) alert("Test message sent! Check your Telegram app.");
                            else alert("Failed: " + data.description);
                          } catch (err: any) {
                            alert("Error connecting: " + err.message);
                          }
                        }}
                        className="flex-1 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white font-bold uppercase tracking-widest text-[10px] py-2 transition-colors border border-black/20 dark:border-white/20"
                      >
                        Test
                      </button>
                    </div>
                   <p className="text-[10px] text-black/50 dark:text-white/50 border-t border-black/10 dark:border-white/10 pt-2">
                     This token and ID are saved <strong>securely</strong> in your private database. Never share them publicly. Used for sending GPF or Diary updates via Telegram.
                   </p>
                 </div>
               </div>
             </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="p-4 border border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50 h-full flex flex-col">
               <p className="font-bold text-sm tracking-wide text-purple-400 mb-2">Local Device Backup</p>
               <p className="text-[10px] text-black dark:text-white/50 mb-4">Download a full JSON backup of your workspaces, templates, letters and settings. You can restore this if you change devices.</p>
               <div className="mt-auto flex flex-col gap-2">
                  <button onClick={() => {
                      const data = {
                         workspaces: useStore.getState().workspaces,
                         templates: useStore.getState().templates,
                         phrases: useStore.getState().phrases,
                         addressBook: useStore.getState().addressBook,
                         apiKeys: useStore.getState().apiKeys,
                         diary: useStore.getState().diary
                      };
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `officeai_backup_${new Date().toISOString().slice(0,10)}.json`;
                      a.click();
                  }} className="bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/50 text-purple-400 font-bold uppercase tracking-widest text-xs px-4 py-2 w-full text-center cursor-pointer transition-colors">↓ Export Backup JSON</button>
                  <label className="bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 w-full text-center cursor-pointer transition-colors relative">
                    ↑ Import / Restore JSON
                    <input type="file" accept=".json" className="opacity-0 absolute inset-0 cursor-pointer w-full" onChange={(e) => {
                      const file = e.target.files?.[0];
                      if(!file) return;
                      const reader = new FileReader();
                      reader.onload = async (ev) => {
                        try {
                          const json = JSON.parse(ev.target?.result as string);
                          if(confirm('This will merge the imported data with your existing data. Proceed?')) {
                             const state = useStore.getState();
                             await saveUserData({
                                workspaces: json.workspaces || state.workspaces,
                                templates: json.templates || state.templates,
                                phrases: json.phrases || state.phrases,
                                addressBook: json.addressBook || state.addressBook,
                                apiKeys: json.apiKeys || state.apiKeys,
                                diary: json.diary || state.diary
                             });
                             alert('Backup restored successfully!');
                          }
                        } catch(err:any) {
                          alert('Error importing JSON: ' + err.message);
                        }
                        e.target.value = '';
                      };
                      reader.readAsText(file);
                    }}/>
                  </label>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Storage Mode */}
      <section className="border-2 border-black/10 dark:border-white/10 p-6 bg-black/5 dark:bg-white/5">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-5 h-5 text-cyan-500" />
          <h2 className="text-lg font-black uppercase tracking-widest text-cyan-500">Storage Mode</h2>
        </div>

        <StorageModePanel />
      </section>
    </div>
  );
}

// =================== Storage Mode Panel ===================

function StorageModePanel() {
  const [mode, setMode] = useState<'firebase' | 'hybrid'>(() => {
    return (localStorage.getItem('officeai_storageMode') as 'firebase' | 'hybrid') || 'firebase';
  });
  const [driveConnected, setDriveConnected] = useState(false);
  const [clientId, setClientId] = useState('');
  const [encPwd, setEncPwd] = useState('');
  const [syncStatus, setSyncStatus] = useState('');
  const [lastSync, setLastSync] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [migrating, setMigrating] = useState(false);
  const [migrationProgress, setMigrationProgress] = useState(0);
  const [migrationStatus, setMigrationStatus] = useState('');

  useEffect(() => {
    setClientId(localStorage.getItem('officeai_googleClientId') || '');
    const lastSyncStr = localStorage.getItem('officeai_lastDriveSync');
    if (lastSyncStr) setLastSync(parseInt(lastSyncStr, 10));

    // Check Drive connection
    try {
      const cached = localStorage.getItem('officeai_driveToken');
      if (cached) {
        const { expiry } = JSON.parse(cached);
        setDriveConnected(expiry > Date.now());
      }
    } catch { /* ignore */ }
  }, []);

  const handleModeSwitch = async (newMode: 'firebase' | 'hybrid') => {
    if (newMode === mode) return;
    if (newMode === 'hybrid') {
      if (!confirm('Hybrid Mode চালু করলে ডেটা IndexedDB-তে এনক্রিপ্টেড সংরক্ষণ হবে এবং Google Drive-এ ব্যাকআপ হবে। চালু করবেন?')) return;
    } else {
      if (!confirm('Firebase Mode-এ ফিরে যাবেন? Hybrid ডেটা IndexedDB-তে থাকবে।')) return;
    }
    setSwitching(true);
    localStorage.setItem('officeai_storageMode', newMode);
    setMode(newMode);
    setSyncStatus(`${newMode === 'hybrid' ? 'Hybrid' : 'Firebase'} mode সক্রিয়। অ্যাপ রিফ্রেশ করুন।`);
    setSwitching(false);
  };

  const handleConnectDrive = async () => {
    if (!clientId || clientId.length < 20) {
      alert('Google Client ID দিন। Google Cloud Console থেকে OAuth 2.0 Client ID তৈরি করুন।');
      return;
    }
    localStorage.setItem('officeai_googleClientId', clientId);
    setSyncStatus('Google Drive-এ সংযোগ করা হচ্ছে...');
    try {
      const { initTokenClient } = await import('../../lib/googleDriveSync');
      await initTokenClient(clientId);
      setDriveConnected(true);
      setSyncStatus('✅ Google Drive সংযুক্ত!');
    } catch (e: any) {
      setSyncStatus('❌ সংযোগ ব্যর্থ: ' + e.message);
    }
  };

  const handleDisconnectDrive = async () => {
    if (!confirm('Google Drive সংযোগ বিচ্ছিন্ন করবেন?')) return;
    const { disconnectDrive } = await import('../../lib/googleDriveSync');
    disconnectDrive();
    setDriveConnected(false);
    setSyncStatus('Drive সংযোগ বিচ্ছিন্ন।');
  };

  const handleSetPassword = async () => {
    if (!encPwd || encPwd.length < 6) {
      alert('ন্যূনতম ৬ অক্ষরের পাসওয়ার্ড দিন।');
      return;
    }
    localStorage.setItem('officeai_hybridPwd', encPwd);
    try {
      const { initEncryption } = await import('../../lib/indexedDBStore');
      await initEncryption(encPwd);
      setSyncStatus('✅ এনক্রিপশন পাসওয়ার্ড সেট হয়েছে।');
    } catch (e: any) {
      setSyncStatus('❌ পাসওয়ার্ড সেট ব্যর্থ: ' + e.message);
    }
  };

  const handleManualSync = async () => {
    setSyncStatus('সিঙ্ক চলছে...');
    try {
      const { HybridAdapter } = await import('../../lib/hybridAdapter');
      const adapter = new HybridAdapter();
      const user = useStore.getState().user;
      if (!user) { setSyncStatus('❌ ব্যবহারকারী লগইন নেই'); return; }
      await adapter.initialize(user.uid);
      await adapter.sync();
      setLastSync(Date.now());
      setSyncStatus('✅ সিঙ্ক সম্পন্ন!');
    } catch (e: any) {
      setSyncStatus('❌ সিঙ্ক ব্যর্থ: ' + e.message);
    }
  };

  const handleMigrate = async () => {
    if (!confirm('Firebase থেকে সব ডেটা Local Hybrid মোডে নিয়ে আসা হবে। এটি আগের local ডেটা ওভাররাইট করতে পারে। প্রসিডিউর শুরু করবেন?')) return;
    setMigrating(true);
    setMigrationStatus('শুরু হচ্ছে...');
    setMigrationProgress(0);
    try {
      const { migrateFirebaseToHybrid } = await import('../../lib/migration');
      const user = useStore.getState().user;
      if (!user) throw new Error('ব্যবহারকারী লগইন নেই');
      await migrateFirebaseToHybrid(user.uid, (status, progress) => {
        setMigrationStatus(status);
        setMigrationProgress(Math.round(progress));
      });
      // reload store
      await useStore.getState().loadUserData();
      setSyncStatus('✅ মাইগ্রেশন সফল হয়েছে!');
    } catch (e: any) {
      setSyncStatus('❌ মাইগ্রেশন ব্যর্থ: ' + e.message);
    } finally {
      setMigrating(false);
    }
  };

  const handleExportHybrid = async () => {
    try {
      const { exportAllData } = await import('../../lib/indexedDBStore');
      const data = await exportAllData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `officeai_hybrid_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert('Export ব্যর্থ: ' + e.message);
    }
  };

  const handleImportHybrid = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const json = JSON.parse(ev.target?.result as string);
        if (!confirm('এই ডেটা IndexedDB-তে ইমপোর্ট করবেন?')) return;
        const { importAllData } = await import('../../lib/indexedDBStore');
        const count = await importAllData(json);
        alert(`${count}টি রেকর্ড সফলভাবে ইমপোর্ট হয়েছে!`);
      } catch (err: any) {
        alert('ইমপোর্ট ব্যর্থ: ' + err.message);
      }
      e.target.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-4">
      {/* Mode Selection */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleModeSwitch('firebase')}
          disabled={switching}
          className={`p-4 border-2 transition-all text-left ${mode === 'firebase' ? 'border-cyan-500 bg-cyan-500/10' : 'border-black/10 dark:border-white/10 hover:border-cyan-500/50'}`}
        >
          <div className="font-black text-sm uppercase tracking-widest mb-1">🔥 Firebase</div>
          <p className="text-[10px] text-black/60 dark:text-white/50">দ্রুত, রিয়েল-टाइम। কোটা সীমা আছে।</p>
        </button>
        <button
          onClick={() => handleModeSwitch('hybrid')}
          disabled={switching}
          className={`p-4 border-2 transition-all text-left ${mode === 'hybrid' ? 'border-cyan-500 bg-cyan-500/10' : 'border-black/10 dark:border-white/10 hover:border-cyan-500/50'}`}
        >
          <div className="font-black text-sm uppercase tracking-widest mb-1">💾 Hybrid</div>
          <p className="text-[10px] text-black/60 dark:text-white/50">IndexedDB + Drive। কোটা-মুক্ত, অফলাইন।</p>
        </button>
      </div>

      {/* Current Mode Status */}
      <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-500 bg-cyan-500/5 border border-cyan-500/20 px-3 py-2">
        বর্তমান মোড: <strong>{mode === 'firebase' ? 'Firebase (Default)' : 'Hybrid (Local + Drive)'}</strong>
      </div>

      {/* Hybrid Mode Settings */}
      {mode === 'hybrid' && (
        <div className="space-y-4 border-t border-black/10 dark:border-white/10 pt-4">
          {/* Encryption Password */}
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/50 mb-1 block">
              🔐 এনক্রিপশন পাসওয়ার্ড
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={encPwd}
                onChange={e => setEncPwd(e.target.value)}
                placeholder="ন্যূনতম ৬ অক্ষর..."
                className="flex-1 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleSetPassword}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-[10px] px-4 py-2"
              >
                Set
              </button>
            </div>
            <p className="text-[9px] text-black/40 dark:text-white/30 mt-1">
              ⚠️ এই পাসওয়ার্ড ভুলে গেলে এনক্রিপ্টেড ডেটা পুনরুদ্ধার সম্ভব নয়।
            </p>
          </div>

          {/* Google Drive Connection */}
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/50 mb-1 block">
              ☁️ Google Drive সংযোগ
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={clientId}
                onChange={e => setClientId(e.target.value)}
                placeholder="Google OAuth Client ID..."
                className="flex-1 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 p-2 text-xs font-mono outline-none focus:border-cyan-500"
              />
            </div>
            <div className="flex gap-2">
              {!driveConnected ? (
                <button onClick={handleConnectDrive} className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-[10px] px-4 py-2">
                  Connect Google Drive
                </button>
              ) : (
                <>
                  <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest self-center">✅ Connected</span>
                  <button onClick={handleDisconnectDrive} className="bg-red-600/20 hover:bg-red-600/30 text-red-400 font-bold uppercase tracking-widest text-[10px] px-4 py-2 border border-red-500/30">
                    Disconnect
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Sync Controls */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleManualSync}
              disabled={!driveConnected}
              className="bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest text-[10px] px-4 py-2 disabled:opacity-30 transition-colors"
            >
              🔄 Manual Sync Now
            </button>
            <div className="text-[10px] text-black/50 dark:text-white/40 font-mono self-center">
              {lastSync > 0 ? `শেষ সিঙ্ক: ${new Date(lastSync).toLocaleString('bn-IN')}` : 'এখনো সিঙ্ক হয়নি'}
            </div>
          </div>

          {/* Hybrid Export/Import */}
          <div className="grid grid-cols-2 gap-2">
            <button onClick={handleExportHybrid} className="bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/50 text-purple-400 font-bold uppercase tracking-widest text-[10px] px-4 py-2 transition-colors">
              ↓ Export Hybrid Backup
            </button>
            <label className="bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest text-[10px] px-4 py-2 text-center cursor-pointer transition-colors relative">
              ↑ Import Hybrid Data
              <input type="file" accept=".json" className="opacity-0 absolute inset-0 cursor-pointer w-full" onChange={handleImportHybrid} />
            </label>
          </div>

          {/* Migrate Data Button */}
          <div className="border-t border-black/10 dark:border-white/10 pt-4 mt-2">
            <button
              onClick={handleMigrate}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-[10px] px-4 py-2.5 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              🚀 {migrating ? `মাইগ্রেট হচ্ছে: ${migrationProgress}% (${migrationStatus})` : 'Migrate Firebase Data to Hybrid'}
            </button>
            {migrating && (
              <div className="w-full bg-black/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className="bg-cyan-500 h-full transition-all duration-300" 
                  style={{ width: `${migrationProgress}%` }}
                ></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Status Message */}
      {syncStatus && (
        <div className="text-[10px] font-mono bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2 text-black/70 dark:text-white/60">
          {syncStatus}
        </div>
      )}
    </div>
  );
}
