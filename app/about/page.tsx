"use client";

import React from "react";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showrooms from "@/components/Showrooms";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import { Award, ShieldCheck, Sparkles, UserCheck, ChevronRight, Building2, Users, Star, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
        <TopBanner />
        <Header />

        {/* Breadcrumb */}
        <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] py-3 px-4 sm:px-6 lg:px-12 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#B8860B] font-semibold">About Us</span>
          </div>
        </div>

        {/* About Hero Banner — Luxury Design */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#F6F0E6] to-[#FAF8F5] border-b border-[#EAE3D2] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6" data-reveal="left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold tracking-wider uppercase backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping" />
                  ESTABLISHED IN 2016
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1813] leading-tight">
                  Illuminating spaces <br />
                  with <span className="italic text-[#B8860B] font-medium">timeless elegance.</span>
                </h1>

                <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed">
                  Founded in 2016 by <strong>Mr. Abdul Hameed Ashik</strong>, ASHIK LIGHTS is Chennai&apos;s most trusted luxury lighting showroom in Teynampet, providing comprehensive architectural and decorative lighting solutions across South India.
                </p>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-4 pt-4" data-reveal-stagger>
                  <div data-reveal="up" data-reveal-delay="100" className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#EAE3D2] shadow-2xs hover-border-glow transition-all duration-300 text-center">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B8860B]">Flagship</div>
                    <div className="text-[11px] text-slate-600 font-semibold mt-1">Teynampet Store</div>
                  </div>
                  <div data-reveal="up" data-reveal-delay="200" className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#EAE3D2] shadow-2xs hover-border-glow transition-all duration-300 text-center">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B8860B]">10,000+</div>
                    <div className="text-[11px] text-slate-600 font-semibold mt-1">Homes Illuminated</div>
                  </div>
                  <div data-reveal="up" data-reveal-delay="300" className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#EAE3D2] shadow-2xs hover-border-glow transition-all duration-300 text-center">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B8860B]">4.9 ★</div>
                    <div className="text-[11px] text-slate-600 font-semibold mt-1">Google Rating</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative" data-reveal="scale">
                <div className="rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-2xl aspect-4/3 group relative">
                  <img
                    src="/assets/banner.webp"
                    alt="Ashik Lights Showroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#EAE3D2] shadow-xl hidden sm:flex items-center gap-4 animate-float-slow">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-[#B8860B] border border-[#EAE3D2]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">100% Quality Guarantee</div>
                    <div className="text-[11px] text-slate-500">K9 Optical Crystal & Solid Brass</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values / Pillars */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3" data-reveal="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#EAE3D2] text-[#B8860B] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                OUR BRAND FOUNDATION
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1813]">
                Driven by Passion & Precision
              </h2>
              <p className="text-slate-600 text-sm font-light">
                We bridge the gap between artistic lighting aesthetics and practical lighting engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-stagger>
              <div data-reveal="up" data-reveal-delay="0" className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#EAE3D2] space-y-4 hover-border-glow transition-all duration-400 hover:-translate-y-2 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#B8860B] shadow-2xs group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1813]">Our Journey</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  Established in 2016 in Teynampet, Chennai, ASHIK LIGHTS has grown into South India&apos;s premier lighting destination for homeowners, architects, and luxury interior designers.
                </p>
              </div>

              <div data-reveal="up" data-reveal-delay="150" className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#EAE3D2] space-y-4 hover-border-glow transition-all duration-400 hover:-translate-y-2 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#B8860B] shadow-2xs group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-300">
                  <UserCheck className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1813]">Our Purpose</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  To illuminate and transform architectural spaces, bringing warmth, emotion, and functionality into every room through optical precision and high CRI lighting.
                </p>
              </div>

              <div data-reveal="up" data-reveal-delay="300" className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#EAE3D2] space-y-4 hover-border-glow transition-all duration-400 hover:-translate-y-2 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#B8860B] shadow-2xs group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1813]">Our Commitment</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  3-year on-site warranty, complete ceiling structural load calculations, and safe multi-layer transit packaging guaranteeing 100% damage-free installation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote Card — Dark Luxury Style */}
        <section className="py-16 bg-[#1A1813] text-white border-t border-[#332D24]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6" data-reveal="scale">
            <div className="w-16 h-16 rounded-full bg-[#B8860B]/20 text-[#D4AF37] flex items-center justify-center mx-auto border border-[#B8860B]/40">
              <Star className="w-8 h-8 fill-amber-400" />
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              &ldquo;Lighting is not merely about brightness — it is the soul of architecture. Every fixture we curate is crafted to elevate human experience.&rdquo;
            </blockquote>

            <div className="pt-2">
              <div className="font-bold text-base text-[#D4AF37]">Mr. Abdul Hameed Ashik</div>
              <div className="text-xs text-slate-400">Founder & Managing Director, Ashik Lights</div>
            </div>
          </div>
        </section>

        {/* Showrooms Locator */}
        <Showrooms />

        {/* Bottom Consultation CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-gradient-to-r from-[#1A1813] via-[#2C261E] to-[#1A1813] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#332D24]" data-reveal="up">
              <div className="space-y-3 text-center md:text-left">
                <h3 className="font-serif text-3xl font-bold text-white">Experience Our Flagship Store</h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light">
                  Visit our flagship Teynampet showroom to feel the warmth of our statement chandeliers and consult with our lighting architects.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-shimmer px-8 py-4 text-white text-xs sm:text-sm font-bold rounded-full shadow-xl hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>Book Showroom Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ScrollRevealProvider>
  );
}
