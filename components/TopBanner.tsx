"use client";

import React from "react";
import { Store, Lightbulb, Building2, PhoneCall } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="hidden md:block bg-[#0D1E35] border-b border-white/15 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8">
          <div className="flex items-center gap-1.5 font-medium hover:text-white transition-colors cursor-pointer">
            <Store className="w-3.5 h-3.5 text-white/80" />
            <span>Flagship Store, Teynampet, Chennai</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium hover:text-white transition-colors cursor-pointer">
            <Lightbulb className="w-3.5 h-3.5 text-white/80" />
            <span>Expert Lighting Consultation</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium hover:text-white transition-colors cursor-pointer">
            <Building2 className="w-3.5 h-3.5 text-white/80" />
            <span>Project Support</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:08754860555"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white font-semibold transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-white/80" />
            <span>Call Us:</span>
            <span className="font-bold text-sm tracking-tight text-white">
              087548 60555
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
