"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Showrooms() {
  return (
    <section id="showrooms" className="py-14 lg:py-20 bg-[#0A1628] border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="bg-[#0D1E35] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          data-reveal="scale"
        >
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-6 h-px bg-white/30" />
              FLAGSHIP SHOWROOM
              <span className="w-6 h-px bg-white/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Visit Our Flagship Store
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  #313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet, Chennai 600006
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <a href="tel:08754860555" className="font-bold text-white hover:underline">
                  087548 60555
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white shrink-0" />
                <span className="text-slate-300">Mon - Sat: 10:00 AM - 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=ASHIK+LIGHTS+Teynampet+Chennai"
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer px-6 py-3 text-white text-xs font-bold rounded-xl shadow-md inline-flex items-center gap-2 transition-all cursor-pointer group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get Google Map Directions</span>
              </a>
            </div>
          </div>

          {/* Right Embedded Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 shadow-md h-[320px] sm:h-[360px]">
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
