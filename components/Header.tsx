"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE3D2] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
          {/* Official Brand Logo from /public/logo.png */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <Image
              src="/logo.png"
              alt="Ashik Lights Logo"
              width={160}
              height={50}
              priority
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navbar: Decorative Lighting ▼ | Technical Lighting ▼ | Outdoor Lights | About */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium text-[#2C261E]">
            {/* 1. Decorative Lighting Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1.5 hover:text-[#B8860B] transition-colors py-1 cursor-pointer whitespace-nowrap">
                <span>Decorative Lighting</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#B8860B] transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-60 bg-white shadow-xl rounded-xl border border-[#EAE3D2] p-3 space-y-1 animate-fadeIn">
                <Link
                  href="/chandeliers"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  Chandeliers
                </Link>
                <Link
                  href="/high-ceiling-chandeliers"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  High Ceiling Chandeliers
                </Link>
                <Link
                  href="/decorative-fans"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  Decorative Fan
                </Link>
                <Link
                  href="/wall-pendant-lights"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  Wall & Pendant Lights
                </Link>
                <Link
                  href="/led-mirrors"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  LED Mirror
                </Link>
              </div>
            </div>

            {/* 2. Technical Lighting Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1.5 hover:text-[#B8860B] transition-colors py-1 cursor-pointer whitespace-nowrap">
                <span>Technical Lighting</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#B8860B] transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white shadow-xl rounded-xl border border-[#EAE3D2] p-3 space-y-1 animate-fadeIn">
                <Link
                  href="/indoor-lights"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  Indoor Lights
                </Link>
                <Link
                  href="/architectural-lights"
                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#FAF6F0] hover:text-[#B8860B] rounded-lg transition"
                >
                  Architectural Lights
                </Link>
              </div>
            </div>

            {/* 3. Direct Category: Outdoor Lights */}
            <Link
              href="/outdoor-lights"
              className="hover:text-[#B8860B] transition-colors cursor-pointer whitespace-nowrap"
            >
              Outdoor Lights
            </Link>

            {/* 4. About */}
            <Link
              href="/about"
              className="hover:text-[#B8860B] transition-colors cursor-pointer whitespace-nowrap"
            >
              About
            </Link>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Single High-Visibility Contact CTA Button */}
            <Link
              href="/contact"
              className="btn-shimmer hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#B8860B] rounded-lg"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
