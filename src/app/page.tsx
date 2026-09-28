"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundGlow from "../components/BackgroundGlow";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ResumeModal from "../components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen relative bg-white text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-800">
      {/* Background Ambient Glow & Spotlight */}
      <BackgroundGlow />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Sections */}
      <div className="relative z-10 space-y-4">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer & Printable Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
