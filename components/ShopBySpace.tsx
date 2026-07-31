"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sofa, UtensilsCrossed, BedDouble, Layers, Sun, Flower2, Sparkles, CheckCircle2 } from "lucide-react";

export default function ShopBySpace() {
  const spaces = [
    {
      id: "living-room",
      name: "Living Room & Foyer",
      tagline: "Statement Grand Chandeliers",
      desc: "Curated crystal chandeliers, warm flush ceiling luminaires, and gold wall sconces engineered to create an inviting atmosphere.",
      icon: Sofa,
      image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
      href: "/chandeliers",
      badge: "Most Popular",
    },
    {
      id: "dining-room",
      name: "Dining & Kitchen Island",
      tagline: "Artisanal Island Pendants",
      desc: "Linear amber glass pendants and warm dimmable island chandeliers designed to illuminate your dining experience.",
      icon: UtensilsCrossed,
      image: "/assets/chandeliers/Rectangular Amber Crystal Island Pendant Light.webp",
      href: "/wall-pendant-lights",
      badge: "Trending",
    },
    {
      id: "bedroom",
      name: "Bedrooms & Vanity",
      tagline: "Ambient Warmth & Smart Mirrors",
      desc: "Quiet BLDC retractable ceiling fans, warm bedside sconces, and touch-sensor anti-fog LED vanity mirrors.",
      icon: BedDouble,
      image: "/assets/Wall & Pendant Lights/Amber Glass Halo Wall Sconce.webp",
      href: "/wall-pendant-lights",
      badge: "Comfort Focus",
    },
    {
      id: "staircase",
      name: "Staircase & High Foyer",
      tagline: "Double-Height Crystal Cascades",
      desc: "Custom drop-length multi-tier crystal rain chandeliers engineered with ceiling load calculations for high ceilings.",
      icon: Layers,
      image: "/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp",
      href: "/high-ceiling-chandeliers",
      badge: "Architectural Choice",
    },
    {
      id: "balcony",
      name: "Balcony & Porch",
      tagline: "Architectural Facade Lights",
      desc: "Up-down narrow beam wall lights and IP65 warm LED sconces built for balconies and covered patios.",
      icon: Sun,
      image: "/assets/Outdoor Light Catalog/Up Down Narrow Wall Light.webp",
      href: "/outdoor-lights",
      badge: "Weatherproof",
    },
    {
      id: "garden",
      name: "Garden & Outdoor",
      tagline: "IP65 Landscape Bollards",
      desc: "Heavy-duty outdoor spike spotlights, pathway bollards, and landscape flood lights with 100% water resistance.",
      icon: Flower2,
      image: "/assets/Outdoor Light Catalog/Spike Spotlight.webp",
      href: "/outdoor-lights",
      badge: "IP65 Waterproof",
    },
  ];

  const [activeSpace, setActiveSpace] = useState(spaces[0]);

  return (
    <section id="shop-by-space" className="py-16 lg:py-24 bg-[#FAF6F0] border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" data-reveal="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE3D2] text-[#B8860B] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            ROOM-BY-ROOM LIGHTING GUIDE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1813]">
            Shop by Space
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Whether you are designing a double-height living room or outfitting a cozy bedroom, discover lights curated for every corner of your home.
          </p>
        </div>

        {/* Space Selection Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10" data-reveal="fade">
          {spaces.map((sp) => {
            const IconComp = sp.icon;
            const isSelected = activeSpace.id === sp.id;
            return (
              <button
                key={sp.id}
                onClick={() => setActiveSpace(sp)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#1A1813] text-white shadow-lg scale-[1.03]"
                    : "bg-white text-slate-700 hover:bg-[#FAF8F5] border border-[#EAE3D2] hover:border-[#B8860B]"
                }`}
              >
                <IconComp className={`w-4 h-4 ${isSelected ? "text-[#B8860B]" : "text-slate-500"}`} />
                <span>{sp.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Space Hero Showcase Banner */}
        <div
          key={activeSpace.id}
          className="bg-white rounded-3xl border border-[#EAE3D2] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-slide-carousel"
          data-reveal="scale"
        >
          {/* Left Feature Description */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6F0] rounded-full text-[#B8860B] text-xs font-bold border border-[#EAE3D2]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{activeSpace.badge}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1813]">
                {activeSpace.name}
              </h3>

              <div className="text-sm font-semibold text-[#B8860B]">
                {activeSpace.tagline}
              </div>

              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                {activeSpace.desc}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={activeSpace.href}
                className="btn-shimmer px-7 py-3.5 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg inline-flex items-center gap-2.5 transition-all cursor-pointer group"
              >
                <span>Browse {activeSpace.name} Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Full-Width Photo Frame */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] bg-slate-100 overflow-hidden group">
            <Image
              src={activeSpace.image}
              alt={activeSpace.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* 6 Quick Space Grid Cards Below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8" data-reveal-stagger>
          {spaces.map((sp, idx) => {
            const IconComp = sp.icon;
            const isSelected = activeSpace.id === sp.id;
            return (
              <button
                key={sp.id}
                onClick={() => setActiveSpace(sp)}
                data-reveal="up"
                data-reveal-delay={String(idx * 70)}
                className={`p-4 rounded-2xl bg-white border text-center transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-[#B8860B] ring-2 ring-[#B8860B]/30 shadow-md scale-[1.02]"
                    : "border-[#EAE3D2] hover:border-[#B8860B]/60 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center transition-colors mb-2 ${
                  isSelected ? "bg-[#B8860B] text-white" : "bg-[#FAF6F0] text-[#B8860B]"
                }`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-800 line-clamp-1">{sp.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{sp.badge}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
