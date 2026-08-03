"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageSquare,
  Navigation,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hi Ashik Lights, I would like a lighting consultation.",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/918754860555?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setFormSubmitted(true);
  };

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#0A1628]">
        <TopBanner />
        <Header />

        {/* Contact Hero & Info Cards */}
        <section className="relative py-14 lg:py-20 bg-gradient-to-b from-[#0A1628] via-[#0D1E35] to-[#0A1628] border-b border-[#D4A017]/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Header Title Block */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" data-reveal="up">
              <div className="inline-flex items-center gap-2 text-[#D4A017] text-xs font-bold uppercase tracking-[0.2em]">
                <span className="w-6 h-px bg-[#D4A017]/50" />
                PERSONALIZED LIGHTING ADVICE
                <span className="w-6 h-px bg-[#D4A017]/50" />
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
                className="bg-[#0D1E35] p-6 rounded-3xl border border-[#D4A017]/20 shadow-lg hover:border-[#D4A017] hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm border border-[#D4A017]/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-[#D4A017] transition-colors">Call Us Directly</h3>
                  <p className="text-xs text-slate-400 mt-1">Talk to our lighting architects</p>
                  <div className="text-sm font-bold text-[#D4A017] mt-2 font-mono">087548 60555</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@ashiklights.in"
                data-reveal="up"
                data-reveal-delay="100"
                className="bg-[#0D1E35] p-6 rounded-3xl border border-[#D4A017]/20 shadow-lg hover:border-[#D4A017] hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm border border-[#D4A017]/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-[#D4A017] transition-colors">Email Us</h3>
                  <p className="text-xs text-slate-400 mt-1">Send us your layout or floor plan</p>
                  <div className="text-sm font-bold text-[#D4A017] mt-2">info@ashiklights.in</div>
                </div>
              </a>

              {/* Address Card */}
              <div
                data-reveal="up"
                data-reveal-delay="200"
                className="bg-[#0D1E35] p-6 rounded-3xl border border-[#D4A017]/20 shadow-lg hover:border-[#D4A017] transition-all duration-400 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center shrink-0 border border-[#D4A017]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Flagship Store</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    #313, Anna Salai, Opposite Kamaraj Arangam, Teynampet, Chennai 600006
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span>Mon - Sat: 10:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-[#0D1E35] border-b border-[#D4A017]/15 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#D4A017] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#D4A017] font-bold">Contact Us</span>
          </div>
        </div>

        {/* Form & Map Section */}
        <section className="py-16 lg:py-24 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Contact Form Container */}
              <div className="lg:col-span-6 bg-[#0D1E35] p-8 sm:p-12 rounded-3xl border border-[#D4A017]/20 shadow-xl" data-reveal="left">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
                  <MessageSquare className="w-4 h-4 text-[#D4A017]" />
                  <span>CONSULTATION INQUIRY</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  Send Us a Message
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light mb-8 leading-relaxed">
                  Fill out your details below and our team will get back to you with specs and layout advice.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#0A1628] p-8 rounded-2xl border border-[#D4A017]/20 text-center space-y-4 animate-slide-carousel shadow-sm">
                    <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">Inquiry Ready in WhatsApp!</h3>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">
                      Thank you {formData.name}. Please tap Send in WhatsApp to deliver your inquiry to our team.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-bold text-[#D4A017] hover:underline cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
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
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D4A017]/20 focus:outline-none focus:border-[#D4A017] bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
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
                          className="w-full px-4 py-3.5 rounded-xl border border-[#D4A017]/20 focus:outline-none focus:border-[#D4A017] bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-200 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. rajesh@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#D4A017]/20 focus:outline-none focus:border-[#D4A017] bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D4A017]/20 focus:outline-none focus:border-[#D4A017] bg-[#0A1628] text-white placeholder-slate-500 shadow-2xs transition-colors duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-sm flex items-center justify-center gap-2.5 mt-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Send Inquiry via WhatsApp</span>
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4A017] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-xl h-[480px]">
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
