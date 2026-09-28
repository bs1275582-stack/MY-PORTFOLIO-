import React from "react";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Real feedback from local business owners.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            How a cleaner, modern website translates to more phone calls, inquiries, and booked appointments.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0b0b0b] border border-neutral-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* 5 stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs text-neutral-400">{t.role} · {t.business}</div>
                <div className="mt-3 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 rounded px-2 py-1 inline-block">
                  Result: {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
