import React, { useEffect, useState } from 'react';
import { TEMPLATE_RULES } from '../../lib/templateRules';

interface Props {
  templateId: string;
  selectedRules: string[];
  onChange: (rules: string[]) => void;
  tone: string;
  onToneChange: (tone: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

export default function WizardStep3_Rules({
  templateId,
  selectedRules,
  onChange,
  tone,
  onToneChange,
  language,
  onLanguageChange
}: Props) {
  const [customRule, setCustomRule] = useState('');
  const [expandedRule, setExpandedRule] = useState<string | null>(null);

  const ruleSet = TEMPLATE_RULES.find(r => r.templateId === templateId);

  // Auto-select defaults on mount or templateId change
  useEffect(() => {
    if (ruleSet) {
      const defaults = ruleSet.rules
        .filter(r => r.defaultSelected)
        .map(r => r.id);
      onChange(defaults);
    } else {
      onChange([]);
    }
  }, [templateId]);

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto bg-white dark:bg-neutral-950">
      {/* Rules section */}
      <div>
        <div className="text-xs font-bold uppercase tracking-widest mb-4
          text-black dark:text-white border-b border-black/10 dark:border-white/10 pb-2">
          ✅ প্রযোজ্য আইন ও বিধান নির্বাচন করুন
        </div>

        {ruleSet && ruleSet.rules.length > 0 ? (
          <div className="space-y-2">
            {ruleSet.rules.map(rule => {
              const isSelected = selectedRules.includes(rule.id);
              return (
                <div 
                  key={rule.id}
                  className={`border rounded-md p-3 transition-colors
                    ${isSelected
                      ? 'border-[#22C55E]/50 bg-[#22C55E]/5'
                      : 'border-black/10 dark:border-white/10'
                    }`}
                >
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      disabled={rule.required}
                      onChange={e => {
                        if (e.target.checked) {
                          onChange([...selectedRules, rule.id]);
                        } else {
                          onChange(selectedRules.filter(r => r !== rule.id));
                        }
                      }}
                      className="mt-0.5 accent-[#22C55E] cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-black dark:text-white">
                          {rule.section}
                        </span>
                        <span className="text-[10px] text-black/50 dark:text-white/30">
                          {rule.act}
                        </span>
                        {rule.required && (
                          <span className="text-[9px] bg-orange-100 text-orange-600
                            dark:bg-orange-900/20 dark:text-orange-400
                            px-1.5 py-0.5 rounded-full font-bold">
                            Required
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-black/60 dark:text-white/50 mt-0.5">
                        {rule.title}
                      </div>
                      {/* Expandable description */}
                      {rule.description && (
                        <div className="mt-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setExpandedRule(expandedRule === rule.id ? null : rule.id);
                            }}
                            className="text-[10px] text-[#22C55E] hover:underline"
                          >
                            {expandedRule === rule.id ? '▲ কম দেখান' : '▼ বিস্তারিত'}
                          </button>
                        </div>
                      )}
                      {expandedRule === rule.id && (
                        <p className="text-[11px] text-black/50 dark:text-white/45
                          mt-1 leading-relaxed italic border-t border-black/5 dark:border-white/5 pt-1">
                          {rule.description}
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-black/40 dark:text-white/30 italic">
            এই template-এর জন্য কোনো pre-defined rule নেই।
          </p>
        )}

        {/* Custom rule input */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={customRule}
            onChange={e => setCustomRule(e.target.value)}
            placeholder="নিজে rule যোগ করুন (e.g. Section 35 Customs Act)"
            className="flex-1 bg-white dark:bg-neutral-900
              border border-black/20 dark:border-white/20
              px-3 py-2 text-xs text-black dark:text-white rounded-md
              outline-none focus:border-[#22C55E]"
          />
          <button
            type="button"
            onClick={() => {
              if (customRule.trim()) {
                onChange([...selectedRules, `custom:${customRule.trim()}`]);
                setCustomRule('');
              }
            }}
            className="px-4 py-2 border border-[#22C55E] text-[#22C55E] rounded-md
              text-xs font-bold hover:bg-[#22C55E] hover:text-black transition-colors"
          >
            যোগ করুন
          </button>
        </div>
        
        {/* Render custom added rules list so user can see them and delete them if needed */}
        {selectedRules.filter(r => r.startsWith('custom:')).length > 0 && (
          <div className="mt-3 space-y-1">
            <div className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Custom Rules:</div>
            {selectedRules.filter(r => r.startsWith('custom:')).map(r => (
              <div key={r} className="flex justify-between items-center bg-black/5 dark:bg-white/5 px-2 py-1 text-xs text-black dark:text-white rounded">
                <span>{r.replace('custom:', '')}</span>
                <button
                  type="button"
                  onClick={() => onChange(selectedRules.filter(sr => sr !== r))}
                  className="text-red-500 hover:text-red-700 font-bold ml-2 text-[10px]"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tone and Language selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-black/10 dark:border-white/10 pt-6">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest
            text-black/60 dark:text-white/40 mb-2">
            Letter Tone
          </div>
          <div className="flex gap-2">
            {['Formal', 'Strong', 'Moderate'].map(t => (
              <button
                key={t}
                type="button"
                onClick={() => onToneChange(t)}
                className={`flex-1 py-2 text-xs font-bold border rounded-md transition-colors
                  ${tone === t
                    ? 'bg-[#22C55E] text-black border-[#22C55E]'
                    : 'border-black/20 dark:border-white/20 text-black/60 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest
            text-black/60 dark:text-white/40 mb-2">
            ভাষা (Language)
          </div>
          <select
            value={language}
            onChange={e => onLanguageChange(e.target.value)}
            className="w-full bg-white dark:bg-neutral-900
              border border-black/20 dark:border-white/20
              p-2 text-xs text-black dark:text-white rounded-md
              outline-none focus:border-[#22C55E] cursor-pointer"
          >
            <option value="English">English</option>
            <option value="Bengali">Bengali / বাংলা</option>
            <option value="Hindi">Hindi / हिन्दी</option>
            <option value="English-Hindi Mixed">English-Hindi Mixed (Govt Style)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
