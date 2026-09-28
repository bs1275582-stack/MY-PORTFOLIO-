import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/portfolioData";

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about getting your local business online with zero stress.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b0b0b] border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-white hover:text-neutral-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-400 leading-relaxed border-t border-neutral-900 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
