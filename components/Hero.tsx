"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { VectorDiamondGrid, VectorLightRays } from "@/components/VectorAccents";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger hero entrance animations after a brief delay for smooth appearance
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#0A1628]">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Hero Banner */}
        <Image
          src="/banner/banner.webp"
          alt="Luxury indoor living room with warm chandelier lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center animate-ken-burns hidden md:block"
        />
        {/* Mobile Hero Banner */}
        <Image
          src="/banner/banner mob.webp"
          alt="Luxury indoor living room with warm chandelier lighting - Mobile Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-ken-burns md:hidden"
        />
        {/* Left-side shade overlay ONLY for text contrast; Right side is 100% clear image with zero shade */}
        <div className="hidden md:block absolute inset-y-0 left-0 md:w-[65%] lg:w-[55%] bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-transparent pointer-events-none" />
        <div className="block md:hidden absolute inset-y-0 left-0 w-[72%] sm:w-[68%] bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/75 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1628] to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Vector Diamond Grid Background Pattern */}
      <VectorDiamondGrid className="opacity-[0.04] z-[1]" />
      <VectorLightRays className="-top-20 -left-20 z-[1] hidden lg:block" />

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block">
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6">

          {/* Main Headline — staggered word reveal */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Illuminate Your Space
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 delay-[400ms] ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              With{" "}
            </span>
            <span
              className={`inline-block italic font-medium transition-all duration-700 delay-[600ms] ${
                isLoaded
                  ? "opacity-100 translate-y-0 animate-gold-shimmer"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Timeless Luxury.
            </span>
          </h1>

          {/* Subtitle — delayed fade in */}
          <p
            className={`text-slate-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg transition-all duration-700 delay-[700ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Discover statement chandeliers, double-height cascades,
            architectural magnetic tracks & luxury outdoor lights at our
            flagship Chennai showroom in Teynampet.
          </p>

          {/* Action CTAs — slide in from left */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 transition-all duration-700 delay-[850ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/#collections"
              className="btn-shimmer px-8 py-4 text-white text-sm font-semibold rounded-full text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all group cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#D4A017] text-sm font-semibold rounded-full text-center shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
            >
              Contact Specialist
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Wave Divider — smooth transition to next section */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 50 480 0 720 30C960 60 1200 10 1440 30V60H0V30Z"
            fill="#0A1628"
          />
        </svg>
      </div>
    </section>
  );
}

