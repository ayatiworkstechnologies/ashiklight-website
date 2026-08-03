"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Grid2X2, Home, MapPin, Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY < 80) {
          setNavHidden(false);
        } else if (delta > 6) {
          setNavHidden(true);
        } else if (delta < -6) {
          setNavHidden(false);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const decorativeRoutes = [
    "/chandeliers",
    "/high-ceiling-chandeliers",
    "/decorative-fans",
    "/wall-pendant-lights",
    "/led-mirrors",
  ];
  const technicalRoutes = ["/indoor-lights", "/architectural-lights"];
  const isRouteActive = (route: string) =>
    pathname === route || pathname.startsWith(`${route}/`);
  const isDecorativeActive = decorativeRoutes.some(isRouteActive);
  const isTechnicalActive = technicalRoutes.some(isRouteActive);
  const dropdownLinkClass = (route: string) =>
    `block px-3 py-2 text-xs font-medium rounded-lg transition ${
      isRouteActive(route)
        ? "bg-[#B8860B]/20 text-[#D4A017]"
        : "text-slate-200 hover:bg-[#B8860B]/15 hover:text-[#D4A017]"
    }`;
  const directLinkClass = (route: string) =>
    `transition-colors cursor-pointer whitespace-nowrap ${
      isRouteActive(route)
        ? "text-[#D4A017] font-semibold"
        : "text-white hover:text-[#D4A017]"
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0A1628]/97 backdrop-blur-xl border-b border-[#B8860B]/30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-6">
          {/* Official Brand Logo from /public/logo.png — Golden Luxury Tint, Larger Size, No Outline */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <Image
              src="/logo.png"
              alt="Ashik Lights Logo"
              width={200}
              height={60}
              priority
              className="h-12 lg:h-15 w-auto object-contain white-logo group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navbar: Decorative Lighting ▼ | Technical Lighting ▼ | Outdoor Lights | About */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium text-white">
            {/* 1. Decorative Lighting Dropdown */}
            <div className="relative group py-2">
              <button className={`flex items-center gap-1.5 transition-colors py-1 cursor-pointer whitespace-nowrap ${isDecorativeActive ? "text-[#D4A017] font-semibold" : "text-white hover:text-[#D4A017]"}`}>
                <span>Decorative Lighting</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D4A017] transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-60 bg-[#0D1E35] shadow-xl rounded-xl border border-[#B8860B]/30 p-3 space-y-1 animate-fadeIn">
                <Link
                  href="/chandeliers"
                  className={dropdownLinkClass("/chandeliers")}
                >
                  Chandeliers
                </Link>
                <Link
                  href="/high-ceiling-chandeliers"
                  className={dropdownLinkClass("/high-ceiling-chandeliers")}
                >
                  High Ceiling Chandeliers
                </Link>
                <Link
                  href="/decorative-fans"
                  className={dropdownLinkClass("/decorative-fans")}
                >
                  Decorative Fan
                </Link>
                <Link
                  href="/wall-pendant-lights"
                  className={dropdownLinkClass("/wall-pendant-lights")}
                >
                  Wall & Pendant Lights
                </Link>
                <Link
                  href="/led-mirrors"
                  className={dropdownLinkClass("/led-mirrors")}
                >
                  LED Mirror
                </Link>
              </div>
            </div>

            {/* 2. Technical Lighting Dropdown */}
            <div className="relative group py-2">
              <button className={`flex items-center gap-1.5 transition-colors py-1 cursor-pointer whitespace-nowrap ${isTechnicalActive ? "text-[#D4A017] font-semibold" : "text-white hover:text-[#D4A017]"}`}>
                <span>Technical Lighting</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D4A017] transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-[#0D1E35] shadow-xl rounded-xl border border-[#B8860B]/30 p-3 space-y-1 animate-fadeIn">
                <Link
                  href="/indoor-lights"
                  className={dropdownLinkClass("/indoor-lights")}
                >
                  Indoor Lights
                </Link>
                <Link
                  href="/architectural-lights"
                  className={dropdownLinkClass("/architectural-lights")}
                >
                  Architectural Lights
                </Link>
              </div>
            </div>

            {/* 3. Direct Category: Outdoor Lights */}
            <Link
              href="/outdoor-lights"
              className={directLinkClass("/outdoor-lights")}
            >
              Outdoor Lights
            </Link>

            {/* 4. About */}
            <Link
              href="/about"
              className={directLinkClass("/about")}
            >
              About
            </Link>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Single High-Visibility Contact CTA Button */}
            <Link
              href="/contact"
              className={`btn-shimmer hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap ${isRouteActive("/contact") ? "ring-2 ring-[#B8860B] ring-offset-2" : ""}`}
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#D4A017] bg-[#0D1E35] border border-[#B8860B]/40 rounded-xl active:scale-95 transition"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile app-style bottom navigation — auto-hides on scroll down, reveals on scroll up */}
      <nav
        className={`fixed inset-x-3 bottom-3 z-50 lg:hidden h-[68px] rounded-2xl border border-[#B8860B]/30 bg-[#0A1628]/97 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] px-2 grid grid-cols-5 items-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          navHidden ? "translate-y-[calc(100%+24px)]" : "translate-y-0"
        }`}
        aria-label="Mobile navigation"
      >
        <Link
          href="/"
          className={`flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition ${
            pathname === "/" ? "bg-[#B8860B]/20 text-[#D4A017]" : "text-slate-400"
          }`}
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/#collections"
          className="flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-slate-400 active:bg-[#B8860B]/20 active:text-[#D4A017]"
        >
          <Grid2X2 className="h-5 w-5" />
          <span>Explore</span>
        </Link>
        <a
          href="https://wa.me/918754860555?text=Hi%20Ashik%20Lights%2C%20I%20need%20lighting%20help."
          target="_blank"
          rel="noreferrer"
          className="-mt-7 flex h-14 w-14 justify-self-center flex-col items-center justify-center rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-600/30 active:scale-95 transition"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-7 w-7" />
        </a>
        <Link
          href="/#showrooms"
          className="flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-slate-400 active:bg-[#B8860B]/20 active:text-[#D4A017]"
        >
          <MapPin className="h-5 w-5" />
          <span>Stores</span>
        </Link>
        <Link
          href="/contact"
          className={`flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold transition ${
            isRouteActive("/contact")
              ? "bg-[#B8860B]/20 text-[#D4A017]"
              : "text-slate-400"
          }`}
        >
          <Phone className="h-5 w-5" />
          <span>Contact</span>
        </Link>
      </nav>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
