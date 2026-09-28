"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  Code2,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-slate-200 bg-slate-50 no-print">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-center justify-between">
          
          {/* Left Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {PORTFOLIO_DATA.personal.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Specialized in modern front-end architectures, Next.js web applications, ATS dashboards, and high-performance user interfaces.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-4 text-sm font-medium">
            <a href="#about" className="text-slate-600 hover:text-cyan-700 transition-colors" style={{ textDecoration: "none" }}>
              About
            </a>
            <a href="#experience" className="text-slate-600 hover:text-cyan-700 transition-colors" style={{ textDecoration: "none" }}>
              Experience
            </a>
            <a href="#projects" className="text-slate-600 hover:text-cyan-700 transition-colors" style={{ textDecoration: "none" }}>
              Projects
            </a>
            <a href="#skills" className="text-slate-600 hover:text-cyan-700 transition-colors" style={{ textDecoration: "none" }}>
              Skills
            </a>
            <a href="#education" className="text-slate-600 hover:text-cyan-700 transition-colors" style={{ textDecoration: "none" }}>
              Education
            </a>
            <a href="#contact" className="text-slate-600 hover:text-cyan-700 transition-colors" style={{ textDecoration: "none" }}>
              Contact
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-cyan-700 border border-slate-200 transition-colors cursor-pointer ml-2 shadow-sm"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Built with Next.js App Router, React, TypeScript &amp; Custom Design Tokens</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
