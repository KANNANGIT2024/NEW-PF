"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";
import {
  FolderGit2,
  Layers,
  Sparkles,
  CheckCircle,
  BarChart3,
  X,
  Code,
  ShieldCheck,
  Building2
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "enterprise", label: "Enterprise Systems (ATS & Asset Tools)" },
    { id: "frontend", label: "Front End & UI Systems" },
    { id: "fullstack", label: "Full Stack (MERN / Next.js)" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="section-tag mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-600" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Production &amp; <span className="gradient-text-cyan">Featured Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Real-world enterprise solutions, dashboards, and responsive front-end architectures built for performance and seamless user workflows.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20 scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card flex flex-col justify-between p-6 sm:p-8 group hover:border-cyan-400 transition-all duration-300 bg-white/95 shadow-md hover:shadow-xl"
            >
              <div>
                {/* Header Badge & Company */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color, boxShadow: `0 0 8px ${project.color}` }}
                    />
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  {project.company && (
                    <div className="flex items-center gap-1.5 text-xs text-cyan-800 bg-cyan-50 border border-cyan-200 px-2.5 py-1 rounded-full font-semibold">
                      <Building2 className="w-3 h-3 text-cyan-600" />
                      <span>{project.company}</span>
                    </div>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-700 mb-4">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics / Key Impact */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1.5 mb-2">
                    <BarChart3 className="w-3.5 h-3.5 text-cyan-600" /> Key Impact &amp; Metrics
                  </div>
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary text-xs py-2.5 px-4 w-full flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>View Architecture Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
            <div className="glass-card border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-white shadow-2xl relative rounded-2xl">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs text-cyan-700 font-bold uppercase tracking-wider mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: selectedProject.color }}
                  />
                  <span>{selectedProject.category} • {selectedProject.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {selectedProject.title}
                </h3>
                {selectedProject.company && (
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <Building2 className="w-4 h-4 text-cyan-600" />
                    <span>{selectedProject.company} ({selectedProject.period})</span>
                  </div>
                )}
              </div>

              {/* Overview */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-600" /> Technical Overview
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm uppercase font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Core Engineered Capabilities
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Breakdown */}
                <div>
                  <h4 className="text-sm uppercase font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-600" /> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close / Action footer */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-secondary text-sm py-2 px-6 cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary text-sm py-2 px-6"
                    style={{ textDecoration: "none" }}
                  >
                    Discuss This Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
