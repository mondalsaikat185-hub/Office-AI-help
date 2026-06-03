import { useState } from 'react';
import { useStore } from '../../lib/store';
import { Briefcase, Plus, Search, CalendarDays, Trash2, Edit2, X, ChevronDown, IndianRupee } from 'lucide-react';
import { CaseItem } from '../../types';

const STAGES: CaseItem['stage'][] = [
  'SCN Issued', 'Personal Hearing', 'OIO Passed', 'Appeal Filed',
  'Appeal Pending', 'Prosecution', 'Closed'
];
const CASE_TYPES: CaseItem['caseType'][] = ['SCN', 'OIO', 'Appeal', 'Prosecution', 'Other'];

const stageColor = (stage: string) => {
  if (stage === 'Closed') return 'border-green-500 text-green-500 bg-green-500/10';
  if (stage === 'Prosecution') return 'border-red-500 text-red-500 bg-red-500/10';
  if (stage === 'Appeal Pending' || stage === 'Appeal Filed') return 'border-amber-500 text-amber-500 bg-amber-500/10';
  return 'border-purple-500 text-purple-500 bg-purple-500/10';
};

const emptyForm = (): Partial<CaseItem> => ({
  caseNo: '', caseType: 'SCN', party: '', gstin: '',
  taxAmount: 0, penaltyAmount: 0, interestAmount: 0, totalAmount: 0,
  oioNo: '', oioDate: '', nextHearing: '', stage: 'SCN Issued',
  adjudicatingAuthority: '', remarks: ''
});

