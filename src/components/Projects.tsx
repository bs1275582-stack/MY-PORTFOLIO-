import React from "react";
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Eye } from "lucide-react";
import { PROJECTS, Project, PORTFOLIO_CONFIG } from "../data/portfolioData";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onStartProject: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onStartProject }) => {
  return (
    <section id="work" className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Projects I&apos;ve built.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Real website concepts and deployed platforms created for local businesses to drive engagement, inquiries, and customer trust.
          </p>
        </div>

        {/* 2x2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          
          {/* Project 1: AceFit */}
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#0c0c0c] border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-neutral-950 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Top Badge (Unboxed text with subtle backdrop) */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-neutral-300 font-medium px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-neutral-800">
                  <span>{project.category}</span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study &amp; Preview</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Link Bar */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs text-neutral-300 hover:text-white font-medium inline-flex items-center gap-1"
                  >
                    <span>Inspect Design</span>
                    <span>→</span>
                  </button>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-neutral-400 hover:text-white inline-flex items-center gap-1 border-b border-neutral-700 hover:border-white pb-0.5 transition-colors"
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Project 4: Your Next Project (Callout Card) */}
          <div className="bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-[#080808] border border-dashed border-neutral-800 hover:border-neutral-600 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[380px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                <Sparkles className="w-5 h-5 text-neutral-300" />
              </div>

              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
                Reserved Slot
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Your Business
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Your business could be the next featured high-converting website here. Designed specifically around your services, local audience, and brand personality.
              </p>

              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Delivery in 7–10 days with complete setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Direct phone, WhatsApp &amp; Google Maps integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>100% mobile tested before launch</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800/80">
              <button
                type="button"
                onClick={onStartProject}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
