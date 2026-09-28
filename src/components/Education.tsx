"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  GraduationCap,
  Award,
  BookOpen,
  School,
  Sparkles,
  MapPin
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-tag mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Academic Background &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Education &amp; <span className="gradient-text-cyan">Certifications</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Engineering foundation and continuous professional certifications powering analytical problem-solving and modern software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left: Academic Education */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-600" /> Academic Milestones
            </h3>

            {PORTFOLIO_DATA.education.map((edu, index) => (
              <div
                key={edu.institution}
                className="glass-card p-6 border border-slate-200 hover:border-cyan-400 transition-all bg-white/95 shadow-md"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 flex-shrink-0 shadow-sm">
                      {edu.iconType === "college" ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : edu.iconType === "school" ? (
                        <BookOpen className="w-5 h-5" />
                      ) : (
                        <School className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {edu.institution}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-700">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700 whitespace-nowrap">
                    {edu.period}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Certifications & Cloud Training */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" /> Professional Certifications
            </h3>

            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card p-6 border border-purple-200 bg-gradient-to-br from-purple-50/70 to-white relative overflow-hidden shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-700 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{cert.title}</h4>
                    <p className="text-xs font-semibold text-purple-700">
                      {cert.issuer} • {cert.period}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-purple-100">
                  <div className="text-xs uppercase font-bold text-slate-500">Key Competencies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Summary Note */}
            <div className="glass-card p-5 border border-cyan-200 bg-cyan-50/60 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Combining formal engineering discipline with modern JavaScript/React web architecture to deliver reliable, cross-browser software solutions.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
