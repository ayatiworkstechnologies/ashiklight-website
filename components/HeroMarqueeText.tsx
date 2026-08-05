"use client";

import React from "react";
import { Sparkles, Crown } from "lucide-react";

export default function HeroMarqueeText() {
  const marqueeItems = [
    { text: "ASHIK LIGHTS", highlight: true },
    { text: "LUXURY CHANDELIERS", highlight: false },
    { text: "FOYER CASCADE", highlight: false },
    { text: "ARCHITECTURAL LIGHTING", highlight: true },
    { text: "CHENNAI FLAGSHIP", highlight: false },
    { text: "CUSTOM GLASS DESIGNS", highlight: false },
  ];

  // Triplicate array for smooth, infinite marquee loop
  const triplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full h-[160px] sm:h-[190px] lg:h-[220px] bg-[#050505] border-y border-[#D4AF37]/30 flex items-center overflow-hidden select-none z-10">
      {/* Background Subtle Ambient Lighting Glow */}
      <div className="absolute inset-0 bg-radial from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      {/* Side Fade Gradient Overlays for Smooth Cutoff */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

      {/* Continuous Marquee Track */}
      <div className="flex whitespace-nowrap animate-hero-marquee items-center gap-10 sm:gap-16">
        {triplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-10 sm:gap-16 shrink-0">
            {/* 200px Height Typography Text */}
            <span
              className={`font-serif text-[110px] sm:text-[160px] lg:text-[200px] font-black uppercase tracking-tight leading-none inline-block transition-all duration-300 ${
                item.highlight
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#B8860B] drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]"
                  : "text-transparent [-webkit-text-stroke:2px_rgba(212,175,55,0.45)] hover:[-webkit-text-stroke:2px_#D4AF37] opacity-80"
              }`}
            >
              {item.text}
            </span>

            {/* Glowing Accent Separator Badge */}
            <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#D4AF37]/50 bg-[#0E0E0E] text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)] shrink-0">
              {item.highlight ? (
                <Crown className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#D4AF37]" />
              ) : (
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#D4AF37] animate-pulse" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
