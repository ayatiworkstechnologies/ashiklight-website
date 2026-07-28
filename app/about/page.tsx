"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showrooms from "@/components/Showrooms";
import { Award, ShieldCheck, Sparkles, UserCheck, ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <TopBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] py-3 px-4 sm:px-6 lg:px-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <a href="/" className="hover:text-[#B8860B]">
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#B8860B] font-semibold">About Us</span>
        </div>
      </div>

      {/* About Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-[#FAF6F0] border-b border-[#EAE3D2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
                ESTABLISHED IN 2016
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A1813] leading-tight">
                Illuminating spaces with elegance.
              </h1>

              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Founded in 2016 by <strong>Mr. Abdul Hameed Ashik</strong>, Ashik Lights is Chennai&apos;s leading lights retail showroom, proudly serving our valued customers with complete lighting solutions across all sectors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-[#EAE3D2] shadow-2xs">
                  <div className="font-serif text-3xl font-bold text-[#B8860B]">6+</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Showrooms in Chennai</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#EAE3D2] shadow-2xs">
                  <div className="font-serif text-3xl font-bold text-[#B8860B]">10,000+</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Homes Illuminated</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-xl aspect-4/3">
                <img
                  src="/assets/banner.webp"
                  alt="Ashik Lights Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl border border-[#EAE3D2] shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#B8860B]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Quality Assured</div>
                  <div className="text-[11px] text-slate-500">Premium K9 Crystal & Brass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey & Purpose */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#EAE3D2] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#B8860B] shadow-2xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1813]">Our Journey</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                Established in 2016, ASHIK LIGHTS has been committed to offering a wide range of lighting options. From decorative lighting to indoor, architectural, and outdoor lighting, we cater to residential, commercial, and industrial projects with professional expertise.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#EAE3D2] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#B8860B] shadow-2xs">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1813]">Our Purpose</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                At ASHIK LIGHTS, our purpose is to illuminate and transform spaces, bringing light and life into every environment. Quality lighting is essential to creating the perfect ambiance and enhancing functionality.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#EAE3D2] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#B8860B] shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1813]">Our Commitment</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                Our dedicated team ensures every customer receives personalized attention and expert advice. Over the years, ASHIK LIGHTS has earned a reputation for excellence, innovation, and customer satisfaction across Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showrooms Locator */}
      <Showrooms />

      <Footer />
    </main>
  );
}
