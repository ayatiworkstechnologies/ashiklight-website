"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { VectorDiamondGrid, VectorLightRays } from "@/components/VectorAccents";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sliderPos, setSliderPos] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalDrag = useRef<boolean | null>(null);

  // Calculate drag percentage across full hero section width
  const calcPos = useCallback((clientX: number) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  // Mouse Dragging
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => calcPos(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, calcPos]);

  // Touch Dragging — Smart direction check to allow normal vertical page scrolling
  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    isHorizontalDrag.current = null;
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: TouchEvent) => {
      if (!touchStartPos.current || !e.touches[0]) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = Math.abs(currentX - touchStartPos.current.x);
      const deltaY = Math.abs(currentY - touchStartPos.current.y);

      // Determine user intent on first movement threshold
      if (isHorizontalDrag.current === null) {
        if (deltaX > 6 || deltaY > 6) {
          isHorizontalDrag.current = deltaX > deltaY;
        }
      }

      // Only drag slider and prevent scroll if movement is horizontal
      if (isHorizontalDrag.current === true) {
        if (e.cancelable) e.preventDefault();
        calcPos(currentX);
      }
    };

    const onEnd = () => {
      setIsDragging(false);
      touchStartPos.current = null;
      isHorizontalDrag.current = null;
    };

    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, calcPos]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end lg:items-center overflow-hidden bg-[#050505] select-none"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* ── FULL HERO BEFORE & AFTER BACKGROUND SLIDER ── */}
      <div className="absolute inset-0 z-0">
        {/* AFTER Image (Full Background) — Desktop & Mobile */}
        <img
          src="/banner/des-after.webp"
          alt="Ashik Lights After Lighting Transformation"
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
          draggable={false}
        />
        <img
          src="/banner/banner-after.webp"
          alt="Ashik Lights After Lighting Transformation - Mobile"
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
          draggable={false}
        />

        {/* BEFORE Image (Clipped to Left Side) — Desktop & Mobile */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/banner/des-before.webp"
            alt="Before Lighting Transformation"
            className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            draggable={false}
          />
          <img
            src="/banner/banner-before.webp"
            alt="Before Lighting Transformation - Mobile"
            className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Full-Height Vertical Drag Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.9)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0E0E0E] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-2xl">
            <MoveHorizontal className="w-5 h-5" />

            {/* Floating Handle Tooltip on Right Side */}
            <div
              className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3.5 py-1.5 bg-[#050505]/95 backdrop-blur-md text-[#D4AF37] text-[11px] font-bold rounded-full border border-[#D4AF37]/40 shadow-2xl flex items-center gap-1.5 transition-all duration-300 pointer-events-none ${
                isDragging
                  ? "opacity-40 scale-90"
                  : "animate-pulse opacity-100"
              }`}
            >
              <span>Drag to Compare</span>
            </div>
          </div>
        </div>

        {/* Floating Before / After Badges */}
        <span className="hidden sm:block absolute bottom-6 left-6 z-20 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider border border-[#D4AF37]/30">
          Before
        </span>
        <span className="hidden sm:block absolute bottom-6 right-6 z-20 px-3 py-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#B8860B] text-black text-xs font-extrabold rounded-lg uppercase tracking-wider shadow-lg">
          After
        </span>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-8 sm:py-16 lg:py-24 w-full pointer-events-auto">
        <div className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6">
          {/* Main Headline — staggered word reveal with crisp text shadow */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] [text-shadow:_0_4px_30px_rgba(0,0,0,0.95)]">
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
              With Timeless Luxury.
            </span>
          </h1>

          {/* Subtitle & Explore Collections CTA Button */}
          <p
            className={`text-slate-200 text-sm sm:text-base font-light max-w-lg leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] transition-all duration-700 delay-[600ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Statement crystal chandeliers, high-ceiling foyer cascades, BLDC decorative fans &amp; architectural magnetic profiles in Chennai.
          </p>

          <div
            className={`pt-2 transition-all duration-700 delay-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/#collections"
              className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-black font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
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
