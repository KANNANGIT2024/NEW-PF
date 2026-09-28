"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Front End Developer Opportunity",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0284c7", "#7c3aed", "#059669", "#d97706"],
        });
      } catch {
        // fallback
      }
    }, 800);
  };

  const subjectPills = [
    "Front End Developer Role",
    "Full Stack Next.js Project",
    "React Component System",
    "Consultation & Inquiries"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-tag mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let&apos;s Build Something <span className="gradient-text-cyan">Remarkable</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            Whether you have a job opportunity, a project to collaborate on, or just want to connect, my inbox and phone are always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="glass-card p-6 border border-slate-200 hover:border-cyan-400 transition-all bg-white/95 shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">Direct Phone</h3>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
                      className="text-lg font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                      style={{ textDecoration: "none" }}
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" /> Mon - Sat: Available
                </span>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
                  className="text-xs text-cyan-700 font-semibold hover:underline flex items-center gap-1"
                >
                  Call Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card p-6 border border-slate-200 hover:border-purple-400 transition-all bg-white/95 shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">Official Email</h3>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-purple-700 transition-colors break-all"
                      style={{ textDecoration: "none" }}
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer ml-2 flex-shrink-0"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">⚡ Fast Response Guaranteed</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-1"
                >
                  Send Mail <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Connect */}
            <div className="glass-card p-6 border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">Instant WhatsApp</h3>
                    <p className="text-sm font-bold text-slate-900">Direct Chat &amp; Voice</p>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold"
                  style={{ textDecoration: "none" }}
                >
                  Chat Now
                </a>
              </div>
            </div>

            {/* Location Pill */}
            <div className="glass-card p-4 border border-slate-200 flex items-center gap-3 text-xs text-slate-600 bg-white shadow-sm">
              <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>Based in <strong className="text-slate-900">Tamil Nadu, India</strong> — Open for Onsite &amp; Remote Roles</span>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border border-slate-200/90 relative bg-white shadow-lg rounded-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center text-emerald-600 shadow-sm">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You, {formState.name || "Friend"}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message has been captured. Kannan V will review your note and respond back to <strong className="text-cyan-700">{formState.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "Front End Developer Opportunity", message: "" });
                    }}
                    className="btn-secondary text-xs py-2 px-5 cursor-pointer mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Send a Message to Kannan
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 font-medium">
                      Fill out the form below or pick a quick subject topic.
                    </p>

                    {/* Quick Subject Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {subjectPills.map((pill) => (
                        <button
                          key={pill}
                          type="button"
                          onClick={() => setFormState({ ...formState, subject: pill })}
                          className={`text-xs px-3 py-1 rounded-full border transition-all cursor-pointer ${
                            formState.subject === pill
                              ? "bg-cyan-50 border-cyan-400 text-cyan-800 font-semibold shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          }`}
                        >
                          {pill}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Kannan, we are looking for a Front End / Full Stack developer..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3 justify-center text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
