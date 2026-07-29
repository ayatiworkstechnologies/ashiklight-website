"use client";

import React from "react";
import { Store, Lightbulb, Building2, PhoneCall } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] text-[#4A4538] text-xs py-2 px-4 sm:px-6 lg:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8">
          <div className="flex items-center gap-1.5 font-medium hover:text-[#B8860B] transition-colors cursor-pointer">
            <Store className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>6 Showrooms Across Chennai</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium hover:text-[#B8860B] transition-colors cursor-pointer">
            <Lightbulb className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Expert Lighting Consultation</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium hover:text-[#B8860B] transition-colors cursor-pointer">
            <Building2 className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Project Support</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:08754860555"
            className="flex items-center gap-1.5 text-[#2C261E] hover:text-[#B8860B] font-semibold transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Call Us:</span>
            <span className="font-bold text-sm tracking-tight text-[#1A1813]">
              087548 60555
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
