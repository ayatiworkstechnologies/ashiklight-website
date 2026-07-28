"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Award } from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FAF6F0]">
      {/* Background Image: Luxury Warm Indoor Living Room with Grand Chandelier */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner.webp"
          alt="Luxury indoor living room with warm chandelier lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center transform scale-105 animate-fade-in transition-transform duration-1000"
        />
        {/* Soft Warm Left Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/95 via-[#FAF6F0]/85 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-transparent to-transparent h-20 bottom-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6 animate-fade-in-up">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold tracking-wider uppercase backdrop-blur-xs animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping" />
            CHENNAI&apos;S PREMIER LIGHTING DESTINATION
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1813] leading-[1.12]">
            Illuminate Your Space <br />
            With <span className="italic text-[#B8860B] font-medium">Timeless Luxury.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg">
            Discover statement chandeliers, double-height cascades, architectural magnetic tracks & luxury outdoor lights across our 6 Chennai showrooms.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/#collections"
              className="btn-shimmer px-8 py-4 text-white text-sm font-semibold rounded-full text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white/90 hover:bg-white text-[#1A1813] border border-[#EAE3D2] hover:border-[#B8860B] text-sm font-semibold rounded-full text-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              Contact Specialist
            </Link>
          </div>

          {/* Floating Trust Bar with Smooth Floating Motion */}
          <div className="pt-8 border-t border-[#EAE3D2]/60 grid grid-cols-3 gap-4 text-xs font-medium text-slate-700 animate-float-slow">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#B8860B] shadow-2xs border border-[#EAE3D2]">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="font-bold text-slate-900">4.9/5 Rating</div>
                <div className="text-[10px] text-slate-500">Google Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#B8860B] shadow-2xs border border-[#EAE3D2]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900">3-Yr Warranty</div>
                <div className="text-[10px] text-slate-500">On-Site Support</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#B8860B] shadow-2xs border border-[#EAE3D2]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900">6 Stores</div>
                <div className="text-[10px] text-slate-500">Across Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
