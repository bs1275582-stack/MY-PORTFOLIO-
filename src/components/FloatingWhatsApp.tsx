import React from "react";
import { MessageCircle } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Jatin, I'm checking out your portfolio and would like to talk about a website."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Jatin"
        className="flex items-center gap-2.5 px-4 py-3 bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
