"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  Code,
  Database,
  Cpu,
  Zap,
  Globe,
  Palette
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "tools">("frontend");

  const categoryConfigs = {
    frontend: {
      title: "Front-End Engineering",
      subtitle: "Component Architecture, Reactive States & UI Frameworks",
      icon: <Code className="w-5 h-5 text-cyan-600" />,
      items: PORTFOLIO_DATA.skills.frontend,
    },
    backend: {
      title: "Backend & Database",
      subtitle: "REST APIs, Node.js Runtimes & MongoDB Databases",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      items: PORTFOLIO_DATA.skills.backend,
    },
    tools: {
      title: "DevOps, Tools & Testing",
      subtitle: "CI/CD Pipelines, Git Workflows & Cross-Browser Stability",
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      items: PORTFOLIO_DATA.skills.toolsAndDevOps,
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="section-tag mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Skills &amp; <span className="gradient-text-cyan">Tech Matrix</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            A comprehensive suite of modern web technologies, UI libraries, and full-stack tools I utilize daily to build scalable web products.
          </p>

          {/* Tab Selection */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveCategory("frontend")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "frontend"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm"
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Front End &amp; UI Systems</span>
            </button>

            <button
              onClick={() => setActiveCategory("backend")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "backend"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm"
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Node.js &amp; MongoDB</span>
            </button>

            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "tools"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>DevOps &amp; Engineering</span>
            </button>
          </div>
        </div>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {categoryConfigs[activeCategory].items.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 border border-slate-200/90 hover:border-cyan-400 transition-all group bg-white/95 shadow-md"
            >
              {/* Skill Name & Level */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 font-bold text-xs">
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-700">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4 p-0.5 border border-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Tech Highlights Banner */}
        <div className="glass-card p-8 border border-slate-200 bg-gradient-to-r from-cyan-50/70 via-purple-50/50 to-slate-50/80 max-w-6xl mx-auto shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-100 border border-cyan-200 text-cyan-700">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Design Systems</h4>
                <p className="text-xs text-slate-500 font-medium">Shadcn UI &amp; Material UI</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-100 border border-purple-200 text-purple-700">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Cross-Browser Tested</h4>
                <p className="text-xs text-slate-500 font-medium">100% Rendering Precision</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Full-Stack MERN</h4>
                <p className="text-xs text-slate-500 font-medium">Next.js, Node &amp; MongoDB</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
