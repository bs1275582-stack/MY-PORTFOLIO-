import React, { useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Why Me", href: "#why" },
    { label: "Estimate", href: "#estimate" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Jatin, I saw your portfolio and would like to discuss a website for my business."
  )}`;

  return (
    <nav className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="h-18 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            {PORTFOLIO_CONFIG.designerName}
            <span className="text-neutral-500 font-black">.</span>
          </a>

          {/* Zone 2: Clean nav links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative py-1 hover:underline underline-offset-4 decoration-neutral-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary action button + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-white hover:text-black hover:border-white text-xs sm:text-sm font-medium text-neutral-200 transition-all duration-200 whitespace-nowrap group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-black transition-colors hidden sm:inline" />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1c1c1c] bg-[#0c0c0c] px-6 py-5">
          <div className="flex flex-col gap-4 text-base font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-1 text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
