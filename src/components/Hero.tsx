import React, { useState } from "react";
import { ArrowDown, MessageCircle, ExternalLink, Sparkles, Smartphone, Zap, CheckCircle2 } from "lucide-react";
import { PROJECTS, PORTFOLIO_CONFIG, Project } from "../data/portfolioData";

interface HeroProps {
  onSelectProject: (project: Project) => void;
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject, onOpenEstimate }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const activeProject = PROJECTS[activePreviewIndex] || PROJECTS[0];

  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Jatin, I'd like to get a quote for a new website for my business."
  )}`;

  return (
    <header className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden border-b border-[#181818] py-14 lg:py-20">
      {/* Subtle ambient lighting orbs (tasteful, non-saturated) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-24 left-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline metadata (Unboxed, zero-pill discipline) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-400 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Web Designer</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Local Business Websites</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-mono text-[11px] sm:text-xs">Accepting new projects</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04] text-white mb-6 text-balance">
              Websites that make your business look{" "}
              <span className="text-neutral-400 font-semibold">better online.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed mb-8">
              I create modern, responsive and professional websites for gyms, salons, cafés, and local businesses that want a stronger online presence and more customers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#work"
                className="px-6 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-lg bg-[#121212] text-white font-medium text-sm border border-neutral-800 hover:bg-neutral-800/80 hover:border-neutral-700 transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Let&apos;s Work Together</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                title="Message on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Micro-proof points */}
            <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">7–10 Days</div>
                <div className="text-xs text-neutral-500">Fast Turnaround</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">100%</div>
                <div className="text-xs text-neutral-500">Mobile Friendly</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">Direct</div>
                <div className="text-xs text-neutral-500">WhatsApp & Calls</div>
              </div>
            </div>
          </div>

          {/* Interactive Live Work Showcase Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden group">
              {/* Card top bar with project switcher buttons */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-neutral-800/80">
                <div className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
                  Featured Work
                </div>
                {/* Segmented controls for switching preview */}
                <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-md border border-neutral-800">
                  {PROJECTS.map((proj, idx) => (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-all ${
                        activePreviewIndex === idx
                          ? "bg-neutral-200 text-black shadow-sm font-semibold"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {proj.title.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Image with overlay link */}
              <div 
                className="relative rounded-xl overflow-hidden aspect-[16/10] bg-neutral-950 border border-neutral-800/60 cursor-pointer"
                onClick={() => onSelectProject(activeProject)}
              >
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} Website Design Mockup`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs text-neutral-400">{activeProject.category}</div>
                      <div className="text-base font-bold">{activeProject.title}</div>
                    </div>
                    <span className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card description & action triggers */}
              <div className="mt-4 flex flex-col gap-3">
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {activeProject.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                  <button
                    type="button"
                    onClick={() => onSelectProject(activeProject)}
                    className="text-xs text-neutral-200 hover:text-white font-medium hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>View Case Study & Preview</span>
                    <span>→</span>
                  </button>

                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-neutral-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Live Netlify Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
