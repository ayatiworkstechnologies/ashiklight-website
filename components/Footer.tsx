"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1813] text-slate-300 pt-16 pb-8 border-t border-[#332D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#332D24]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex flex-col inline-block">
              <span className="font-serif text-3xl font-bold tracking-[0.18em] text-white">
                ASHIK
              </span>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.35em] text-[#B8860B] font-semibold uppercase">
                <span className="h-[1px] w-3 bg-[#B8860B]/60"></span>
                LIGHTS
                <span className="h-[1px] w-3 bg-[#B8860B]/60"></span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Established in 2016 by Mr. Abdul Hameed Ashik. ASHIK LIGHTS is Chennai&apos;s leading luxury lighting showroom, dedicated to providing complete lighting solutions across residential, commercial, and hospitality sectors.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-slate-400 text-[10px]">(Google Reviews)</span>
            </div>
          </div>

          {/* Core Categories */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332D24] pb-2 inline-block">
              Collections
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <li>
                <Link href="/chandeliers" className="hover:text-[#B8860B] transition-colors">
                  Chandeliers
                </Link>
              </li>
              <li>
                <Link href="/high-ceiling-chandeliers" className="hover:text-[#B8860B] transition-colors">
                  High Ceiling
                </Link>
              </li>
              <li>
                <Link href="/indoor-lights" className="hover:text-[#B8860B] transition-colors">
                  Indoor Lights
                </Link>
              </li>
              <li>
                <Link href="/decorative-fans" className="hover:text-[#B8860B] transition-colors">
                  Decorative Fan
                </Link>
              </li>
              <li>
                <Link href="/wall-pendant-lights" className="hover:text-[#B8860B] transition-colors">
                  Wall & Pendant
                </Link>
              </li>
              <li>
                <Link href="/led-mirrors" className="hover:text-[#B8860B] transition-colors">
                  LED Mirror
                </Link>
              </li>
              <li>
                <Link href="/architectural-lights" className="hover:text-[#B8860B] transition-colors">
                  Architectural
                </Link>
              </li>
              <li>
                <Link href="/outdoor-lights" className="hover:text-[#B8860B] transition-colors">
                  Outdoor Lights
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332D24] pb-2 inline-block">
              Flagship Store
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>#313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet, Chennai, Tamil Nadu 600006</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="tel:08754860555" className="hover:text-white transition-colors">
                  087548 60555
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="mailto:info@ashiklights.in" className="hover:text-white transition-colors">
                  info@ashiklights.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>Copyright © 2026 Ashik Lights. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Designed and Developed by</span>
            <span className="font-semibold text-slate-300">Ayati Works</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
