import React from "react";
import { Palette, Smartphone, Target, MessageSquare } from "lucide-react";
import { WHY_CHOOSE_US } from "../data/portfolioData";

export const WhyWorkWithMe: React.FC = () => {
  const icons = [
    <Palette key="0" className="w-5 h-5 text-neutral-300" />,
    <Smartphone key="1" className="w-5 h-5 text-neutral-300" />,
    <Target key="2" className="w-5 h-5 text-neutral-300" />,
    <MessageSquare key="3" className="w-5 h-5 text-neutral-300" />,
  ];

  return (
    <section id="why" className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Focused on the details that matter.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Every decision is made to give your local business an edge over outdated competitors.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="p-6 bg-[#0b0b0b] border border-neutral-800/80 rounded-xl hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5">
                  {icons[index]}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                0{index + 1} // Core Pillar
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
