import React, { useState, useMemo } from 'react';
import { defaultTemplates } from '../../lib/defaultTemplates';
import { useStore } from '../../lib/store';
import { Template } from '../../types';

interface Props {
  onSelect: (template: Template) => void;
}

export default function WizardStep1_Templates({ onSelect }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('All');
  const { templates: userTemplates } = useStore();

  const CATS = ['All', 'GST', 'Customs', 'Leave & Service', 'GPF', 'General', 'আমার'];

  const allTemplatesNormalized = useMemo(() => {
    const normUser = (userTemplates || []).map(t => ({
      ...t,
      category: (t.category || 'Custom') as Template['category']
    }));
    return [...defaultTemplates, ...normUser];
  }, [userTemplates]);

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return allTemplatesNormalized.length;
    if (cat === 'আমার') return (userTemplates || []).length;
    if (cat === 'Leave & Service') {
      return allTemplatesNormalized.filter(t => t.category === 'Leave & Service' || t.category === 'Custom' || t.category === 'General').length; // Fallback mapping
    }
    return allTemplatesNormalized.filter(t => t.category === cat).length;
  };

  const filteredTemplates = useMemo(() => {
    let list: Template[] = [];
    if (category === 'All') {
      list = allTemplatesNormalized;
    } else if (category === 'আমার') {
      list = (userTemplates || []).map(t => ({ ...t, category: 'Custom' }));
    } else {
      list = allTemplatesNormalized.filter(t => t.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.subject.toLowerCase().includes(q)
      );
    }
    return list;
  }, [category, search, allTemplatesNormalized, userTemplates]);

  return (
    <div className="flex h-full min-h-[500px]">
      {/* Left: Category tabs — vertical */}
      <div className="w-44 flex-none border-r border-black/10 dark:border-white/10 py-4 overflow-y-auto bg-black/5 dark:bg-white/5">
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            type="button"
            className={`w-full text-left px-4 py-3 text-xs font-bold
              transition-colors block relative border-r-2
              ${category === cat
                ? 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]'
                : 'text-black/60 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 border-transparent'
              }`}
          >
            {cat === 'Leave & Service' ? 'Leave' : cat}
            {/* count badge */}
            <span className="ml-1 text-[10px] opacity-60 font-normal">
              ({getCategoryCount(cat)})
            </span>
          </button>
        ))}
      </div>

      {/* Right: Search + Grid */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-neutral-950">
        {/* Search bar */}
        <div className="p-4 border-b border-black/10 dark:border-white/10 flex-none">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Template খুঁজুন... (নাম বা বিষয়)"
            className="w-full bg-black/5 dark:bg-white/5
              border border-black/10 dark:border-white/10
              px-3 py-2 text-xs outline-none rounded-md
              focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]
              text-black dark:text-white"
          />
        </div>

        {/* Template cards grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => onSelect(template)}
                type="button"
                className="text-left p-4 border border-black/10 dark:border-white/10
                  hover:border-[#22C55E] hover:bg-[#22C55E]/5
                  transition-all rounded-md group flex flex-col justify-between"
              >
                <div>
                  {/* Category badge */}
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block
                    ${template.category === 'GST' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      template.category === 'Customs' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                      'bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/40'
                    }`}>
                    {template.category || 'General'}
                  </span>

                  {/* Template name */}
                  <div className="text-xs font-bold text-black dark:text-white
                    group-hover:text-[#22C55E] transition-colors leading-tight mb-1">
                    {template.name}
                  </div>

                  {/* Subject preview */}
                  <div className="text-[10px] text-black/50 dark:text-white/30 leading-tight line-clamp-2">
                    {template.subject}
                  </div>
                </div>

                {/* Select button */}
                <div className="mt-3 text-[10px] font-bold text-[#22C55E]
                  opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  নির্বাচন করুন →
                </div>
              </button>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-16 text-black/30 dark:text-white/20 text-xs italic">
              কোনো template পাওয়া যায়নি।
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
