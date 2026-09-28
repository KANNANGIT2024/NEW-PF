"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Sparkles,
  Phone,
  Mail,
  Copy,
  Check,
  Code,
  MapPin,
  Briefcase,
  MessageSquare,
  Star,
  Target
} from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "stack">("code");

  const developerCodeSnippet = `const kannanProfile = {
  name: "Kannan V",
  role: "Front End Developer",
  company: "Kadit Innovation(2025)",
  skills: ["React.js", "Next.js", "TypeScript", "Node.js"],
  uiSystems: ["Material UI", "Shadcn UI"],
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(developerCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* LEFT COLUMN: Profile Card */}
          <div className="flex flex-col items-center">
            <div className="profile-card">
              
              {/* Header Status Badges */}
              <div className="profile-card-header">
                <div className="status-badge-green">
                  <span className="status-dot-green"></span>
                  <span>AVAILABLE FOR ROLES</span>
                </div>
                <span className="company-pill-badge">
                  Kadit Innovation - 2025
                </span>
              </div>

              {/* Portrait Photo with Floating Badge */}
              <div className="profile-photo-wrapper">
                <div className="profile-photo-container">
                  <Image
                    src="/images/kannan.png"
                    alt="Kannan V - Front End Developer"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 26%" }}
                    priority
                    sizes="(max-width: 640px) 340px, 420px"
                  />
                </div>

                {/* Floating Bottom Center Badge */}
                <div className="profile-floating-badge">
                  <Code className="w-3.5 h-3.5" />
                  <span>Front End Developer</span>
                </div>
              </div>

              {/* Profile Details */}
              <h2 className="profile-name">
                {PORTFOLIO_DATA.personal.name}
              </h2>
              <p className="profile-role-title">
                Front End &amp; Full Stack Developer
              </p>

              {/* Quick Info Rows */}
              <div className="profile-info-list">
                <div className="profile-info-row">
                  <span className="profile-info-label">
                    <Briefcase className="w-4 h-4 text-slate-500" />
                    <span>Company:</span>
                  </span>
                  <span className="profile-info-value">Kadit Innovation</span>
                </div>

                <div className="profile-info-row">
                  <span className="profile-info-label">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>Location:</span>
                  </span>
                  <span className="profile-info-value">Tamil Nadu, India</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="profile-actions">
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
                  className="btn-call-me"
                  style={{ textDecoration: "none" }}
                >
                  <Phone className="w-4 h-4 text-indigo-700" />
                  <span>Call Me</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ textDecoration: "none" }}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Headline, Story, CTAs, Highlights, and Code Card */}
          <div className="hero-content">
            
            {/* Availability Badge */}
            <div className="hero-badge-available">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AVAILABLE FOR FULL-TIME &amp; HIGH-IMPACT FRONT-END / FULL-STACK ROLES</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              Building Scalable Web Apps &amp;
              <span className="hero-title-highlight">Interactive UI Systems</span>
            </h1>

            {/* Bio Description */}
            <p className="hero-description">
              I am <strong className="text-slate-900 font-bold">{PORTFOLIO_DATA.personal.name}</strong>, a Front End &amp; Full Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB. Experienced in designing production-grade enterprise ATS Dashboards and IT Asset Management Platforms with Material UI, Shadcn UI, and 100% cross-browser fidelity.
            </p>

            {/* 3 Full-Width Action Buttons */}
            <div className="hero-cta-stack">
              <a
                href="#projects"
                className="btn-hero-explore"
                style={{ textDecoration: "none" }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" style={{ marginLeft: "4px" }} />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-hero-cv"
              >
                <FileText className="w-4 h-4 text-slate-700" />
                <span>View &amp; Print CV</span>
              </button>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="btn-hero-email"
                style={{ textDecoration: "none" }}
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>

            {/* 4-Card Quick Stat / Highlight Grid */}
            <div className="stat-highlight-grid">
              
              {/* Stat 1 */}
              <div className="stat-box stat-box-green">
                <div className="stat-box-icon stat-box-icon-green">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="stat-box-title">React &amp; Next.js</div>
                  <div className="stat-box-subtitle">Core Tech Focus</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="stat-box stat-box-blue">
                <div className="stat-box-icon stat-box-icon-blue">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="stat-box-title">3+</div>
                  <div className="stat-box-subtitle">Enterprise Projects</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="stat-box stat-box-purple">
                <div className="stat-box-icon stat-box-icon-purple">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="stat-box-title">100%</div>
                  <div className="stat-box-subtitle">Code Quality &amp; U/X</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="stat-box stat-box-pink">
                <div className="stat-box-icon stat-box-icon-pink">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="stat-box-title">100%</div>
                  <div className="stat-box-subtitle">Cross-Browser Precision</div>
                </div>
              </div>

            </div>

            {/* Interactive Code & Stack Preview Card */}
            <div className="code-snippet-card">
              <div className="code-snippet-header">
                <div className="code-snippet-title">
                  <Code className="w-4 h-4 text-indigo-600" />
                  <span>kannan-profile.ts</span>
                </div>

                <div className="code-snippet-tabs">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`code-tab-btn ${activeTab === "code" ? "active" : ""}`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`code-tab-btn ${activeTab === "stack" ? "active" : ""}`}
                  >
                    Stack
                  </button>
                  <button
                    onClick={copyCode}
                    className="code-copy-btn"
                    title="Copy code snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="code-snippet-body">
                {activeTab === "code" ? (
                  <div>
                    <div className="code-line">
                      <span className="code-line-num">1</span>
                      <span className="code-line-content">
                        <span className="syn-purple">const</span>{" "}
                        <span className="syn-blue">kannanProfile</span>{" "}
                        <span className="syn-dark">= &#123;</span>
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">2</span>
                      <span className="code-line-content">
                        {"  "}<span className="syn-blue">name</span>: <span className="syn-green">&quot;Kannan V&quot;</span>,
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">3</span>
                      <span className="code-line-content">
                        {"  "}<span className="syn-blue">role</span>: <span className="syn-green">&quot;Front End Developer&quot;</span>,
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">4</span>
                      <span className="code-line-content">
                        {"  "}<span className="syn-blue">company</span>: <span className="syn-amber">&quot;Kadit Innovation(2025)&quot;</span>,
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">5</span>
                      <span className="code-line-content">
                        {"  "}<span className="syn-blue">skills</span>: [<span className="syn-cyan">&quot;React.js&quot;</span>, <span className="syn-cyan">&quot;Next.js&quot;</span>, <span className="syn-cyan">&quot;TypeScript&quot;</span>, <span className="syn-cyan">&quot;Node.js&quot;</span>],
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">6</span>
                      <span className="code-line-content">
                        {"  "}<span className="syn-blue">uiSystems</span>: [<span className="syn-purple">&quot;Material UI&quot;</span>, <span className="syn-purple">&quot;Shadcn UI&quot;</span>],
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">7</span>
                      <span className="code-line-content">
                        <span className="syn-dark">&#125;;</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 py-1">
                    {["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Material UI", "Shadcn UI", "Tailwind/CSS", "CI/CD"].map((tech) => (
                      <span key={tech} className="badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


