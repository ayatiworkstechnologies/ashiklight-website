"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#050505] select-none">
      {/* ── SIMPLE HERO BANNER BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Banner Background */}
        <img
          src="/banner/des-after.webp"
          alt="Ashik Lights Luxury Lighting Banner"
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
          draggable={false}
        />
        {/* Mobile Banner Background */}
        <img
          src="/banner/banner-after.webp"
          alt="Ashik Lights Luxury Lighting Banner - Mobile"
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
          draggable={false}
        />

        {/* Gradient Overlay for Left Side Readability - Constrained to text area */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-transparent z-1 pointer-events-none" />

        {/* Top/Bottom Subtle Gradient Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-1 pointer-events-none" />

      </div>

      {/* Hero Left Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-12 sm:py-16 lg:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7 text-left">
          {/* Top Tagline Badge */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Architectural &amp; Decorative Lighting</span>
            </div> */}
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] [text-shadow:_0_4px_30px_rgba(0,0,0,0.95)]">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Transform Your Spaces with Premium
            </span>
            <br />
            <span
              className={`inline-block bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#B8860B] bg-clip-text text-transparent transition-all duration-700 delay-[400ms] ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Decorative Lighting.
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p
            className={`text-slate-200 text-sm sm:text-base font-light max-w-lg leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] transition-all duration-700 delay-[600ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Statement crystal chandeliers, high-ceiling foyer cascades, luxury
            decorative fans &amp; architectural magnetic profile lights in
            Chennai.
          </p>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 50 480 0 720 30C960 60 1200 10 1440 30V60H0V30Z"
            fill="#050505"
          />
        </svg>
      </div>
    </section>
  );
}
