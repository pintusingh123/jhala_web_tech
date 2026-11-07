import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default

  const toggle = (idx) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  const openSet = new Set(openIndexes);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openSet.has(idx);
        const headerId = `accordion-header-${idx}`;
        const panelId = `accordion-panel-${idx}`;
        const itemKey = item.q || item.title || `accordion-item-${idx}`;

        return (
          <div
            key={itemKey}
            className="rounded-xl border border-subtle bg-surface transition-colors duration-150 overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-head font-bold text-base sm:text-lg text-primary hover:text-[#FF6B2C] transition-colors cursor-pointer gap-4"
              >
                <span>{item.q || item.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#FF6B2C]' : ''
                  }`}
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 sm:px-6 pb-6 pt-1 font-body text-sm sm:text-base text-muted leading-relaxed border-t border-subtle/50"
              >
                {item.a || item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
