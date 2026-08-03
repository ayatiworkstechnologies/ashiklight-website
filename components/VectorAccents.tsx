"use client";

import React from "react";

/**
 * Reusable luxury SVG vector accents for background patterns,
 * section headers, corner motifs, and lighting ray lines across the site.
 */

export function VectorDiamondGrid({ className = "opacity-[0.03]" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diamondGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamondGrid)" />
      </svg>
    </div>
  );
}

export function VectorLightRays({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
        <circle cx="150" cy="150" r="140" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="150" cy="150" r="100" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="#FFFFFF" strokeWidth="0.75" />
        <line x1="0" y1="150" x2="300" y2="150" stroke="#FFFFFF" strokeWidth="0.75" />
        <line x1="43.93" y1="43.93" x2="256.07" y2="256.07" stroke="#FFFFFF" strokeWidth="0.5" />
        <line x1="256.07" y1="43.93" x2="43.93" y2="256.07" stroke="#FFFFFF" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export function VectorCornerMotif({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const posClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <div className={`absolute ${posClasses[position]} pointer-events-none w-20 h-20 opacity-25 z-0`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 H60 C60 30 30 60 0 60 V0 Z" fill="url(#silverGrad)" opacity="0.15" />
        <path d="M0 20 H40 C40 40 20 40 0 40" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" fill="#FFFFFF" />
        <defs>
          <linearGradient id="silverGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function VectorArchOutline({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="240" height="320" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
        <path d="M10 310 V120 C10 59.25 59.25 10 120 10 C180.75 10 230 59.25 230 120 V310" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M30 310 V130 C30 80.29 70.29 40 120 40 C169.71 40 210 80.29 210 130 V310" stroke="#FFFFFF" strokeWidth="1" />
      </svg>
    </div>
  );
}
