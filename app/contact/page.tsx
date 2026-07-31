"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showrooms from "@/components/Showrooms";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronRight, Clock, Sparkles, MessageSquare } from "lucide-react";
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
      <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
        <TopBanner />
        <Header />

        {/* Contact Hero & Cards — Luxury Layout */}
        <section className="relative py-14 lg:py-20 bg-gradient-to-b from-[#FAF6F0] via-[#F6F0E6] to-[#FAF8F5] border-b border-[#EAE3D2] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" data-reveal="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                PERSONALIZED LIGHTING ADVICE
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1813]">
                Get in Touch with Ashik Lights
              </h1>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Visit our flagship showroom in Teynampet, Chennai or send us your floor plans for expert consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger>
              {/* Phone Card */}
              <a
                href="tel:08754860555"
                data-reveal="up"
                data-reveal-delay="0"
                className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#EAE3D2] shadow-2xs hover:shadow-xl hover-border-glow hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-[#B8860B] transition-colors">Call Us Directly</h3>
                  <p className="text-xs text-slate-500 mt-1">Talk to our lighting architects</p>
                  <div className="text-sm font-bold text-[#B8860B] mt-2 font-mono">087548 60555</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@ashiklights.in"
                data-reveal="up"
                data-reveal-delay="100"
                className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#EAE3D2] shadow-2xs hover:shadow-xl hover-border-glow hover:-translate-y-1.5 transition-all duration-400 group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-[#B8860B] transition-colors">Email Us</h3>
                  <p className="text-xs text-slate-500 mt-1">Send us your layout or floor plan</p>
                  <div className="text-sm font-bold text-[#B8860B] mt-2">info@ashiklights.in</div>
                </div>
              </a>

              {/* Address Card */}
              <div
                data-reveal="up"
                data-reveal-delay="200"
                className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#EAE3D2] shadow-2xs hover-border-glow transition-all duration-400 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] text-[#B8860B] flex items-center justify-center shrink-0 border border-[#EAE3D2]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-base">Flagship Store</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    #313, Anna Salai, Opposite Kamaraj Arangam, Teynampet, Chennai 600006
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Mon - Sun: 10:00 AM - 9:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb — Positioned AFTER Hero */}
        <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-500 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#B8860B] font-bold">Contact Us</span>
          </div>
        </div>

        {/* Form & Map Section — Sleek Layout */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Contact Form Container */}
              <div className="lg:col-span-6 bg-[#FAF6F0] p-8 sm:p-12 rounded-3xl border border-[#EAE3D2] shadow-sm" data-reveal="left">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>CONSULTATION INQUIRY</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#1A1813] mb-3">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-light mb-8 leading-relaxed">
                  Fill out your details below and our team will get back to you with specs and layout advice.
                </p>

                {formSubmitted ? (
                  <div className="bg-white p-8 rounded-2xl border border-emerald-200 text-center space-y-4 animate-slide-carousel shadow-sm">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">Inquiry Ready in WhatsApp!</h3>
                    <p className="text-xs text-slate-600 max-w-xs mx-auto">
                      Thank you {formData.name}. Please tap Send in WhatsApp to deliver your inquiry to our team.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-bold text-[#B8860B] hover:underline cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#EAE3D2] focus:outline-none focus:border-[#B8860B] bg-white text-slate-900 shadow-2xs transition-colors duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-800 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#EAE3D2] focus:outline-none focus:border-[#B8860B] bg-white text-slate-900 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-800 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. rajesh@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-[#EAE3D2] focus:outline-none focus:border-[#B8860B] bg-white text-slate-900 shadow-2xs transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-800 mb-1.5">Your Message / Space Details</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your villa, apartment or double-height foyer requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#EAE3D2] focus:outline-none focus:border-[#B8860B] bg-white text-slate-900 shadow-2xs transition-colors duration-300"
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

              {/* Embedded Google Map Container */}
              <div className="lg:col-span-6 space-y-4" data-reveal="right">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-[#1A1813]">
                    Teynampet Flagship Location Map
                  </h2>
                  <span className="text-xs font-semibold text-[#B8860B] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#EAE3D2]">
                    Open Daily
                  </span>
                </div>

                <div className="rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-lg h-[460px]">
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

        <Showrooms />
        <Footer />
      </main>
    </ScrollRevealProvider>
  );
}
