import React, { useState } from 'react';
import WizardStep1_Templates from './WizardStep1_Templates';
import WizardStep2_Form from './WizardStep2_Form';
import WizardStep3_Rules from './WizardStep3_Rules';
import { Template } from '../../types';

interface TemplateWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: {
    template: Template;
    values: Record<string, string>;
    selectedRules: string[];
    tone: string;
    language: string;
  }) => void;
  initialTemplate?: Template | null;
  initialStep?: 1 | 2 | 3;
  initialValues?: Record<string, string>;
  initialSelectedRules?: string[];
  initialTone?: string;
  initialLanguage?: string;
}

export default function TemplateWizard({
  isOpen,
  onClose,
  onComplete,
  initialTemplate = null,
  initialStep = 1,
  initialValues = {},
  initialSelectedRules = [],
  initialTone = 'Formal',
  initialLanguage = 'English'
}: TemplateWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [selectedRules, setSelectedRules] = useState<string[]>([]);
  const [tone, setTone] = useState('Formal');
  const [language, setLanguage] = useState('English');

  React.useEffect(() => {
    if (isOpen) {
      setStep(initialStep);
      setSelectedTemplate(initialTemplate);
      setFormValues(initialValues);
      setSelectedRules(initialSelectedRules);
      setTone(initialTone);
      setLanguage(initialLanguage);
    }
  }, [isOpen, initialStep, initialTemplate, initialValues, initialSelectedRules, initialTone, initialLanguage]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — slides down from top */}
      <div
        className={`absolute inset-x-0 top-16 mx-auto
          bg-white dark:bg-neutral-950
          w-full max-w-5xl
          h-[calc(100vh-4rem)]
          rounded-b-2xl shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Header with progress bar */}
        <div className="flex-none border-b border-black/10 dark:border-white/10 px-6 py-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              ✨ Template Wizard
            </h2>
            <button 
              onClick={onClose}
              className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Step progress bar */}
          <div className="flex items-center gap-2">
            {[
              { num: 1, label: 'Template' },
              { num: 2, label: 'তথ্য' },
              { num: 3, label: 'Rules' }
            ].map(({ num, label }, idx) => (
              <React.Fragment key={num}>
                <button
                  onClick={() => num < step && setStep(num as 1|2|3)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                    transition-colors
                    ${step === num
                      ? 'bg-[#22C55E] text-black font-extrabold'
                      : step > num
                        ? 'bg-[#22C55E]/20 text-[#22C55E] cursor-pointer hover:bg-[#22C55E]/30'
                        : 'bg-black/5 dark:bg-white/5 text-black/30 dark:text-white/30'
                    }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px]
                    ${step >= num ? 'bg-[#22C55E] text-black' : 'bg-black/10 dark:bg-white/10'}`}>
                    {step > num ? '✓' : num}
                  </span>
                  {label}
                </button>
                {idx < 2 && (
                  <div className={`flex-1 h-0.5
                    ${step > num ? 'bg-[#22C55E]' : 'bg-black/10 dark:bg-white/10'}`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step content — scrollable */}
        <div className="flex-1 overflow-y-auto">
          {step === 1 && (
            <WizardStep1_Templates
              onSelect={(template) => {
                setSelectedTemplate(template);
                setStep(2);
              }}
            />
          )}
          {step === 2 && selectedTemplate && (
            <WizardStep2_Form
              template={selectedTemplate}
              values={formValues}
              onChange={setFormValues}
            />
          )}
          {step === 3 && selectedTemplate && (
            <WizardStep3_Rules
              templateId={selectedTemplate.id}
              selectedRules={selectedRules}
              onChange={setSelectedRules}
              tone={tone}
              onToneChange={setTone}
              language={language}
              onLanguageChange={setLanguage}
            />
          )}
        </div>

        {/* Footer navigation */}
        <div className="flex-none border-t border-black/10 dark:border-white/10 px-6 py-4
          flex justify-between items-center">
          <button
            onClick={() => step > 1 ? setStep((step - 1) as 1|2|3) : onClose()}
            className="px-6 py-2 border border-black/20 dark:border-white/20
              text-xs font-bold uppercase tracking-widest text-black dark:text-white
              hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {step === 1 ? 'বাতিল' : '← পিছনে'}
          </button>

          {step < 3 ? (
            <button
              onClick={() => {
                if (step === 1 && !selectedTemplate) return;
                setStep((step + 1) as 2|3);
              }}
              disabled={step === 1 && !selectedTemplate}
              className="px-6 py-2 bg-[#22C55E] text-black
                text-xs font-bold uppercase tracking-widest
                hover:bg-[#1fb355] transition-colors
                disabled:opacity-40"
            >
              পরবর্তী →
            </button>
          ) : (
            <button
              onClick={() => {
                if (!selectedTemplate) return;
                onComplete({
                  template: selectedTemplate,
                  values: formValues,
                  selectedRules,
                  tone,
                  language
                });
              }}
              className="px-6 py-2 bg-[#22C55E] text-black
                text-xs font-bold uppercase tracking-widest
                hover:bg-[#1fb355] transition-colors"
            >
              ✨ Draft তৈরি করুন
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
