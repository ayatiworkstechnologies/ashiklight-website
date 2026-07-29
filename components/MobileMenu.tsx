"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronDown, Phone, MessageSquare, MapPin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = usePathname();
  const isRouteActive = (route: string) =>
    pathname === route || pathname.startsWith(`${route}/`);
  const decorativeActive = [
    "/chandeliers",
    "/high-ceiling-chandeliers",
    "/decorative-fans",
    "/wall-pendant-lights",
    "/led-mirrors",
  ].some(isRouteActive);
  const technicalActive = ["/indoor-lights", "/architectural-lights"].some(
    isRouteActive
  );
  const submenuLinkClass = (route: string) =>
    `block py-2 ${
      isRouteActive(route)
        ? "text-[#B8860B] font-semibold"
        : "text-slate-700 hover:text-[#B8860B]"
    }`;
  const mobileLinkClass = (route: string) =>
    `block px-4 py-3 font-medium rounded-xl transition ${
      isRouteActive(route)
        ? "bg-[#FAF6F0] text-[#B8860B]"
        : "text-slate-800 hover:text-[#B8860B] hover:bg-[#FAF6F0]"
    }`;

  if (!isOpen) return null;

  const toggleSub = (menu: string) => {
    setOpenSub(openSub === menu ? null : menu);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Link href="/" onClick={onClose} className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ashik Lights Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="px-4 py-6 space-y-1">
            {/* Decorative Lighting Submenu */}
            <div>
              <button
                onClick={() => toggleSub("decorative")}
                className={`w-full flex items-center justify-between px-4 py-3 font-medium hover:text-[#B8860B] hover:bg-[#FAF6F0] rounded-xl transition ${decorativeActive ? "bg-[#FAF6F0] text-[#B8860B]" : "text-slate-800"}`}
              >
                <span>Decorative Lighting</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openSub === "decorative" ? "rotate-180 text-[#B8860B]" : ""
                  }`}
                />
              </button>
              {openSub === "decorative" && (
                <div className="pl-6 pr-2 py-1 space-y-1 bg-[#FAF6F0]/60 rounded-xl my-1 text-xs">
                  <Link
                    href="/chandeliers"
                    onClick={onClose}
                    className={submenuLinkClass("/chandeliers")}
                  >
                    Chandeliers
                  </Link>
                  <Link
                    href="/high-ceiling-chandeliers"
                    onClick={onClose}
                    className={submenuLinkClass("/high-ceiling-chandeliers")}
                  >
                    High Ceiling Chandeliers
                  </Link>
                  <Link
                    href="/decorative-fans"
                    onClick={onClose}
                    className={submenuLinkClass("/decorative-fans")}
                  >
                    Decorative Fan
                  </Link>
                  <Link
                    href="/wall-pendant-lights"
                    onClick={onClose}
                    className={submenuLinkClass("/wall-pendant-lights")}
                  >
                    Wall & Pendant Lights
                  </Link>
                  <Link
                    href="/led-mirrors"
                    onClick={onClose}
                    className={submenuLinkClass("/led-mirrors")}
                  >
                    LED Mirror
                  </Link>
                </div>
              )}
            </div>

            {/* Technical Lighting Submenu */}
            <div>
              <button
                onClick={() => toggleSub("technical")}
                className={`w-full flex items-center justify-between px-4 py-3 font-medium hover:text-[#B8860B] hover:bg-[#FAF6F0] rounded-xl transition ${technicalActive ? "bg-[#FAF6F0] text-[#B8860B]" : "text-slate-800"}`}
              >
                <span>Technical Lighting</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openSub === "technical" ? "rotate-180 text-[#B8860B]" : ""
                  }`}
                />
              </button>
              {openSub === "technical" && (
                <div className="pl-6 pr-2 py-1 space-y-1 bg-[#FAF6F0]/60 rounded-xl my-1 text-xs">
                  <Link
                    href="/indoor-lights"
                    onClick={onClose}
                    className={submenuLinkClass("/indoor-lights")}
                  >
                    Indoor Lights
                  </Link>
                  <Link
                    href="/architectural-lights"
                    onClick={onClose}
                    className={submenuLinkClass("/architectural-lights")}
                  >
                    Architectural Lights
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/outdoor-lights"
              onClick={onClose}
              className={mobileLinkClass("/outdoor-lights")}
            >
              Outdoor Lights
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={mobileLinkClass("/about")}
            >
              About
            </Link>
          </nav>
        </div>

        {/* Footer Actions: Single Contact Us CTA Button */}
        <div className="p-5 border-t border-slate-100 space-y-3 bg-[#FAF6F0]">
          <Link
            href="/contact"
            onClick={onClose}
            className={`block w-full py-3 bg-[#B8860B] hover:bg-[#a3722a] text-white font-semibold rounded-xl text-center shadow-sm transition cursor-pointer ${isRouteActive("/contact") ? "ring-2 ring-[#B8860B] ring-offset-2" : ""}`}
          >
            Contact Us
          </Link>
          <div className="flex items-center justify-around pt-2 text-slate-700 text-xs font-medium">
            <a
              href="tel:08754860555"
              className="flex items-center gap-1 hover:text-[#B8860B]"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" /> Call Us
            </a>
            <a
              href="https://wa.me/918754860555"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-600"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
            </a>
            <Link href="/#showrooms" onClick={onClose} className="flex items-center gap-1 hover:text-[#B8860B]">
              <MapPin className="w-3.5 h-3.5 text-[#B8860B]" /> Stores
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
