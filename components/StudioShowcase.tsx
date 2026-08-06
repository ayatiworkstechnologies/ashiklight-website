"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface StudioShowcaseProps {
  onOpenConsultation?: () => void;
}

export default function StudioShowcase({
  onOpenConsultation,
}: StudioShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const studios = [
    {
      id: "exclusive-decorative",
      num: "01",
      title: "Exclusive Decorative Lighting Studio",
      shortTitle: "Decorative Studio",
      category: "Bespoke Design",
      badge: "Decorative",
      image: "/assets/exclusive_decorative_lights.webp",
      shortDesc:
        "Handcrafted K9 crystal chandeliers and designer decorative sconces engineered to bring warm, ethereal elegance to grand dining & living foyers.",
      specs: [
        { label: "Material", value: "Optical K9 Crystal & Solid Brass" },
        { label: "Tailoring", value: "Custom Heights & Drops" },
        { label: "Illumination", value: "2700K - 3000K Warm Glow" },
      ],
      highlights: [
        "Pure K9 Crystal",
        "Custom Drop Lengths",
        "Living & Dining Focus",
      ],
    },
    {
      id: "exquisite-high-ceiling",
      num: "02",
      title: "Exquisite High-Ceiling Studio",
      shortTitle: "High-Ceiling Studio",
      category: "Grand Architecture",
      badge: "High Ceiling",
      image: "/assets/exquisite_high_ceiling_studio.webp",
      shortDesc:
        "Architectural-scale multi-pendant installations for 18ft to 25ft double-height foyers, grand staircases, and luxury duplexes.",
      specs: [
        { label: "Ceiling Drop", value: "Up to 25 Feet Drop Lengths" },
        { label: "Engineering", value: "CAD Structural Load Tested" },
        { label: "Control", value: "DALI / Smart Automation" },
      ],
      highlights: [
        "Up to 25ft Cable Drops",
        "Structural Load Tested",
        "Smart Automation",
      ],
    },
    {
      id: "architectural-studio",
      num: "03",
      title: "Architectural & Outdoor Studio",
      shortTitle: "Architectural & Landscape",
      category: "Precision Lighting",
      badge: "Architectural",
      image: "/assets/architectural_indoor_outdoor_studio.webp",
      shortDesc:
        "Seamless ambient coves, anti-glare magnetic track spotlights, and IP67 weather-sealed outdoor landscape fixtures for modern estates.",
      specs: [
        { label: "CRI Rating", value: "> 95 True Color Rendering" },
        { label: "Protection", value: "IP65 / IP67 Weatherproof" },
        { label: "System", value: "48V Low-Voltage Magnetic" },
      ],
      highlights: [
        "CRI > 95 Color Rendering",
        "48V Magnetic Tracks",
        "IP67 Weather-Sealed",
      ],
    },
    {
      id: "showroom-experience",
      num: "04",
      title: "Luxury Showroom Experience Center",
      shortTitle: "Teynampet Flagship",
      category: "Experience Center",
      badge: "Teynampet Flagship",
      image: "/assets/luxury_decorative_lights_showroom.webp",
      shortDesc:
        "Visit South India's largest luxury lighting experience center at Anna Salai, Teynampet, Chennai featuring 500+ live interactive displays.",
      specs: [
        { label: "Location", value: "Anna Salai, Teynampet, Chennai" },
        { label: "Displays", value: "500+ Live Fixture Setups" },
        { label: "Consultation", value: "Certified Lighting Architects" },
      ],
      highlights: [
        "500+ Live Displays",
        "Dark Simulation Room",
        "1-on-1 Architect Advice",
      ],
    },
  ];

  const current = studios[activeIdx];

  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Block */}
        <div className="mb-12">
          <div data-reveal="left" className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Explore Our Luxury Lighting Showcase
            </h2>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8"
          data-reveal="up"
        >
          {/* MAIN SPOTLIGHT COLUMN (LG: 7 COLS) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/35 bg-[#121212] shadow-2xl h-[480px] sm:h-[540px] lg:h-[580px] flex flex-col justify-between p-6 sm:p-8 group transition-all duration-500">
              {/* Background Image with Key Fade Animation */}
              <Image
                key={current.id}
                src={current.image}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out animate-fade-in"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 opacity-90" />

              {/* Top Badges Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 font-serif text-sm font-bold flex items-center justify-center shadow-lg">
                    {current.num}
                  </span>
                  <span className="px-3.5 py-1.5 bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#D4AF37]/40 shadow-lg">
                    {current.badge}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-[#D4AF37]/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  Live Spotlight
                </span>
              </div>

              {/* Bottom Details Box */}
              <div
                key={`details-${current.id}`}
                className="relative z-10 space-y-4 animate-fade-in"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/15 px-3 py-1 rounded-md border border-[#D4AF37]/30 inline-block">
                    {current.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                    {current.shortDesc}
                  </p>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {current.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-200 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4AF37]/25"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/918754860555?text=${encodeURIComponent(
                      `Hi Ashik Lights, I want to inquire about ${current.title}. Please share catalogue and details.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Inquire Studio Details on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SIDE SELECTOR DECK (LG: 5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {studios.map((item, index) => {
              const isSelected = activeIdx === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                  className={`relative rounded-2xl overflow-hidden border transition-all duration-300 p-4 flex items-center justify-between gap-4 cursor-pointer select-none ${
                    isSelected
                      ? "border-[#D4AF37] bg-[#161616] shadow-xl ring-1 ring-[#D4AF37]/50 -translate-x-1"
                      : "border-[#D4AF37]/20 hover:border-[#D4AF37]/50 bg-[#0E0E0E] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Thumbnail Box */}
                    <div className="relative w-24 sm:w-28 h-20 sm:h-22 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="120px"
                        className={`object-cover object-center transition-transform duration-500 ${
                          isSelected ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <span className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-black/80 text-[10px] font-bold text-[#D4AF37] rounded-md border border-[#D4AF37]/30">
                        {item.num}
                      </span>
                    </div>

                    {/* Content text */}
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block truncate">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-white truncate group-hover:text-[#D4AF37] transition-colors">
                        {item.shortTitle}
                      </h4>
                      <p className="text-slate-400 text-xs font-light line-clamp-1">
                        {item.badge}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="shrink-0 pr-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#D4AF37] text-black shadow-md"
                          : "bg-white/5 text-slate-400 group-hover:bg-[#D4AF37]/20 group-hover:text-[#D4AF37]"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
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
