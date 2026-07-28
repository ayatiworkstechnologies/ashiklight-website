"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from "lucide-react";

export default function Showrooms() {
  const showrooms = [
    {
      id: "teynampet",
      name: "Teynampet Flagship",
      address: "#313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet, Chennai 600006",
      phone: "087548 60555",
      timing: "10:00 AM - 9:30 PM (All Days)",
      badge: "Flagship Showroom",
      coords: "13.0498, 80.2474",
      mapQuery: "ASHIK+LIGHTS+Teynampet+Chennai",
    },
    {
      id: "anna-nagar",
      name: "Anna Nagar",
      address: "2nd Avenue, Opposite Blue Star, Anna Nagar, Chennai 600040",
      phone: "087548 60555",
      timing: "10:00 AM - 9:30 PM",
      badge: "Modern Store",
      coords: "13.0850, 80.2101",
      mapQuery: "Ashik+Lights+Anna+Nagar+Chennai",
    },
    {
      id: "ecr",
      name: "ECR (East Coast Road)",
      address: "ECR Main Road, Near Uthandi Toll Gate / Palavakkam, Chennai 600119",
      phone: "087548 60555",
      timing: "10:00 AM - 9:30 PM",
      badge: "Villa Experience Center",
      coords: "12.8797, 80.2435",
      mapQuery: "Ashik+Lights+ECR+Chennai",
    },
    {
      id: "velachery",
      name: "Velachery",
      address: "Velachery Bypass Road, Near Vijaya Nagar Bus Stand, Chennai 600042",
      phone: "087548 60555",
      timing: "10:00 AM - 9:30 PM",
      badge: "Lighting Studio",
      coords: "12.9759, 80.2206",
      mapQuery: "Ashik+Lights+Velachery+Chennai",
    },
    {
      id: "tambaram",
      name: "Tambaram",
      address: "GST Road, Opposite Railway Station, Tambaram Sanatorium, Chennai 600047",
      phone: "087548 60555",
      timing: "10:00 AM - 9:30 PM",
      badge: "Retail Outlet",
      coords: "12.9248, 80.1174",
      mapQuery: "Ashik+Lights+Tambaram+Chennai",
    },
    {
      id: "porur",
      name: "Porur",
      address: "Mount-Poonamallee Road, Near Porur Junction, Chennai 600116",
      phone: "087548 60555",
      timing: "10:00 AM - 9:30 PM",
      badge: "Architectural Store",
      coords: "13.0382, 80.1565",
      mapQuery: "Ashik+Lights+Porur+Chennai",
    },
  ];

  const [activeShowroom, setActiveShowroom] = useState(showrooms[0]);

  return (
    <section id="showrooms" className="py-16 lg:py-24 bg-[#FAF6F0] border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping" />
            6 LOCATIONS IN CHENNAI
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1813]">
            Visit Our Showrooms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Experience our lighting fixtures in person across 6 prime locations in Chennai.
          </p>
        </div>

        {/* Interactive Store Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {showrooms.map((s) => {
            const isSelected = activeShowroom.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveShowroom(s)}
                className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#B8860B] text-white border-[#B8860B] shadow-md scale-102"
                    : "bg-white text-slate-800 border-[#EAE3D2] hover:border-[#B8860B]/60 hover:bg-[#FAF6F0]"
                }`}
              >
                <div className="text-xs font-bold leading-tight">{s.name}</div>
                <div
                  className={`text-[10px] mt-1 ${
                    isSelected ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {s.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Store Active Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3D2] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6F0] rounded-full text-[#B8860B] text-xs font-semibold border border-[#EAE3D2]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{activeShowroom.badge}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1813]">
              {activeShowroom.name}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5 animate-pin-pulse" />
                <span>{activeShowroom.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B8860B] shrink-0" />
                <a href={`tel:${activeShowroom.phone}`} className="font-semibold hover:underline">
                  {activeShowroom.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#B8860B] shrink-0" />
                <span>{activeShowroom.timing}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeShowroom.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer px-6 py-3 text-white text-xs font-semibold rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:08754860555"
                className="px-6 py-3 bg-[#FAF6F0] hover:bg-[#B8860B] text-slate-800 hover:text-white border border-[#EAE3D2] hover:border-[#B8860B] text-xs font-semibold rounded-xl transition-all cursor-pointer"
              >
                Call Store
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-md aspect-16/10">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.776584227003!2d80.24744707588805!3d13.049888213155413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526646610db38f%3A0x8a4786f1bb0c0c74!2s${encodeURIComponent(
                activeShowroom.name
              )}!5e0!3m2!1sen!2sin!4v1712558237503!5m2!1sen!2sin`}
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
