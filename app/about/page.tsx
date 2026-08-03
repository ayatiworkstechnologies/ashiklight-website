"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Users,
  Building2,
  ChevronRight,
  Star,
  Phone,
} from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Showrooms from "@/components/Showrooms";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const foundationPillars = [
  {
    num: "01",
    title: "Curated Excellence",
    desc: "Every chandelier, decorative fan, profile light, and outdoor fitting is hand-selected for optical purity, electrical safety, and finish durability.",
    icon: Award,
  },
  {
    num: "02",
    title: "Lighting Architecture Advice",
    desc: "Our lighting specialists in Teynampet review floor plans and room dimensions to advise on lux levels, color temperatures (3000K-6000K), and beam angles.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Turnkey Project Execution",
    desc: "From villa foyer double-height chandelier hoisting to magnetic track layout for commercial showrooms, we support end-to-end installation guidance.",
    icon: Building2,
  },
];

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#0A1628]">
        <TopBanner />
        <Header />

        {/* Hero Section — Luxury Dark Navy Atmosphere */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#0A1628] via-[#0D1E35] to-[#0A1628] border-b border-white/15 overflow-hidden">
          {/* Subtle Glow Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6" data-reveal="left">
                <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="w-6 h-px bg-white/30" />
                  ABOUT ASHIK LIGHTS
                  <span className="w-6 h-px bg-white/30" />
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Illuminating spaces <br />
                  with{" "}
                  <span className="italic text-white font-medium">
                    timeless elegance.
                  </span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                  Established in 2016 by our founder,{" "}
                  <strong className="text-white">Mr. Abdul Hameed Ashik</strong>. ASHIK LIGHTS is a
                  leading lights retail showroom, proudly serving our valued
                  customers since 2016. Dedicated to providing complete lighting
                  solutions to all sectors.
                </p>

                {/* Stat Cards Grid */}
                <div
                  className="grid grid-cols-3 gap-4 pt-4"
                  data-reveal-stagger
                >
                  <div
                    data-reveal="up"
                    data-reveal-delay="100"
                    className="bg-[#0D1E35] p-4.5 rounded-2xl border border-white/15 shadow-2xs hover:border-white transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      Flagship
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      Teynampet Store
                    </div>
                  </div>
                  <div
                    data-reveal="up"
                    data-reveal-delay="200"
                    className="bg-[#0D1E35] p-4.5 rounded-2xl border border-white/15 shadow-2xs hover:border-white transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      10,000+
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      Homes Illuminated
                    </div>
                  </div>
                  <div
                    data-reveal="up"
                    data-reveal-delay="300"
                    className="bg-[#0D1E35] p-4.5 rounded-2xl border border-white/15 shadow-2xs hover:border-white transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      4.9 ★
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      Google Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Showcase Photo Frame */}
              <div className="lg:col-span-6 relative" data-reveal="scale">
                <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] w-full group relative">
                  <img
                    src="/banner/ashik shop-image.webp"
                    alt="Ashik Lights Flagship Showroom Teynampet"
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Flagship Showroom
                    </div>
                    <div className="font-serif text-xl font-bold">
                      #313, Anna Salai, Teynampet, Chennai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb — Positioned AFTER Hero */}
        <div className="bg-[#0D1E35] border-b border-white/15 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-white font-bold">About Us</span>
          </div>
        </div>

        {/* Our Foundation Cards Grid */}
        <section className="py-16 lg:py-24 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="text-center max-w-2xl mx-auto mb-16 space-y-3"
              data-reveal="up"
            >
              <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="w-6 h-px bg-white/30" />
                OUR BRAND FOUNDATION
                <span className="w-6 h-px bg-white/30" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                Driven by Passion &amp; Precision
              </h2>
              <p className="text-slate-400 text-sm font-light">
                Delivering complete lighting solutions to residential,
                commercial, and industrial sectors.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-reveal-stagger
            >
              {foundationPillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.num}
                    data-reveal="up"
                    data-reveal-delay={String(idx * 100)}
                    className="bg-[#0D1E35] p-8 rounded-3xl border border-white/15 space-y-5 hover:border-white transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Top Pill Number & Icon */}
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center text-white shadow-2xs border border-white/15 group-hover:bg-white group-hover:text-[#040812] group-hover:border-white transition-all duration-300">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="font-serif font-bold text-2xl text-white/30 group-hover:text-white transition-colors">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-white">
                      <span>ASHIK LIGHTS EXCELLENCE</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder Quote Card — Dark Luxury Style */}
        <section className="py-20 bg-[#060E1A] text-white border-t border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6 relative z-10"
            data-reveal="scale"
          >
            <div className="w-16 h-16 rounded-full bg-white/15 text-white flex items-center justify-center mx-auto border border-white/20 shadow-xl">
              <Star className="w-8 h-8 fill-white" />
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              &ldquo;Lighting is not merely about brightness — it is the soul of
              architecture. Every fixture we curate is crafted to elevate human
              experience.&rdquo;
            </blockquote>

            <div className="pt-2 space-y-1">
              <div className="font-bold text-lg text-white">
                Mr. Abdul Hameed Ashik
              </div>
              <div className="text-xs text-slate-400">
                Founder &amp; Managing Director, Ashik Lights
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Showroom Locator */}
        <Showrooms />

        {/* Bottom Consultation CTA */}
        <section className="py-16 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="bg-gradient-to-r from-[#0D1E35] via-[#122240] to-[#0D1E35] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/15"
              data-reveal="up"
            >
              <div className="space-y-3 text-center md:text-left">
                <h3 className="font-serif text-3xl font-bold text-white">
                  Experience Our Flagship Store
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light">
                  Visit us at #313, Anna Salai, Teynampet, Chennai or request an on-site lighting consultant to review your floor plans.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="btn-shimmer w-full sm:w-auto px-8 py-3.5 text-[#040812] bg-white text-xs sm:text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Free Consultation
                </button>
                <a
                  href="tel:08754860555"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </main>
    </ScrollRevealProvider>
  );
}
