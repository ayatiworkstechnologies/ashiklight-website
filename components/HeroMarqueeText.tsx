"use client";

import React from "react";
import { Star, MapPin, Award, ShieldCheck } from "lucide-react";
import { VectorDiamondGrid } from "@/components/VectorAccents";

export default function HeroMarqueeText() {
  return (
    <section className="relative w-full h-[150px] bg-[#0E0E0E] border-y border-[#D4AF37]/35 flex items-center justify-center overflow-hidden select-none z-10 px-4 sm:px-8">
      {/* Background Subtle Luxury Patterns & Ambient Glow */}
      <VectorDiamondGrid className="opacity-[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#D4AF37]/10 to-[#050505] pointer-events-none" />

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-96 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-96 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-3 py-2">
        {/* Main Headline Statement */}
        <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
          Crafting Extraordinary Illumination For{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#B8860B] drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
            Extraordinary Residences
          </span>
        </h2>

        {/* Value Highlights */}
        <div className="flex items-center justify-center flex-wrap gap-x-5 sm:gap-x-7 gap-y-2 text-slate-200 text-xs sm:text-sm lg:text-base font-medium">
          <span className="flex items-center gap-1.5 text-slate-200">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <strong className="text-[#D4AF37] font-bold">50,000+</strong>{" "}
            Installations
          </span>
          <span className="hidden sm:inline text-[#D4AF37]/40">•</span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            <strong className="text-[#D4AF37] font-bold">4.6 / 5</strong> Rating
          </span>
          <span className="hidden sm:inline text-[#D4AF37]/40">•</span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            Custom Crystal Engineering
          </span>
          <span className="hidden sm:inline text-[#D4AF37]/40">•</span>
          <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            Teynampet, Chennai
          </span>
        </div>
      </div>
    </section>
  );
}
