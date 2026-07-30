"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 3 second load timer (2.5s display + 0.5s fade out)
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#1A1813] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6 text-center px-4">
        {/* Luxury Glowing Crown Emblem */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/40 flex items-center justify-center text-[#B8860B] shadow-2xl animate-pulse">
            <Sparkles className="w-8 h-8 text-[#B8860B]" />
          </div>
          <div className="absolute -inset-2 rounded-full border border-[#B8860B]/20 animate-ping pointer-events-none" />
        </div>

        {/* Elegant Brand Typography (No Logo Image) */}
        <div className="space-y-1.5">
          <span className="text-[#B8860B] text-[11px] font-bold tracking-[0.35em] uppercase block">
            LUXURY LIGHTING SHOWROOM
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-widest text-[#FAF6F0]">
            ASHIK LIGHTS
          </h1>
          <p className="text-slate-400 text-xs font-light tracking-wider">
            CHENNAI • TAMIL NADU
          </p>
        </div>

        {/* Gold Loader Bar & Pulsing Dots */}
        <div className="w-48 bg-white/10 h-1 rounded-full overflow-hidden relative">
          <div className="bg-[#B8860B] h-full rounded-full animate-progress-bar" />
        </div>

        <div className="flex items-center gap-2 pt-1">
          <div className="w-2 h-2 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
