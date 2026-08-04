"use client";

import React from "react";
import {
  Award,
  Store,
  Sparkles,
  UserCheck,
  Home,
} from "lucide-react";

const items = [
  { icon: Award,     label: "Trusted Experience" },
  { icon: Store,     label: "Luxury Showroom" },
  { icon: Sparkles,  label: "Latest Collections" },
  { icon: UserCheck, label: "Expert Guidance" },
  { icon: Home,      label: "Every Space Covered" },
];

export default function HeroTrustBar() {
  return (
    <div className="bg-[#0E0E0E] border-y border-[#D4AF37]/25 py-3.5 sm:py-5 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center lg:justify-between overflow-x-auto scrollbar-hide flex-nowrap md:flex-wrap gap-6 sm:gap-8 pb-1 md:pb-0">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group"
            >
              {/* Circle icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/30 bg-[#161616] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-sm shrink-0">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide whitespace-nowrap group-hover:text-[#D4AF37] transition-colors duration-300">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
