/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { EstimateCalculator } from "./components/EstimateCalculator";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Project } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleStartProject = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenEstimate = () => {
    const estimateElem = document.getElementById("estimate");
    if (estimateElem) {
      estimateElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Primary Sticky Top Bar */}
      <Navbar onOpenContactModal={handleStartProject} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onSelectProject={(proj) => setSelectedProject(proj)} 
          onOpenEstimate={handleOpenEstimate}
        />

        <About />

        <Services onSelectService={() => handleStartProject()} />

        <Projects 
          onSelectProject={(proj) => setSelectedProject(proj)}
          onStartProject={handleStartProject}
        />

        <EstimateCalculator />

        <WhyWorkWithMe />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Project Case Study & Responsive Lightbox Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
