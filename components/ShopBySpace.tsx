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
      desc: "Whisper-quiet retractable ceiling fans, warm bedside sconces, and touch-sensor anti-fog LED vanity mirrors.",
      icon: BedDouble,
      image: "/assets/Wall-Pendant-Lights/Amber Glass Halo Wall Sconce.webp",
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
    <section id="shop-by-space" className="py-16 lg:py-24 bg-[#0E0E0E] border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" data-reveal="up">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-6 h-px bg-[#D4AF37]/40" />
            SHOP BY SPACE
            <span className="w-6 h-px bg-[#D4AF37]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Shop by Space
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Whether you are designing a double-height living room or outfitting a cozy bedroom, discover lights curated for every corner of your home.
          </p>
        </div>

        {/* Space Selection Pills — Touch-scrolling on mobile */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto scrollbar-hide gap-2.5 mb-8 sm:mb-10 px-1 pb-2" data-reveal="fade">
          {spaces.map((sp) => {
            const IconComp = sp.icon;
            const isSelected = activeSpace.id === sp.id;
            return (
              <button
                key={sp.id}
                onClick={() => setActiveSpace(sp)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-extrabold shadow-lg scale-[1.02]"
                    : "bg-[#161616] text-slate-300 hover:bg-[#222] border border-[#D4AF37]/20 hover:border-[#D4AF37]"
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? "text-black" : "text-[#D4AF37]"}`} />
                <span className="whitespace-nowrap">{sp.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Space Hero Showcase Banner */}
        <div
          key={activeSpace.id}
          className="bg-[#161616] rounded-3xl border border-[#D4AF37]/25 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-slide-carousel"
          data-reveal="scale"
        >
          {/* Right Full-Width Photo Frame (Shown FIRST on mobile) */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] bg-slate-100 overflow-hidden group">
            <Image
              src={activeSpace.image}
              alt={activeSpace.name}
              fill
              priority
              quality={100}
              unoptimized
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Left Feature Description (Shown BELOW image on mobile) */}
          <div className="lg:col-span-5 order-2 lg:order-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 rounded-full text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{activeSpace.badge}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeSpace.name}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {activeSpace.tagline}
              </div>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                {activeSpace.desc}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={activeSpace.href}
                className="btn-shimmer w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
              >
                <span>Browse {activeSpace.name} Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
