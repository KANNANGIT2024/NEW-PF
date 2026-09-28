"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  Sparkles,
  Layout,
  Server,
  Zap,
  CheckCircle2,
  Monitor,
  Building2,
  Briefcase
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const pillars = [
    {
      icon: <Layout className="w-6 h-6 text-cyan-600" />,
      title: "UI Architecture & Design Systems",
      description:
        "Building modular, scalable UI component systems with React, Next.js, Shadcn UI, and Material UI, engineered with high accessibility and pixel-perfection.",
      color: "from-cyan-50 to-white",
      borderColor: "border-cyan-200",
    },
    {
      icon: <Server className="w-6 h-6 text-purple-600" />,
      title: "Full-Stack Node & MongoDB Integration",
      description:
        "Designing robust RESTful API endpoints, Express middleware, and MongoDB schemas with optimized query performance and smooth state synchronization.",
      color: "from-purple-50 to-white",
      borderColor: "border-purple-200",
    },
    {
      icon: <Monitor className="w-6 h-6 text-emerald-600" />,
      title: "Cross-Browser & Responsive Precision",
      description:
        "Deep testing and layout optimization ensuring zero rendering defects across Chrome, Firefox, Safari, Edge, tablets, and smartphones.",
      color: "from-emerald-50 to-white",
      borderColor: "border-emerald-200",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "DevOps & Cloud Lifecycle",
      description:
        "Practical experience configuring CI/CD automation pipelines, version control branching strategies, and modern cloud deployment environments.",
      color: "from-amber-50 to-white",
      borderColor: "border-amber-200",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-tag mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Engineering Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            About <span className="gradient-text-cyan">Kannan V</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            A developer dedicated to turning complex business logic into lightning-fast, intuitive digital products.
          </p>
        </div>

        {/* Narrative & Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              I am a results-driven <strong className="text-slate-900">Front End &amp; Full Stack Developer</strong> currently working at <strong className="text-cyan-700">kadit Innovation</strong> (2025), where I architect core modules for enterprise solutions like <strong className="text-slate-900">ATS (Applicant Tracking System) Dashboards</strong> and <strong className="text-slate-900">IT Asset Management Platforms</strong>.
            </p>
            <p>
              My journey began with a degree in <strong className="text-slate-900">Mechanical Engineering</strong> from Sengunthar College of Engineering, which instilled a rigorous analytical mindset, structural discipline, and deep problem-solving skills that I bring to modern software engineering.
            </p>
            <p>
              Having completed intensive software engineering internships at <strong className="text-slate-900">Mobbicare Software Company</strong> and cloud DevOps immersion at <strong className="text-slate-900">KADIT Innovations</strong>, I specialize in crafting reactive, component-driven web applications that load quickly and deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "Production React & Next.js Experience",
                "ATS Dashboard & Asset Tool Architect",
                "Shadcn UI & Material UI Specialist",
                "Clean, Maintainable & Scalable Code",
                "Cross-Browser Compatibility Expert",
                "Cloud & CI/CD Pipeline Foundations"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlight Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 border border-slate-200/90 relative overflow-hidden bg-white/95 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none filter blur-xl" />
              
              {/* Profile Top Row with Photo */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400 relative shadow-md flex-shrink-0 bg-slate-100">
                  <Image
                    src="/images/kannan.png"
                    alt="Kannan V Profile"
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{PORTFOLIO_DATA.personal.fullName}</h3>
                  <p className="text-xs text-cyan-700 font-semibold">{PORTFOLIO_DATA.personal.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">kadit Innovation • 2025</p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-slate-600">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-semibold text-cyan-700 text-xs uppercase tracking-wide mb-1">ATS Dashboard Engineering</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spearheaded the recruitment dashboard interface, integrating interactive pipeline kanbans, candidate analytics, and real-time status management.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-semibold text-purple-700 text-xs uppercase tracking-wide mb-1">IT Asset Management Platform</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed and built tracking dashboards for enterprise hardware/software assets, audit logs, and lifecycle tracking.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-semibold text-emerald-700 text-xs uppercase tracking-wide mb-1">UI Systems &amp; Cross-Browser Stability</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Crafted responsive components utilizing Material UI and Shadcn UI with 100% cross-browser compatibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`glass-card p-6 border ${pillar.borderColor} bg-gradient-to-b ${pillar.color} hover:scale-[1.02] transition-transform shadow-md`}
            >
              <div className="mb-4 p-3 rounded-xl bg-white w-fit border border-slate-200 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
