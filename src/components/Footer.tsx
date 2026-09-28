import React from "react";
import { ArrowUp, MessageCircle, Instagram } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}`;
  const instagramUrl = `https://instagram.com/${PORTFOLIO_CONFIG.instagramUsername}`;

  return (
    <footer className="border-t border-[#181818] py-10 bg-[#060606] text-neutral-500 text-xs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="font-bold text-white text-sm">
              {PORTFOLIO_CONFIG.designerName}
              <span className="text-neutral-500">.</span>
            </span>
            <span className="text-neutral-500">
              © {new Date().getFullYear()} {PORTFOLIO_CONFIG.designerName}. All rights reserved.
            </span>
          </div>

          {/* Center / Right: Specialty & Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-neutral-400">
            <span>Web Design · Local Business Websites</span>

            <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">·</span>

            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-white transition-colors flex items-center gap-1 ml-2"
                title="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
