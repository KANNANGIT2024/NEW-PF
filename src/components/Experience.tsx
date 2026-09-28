"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  Briefcase,
  Calendar,
  Sparkles,
  CheckCircle2,
  Building2,
  Layers
} from "lucide-react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>("kadit-frontend");

  return (
    <section id="experience" className="py-20 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-tag mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Professional <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Track record of delivering production-level front-end applications, enterprise dashboards, and cloud-ready web systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 opacity-40" />

          <div className="space-y-10">
            {PORTFOLIO_DATA.experiences.map((exp, index) => {
              const isCurrent = exp.current;

              return (
                <div key={exp.id} className="relative pl-12 sm:pl-20 group">
                  
                  {/* Timeline Dot Marker */}
                  <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-cyan-600 shadow-[0_0_12px_rgba(2,132,199,0.4)]"
                          : "bg-white border-2 border-cyan-500 shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isCurrent ? "bg-white animate-ping" : "bg-cyan-600"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`glass-card p-6 sm:p-8 transition-all bg-white/95 shadow-md ${
                      isCurrent
                        ? "border-cyan-300 shadow-[0_10px_30px_-5px_rgba(2,132,199,0.12)]"
                        : "border-slate-200"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Current Role
                            </span>
                          )}
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-cyan-700 font-semibold text-base mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto shadow-sm">
                        <Calendar className="w-4 h-4 text-cyan-600" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
                      <span className="text-xs uppercase font-bold text-slate-500 mr-1 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-cyan-600" /> Tech Stack:
                      </span>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="badge-tech text-xs bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-400 hover:text-cyan-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
