"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquare,
  Navigation,
  CheckCircle2,
  Send,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const getEmailBody = () => {
    return `Dear Ashik Lights Team,

I would like to request a personalized lighting consultation and details for my project.

CUSTOMER INQUIRY DETAILS:
--------------------------------------------------
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not Provided"}

LIGHTING REQUIREMENTS / SPACE DETAILS:
--------------------------------------------------
${formData.message || "Requesting lighting advice, lux level guidance, and catalog details for my space."}

--------------------------------------------------
Sent via Ashik Lights Official Website (ashiklights.in)`;
  };

  const getEmailSubject = () => {
    return `Lighting Consultation Inquiry - ${formData.name || "Customer"}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoUrl = `mailto:info@ashiklights.in?subject=${encodeURIComponent(
      getEmailSubject()
    )}&body=${encodeURIComponent(getEmailBody())}`;

    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleCopyTemplate = () => {
    const textToCopy = `To: info@ashiklights.in\nSubject: ${getEmailSubject()}\n\n${getEmailBody()}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#0A1628]">
        <TopBanner />
        <Header />

        {/* Contact Hero & Info Cards */}
        <section className="relative py-14 lg:py-20 bg-gradient-to-b from-[#0A1628] via-[#0D1E35] to-[#0A1628] border-b border-white/15 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Header Title Block */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" data-reveal="up">
              <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="w-6 h-px bg-white/30" />
                PERSONALIZED LIGHTING ADVICE
                <span className="w-6 h-px bg-white/30" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                Get in Touch with Ashik Lights
              </h1>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Visit our flagship showroom in Teynampet, Chennai or send us your floor plans for expert consultation.
              </p>
            </div>

            {/* 3 Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger>
              {/* Phone Card */}
              <a
                href="tel:08754860555"
                data-reveal="up"
                data-reveal-delay="0"
                className="bg-[#0D1E35] p-6 rounded-3xl border border-white/15 shadow-lg hover:border-white hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/15 text-white group-hover:bg-white group-hover:text-[#040812] flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm border border-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-white transition-colors">Call Us Directly</h3>
                  <p className="text-xs text-slate-400 mt-1">Talk to our lighting architects</p>
                  <div className="text-sm font-bold text-white mt-2 font-sans">087548 60555</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@ashiklights.in"
                data-reveal="up"
                data-reveal-delay="100"
                className="bg-[#0D1E35] p-6 rounded-3xl border border-white/15 shadow-lg hover:border-white hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/15 text-white group-hover:bg-white group-hover:text-[#040812] flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm border border-white/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-white transition-colors">Email Us Directly</h3>
                  <p className="text-xs text-slate-400 mt-1">Send us your layout or floor plan</p>
                  <div className="text-sm font-bold text-white mt-2">info@ashiklights.in</div>
                </div>
              </a>

              {/* Address Card */}
              <div
                data-reveal="up"
                data-reveal-delay="200"
                className="bg-[#0D1E35] p-6 rounded-3xl border border-white/15 shadow-lg hover:border-white transition-all duration-400 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Flagship Store</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    #313, Anna Salai, Opposite Kamaraj Arangam, Teynampet, Chennai 600006
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2">
                    <Clock className="w-3.5 h-3.5 text-white" />
                    <span>Mon - Sat: 10:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-[#0D1E35] border-b border-white/15 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-white font-bold">Contact Us</span>
          </div>
        </div>

        {/* Form & Map Section */}
        <section className="py-16 lg:py-24 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Contact Form Container */}
              <div className="lg:col-span-6 bg-[#0D1E35] p-8 sm:p-12 rounded-3xl border border-white/15 shadow-xl" data-reveal="left">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-2">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>DIRECT EMAIL INQUIRY</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  Send Us a Message
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light mb-8 leading-relaxed">
                  Fill out your details below to generate a pre-formatted email template to send directly to info@ashiklights.in.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#0A1628] p-6 sm:p-8 rounded-2xl border border-white/15 space-y-5 animate-slide-carousel shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-950/80 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30 shrink-0">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-white">Email Template Ready!</h3>
                        <p className="text-xs text-slate-400">
                          Your email app has been opened to send this inquiry to info@ashiklights.in.
                        </p>
                      </div>
                    </div>

                    {/* Email Template Preview Box */}
                    <div className="bg-[#040812] p-4 sm:p-5 rounded-xl border border-white/15 text-left text-xs font-mono space-y-3 relative group">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-slate-300 font-sans">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <FileText className="w-4 h-4 text-white" /> Email Template Preview
                        </span>
                        <button
                          onClick={handleCopyTemplate}
                          className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-white/10 px-2.5 py-1 rounded-md transition-all cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copy Template
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-slate-300 space-y-1 text-[11px]">
                        <div><strong className="text-white">To:</strong> info@ashiklights.in</div>
                        <div><strong className="text-white">Subject:</strong> {getEmailSubject()}</div>
                      </div>

                      <pre className="text-slate-300 font-mono text-[11px] whitespace-pre-wrap leading-relaxed pt-2 border-t border-white/10">
                        {getEmailBody()}
                      </pre>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <a
                        href={`mailto:info@ashiklights.in?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`}
                        className="w-full sm:w-auto px-6 py-3 bg-white text-[#040812] font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" /> Open Email Client Again
                      </a>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="w-full sm:w-auto px-5 py-3 bg-white/10 text-white font-semibold rounded-xl text-xs hover:bg-white/20 transition-all cursor-pointer"
                      >
                        ← Edit Inquiry Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-200 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/15 focus:outline-none focus:border-white bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-200 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-white/15 focus:outline-none focus:border-white bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-200 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. rajesh@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-white/15 focus:outline-none focus:border-white bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-200 mb-1.5">Your Message / Space Details</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your villa, apartment or double-height foyer requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/15 focus:outline-none focus:border-white bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-shimmer w-full py-4 bg-white hover:bg-slate-100 text-[#040812] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-sm flex items-center justify-center gap-2.5 mt-2"
                    >
                      <Mail className="w-5 h-5 text-[#040812]" />
                      <span>Send Direct Email Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Embedded Google Map & Store Location Info */}
              <div className="lg:col-span-6 space-y-5" data-reveal="right">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Teynampet Flagship Store Map
                  </h2>
                  <a
                    href="https://maps.google.com/?q=ASHIK+LIGHTS+Teynampet+Chennai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/15 shadow-xl h-[480px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.776584227003!2d80.24744707588805!3d13.049888213155413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526646610db38f%3A0x8a4786f1bb0c0c74!2sASHIK%20LIGHTS!5e0!3m2!1sen!2sin!4v1712558237503!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ScrollRevealProvider>
  );
}
