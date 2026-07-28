"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/9106754860555"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:scale-105"
      aria-label="Chat with Ashik Lights on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      <span className="hidden sm:inline font-semibold text-xs sm:text-sm tracking-wide">
        Need Lighting Help?
      </span>
    </a>
  );
}
