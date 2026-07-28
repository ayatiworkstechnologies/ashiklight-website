"use client";

import React, { useState } from "react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showrooms from "@/components/Showrooms";
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronRight, Clock } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    showroom: "Teynampet (Anna Salai)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <TopBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] py-3 px-4 sm:px-6 lg:px-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <a href="/" className="hover:text-[#B8860B]">
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#B8860B] font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Contact Hero & Cards */}
      <section className="py-12 lg:py-16 bg-[#FAF6F0] border-b border-[#EAE3D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1813]">
              Get in Touch with Ashik Lights
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Visit our showrooms in Chennai or send us a message for personalized lighting consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <a
              href="tel:08754860555"
              className="bg-white p-6 rounded-2xl border border-[#EAE3D2] shadow-2xs hover:shadow-lg hover:border-[#B8860B] transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base">Call Us Directly</h3>
                <p className="text-xs text-slate-500 mt-1">Talk to our lighting experts</p>
                <div className="text-sm font-bold text-[#B8860B] mt-2">087548 60555</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@ashiklights.in"
              className="bg-white p-6 rounded-2xl border border-[#EAE3D2] shadow-2xs hover:shadow-lg hover:border-[#B8860B] transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base">Email Us</h3>
                <p className="text-xs text-slate-500 mt-1">Send us your floor plan or query</p>
                <div className="text-sm font-bold text-[#B8860B] mt-2">info@ashiklights.in</div>
              </div>
            </a>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE3D2] shadow-2xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] text-[#B8860B] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base">Head Flagship Store</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  #313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet, Chennai 600006
                </p>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Mon - Sun: 10:00 AM - 9:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-6 bg-[#FAF6F0] p-8 sm:p-10 rounded-3xl border border-[#EAE3D2]">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1813] mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-light mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-white p-8 rounded-2xl border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-slate-900">Thank You!</h3>
                  <p className="text-xs text-slate-600">
                    Your inquiry has been received. Our team will contact you at <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#B8860B] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananth Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B8860B] bg-white text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B8860B] bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B8860B] bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Preferred Showroom</label>
                    <select
                      value={formData.showroom}
                      onChange={(e) => setFormData({ ...formData, showroom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B8860B] bg-white text-slate-900"
                    >
                      <option value="Teynampet (Anna Salai)">Teynampet (Anna Salai)</option>
                      <option value="Anna Nagar">Anna Nagar</option>
                      <option value="ECR (Uthandi)">ECR (Uthandi)</option>
                      <option value="Velachery">Velachery</option>
                      <option value="Tambaram">Tambaram</option>
                      <option value="Porur">Porur</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Your Message or Inquiry</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your home, villa or project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B8860B] bg-white text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B8860B] hover:bg-[#a3722a] text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-[#1A1813]">
                Teynampet Flagship Location Map
              </h2>
              <div className="rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-md h-[450px]">
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
  );
}
