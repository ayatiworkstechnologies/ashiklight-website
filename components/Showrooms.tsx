"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Sparkles, Building2 } from "lucide-react";

export default function Showrooms() {
  const store = {
    name: "Ashik Lights Flagship Store",
    address: "#313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet, Chennai, Tamil Nadu 600006",
    phone: "087548 60555",
    email: "info@ashiklights.in",
    timing: "10:00 AM - 10:00 PM (Mon - Sat, Closed Sunday)",
    mapQuery: "ASHIK+LIGHTS+Teynampet+Chennai",
    features: [
      "Exclusive K9 Crystal Chandelier Gallery",
      "High Ceiling Foyer Cascade Demo Studio",
      "Low Glare UGR<13 Architectural Downlights",
      "Retractable BLDC Decorative Fan Experience",
    ],
  };

  return (
    <section id="showrooms" className="py-16 lg:py-24 bg-[#FAF6F0] border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header — scroll reveal */}
        <div
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          data-reveal="up"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8860B]/10 text-[#B8860B] text-xs font-bold uppercase tracking-wider border border-[#B8860B]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8860B]" />
            </span>
            FLAGSHIP LIGHTING STORE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1813]">
            Visit Our Flagship Store
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Experience our luxury lighting fixtures and statement chandeliers in person at our flagship showroom in Chennai.
          </p>
        </div>

        {/* Flagship Store Feature Card */}
        <div
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D2] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          data-reveal="scale"
        >
          {/* Left Store Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF6F0] rounded-full text-[#B8860B] text-xs font-bold border border-[#EAE3D2]">
              <Building2 className="w-4 h-4" />
              <span>Teynampet Flagship Location</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1813]">
              {store.name}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{store.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B8860B] shrink-0" />
                <a href={`tel:${store.phone}`} className="font-bold text-[#B8860B] hover:underline">
                  {store.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span className="font-medium text-slate-800">{store.timing}</span>
              </div>
            </div>

            {/* Store Features */}
            <div className="pt-2 space-y-2 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Showroom Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {store.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 bg-[#FAF6F0] p-2.5 rounded-xl border border-[#EAE3D2]/60">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(store.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer px-7 py-3.5 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get Google Map Directions</span>
              </a>

              <a
                href="tel:08754860555"
                className="px-7 py-3.5 bg-[#FAF6F0] hover:bg-[#B8860B] text-slate-800 hover:text-white border border-[#EAE3D2] hover:border-[#B8860B] text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              >
                Call Store Directly
              </a>
            </div>
          </div>

          {/* Right Map View */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-md h-[420px] lg:h-[480px]">
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
    </section>
  );
}
