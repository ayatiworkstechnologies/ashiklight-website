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

  // Touch Dragging
  const onTouchStart = () => setIsDragging(true);
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault();
      calcPos(e.touches[0].clientX);
    };
    const onEnd = () => setIsDragging(false);
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
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end lg:items-center overflow-hidden bg-[#040812] select-none cursor-col-resize"
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
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#07101F] border-2 border-white text-white flex items-center justify-center shadow-2xl">
            <MoveHorizontal className="w-5 h-5" />

            {/* Floating Handle Tooltip */}
            <div
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 bg-[#040812]/95 backdrop-blur-md text-white text-[11px] font-bold rounded-full border border-white/30 shadow-2xl flex items-center gap-1.5 transition-all duration-300 ${
                isDragging
                  ? "opacity-40 scale-90"
                  : "animate-bounce opacity-100"
              }`}
            >
              <span>← Drag to Compare →</span>
            </div>
          </div>
        </div>

        {/* Floating Before / After Badges */}
        <span className="hidden sm:block absolute bottom-6 left-6 z-20 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider border border-white/20">
          Before
        </span>
        <span className="hidden sm:block absolute bottom-6 right-6 z-20 px-3 py-1.5 bg-white text-[#040812] text-xs font-bold rounded-lg uppercase tracking-wider shadow-lg">
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
            fill="#040812"
          />
        </svg>
      </div>
    </section>
  );
}
