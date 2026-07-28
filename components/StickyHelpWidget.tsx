"use client";

import React, { useState } from "react";
import { Lightbulb, Phone, MessageSquare } from "lucide-react";

export default function StickyHelpWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2 pr-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Small Lightbulb Icon Pill that Expands Text on Hover */}
      <div className="flex items-center bg-[#1A1813] border-l-2 border-y border-[#B8860B] text-white rounded-l-full shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(184,134,11,0.5)]">
        <div className="w-12 h-12 flex items-center justify-center text-[#B8860B] bg-[#1A1813] shrink-0">
          <Lightbulb className="w-6 h-6 animate-pulse" />
        </div>

        {/* Hover-Revealed Text Letters */}
        <div
          className={`overflow-hidden transition-all duration-500 whitespace-nowrap ${
            isHovered ? "max-w-xs px-3" : "max-w-0 px-0"
          }`}
        >
          <span className="text-xs font-bold tracking-wider text-white">
            Need Lighting Help?
          </span>
        </div>
      </div>

      {/* Direct Open Action Buttons: Phone & WhatsApp */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-90 translate-x-1"
        }`}
      >
        {/* Direct Mobile Call Button */}
        <a
          href="tel:08754860555"
          className="w-10 h-10 rounded-full bg-[#B8860B] hover:bg-[#a3722a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
          title="Call 087548 60555"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href="https://wa.me/9108754860555?text=Hi%20Ashik%20Lights%2C%20I%20need%20lighting%20help%20for%20my%20space."
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
          title="WhatsApp Us"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
