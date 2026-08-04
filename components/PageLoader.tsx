"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 2 second total display (1.6s progress + 0.4s fade out)
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 400);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center space-y-6 text-center px-4 relative z-10">
        {/* White Logo Image with Pulsing Glow */}
        <div className="relative w-48 sm:w-56 h-16 sm:h-20 animate-pulse">
          <Image
            src="/logo.png"
            alt="Ashik Lights Logo"
            fill
            priority
            sizes="(max-width: 640px) 192px, 224px"
            className="object-contain white-logo"
          />
        </div>

        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
          <span className="w-5 h-px bg-[#D4AF37]/40" />
          LUXURY LIGHTING SHOWROOM
          <span className="w-5 h-px bg-[#D4AF37]/40" />
        </div>

        {/* Loader Bar */}
        <div className="w-48 bg-[#161616] h-1 rounded-full overflow-hidden relative border border-[#D4AF37]/30">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] h-full rounded-full animate-progress-bar" />
        </div>
      </div>
    </div>
  );
}
