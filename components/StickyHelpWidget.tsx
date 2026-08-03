"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function StickyHelpWidget() {
  return (
    <div className="hidden lg:flex fixed right-4 sm:right-6 bottom-6 z-50 flex-col items-end gap-3 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {/* Direct Mobile Call Button */}
        <a
          href="tel:08754860555"
          className="w-12 h-12 rounded-full bg-[#0D1E35] hover:bg-white text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 group"
          title="Call 087548 60555"
        >
          <Phone className="w-5 h-5 text-white group-hover:text-[#040812] transition-colors" />
        </a>

        {/* Direct WhatsApp Floating Button with Pulse Glow */}
        <a
          href="https://wa.me/918754860555?text=Hi%20Ashik%20Lights%2C%20I%20need%20lighting%20help%20for%20my%20space."
          target="_blank"
          rel="noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group"
          title="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
          <FaWhatsapp className="w-8 h-8 relative z-10" />
        </a>
      </div>
    </div>
  );
}
