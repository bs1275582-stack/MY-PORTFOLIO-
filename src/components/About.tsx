import React from "react";
import { Check, ShieldCheck, Zap, Smartphone, Sparkles, MessageCircle } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl text-balance">
            Building simple websites with a clear purpose.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-5 text-neutral-300 text-base leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-white font-semibold">{PORTFOLIO_CONFIG.designerName}</span>. I&apos;m a web designer focused on helping local businesses create a clean, modern, and professional online presence.
            </p>

            <p>
              I design websites specifically for businesses like <strong className="text-neutral-100 font-semibold">gyms, salons, cafés, restaurants, dental clinics</strong>, and other local service providers who rely on local reputation and foot traffic.
            </p>

            <p>
              My goal is simple: create websites that look sharp, load instantly on mobile phones, and make it effortless for prospective customers to understand your offerings, view pricing or menus, and connect with you directly.
            </p>

            {/* Quick check items */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>No slow bloated WordPress themes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>Direct WhatsApp & Call triggers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>Google Maps & Location integration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>Fast 7 to 10 day turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column: About Card with Studio Image */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                Design Philosophy
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                What I Focus On
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                Clean visual design, mobile responsiveness, clear business information, strong first impressions, and simple customer-focused experiences.
              </p>
              <div className="border-t border-neutral-800/80 pt-4 text-neutral-400 text-sm leading-relaxed">
                Every website is designed around your specific business model and customer journey, rather than forcing your business into a generic cookie-cutter template.
              </div>
            </div>

            {/* Studio Workspace Image */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 aspect-[16/9]">
              <img
                src="/src/assets/images/designer_workspace_hero_1790603611088.jpg"
                alt="Web Designer Workspace & Responsive Code Setup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-xs text-neutral-400">
                  Crafting websites with clean modern code &amp; pixel-perfect responsive layouts.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
