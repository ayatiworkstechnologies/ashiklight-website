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
  AlertCircle,
  Send,
  Loader2,
  Sparkles,
  RefreshCw,
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

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email || "",
            phone: formData.phone,
            message:
              formData.message ||
              "Requesting lighting consultation & catalog guidance",
          },
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(
          result?.error || "Failed to deliver inquiry to the server."
        );
      }

      setSubmitStatus("success");
    } catch (err: any) {
      console.error("Contact Form Submission Error:", err);
      setErrorMessage(
        err?.message ||
          "Failed to connect to the server. Please check your internet connection or try again."
      );
      setSubmitStatus("error");
    }
  };

  const handleResetForm = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#050505]">
        <TopBanner />
        <Header />

        {/* Contact Hero & Info Cards */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#050505] via-[#0E0E0E] to-[#050505] border-b border-[#D4AF37]/25 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Floating Bubble Pill Breadcrumb */}
            <div className="flex justify-center mb-6" data-reveal="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616]/90 backdrop-blur-md border border-[#D4AF37]/35 text-xs text-slate-300 shadow-xl">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-[#D4AF37] font-bold">Contact Us</span>
              </div>
            </div>

            {/* Header Title Block */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4" data-reveal="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] border border-[#D4AF37]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>EXPERT LIGHTING ARCHITECTURE &amp; ADVICE</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Bring Your Spaces to Life <br />
                <span className="italic text-[#D4AF37] font-medium">with Bespoke Lighting.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
                Whether you are designing a luxury villa foyer, high-ceiling duplex, or modern commercial venue, our lighting architects in Teynampet, Chennai are here to turn your floor plans into luminous masterpieces.
              </p>
            </div>

            {/* 3 Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger>
              {/* Phone Card */}
              <a
                href="tel:08754860555"
                data-reveal="up"
                data-reveal-delay="0"
                className="bg-[#161616] p-7 rounded-3xl border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0E0E0E] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm border border-[#D4AF37]/25">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-[#D4AF37] transition-colors">Direct Showroom Line</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Speak live with senior lighting consultants for urgent stock and custom chandelier sizing.</p>
                  <div className="text-sm font-bold text-[#D4AF37] mt-3 font-sans">087548 60555</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@ashiklights.in"
                data-reveal="up"
                data-reveal-delay="100"
                className="bg-[#161616] p-7 rounded-3xl border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0E0E0E] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm border border-[#D4AF37]/25">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-[#D4AF37] transition-colors">Layout &amp; Floor Plan Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Send CAD drawings or room dimensions for lux calculations and tailored proposals.</p>
                  <div className="text-sm font-bold text-[#D4AF37] mt-3">info@ashiklights.in</div>
                </div>
              </a>

              {/* Address Card */}
              <div
                data-reveal="up"
                data-reveal-delay="200"
                className="bg-[#161616] p-7 rounded-3xl border border-[#D4AF37]/25 shadow-xl hover:border-[#D4AF37] transition-all duration-400 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0E0E0E] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/25">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Flagship Experience Center</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    #313, Anna Salai, Opposite Kamaraj Arangam, Teynampet, Chennai 600006
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-3">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Monday – Saturday: 10:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-[#0E0E0E] border-b border-[#D4AF37]/25 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#D4AF37] font-bold">Contact Us</span>
          </div>
        </div>

        {/* Form & Map Section */}
        <section className="py-16 lg:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Contact Form Container */}
              <div className="lg:col-span-6 bg-[#161616] p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/25 shadow-xl" data-reveal="left">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  <span>TAILORED LIGHTING CONSULTATION</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  Request CAD Layout &amp; Quotation
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light mb-8 leading-relaxed">
                  Provide your project details below. Our lighting design team will curate custom fixture specifications, lumen calculations, and factory-direct pricing for your space.
                </p>

                {submitStatus === "success" ? (
                  /* SUCCESS MESSAGE UI */
                  <div className="bg-[#0E0E0E] p-8 sm:p-10 rounded-2xl border border-emerald-500/30 space-y-6 animate-slide-carousel text-center shadow-sm">
                    <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Inquiry Submitted Successfully!</h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                        Thank you <strong className="text-white">{formData.name}</strong>. Your inquiry has been received by our senior lighting architects at Ashik Lights.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleResetForm}
                        className="px-7 py-3.5 bg-[#D4AF37] text-black font-extrabold rounded-xl text-xs hover:bg-[#F3E5AB] transition-all cursor-pointer shadow-md"
                      >
                        ← Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : submitStatus === "error" ? (
                  /* FAILED MESSAGE UI */
                  <div className="bg-[#0E0E0E] p-6 sm:p-8 rounded-2xl border border-rose-500/30 space-y-5 animate-slide-carousel shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-rose-950/80 text-rose-400 rounded-2xl flex items-center justify-center border border-rose-500/30 shrink-0">
                        <AlertCircle className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-white">Submission Failed</h3>
                        <p className="text-xs text-slate-300 mt-1">
                          We could not record your submission due to a server response error.
                        </p>
                      </div>
                    </div>

                    <div className="bg-rose-950/40 p-4 rounded-xl border border-rose-500/20 text-xs text-rose-200">
                      <strong>Error Details:</strong> {errorMessage || "Network error occurred."}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        onClick={() => setSubmitStatus("idle")}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#D4AF37] text-black font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-[#F3E5AB] transition-all cursor-pointer"
                      >
                        <RefreshCw className="w-4 h-4" /> Try Submitting Again
                      </button>
                      <a
                        href="tel:08754860555"
                        className="w-full sm:w-auto px-5 py-3.5 bg-[#D4AF37]/15 text-[#D4AF37] font-semibold rounded-xl text-xs hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#D4AF37]/30"
                      >
                        <Phone className="w-4 h-4 text-[#D4AF37]" /> Call Store: 087548 60555
                      </a>
                    </div>
                  </div>
                ) : (
                  /* FORM INPUT UI */
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[#D4AF37] mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Architect Rajesh Kumar / Ananya Roy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/25 focus:outline-none focus:border-[#D4AF37] bg-[#0E0E0E] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-[#D4AF37] mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/25 focus:outline-none focus:border-[#D4AF37] bg-[#0E0E0E] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#D4AF37] mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. rajesh@architecture-studio.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/25 focus:outline-none focus:border-[#D4AF37] bg-[#0E0E0E] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-[#D4AF37] mb-1.5">Space / Project Details</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your villa, 24ft double-height living foyer, dining chandelier, or magnetic profile layout requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/25 focus:outline-none focus:border-[#D4AF37] bg-[#0E0E0E] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="btn-shimmer w-full py-4 text-black font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-sm flex items-center justify-center gap-2.5 mt-2 disabled:opacity-50"
                    >
                      {submitStatus === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-black" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-black" />
                          <span>Submit Consultation Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Embedded Google Map & Store Location Info */}
              <div className="lg:col-span-6 space-y-5" data-reveal="right">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white">
                      Visit Our Teynampet Flagship Store
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Experience over 500+ live chandeliers, decorative fans, magnetic track profiles, and vanity LED mirrors in person.</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=ASHIK+LIGHTS+Teynampet+Chennai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-xl h-[480px]">
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
