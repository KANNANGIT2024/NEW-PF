"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Menu, X, FileText, Send } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "projects", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* Left: Brand Logo with Avatar & Name */}
        <a
          href="#hero"
          className="flex items-center gap-2.5"
          style={{ textDecoration: "none" }}
        >
          <div className="navbar-brand-avatar">
            <Image
              src="/images/kannan.png"
              alt="Kannan V"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="status-dot-green inline-block" />
            </div>
            <p className="text-[11px] text-slate-500 font-medium -mt-0.5">Front End Developer</p>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav
          className="navbar-nav-links"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.75rem",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs sm:text-sm transition-colors py-1"
                style={{
                  textDecoration: "none",
                  fontWeight: isActive ? "700" : "500",
                  color: isActive ? "#0f172a" : "#64748b",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      right: 0,
                      height: "2.5px",
                      backgroundColor: "#4f46e5",
                      borderRadius: "9999px",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div
          className="navbar-actions-group"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <button
            onClick={onOpenResume}
            className="navbar-btn-resume"
            title="View & Download Resume"
          >
            <FileText className="w-4 h-4 text-slate-700" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="navbar-btn-touch"
            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 transition-all shadow-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-indigo-50 text-[#4f46e5] font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-700" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="navbar-btn-touch w-full py-2.5 justify-center text-center"
                style={{ textDecoration: "none" }}
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


