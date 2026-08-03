"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { VectorCornerMotif, VectorDiamondGrid } from "@/components/VectorAccents";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-slate-300 pt-16 pb-8 border-t border-[#D4A017]/20 relative overflow-hidden">
      <VectorDiamondGrid className="opacity-[0.03]" />
      <VectorCornerMotif position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4A017]/15"
          data-reveal-stagger
        >
          {/* Brand Info with /public/logo.png */}
          <div className="lg:col-span-4 space-y-4" data-reveal="up">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Ashik Lights Logo"
                width={280}
                height={80}
                className="h-16 sm:h-20 lg:h-22 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Established in 2016 by Mr. Abdul Hameed Ashik. ASHIK LIGHTS is Chennai&apos;s leading luxury lighting showroom, dedicated to providing complete lighting solutions across residential, commercial, and hospitality sectors.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 text-xs text-slate-300">
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
          <div className="lg:col-span-4 space-y-4" data-reveal="up" data-reveal-delay="100">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white border-b border-[#D4A017]/20 pb-2 inline-block">
              Collections
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <li>
                <Link href="/chandeliers" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  Chandeliers
                </Link>
              </li>
              <li>
                <Link href="/high-ceiling-chandeliers" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  High Ceiling
                </Link>
              </li>
              <li>
                <Link href="/indoor-lights" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  Indoor Lights
                </Link>
              </li>
              <li>
                <Link href="/decorative-fans" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  Decorative Fan
                </Link>
              </li>
              <li>
                <Link href="/wall-pendant-lights" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  Wall & Pendant
                </Link>
              </li>
              <li>
                <Link href="/led-mirrors" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  LED Mirror
                </Link>
              </li>
              <li>
                <Link href="/architectural-lights" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  Architectural
                </Link>
              </li>
              <li>
                <Link href="/outdoor-lights" className="link-underline hover:text-[#B8860B] transition-colors duration-300">
                  Outdoor Lights
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office Location */}
          <div className="lg:col-span-4 space-y-4" data-reveal="up" data-reveal-delay="200">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white border-b border-[#D4A017]/20 pb-2 inline-block">
              Flagship Store
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>#313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet, Chennai, Tamil Nadu 600006</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="tel:08754860555" className="hover:text-white transition-colors duration-300">
                  087548 60555
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/918754860555?text=Hi%20Ashik%20Lights%2C%20I%20need%20lighting%20help."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors duration-300 font-medium"
                >
                  WhatsApp: +91 87548 60555
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="mailto:info@ashiklights.in" className="hover:text-white transition-colors duration-300">
                  info@ashiklights.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500" data-reveal="fade">
          <div>Copyright © 2026 Ashik Lights. All rights reserved.</div>
          <div className="flex items-center gap-2.5">
            <span>Designed and Developed by</span>
            <a
              href="https://www.ayatiworks.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center hover:opacity-100 transition-all duration-300 group"
              title="Visit Ayati Works Official Website"
            >
              <Image
                src="/ayati-logo.png"
                alt="Ayati Works Logo"
                width={160}
                height={45}
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
