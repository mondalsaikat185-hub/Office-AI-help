import React from 'react';
import { TEMPLATE_RULES } from '../../lib/templateRules';
import { WIZARD_CONFIGS } from '../../lib/wizardConfig';

interface WizardResultProps {
  templateName: string;
  templateId: string;
  values: Record<string, string>;
  selectedRules: string[];
  tone: 'Formal' | 'Strong' | 'Moderate';
  onToneChange: (tone: 'Formal' | 'Strong' | 'Moderate') => void;
  language: string;
  onLanguageChange: (lang: string) => void;
  onEditInfo: () => void;
  onEditRules: () => void;
  onRegenerate: () => void;
}

export default function WizardResult({
  templateName,
  templateId,
  values,
  selectedRules,
  tone,
  onToneChange,
  language,
  onLanguageChange,
  onEditInfo,
  onEditRules,
  onRegenerate
}: WizardResultProps) {
  const allRules = TEMPLATE_RULES.find(r => r.templateId === templateId);
  const config = WIZARD_CONFIGS.find(c => c.templateId === templateId) || 
                 WIZARD_CONFIGS.find(c => c.templateId === '__default__');

  // Helper to find a field's label Bn
  const getFieldLabel = (fieldId: string) => {
    if (!config) return fieldId;
    for (const group of config.groups) {
      const field = group.fields.find(f => f.id === fieldId);
      if (field) return field.labelBn;
    }
    return fieldId;
  };

  return (
    <div className="space-y-6 bg-black/5 dark:bg-white/5 p-4 rounded-lg border border-black/10 dark:border-white/10">
      <div>
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#22C55E] block mb-1">
          নির্বাচিত টেমপ্লেট
        </span>
        <h3 className="text-sm font-extrabold text-black dark:text-white leading-tight">
          {templateName}
        </h3>
      </div>

      {/* Readonly filled values */}
      <div>
        <div className="flex justify-between items-center mb-2 border-b border-black/10 dark:border-white/10 pb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/40">
            পূরণকৃত তথ্যসমূহ (Read-Only)
          </span>
          <button 
            onClick={onEditInfo}
            type="button"
            className="text-[9px] font-bold text-[#22C55E] hover:underline uppercase tracking-wider"
          >
            সম্পাদনা করুন ✎
          </button>
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {Object.entries(values).filter(([, val]) => val).map(([key, val]) => (
            <div key={key} className="flex flex-col text-xs border-b border-black/5 dark:border-white/5 pb-1">
              <span className="text-[10px] text-black/50 dark:text-white/40 font-semibold">
                {getFieldLabel(key)}
              </span>
              <span className="text-black dark:text-white font-mono break-all mt-0.5">
                {val}
              </span>
            </div>
          ))}
          {Object.entries(values).filter(([, val]) => val).length === 0 && (
            <span className="text-xs italic text-black/40 dark:text-white/30">কোনো তথ্য পূরণ করা হয়নি।</span>
          )}
        </div>
      </div>

      {/* Selected rules preview */}
      <div>
        <div className="flex justify-between items-center mb-2 border-b border-black/10 dark:border-white/10 pb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/40">
            নির্বাচিত আইন ও বিধিমালা
          </span>
          <button 
            onClick={onEditRules}
            type="button"
            className="text-[9px] font-bold text-[#22C55E] hover:underline uppercase tracking-wider"
          >
            পরিবর্তন করুন ✎
          </button>
        </div>
        <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
          {selectedRules.map(ruleId => {
            let label = ruleId;
            if (ruleId.startsWith('custom:')) {
              label = ruleId.replace('custom:', '');
            } else if (allRules) {
              const r = allRules.rules.find(item => item.id === ruleId);
              if (r) label = `${r.section} - ${r.title}`;
            }
            return (
              <div key={ruleId} className="text-[11px] text-black/70 dark:text-white/60 flex items-start gap-1.5 bg-black/5 dark:bg-white/5 p-1.5 rounded">
                <span className="text-[#22C55E] mt-0.5">✔</span>
                <span className="leading-tight">{label}</span>
              </div>
            );
          })}
          {selectedRules.length === 0 && (
            <span className="text-xs italic text-black/40 dark:text-white/30">কোনো আইন নির্বাচন করা হয়নি।</span>
          )}
        </div>
      </div>

      {/* Tone & Language Quick Changer */}
      <div className="space-y-4 border-t border-black/10 dark:border-white/10 pt-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/40 mb-1">
            Tone পরিবর্তন করুন
          </label>
          <div className="flex gap-1">
            {(['Formal', 'Strong', 'Moderate'] as const).map(t => (
              <button
                key={t}
                onClick={() => onToneChange(t)}
                type="button"
                className={`flex-1 py-1.5 text-[10px] font-bold uppercase border rounded transition-colors
                  ${tone === t
                    ? 'bg-[#22C55E] text-black border-[#22C55E]'
                    : 'border-black/20 dark:border-white/20 text-black/60 dark:text-white/45 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/40 mb-1">
            ভাষা (Language) পরিবর্তন
          </label>
          <select
            value={language}
            onChange={e => onLanguageChange(e.target.value)}
            className="w-full bg-white dark:bg-neutral-900
              border border-black/20 dark:border-white/20
              p-2 text-xs text-black dark:text-white rounded
              outline-none focus:border-[#22C55E] cursor-pointer"
          >
            <option value="English">English</option>
            <option value="Bengali">Bengali / বাংলা</option>
            <option value="Hindi">Hindi / हिन्दी</option>
            <option value="English-Hindi Mixed">English-Hindi Mixed (Govt Style)</option>
          </select>
        </div>
      </div>

      {/* Regenerate Button */}
      <button
        onClick={onRegenerate}
        type="button"
        className="w-full bg-[#22C55E] hover:bg-[#1fb355] text-black font-bold uppercase tracking-widest py-3 text-xs rounded transition-colors"
      >
        ✨ পুনরায় ড্রাফট তৈরি করুন (Regenerate)
      </button>
    </div>
  );
}
