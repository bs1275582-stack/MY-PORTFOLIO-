import React, { useState } from "react";
import { MessageCircle, Instagram, Mail, ArrowUpRight, Send, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contactNumber: "",
    projectType: "New Website",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactNumber) return;

    // Build WhatsApp URL with the details so client can directly send it!
    const formattedMsg = `Hello Jatin!
My Name: ${formData.name}
Business Name: ${formData.businessName || "Not specified"}
Contact Number: ${formData.contactNumber}
Project Type: ${formData.projectType}
Details: ${formData.details || "I'd like to get my website designed."}`;

    const waLink = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
    
    // Open WhatsApp
    window.open(waLink, "_blank");
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Jatin, I'm interested in getting a website for my business."
  )}`;

  const instagramUrl = `https://instagram.com/${PORTFOLIO_CONFIG.instagramUsername}`;

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Main Hero Contact Box */}
        <div className="bg-gradient-to-b from-[#111111] to-[#090909] border border-neutral-800 rounded-3xl p-8 sm:p-14 lg:p-16 text-center shadow-2xl relative overflow-hidden mb-12">
          
          {/* Subtle glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Have a project in mind?
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight text-balance">
              Let&apos;s build something <br />
              <span className="text-neutral-400">your customers remember.</span>
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg mb-8 leading-relaxed">
              If your business needs a professional website or a better online presence, let&apos;s talk about your idea. Direct communication, fast delivery, and zero headache.
            </p>

            {/* Direct Social / Messenger Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-[0.98] inline-flex items-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
                <span>WhatsApp Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-lg bg-[#141414] text-white font-medium text-sm border border-neutral-800 hover:bg-neutral-800/80 hover:border-neutral-700 transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2.5"
              >
                <Instagram className="w-4 h-4 text-neutral-400" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            <div className="mt-8 text-xs text-neutral-500">
              Typical response time: Within 2 hours on WhatsApp
            </div>
          </div>

        </div>

        {/* Quick Inquiry Form */}
        <div className="max-w-2xl mx-auto bg-[#0b0b0b] border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
            <div>
              <h3 className="text-lg font-bold text-white">Send a Direct Project Inquiry</h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Fill in your details to launch a pre-formatted message directly to Jatin.
              </p>
            </div>
            <Sparkles className="w-4 h-4 text-neutral-500" />
          </div>

          {submitted ? (
            <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Inquiry Started!</h4>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                WhatsApp has been opened with your inquiry details. If it did not open automatically, you can message directly at{" "}
                <strong className="text-white">+{PORTFOLIO_CONFIG.whatsappNumber}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-neutral-300 hover:underline pt-2 inline-block"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IronCore Gym / Bloom Salon"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    WhatsApp or Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="New Business Website">New Business Website</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Gym / Fitness Website">Gym / Fitness Website</option>
                    <option value="Salon / Spa Website">Salon / Spa Website</option>
                    <option value="Café / Restaurant Website">Café / Restaurant Website</option>
                    <option value="Other Local Business">Other Local Business</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Brief Project Overview (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me a bit about what you need (e.g. number of pages, current website link, target launch date)..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-white text-black font-semibold text-xs sm:text-sm rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp Conversation</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