export default function CaseRegisterScreen() {
  const { activeWorkspaceId, cases, saveCase, updateCase, deleteCase } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [editingCase, setEditingCase] = useState<CaseItem | null>(null);
  const [form, setForm] = useState<Partial<CaseItem>>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const f = (field: keyof CaseItem, val: any) => {
    const updated = { ...form, [field]: val };
    if (['taxAmount', 'penaltyAmount', 'interestAmount'].includes(field as string)) {
      updated.totalAmount = (Number(updated.taxAmount) || 0) +
        (Number(updated.penaltyAmount) || 0) +
        (Number(updated.interestAmount) || 0);
    }
    setForm(updated);
  };

  const openAdd = () => {
    setEditingCase(null);
    setForm(emptyForm());
    setShowForm(true);
  };

  const openEdit = (c: CaseItem) => {
    setEditingCase(c);
    setForm({ ...c });
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!form.caseNo || !form.party) return alert('Case No. and Party Name are required.');
    setSaving(true);
    try {
      if (editingCase) {
        await updateCase({ ...editingCase, ...form } as CaseItem);
      } else {
        const newCase: CaseItem = {
          id: Date.now().toString(36),
          caseNo: form.caseNo || '',
          caseType: form.caseType || 'SCN',
          party: form.party || '',
          gstin: form.gstin || '',
          taxAmount: Number(form.taxAmount) || 0,
          penaltyAmount: Number(form.penaltyAmount) || 0,
          interestAmount: Number(form.interestAmount) || 0,
          totalAmount: Number(form.totalAmount) || 0,
          oioNo: form.oioNo || '',
          oioDate: form.oioDate || '',
          nextHearing: form.nextHearing || '',
          stage: form.stage || 'SCN Issued',
          adjudicatingAuthority: form.adjudicatingAuthority || '',
          remarks: form.remarks || '',
          workspaceId: activeWorkspaceId || '',
          createdAt: Date.now(),
        };
        await saveCase(newCase);
      }
      setShowForm(false);
      setForm(emptyForm());
    } catch (e: any) {
      alert('Save failed: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case permanently?')) return;
    await deleteCase(id);
  };

  const filtered = cases
    .filter(c => !activeWorkspaceId || c.workspaceId === activeWorkspaceId || !c.workspaceId)
    .filter(c => stageFilter === 'all' || c.stage === stageFilter)
    .filter(c =>
      c.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.caseNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.gstin || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

  const totalDemand = filtered.reduce((s, c) => s + (c.totalAmount || 0), 0);
  const activeCases = filtered.filter(c => c.stage !== 'Closed').length;

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">

      {/* Header */}
      <header className="mb-8 border-b-2 border-black/10 dark:border-white/10 pb-4">
        <h1 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4 text-purple-500">
          <Briefcase className="w-8 h-8" /> Case & Appeal Register
        </h1>
        <p className="text-black dark:text-white/50 text-sm mt-2">
          Track Show Cause Notices, Adjudications, and Appeals. Data saved to Firebase.
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Cases', value: filtered.length, color: 'text-purple-500' },
          { label: 'Active Cases', value: activeCases, color: 'text-amber-500' },
          { label: 'Closed', value: filtered.filter(c => c.stage === 'Closed').length, color: 'text-green-500' },
          { label: 'Total Demand', value: `₹${(totalDemand / 100000).toFixed(1)}L`, color: 'text-red-500' },
        ].map(s => (
          <div key={s.label} className="border border-black/10 dark:border-white/10 p-4 bg-black/5 dark:bg-white/5">
            <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-black/50 dark:text-white/50 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search + Filter + Add */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50 dark:text-white/50" />
          <input
            type="text"
            placeholder="Search by Case No., Party, or GSTIN..."
            className="w-full pl-10 pr-4 py-2 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-xs font-bold uppercase tracking-widest outline-none focus:border-purple-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={stageFilter}
          onChange={e => setStageFilter(e.target.value)}
          className="bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-purple-500"
        >
          <option value="all">All Stages</option>
          {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button
          onClick={openAdd}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest text-xs px-6 py-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Case
        </button>
      </div>

      {/* Case List */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-black/20 dark:border-white/20">
          <Briefcase className="w-16 h-16 mx-auto text-black/20 dark:text-white/20 mb-4" />
          <h3 className="text-lg font-bold uppercase mb-2">No Cases Found</h3>
          <p className="text-black/50 dark:text-white/50 text-sm mb-6">Add your first case to start tracking.</p>
          <button onClick={openAdd} className="bg-purple-600 text-white font-bold uppercase tracking-widest text-xs px-6 py-3 flex items-center gap-2 mx-auto">
            <Plus className="w-4 h-4" /> Add Case
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(c => (
            <div key={c.id} className="border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm">

              {/* Main Row */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <ChevronDown className={`w-4 h-4 text-black/40 dark:text-white/40 transition-transform shrink-0 ${expandedId === c.id ? 'rotate-180' : ''}`} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-black text-base tracking-wide">{c.caseNo}</span>
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border ${stageColor(c.stage)}`}>{c.stage}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border border-black/20 dark:border-white/20 text-black/50 dark:text-white/50">{c.caseType}</span>
                    </div>
                    <p className="text-sm text-black/70 dark:text-white/70 truncate mt-1">{c.party}</p>
                    {c.gstin && <p className="text-[10px] font-mono text-black/40 dark:text-white/40">GSTIN: {c.gstin}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-6 shrink-0 ml-4">
                  {c.nextHearing && (
                    <div className="hidden sm:flex items-center gap-1 text-xs text-black/60 dark:text-white/60">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(c.nextHearing).toLocaleDateString('en-IN')}
                    </div>
                  )}
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-red-500">₹{(c.totalAmount || 0).toLocaleString('en-IN')}</p>
                    <p className="text-[9px] uppercase tracking-widest text-black/40 dark:text-white/40">Total Demand</p>
                  </div>
                  <div className="flex gap-2" onClick={e => e.stopPropagation()}>
                    <button onClick={() => openEdit(c)} className="text-blue-400 hover:bg-blue-400/10 p-2 rounded transition-colors" title="Edit"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(c.id)} className="text-red-400 hover:bg-red-400/10 p-2 rounded transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === c.id && (
                <div className="border-t border-black/10 dark:border-white/10 p-4 bg-black/5 dark:bg-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Tax</p><p className="font-mono">₹{(c.taxAmount || 0).toLocaleString('en-IN')}</p></div>
                  <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Penalty</p><p className="font-mono">₹{(c.penaltyAmount || 0).toLocaleString('en-IN')}</p></div>
                  <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Interest</p><p className="font-mono">₹{(c.interestAmount || 0).toLocaleString('en-IN')}</p></div>
                  <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Total</p><p className="font-mono font-bold text-red-500">₹{(c.totalAmount || 0).toLocaleString('en-IN')}</p></div>
                  {c.oioNo && <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">OIO No.</p><p>{c.oioNo}</p></div>}
                  {c.oioDate && <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">OIO Date</p><p>{new Date(c.oioDate).toLocaleDateString('en-IN')}</p></div>}
                  {c.adjudicatingAuthority && <div className="col-span-2"><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Adjudicating Authority</p><p>{c.adjudicatingAuthority}</p></div>}
                  {c.nextHearing && <div><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Next Hearing</p><p className="text-amber-500 font-bold">{new Date(c.nextHearing).toLocaleDateString('en-IN')}</p></div>}
                  {c.remarks && <div className="col-span-2 md:col-span-4"><p className="text-black/40 dark:text-white/40 uppercase tracking-widest font-bold mb-1">Remarks</p><p className="whitespace-pre-wrap">{c.remarks}</p></div>}
                  <div className="col-span-2 md:col-span-4"><p className="text-black/30 dark:text-white/30 text-[9px]">Added: {new Date(c.createdAt).toLocaleDateString('en-IN')}</p></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-neutral-900 border-2 border-purple-500/40 w-full max-w-2xl shadow-2xl mt-8 mb-8">

            <div className="flex justify-between items-center p-6 border-b-2 border-black/10 dark:border-white/10 bg-purple-500/5">
              <h2 className="text-xl font-black uppercase tracking-widest text-purple-500">
                {editingCase ? 'Edit Case' : 'Add New Case'}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-2xl font-bold leading-none p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-5">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Case / SCN No. *</label>
                  <input value={form.caseNo || ''} onChange={e => f('caseNo', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none" placeholder="e.g. SCN/CGST/001/2026" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Case Type *</label>
                  <select value={form.caseType || 'SCN'} onChange={e => f('caseType', e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-3 text-sm outline-none focus:border-purple-500 cursor-pointer">
                    {CASE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Party Name *</label>
                  <input value={form.party || ''} onChange={e => f('party', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none" placeholder="e.g. M/s XYZ Trading Pvt Ltd" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">GSTIN (Optional)</label>
                  <input value={form.gstin || ''} onChange={e => f('gstin', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none font-mono" placeholder="e.g. 21XXXXX1234Z1Z5" />
                </div>
              </div>

              {/* Amounts */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500 flex items-center gap-1 mb-2">
                  <IndianRupee className="w-3 h-3" /> Demand Amount (₹)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Tax', field: 'taxAmount' },
                    { label: 'Penalty', field: 'penaltyAmount' },
                    { label: 'Interest', field: 'interestAmount' },
                  ].map(a => (
                    <div key={a.field} className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-black/50 dark:text-white/50">{a.label}</label>
                      <input
                        type="number" min="0"
                        value={(form as any)[a.field] || 0}
                        onChange={e => f(a.field as keyof CaseItem, Number(e.target.value))}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-2 text-sm font-mono focus:border-purple-500 outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 text-sm font-bold text-red-500 font-mono">
                  Total: ₹{(form.totalAmount || 0).toLocaleString('en-IN')}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Current Stage *</label>
                  <select value={form.stage || 'SCN Issued'} onChange={e => f('stage', e.target.value)} className="w-full bg-white dark:bg-neutral-900 border border-black/20 dark:border-white/20 p-3 text-sm outline-none focus:border-purple-500 cursor-pointer">
                    {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Next Hearing Date</label>
                  <input type="date" value={form.nextHearing || ''} onChange={e => f('nextHearing', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none" />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">OIO / Order No.</label>
                  <input value={form.oioNo || ''} onChange={e => f('oioNo', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none" placeholder="e.g. OIO/21/2025" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">OIO Date</label>
                  <input type="date" value={form.oioDate || ''} onChange={e => f('oioDate', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none" />
                </div>
              </div>

              {/* Row 5 */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Adjudicating Authority</label>
                <input value={form.adjudicatingAuthority || ''} onChange={e => f('adjudicatingAuthority', e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none" placeholder="e.g. DC/CGST/Div-I" />
              </div>

              {/* Remarks */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Remarks</label>
                <textarea value={form.remarks || ''} onChange={e => f('remarks', e.target.value)} rows={3} className="w-full bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 p-3 text-sm focus:border-purple-500 outline-none resize-none" placeholder="Any additional notes..." />
              </div>
            </div>

            <div className="p-6 border-t border-black/10 dark:border-white/10 flex justify-end gap-3 bg-black/5 dark:bg-white/5">
              <button onClick={() => setShowForm(false)} className="px-6 py-3 border border-black/20 dark:border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.caseNo || !form.party}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {saving ? 'Saving...' : editingCase ? 'Update Case' : 'Save Case'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
