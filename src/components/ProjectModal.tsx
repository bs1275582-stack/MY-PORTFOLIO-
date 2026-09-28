import React, { useState } from "react";
import { X, ExternalLink, Smartphone, Tablet, Monitor, CheckCircle, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { Project, PORTFOLIO_CONFIG } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");
  const [iframeError, setIframeError] = useState(false);

  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hi Jatin, I loved your work on the ${project.title} project. I would like something similar for my business.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true" 
      />

      <div className="relative bg-[#0d0d0d] border border-neutral-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-[#101010]">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Clock className="w-3 h-3" />
                <span>{project.fullCaseStudy.turnaroundTime} Build</span>
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors"
            >
              <span>Open Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Device Mockup & Interactive Viewport Container */}
          <div className="bg-[#080808] border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-neutral-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Responsive Simulation
              </div>

              {/* Viewport switchers */}
              <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-md border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setDeviceMode("desktop")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-all ${
                    deviceMode === "desktop"
                      ? "bg-neutral-200 text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeviceMode("tablet")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-all ${
                    deviceMode === "tablet"
                      ? "bg-neutral-200 text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span>Tablet</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeviceMode("mobile")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-all ${
                    deviceMode === "mobile"
                      ? "bg-neutral-200 text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            {/* Simulated frame */}
            <div className="flex justify-center bg-black/60 p-2 sm:p-6 rounded-lg min-h-[300px] overflow-hidden items-center">
              <div
                className={`transition-all duration-300 relative border border-neutral-700/60 shadow-2xl rounded-lg overflow-hidden bg-neutral-900 ${
                  deviceMode === "desktop"
                    ? "w-full max-w-2xl aspect-[16/10]"
                    : deviceMode === "tablet"
                    ? "w-[440px] aspect-[4/3]"
                    : "w-[260px] aspect-[9/16]"
                }`}
              >
                {/* Browser top pill frame */}
                <div className="h-6 bg-[#161616] border-b border-neutral-800 flex items-center px-2.5 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-600" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="mx-auto text-[10px] text-neutral-400 truncate max-w-[200px]">
                    {project.demoUrl.replace("https://", "")}
                  </div>
                </div>

                <div className="relative w-full h-[calc(100%-24px)] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-white text-black font-semibold text-xs hover:bg-neutral-200 inline-flex items-center gap-1 shadow-md"
                    >
                      <span>Launch Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: The Challenge & Solutions */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Client Objective
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed bg-[#121212] p-4 rounded-xl border border-neutral-800/80">
                  {project.fullCaseStudy.clientObjective}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Design &amp; Conversion Strategy
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {project.fullCaseStudy.keySolutions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#121212]/60 p-2.5 rounded-lg border border-neutral-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Key Deliverables & Action */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Key Features Implemented
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {project.fullCaseStudy.featuresDelivered.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <div className="bg-[#141414] border border-neutral-800 rounded-xl p-4 flex flex-col gap-3">
                  <div className="text-sm font-semibold text-white">
                    Need a similar website for your business?
                  </div>
                  <p className="text-xs text-neutral-400">
                    I can craft a customized version tailored specifically to your branding and services in 7 to 10 days.
                  </p>
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-black font-semibold text-xs rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire About Similar Project</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-neutral-800/80 bg-[#101010] flex items-center justify-between text-xs text-neutral-400">
          <span>{project.title} · Live Demo on Netlify</span>
          <button
            type="button"
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
