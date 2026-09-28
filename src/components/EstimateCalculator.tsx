import React, { useState } from "react";
import { Calculator, MessageCircle, Copy, Check, Clock, Sparkles, Send } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../data/portfolioData";

export const EstimateCalculator: React.FC = () => {
  const [businessType, setBusinessType] = useState("Gym / Fitness");
  const [projectGoal, setProjectGoal] = useState("New Website");
  const [features, setFeatures] = useState<string[]>([
    "Mobile-first responsive design",
    "WhatsApp direct chat button",
    "Google Maps & business hours",
  ]);
  const [copied, setCopied] = useState(false);

  const businessTypes = [
    "Gym / Fitness",
    "Salon / Spa / Barber",
    "Café / Restaurant",
    "Clinic / Healthcare",
    "Home Services / Contractor",
    "Local Retail / Store",
  ];

  const projectGoals = [
    { id: "New Website", label: "Brand New Website", days: "7–10 days" },
    { id: "Redesign", label: "Redesign Existing Site", days: "6–9 days" },
    { id: "Fast-Track", label: "Fast-Track Rush Launch", days: "4–6 days" },
  ];

  const availableFeatures = [
    "Mobile-first responsive design",
    "WhatsApp direct chat button",
    "Google Maps & business hours",
    "Online service / price menu",
    "Before / After photo gallery",
    "Customer reviews & ratings embed",
    "Instagram feed integration",
    "Custom inquiry lead form",
  ];

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  const getEstimatedTimeline = () => {
    if (projectGoal === "Fast-Track") return "4–6 Business Days";
    if (projectGoal === "Redesign") return "6–9 Business Days";
    return "7–10 Business Days";
  };

  const messageText = `Hi Jatin, I'm interested in a website project:
• Business Type: ${businessType}
• Project Scope: ${projectGoal}
• Key Features Needed: ${features.join(", ")}
• Target Timeline: ${getEstimatedTimeline()}

Could you let me know your availability and estimated quote?`;

  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="estimate" className="py-24 sm:py-28 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
            Interactive Scope Planner
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Estimate your project timeline &amp; scope.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Select your business type and desired features to configure a project summary and send an instant inquiry directly to WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#0c0c0c] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-7">
            
            {/* Step 1: Business Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
                1. What kind of business do you run?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {businessTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setBusinessType(type)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium border text-left transition-all truncate ${
                      businessType === type
                        ? "bg-white text-black border-white font-semibold shadow"
                        : "bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
                2. Project goal &amp; timeline urgency
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {projectGoals.map((goal) => (
                  <button
                    key={goal.id}
                    type="button"
                    onClick={() => setProjectGoal(goal.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      projectGoal === goal.id
                        ? "bg-neutral-900 border-white text-white"
                        : "bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{goal.label}</div>
                    <div className="text-[11px] text-neutral-400 mt-1">{goal.days}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Desired Features */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
                3. What features do you need?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isChecked = features.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg text-xs border text-left transition-all ${
                        isChecked
                          ? "bg-neutral-900 border-neutral-600 text-white"
                          : "bg-neutral-950/60 border-neutral-900 text-neutral-400 hover:border-neutral-800"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked
                            ? "bg-white border-white text-black"
                            : "border-neutral-700"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="truncate">{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Scope Summary & Send Action (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 sm:p-7 sticky top-24 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Project Estimate Summary
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {getEstimatedTimeline()}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider">Business</div>
                  <div className="text-sm font-semibold text-white">{businessType}</div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider">Scope</div>
                  <div className="text-sm font-semibold text-white">{projectGoal}</div>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1.5">
                    Selected Features ({features.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {features.map((f, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Formatted preview box */}
              <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg text-xs font-mono text-neutral-400 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto mb-6">
                {messageText}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-white text-black font-semibold text-xs sm:text-sm rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Send Scope to Jatin via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Scope Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Scope to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
