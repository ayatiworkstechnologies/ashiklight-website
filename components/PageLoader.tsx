"use client";

import React, { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide loader after 1 second matching live site
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#1A1813] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        {/* Ashik Lights Logo Brand */}
        <div className="flex flex-col items-center">
          <span className="font-serif text-4xl font-bold tracking-[0.25em] text-white">
            ASHIK
          </span>
          <div className="flex items-center gap-2 text-xs tracking-[0.4em] text-[#B8860B] font-semibold uppercase -mt-1">
            <span className="h-[1px] w-4 bg-[#B8860B]/80" />
            LIGHTS
            <span className="h-[1px] w-4 bg-[#B8860B]/80" />
          </div>
        </div>

        {/* 3 Pulsing Gold Loading Dots */}
        <div className="flex items-center gap-2 pt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
