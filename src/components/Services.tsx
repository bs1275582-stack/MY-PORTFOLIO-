import React, { useState } from "react";
import { Check, Shield, Zap, Sparkles, Smartphone, ArrowRight } from "lucide-react";
import { SERVICES, Service } from "../data/portfolioData";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);

  const standardFeatures = [
    "100% Mobile Responsive",
    "Direct WhatsApp & Call Integration",
    "Google Maps & Hours Embed",
    "Fast 95+ PageSpeed Architecture",
    "Clean Contact / Inquiry Form",
    "Social Media Profiles Linkage",
    "Domain & Free Hosting Setup",
    "7 to 10 Day Launch Turnaround"
  ];

  return (
    <section id="services" className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            What I can build for your business.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Professional websites designed to help local businesses present their services, attract high-intent local clients, and look credible online.
          </p>
        </div>

        {/* Services Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {SERVICES.map((service, index) => {
            const isHovered = activeServiceIdx === index;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveServiceIdx(index)}
                onMouseLeave={() => setActiveServiceIdx(null)}
                className={`bg-[#0c0c0c] border rounded-2xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-neutral-600 -translate-y-1 bg-[#101010] shadow-xl"
                    : "border-neutral-800/80 hover:border-neutral-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-neutral-500 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded">
                      {service.number}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-neutral-900">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standard In Every Build - Reassurance Banner */}
        <div className="bg-[#0b0b0b] border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-900">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                Quality Guarantee
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Included in every website I deliver
              </h4>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white group"
            >
              <span>Discuss your requirements</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {standardFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-1.5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
