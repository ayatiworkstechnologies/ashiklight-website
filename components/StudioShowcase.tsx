"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface StudioShowcaseProps {
  onOpenConsultation?: () => void;
}

export default function StudioShowcase({ onOpenConsultation }: StudioShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const studios = [
    {
      id: "showroom-experience",
      num: "01",
      title: "Luxury Decorative Lights Showroom",
      shortTitle: "Luxury Decorative Lights Showroom",
      category: "Showroom",
      badge: "Showroom",
      image: "/assets/Luxury Decorative Lights Showroom.webp",
    },
    {
      id: "exquisite-high-ceiling",
      num: "02",
      title: "Exquisite High Ceiling Studio",
      shortTitle: "Exquisite High Ceiling Studio",
      category: "High Ceiling",
      badge: "High Ceiling",
      image: "/assets/Exquisite High Ceiling Studio.webp",
    },
    {
      id: "architectural-studio",
      num: "03",
      title: "Architectural Indoor & Outdoor Studio",
      shortTitle: "Architectural Indoor & Outdoor Studio",
      category: "Architectural & Outdoor",
      badge: "Architectural",
      image: "/assets/Architectural Indoor & Outdoor Studio.webp",
    },
    {
      id: "exclusive-decorative",
      num: "04",
      title: "Exclusive Decorative Lights",
      shortTitle: "Exclusive Decorative Lights",
      category: "Decorative Lights",
      badge: "Decorative",
      image: "/assets/Exclusive Decorative Lights.webp",
    },
  ];

  const current = studios[activeIdx];

  const handleSelectStudio = (index: number) => {
    setActiveIdx(index);
    if (spotlightRef.current) {
      spotlightRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#050505] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Block */}
        <div className="mb-8 sm:mb-12">
          <div data-reveal="left" className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span>Our Experience Studios</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Explore Our Luxury Lighting Showcase
            </h2>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8"
          data-reveal="up"
        >
          {/* MAIN SPOTLIGHT COLUMN (LG: 7 COLS) */}
          <div className="lg:col-span-7" ref={spotlightRef}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/35 bg-[#121212] shadow-2xl h-[340px] sm:h-[480px] lg:h-[580px] flex flex-col justify-between p-4 sm:p-6 lg:p-8 group transition-all duration-500">
              {/* Background Image with Key Fade Animation */}
              <Image
                key={current.id}
                src={current.image}
                alt={current.title}
                fill
                priority
                quality={100}
                unoptimized
                sizes="100vw"
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out animate-fade-in"
              />

              {/* Top Badges Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 font-serif text-xs sm:text-sm font-bold flex items-center justify-center shadow-lg">
                    {current.num}
                  </span>
                  <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#D4AF37]/40 shadow-lg">
                    {current.badge}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 bg-black/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold rounded-full border border-[#D4AF37]/30 shadow-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  Live Spotlight
                </span>
              </div>

              {/* Bottom Details Box */}
              <div
                key={`details-${current.id}`}
                className="relative z-10 space-y-3 sm:space-y-4 animate-fade-in"
              >
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {current.title}
                </h3>

                {/* Action CTA */}
                <div className="pt-1 sm:pt-2">
                  <a
                    href={`https://wa.me/918754860555?text=${encodeURIComponent(
                      `Hi Ashik Lights, I want to inquire about ${current.title}. Please share catalogue and details.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Inquire Studio Details on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SIDE SELECTOR DECK (LG: 5 COLS) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-4">
            {studios.map((item, index) => {
              const isSelected = activeIdx === index;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectStudio(index)}
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 p-3 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none ${
                    isSelected
                      ? "border-[#D4AF37] bg-[#161616] shadow-xl ring-1 ring-[#D4AF37]/50 lg:-translate-x-1"
                      : "border-[#D4AF37]/20 hover:border-[#D4AF37]/50 bg-[#0E0E0E] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    {/* Thumbnail Box */}
                    <div className="relative w-20 sm:w-28 h-16 sm:h-22 rounded-lg sm:rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={100}
                        unoptimized
                        sizes="300px"
                        className={`object-cover object-center transition-transform duration-500 ${
                          isSelected ? "scale-110" : "scale-100"
                        }`}
                      />
                      <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 px-1.5 py-0.5 bg-black/80 text-[9px] sm:text-[10px] font-bold text-[#D4AF37] rounded-md border border-[#D4AF37]/30">
                        {item.num}
                      </span>
                    </div>

                    {/* Content text */}
                    <div className="space-y-0.5 sm:space-y-1 min-w-0">
                      <h4 className="font-serif text-xs sm:text-base font-semibold text-white truncate group-hover:text-[#D4AF37] transition-colors">
                        {item.shortTitle}
                      </h4>
                      <p className="text-slate-400 text-[11px] sm:text-xs font-light truncate">
                        {item.badge}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="shrink-0">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#D4AF37] text-black shadow-md"
                          : "bg-white/5 text-slate-400 group-hover:bg-[#D4AF37]/20 group-hover:text-[#D4AF37]"
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
