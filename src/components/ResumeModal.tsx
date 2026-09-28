"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  X,
  Printer,
  Copy,
  Check,
  Sparkles
} from "lucide-react";
import Image from "next/image";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
KANNAN V
Phone: 9080642004 | Email: vkannan202@gmail.com | Portfolio: Website

PROFESSIONAL EXPERIENCE:
kadit Innovation – 2025
Front End Developer
- Developed ATS dashboard to streamline recruitment workflows and enhance user experience.
- Developing IT Asset Management Tool to improve tracking and management of organizational assets.
- Developed responsive web applications using HTML, CSS, Material ui, Shadcn ui and JavaScript.
- Collaborated with designers to create user-friendly interfaces and improve usability.
- Implemented cross-browser compatibility solutions for seamless user experiences.

Mobbicare Software Company 2024–2025
Web Development Internship
- Developed and optimized responsive web applications with React.js to enhance functionality and accessibility.
- Implemented interactive UI components to elevate user experience and streamline performance.
- Debugged and fixed UI issues to achieve cross-browser compatibility and improve user satisfaction.

SKILLS:
- React js
- Next js
- Node js
- Mongodb
- HTML5, CSS3, JavaScript (ES6+), TypeScript, Material UI, Shadcn UI

EDUCATION:
- Sengunthar College of Engineering | 2013–2017: Mechanical Engineering (GPA: 6.53)
- Masood Thaiks Higher Secondary School | 2011–2013: Higher Secondary Education (GPA: 6.67)
- Rathna High School: GPA: 7.82

CERTIFICATES:
Cloud and DevOps Internship KADIT Innovations | 12/2023–01/2024
- Gained hands-on experience with basic DevOps tools. Implemented simple CI/CD pipelines. Learned fundamental cloud computing concepts.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Card */}
      <div className="resume-modal-container relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Action Bar (hidden in print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-bold text-slate-900">Kannan V — Official Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="btn-secondary text-xs py-1.5 px-3 cursor-pointer flex items-center gap-1.5"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-primary text-xs py-1.5 px-3 cursor-pointer flex items-center gap-1.5"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer ml-2"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-800 font-sans print:p-0">
          
          {/* Header Title with Photo */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
                KANNAN V
              </h1>
              <p className="text-sm sm:text-base font-semibold text-cyan-700 mt-1">
                Front End &amp; Full Stack Developer
              </p>
            </div>

            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-cyan-400 relative flex-shrink-0 bg-slate-100 shadow-sm">
              <Image
                src="/images/kannan.png"
                alt="Kannan V"
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="sm:col-span-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800">
              CONTACT
            </div>
            <div className="sm:col-span-9 space-y-1 text-sm text-slate-700">
              <div>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`} className="text-cyan-700 hover:underline">
                  {PORTFOLIO_DATA.personal.phoneRaw}
                </a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-cyan-700 hover:underline">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
              <div>
                <strong>Portfolio:</strong>{" "}
                <span className="text-cyan-700 font-semibold">Website</span>
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="sm:col-span-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800">
              PROFESSIONAL EXPERIENCE
            </div>
            <div className="sm:col-span-9 space-y-6 text-sm text-slate-700">
              
              {/* Job 1 */}
              <div>
                <div className="font-bold text-base text-slate-900">
                  kadit Innovation – 2025
                </div>
                <div className="font-semibold text-cyan-700 mb-2">
                  Front End Developer
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                  <li>Developed ATS dashboard to streamline recruitment workflows and enhance user experience.</li>
                  <li>Developing IT Asset Management Tool to improve tracking and management of organizational assets.</li>
                  <li>Developed responsive web applications using HTML, CSS, Material ui, Shadcn ui and JavaScript.</li>
                  <li>Collaborated with designers to create user-friendly interfaces and improve usability.</li>
                  <li>Implemented cross-browser compatibility solutions for seamless user experiences.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="font-bold text-base text-slate-900">
                  Mobbicare Software Company 2024–2025
                </div>
                <div className="font-semibold text-cyan-700 mb-2">
                  Web Development Internship
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                  <li>Developed and optimized responsive web applications with React.js to enhance functionality and accessibility.</li>
                  <li>Implemented interactive UI components to elevate user experience and streamline performance.</li>
                  <li>Debugged and fixed UI issues to achieve cross-browser compatibility and improve user satisfaction.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="sm:col-span-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800">
              SKILL
            </div>
            <div className="sm:col-span-9 text-sm text-slate-700">
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>React js</li>
                <li>Next js</li>
                <li>Node js</li>
                <li>Mongodb</li>
                <li>HTML5, CSS3, JavaScript (ES6+), TypeScript, Material UI, Shadcn UI</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="sm:col-span-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800">
              EDUCATION
            </div>
            <div className="sm:col-span-9 space-y-4 text-sm text-slate-700">
              <div>
                <div className="font-bold text-slate-900">
                  Sengunthar College of Engineering | 2013–2017
                </div>
                <div className="text-slate-600">Mechanical Engineering</div>
                <div className="text-xs text-cyan-700 font-semibold mt-0.5">• GPA: 6.53</div>
              </div>

              <div>
                <div className="font-bold text-slate-900">
                  Masood Thaiks Higher Secondary School | 2011–2013
                </div>
                <div className="text-slate-600">Higher Secondary Education</div>
                <div className="text-xs text-cyan-700 font-semibold mt-0.5">• GPA: 6.67</div>
              </div>

              <div>
                <div className="font-bold text-slate-900">
                  Rathna High School
                </div>
                <div className="text-xs text-cyan-700 font-semibold mt-0.5">• GPA: 7.82</div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800">
              CERTIFICATES
            </div>
            <div className="sm:col-span-9 text-sm text-slate-700">
              <div className="font-bold text-slate-900">
                Cloud and DevOps Internship KADIT Innovations | 12/2023–01/2024
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm leading-relaxed mt-2 text-slate-700">
                <li>Gained hands-on experience with basic DevOps tools. Implemented simple CI/CD pipelines. Learned fundamental cloud computing concepts.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
