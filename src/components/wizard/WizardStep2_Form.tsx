import React from 'react';
import { WIZARD_CONFIGS } from '../../lib/wizardConfig';
import { Template } from '../../types';

interface Props {
  template: Template;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
}

export default function WizardStep2_Form({ template, values, onChange }: Props) {
  // Find config by templateId or fallback to default
  const config = WIZARD_CONFIGS.find(c => c.templateId === template.id) || 
                 WIZARD_CONFIGS.find(c => c.templateId === '__default__') || 
                 WIZARD_CONFIGS[WIZARD_CONFIGS.length - 1]; // Fallback to last item (which is __default__)

  const formatCurrency = (val: string) => {
    // Remove non-digit characters
    const clean = val.replace(/\D/g, '');
    if (!clean) return '';
    const num = parseInt(clean, 10);
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto bg-white dark:bg-neutral-950">
      {/* Template name reminder */}
      <div className="border-l-4 border-[#22C55E] pl-4">
        <div className="text-[10px] text-[#22C55E] font-bold uppercase tracking-widest mb-0.5">
          নির্বাচিত Template
        </div>
        <div className="text-sm font-bold text-black dark:text-white leading-tight">
          {template.name}
        </div>
      </div>

      {/* Field Groups */}
      {config.groups.map(group => (
        <div key={group.groupId} className="space-y-4">
          {/* Group header */}
          <div className="flex items-center gap-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">
              {group.groupTitleBn}
            </div>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          </div>

          {/* Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {group.fields.map(field => (
              <div 
                key={field.id}
                className={field.type === 'textarea' ? 'sm:col-span-2' : ''}
              >
                <label className="block text-[10px] font-bold uppercase tracking-widest
                  text-black/60 dark:text-white/40 mb-1">
                  {field.labelBn}
                  {field.required && <span className="text-red-500 ml-1 font-bold">*</span>}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    value={values[field.id] || ''}
                    onChange={e => onChange({ ...values, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    rows={3}
                    className="w-full bg-white dark:bg-neutral-900
                      border border-black/20 dark:border-white/20
                      p-2.5 text-xs text-black dark:text-white rounded-md
                      outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
                  />
                ) : field.type === 'date' ? (
                  <input
                    type="date"
                    value={values[field.id] || ''}
                    onChange={e => onChange({ ...values, [field.id]: e.target.value })}
                    className="w-full bg-white dark:bg-neutral-900
                      border border-black/20 dark:border-white/20
                      p-2.5 text-xs text-black dark:text-white rounded-md
                      outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
                  />
                ) : field.type === 'select' ? (
                  <select
                    value={values[field.id] || ''}
                    onChange={e => onChange({ ...values, [field.id]: e.target.value })}
                    className="w-full bg-white dark:bg-neutral-900
                      border border-black/20 dark:border-white/20
                      p-2.5 text-xs text-black dark:text-white rounded-md
                      outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] cursor-pointer"
                  >
                    <option value="">— নির্বাচন করুন —</option>
                    {field.options?.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={values[field.id] || ''}
                    onChange={e => {
                      const val = field.type === 'currency'
                        ? formatCurrency(e.target.value)
                        : e.target.value;
                      onChange({ ...values, [field.id]: val });
                    }}
                    placeholder={field.placeholder}
                    className="w-full bg-white dark:bg-neutral-900
                      border border-black/20 dark:border-white/20
                      p-2.5 text-xs text-black dark:text-white rounded-md
                      outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
                  />
                )}

                {field.hint && (
                  <p className="text-[10px] text-black/40 dark:text-white/30 mt-1">
                    {field.hint}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
