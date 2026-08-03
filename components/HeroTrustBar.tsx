"use client";

import React from "react";
import {
  Calendar,
  Store,
  Sparkles,
  UserCheck,
  Home,
} from "lucide-react";

const items = [
  { icon: Calendar,  label: "Since 2016" },
  { icon: Store,     label: "Luxury Showroom" },
  { icon: Sparkles,  label: "Latest Collections" },
  { icon: UserCheck, label: "Expert Guidance" },
  { icon: Home,      label: "Every Space Covered" },
];

export default function HeroTrustBar() {
  return (
    <div className="bg-[#060E1A] border-y border-[#D4A017]/15 py-5 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-8">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 group"
            >
              {/* Circle icon */}
              <div className="w-10 h-10 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide group-hover:text-[#D4A017] transition-colors duration-300">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
