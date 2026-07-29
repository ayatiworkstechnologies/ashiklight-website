"use client";

import React, { useState } from "react";
import { Lightbulb, Phone, MessageSquare } from "lucide-react";

export default function StickyHelpWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2 pr-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          href="https://wa.me/918754860555?text=Hi%20Ashik%20Lights%2C%20I%20need%20lighting%20help%20for%20my%20space."
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
