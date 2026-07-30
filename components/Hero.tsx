"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Award } from "lucide-react";

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
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#FAF6F0]">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner.webp"
          alt="Luxury indoor living room with warm chandelier lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center animate-ken-burns"
        />
        {/* Left-side shade overlay ONLY for text contrast; Right side is 100% clear image with zero shade */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[65%] lg:w-[55%] bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/95 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FAF6F0] to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block">
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          {/* Subtle Tagline Badge — animated entrance */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8860B]" />
            </span>
            CHENNAI&apos;S PREMIER LIGHTING DESTINATION
          </div>

          {/* Main Headline — staggered word reveal */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-[#1A1813] leading-[1.1]">
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
            className={`text-slate-700 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg transition-all duration-700 delay-[700ms] ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Discover statement chandeliers, double-height cascades, architectural
            magnetic tracks & luxury outdoor lights at our flagship Chennai showroom in Teynampet.
          </p>

          {/* Action CTAs — slide in from left */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 transition-all duration-700 delay-[850ms] ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
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
              className="px-8 py-4 bg-white/90 hover:bg-white text-[#1A1813] border border-[#EAE3D2] hover:border-[#B8860B] text-sm font-semibold rounded-full text-center shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
            >
              Contact Specialist
            </Link>
          </div>

          {/* Trust Bar — staggered entrance with counter animation */}
          <div
            className={`pt-8 border-t border-[#EAE3D2]/60 grid grid-cols-3 gap-4 text-xs font-medium text-slate-700 transition-all duration-700 delay-[1000ms] ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <TrustItem
              icon={<Star className="w-4 h-4 fill-amber-400 text-amber-400" />}
              title="4.9/5 Rating"
              subtitle="Google Reviews"
              delay={1100}
              isLoaded={isLoaded}
            />
            <TrustItem
              icon={<ShieldCheck className="w-4 h-4" />}
              title="3-Yr Warranty"
              subtitle="On-Site Support"
              delay={1200}
              isLoaded={isLoaded}
            />
            <TrustItem
              icon={<Award className="w-4 h-4 text-[#B8860B]" />}
              title="Flagship Store"
              subtitle="Teynampet, Chennai"
              delay={1300}
              isLoaded={isLoaded}
            />
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
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </section>
  );
}

/** Individual trust bar item with staggered entrance */
function TrustItem({
  icon,
  title,
  subtitle,
  delay,
  isLoaded,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
  isLoaded: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 transition-all duration-500 ${
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#B8860B] shadow-sm border border-[#EAE3D2] group-hover:shadow-md transition-shadow">
        {icon}
      </div>
      <div>
        <div className="font-bold text-slate-900">{title}</div>
        <div className="text-[10px] text-slate-500">{subtitle}</div>
      </div>
    </div>
  );
}
