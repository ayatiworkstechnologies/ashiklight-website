"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import ProductModal, { ProductModalData } from "@/components/ProductModal";
import {
  ChevronRight,
  Filter,
  Heart,
  Sparkles,
  UserCheck,
  ShieldCheck,
  SlidersHorizontal,
  Grid,
  List,
  Eye,
  ArrowRight,
} from "lucide-react";

export interface CategoryProduct {
  id: string;
  title: string;
  code?: string;
  material?: string;
  dimensions?: string;
  image: string;
  subCat?: string;
  style?: string;
}

export interface CategoryCatalogProps {
  categorySlug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  badges: { icon: LucideIcon; text: string }[];
  subCategories: { id: string; label: string }[];
  products: CategoryProduct[];
  bottomTrustText?: string;
}

export default function CategoryCatalog({
  categorySlug,
  title,
  tagline,
  description,
  heroImage,
  badges,
  subCategories,
  products,
}: CategoryCatalogProps) {
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedProductModal, setSelectedProductModal] = useState<ProductModalData | null>(null);

  const catalogRef = useRef<HTMLDivElement>(null);

  const handleSubCategoryChange = (id: string) => {
    setSelectedSubCategory(id);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Count items per subcategory
  const getSubCategoryCount = (subId: string) => {
    if (subId === "all") return products.length;
    return products.filter((p) => p.subCat === subId).length;
  };

  // Filter products based on subcategory
  const filteredProducts = products
    .filter(
      (product) =>
        selectedSubCategory === "all" ||
        product.subCat === selectedSubCategory
    )
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });

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
            <Link href="/#collections" className="hover:text-[#B8860B] transition-colors duration-300">
              Collections
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#B8860B] font-semibold">{title}</span>
          </div>
        </div>

        {/* Category Hero Banner — Luxury Design */}
        <section className="relative py-14 lg:py-20 bg-gradient-to-b from-[#FAF6F0] via-[#F6F0E6] to-[#FAF8F5] border-b border-[#EAE3D2] overflow-hidden">
          {/* Subtle Glow Background Elements */}
          <div className="absolute -top-24 right-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info — slide from left */}
              <div className="lg:col-span-6 space-y-5" data-reveal="left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold tracking-wider uppercase backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>EXCLUSIVE COLLECTION</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1813] leading-tight">
                  {title}
                </h1>

                <p className="font-serif italic text-lg sm:text-xl text-[#B8860B] font-medium">
                  &ldquo;{tagline}&rdquo;
                </p>

                <p className="text-slate-600 text-sm font-light leading-relaxed max-w-lg">
                  {description}
                </p>

                {/* Feature Badges — staggered */}
                <div className="flex flex-wrap items-center gap-3 pt-2" data-reveal-stagger>
                  {badges.map((b, i) => {
                    const BIcon = b.icon;
                    return (
                      <div
                        key={i}
                        data-reveal="up"
                        data-reveal-delay={String(i * 100)}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <BIcon className="w-4 h-4 text-[#B8860B]" />
                        <span>{b.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Banner Photo — scale reveal */}
              <div
                className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-xl aspect-16/9 lg:aspect-2/1 group relative"
                data-reveal="scale"
              >
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium backdrop-blur-sm bg-black/30 p-3 rounded-2xl border border-white/10">
                  <span className="font-serif italic text-amber-200">Handcrafted Luxury Fixtures</span>
                  <span className="bg-[#B8860B] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                    {products.length} Products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Catalog View: Left Filter + Right Product Grid */}
        <section ref={catalogRef} className="py-12 lg:py-16 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sidebar Filter Panel — Luxury Styling */}
              <div
                className="lg:col-span-3 bg-[#FAF6F0] rounded-3xl p-6 border border-[#EAE3D2] shadow-2xs space-y-6 sticky top-24"
                data-reveal="left"
              >
                <div className="flex items-center justify-between border-b border-[#EAE3D2] pb-4">
                  <div className="flex items-center gap-2.5 font-semibold text-slate-900 text-sm">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#B8860B] border border-[#EAE3D2] shadow-2xs">
                      <Filter className="w-4 h-4" />
                    </div>
                    <span className="font-serif font-bold text-base">Filter Catalog</span>
                  </div>
                  {selectedSubCategory !== "all" && (
                    <button
                      onClick={() => handleSubCategoryChange("all")}
                      className="text-xs font-bold text-[#B8860B] hover:underline cursor-pointer transition-all"
                    >
                      Reset Filter
                    </button>
                  )}
                </div>

                {/* Category Radio / Pill Filters */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Sub-Categories
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {subCategories.map((item) => {
                      const isSelected = selectedSubCategory === item.id;
                      const count = getSubCategoryCount(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSubCategoryChange(item.id)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-[#B8860B] text-white border-[#B8860B] font-semibold shadow-sm"
                              : "bg-white text-slate-800 border-[#EAE3D2] hover:border-[#B8860B]/60 hover:bg-[#FAF6F0]"
                          }`}
                        >
                          <span className="truncate">{item.label}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-[#FAF6F0] text-slate-500 border border-[#EAE3D2]"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Product Grid Area */}
              <div className="lg:col-span-9 space-y-6">
                {/* Toolbar */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF6F0] p-4 rounded-2xl border border-[#EAE3D2] shadow-2xs"
                  data-reveal="up"
                >
                  <div className="text-xs font-medium text-slate-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
                    Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> of {products.length} Products
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Sort */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500 font-medium">Sort:</span>
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="bg-white border border-[#EAE3D2] rounded-xl px-3 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#B8860B] transition-colors duration-300 cursor-pointer shadow-2xs"
                      >
                        <option value="popular">Most Popular</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                      </select>
                    </div>

                    {/* Grid/List View Switch */}
                    <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#EAE3D2]">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                          viewMode === "grid"
                            ? "bg-[#B8860B] text-white shadow-2xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                        title="Grid View"
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                          viewMode === "list"
                            ? "bg-[#B8860B] text-white shadow-2xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                        title="List View"
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Cards Grid — 3 Large Cards Per Row */}
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                      : "space-y-4"
                  }
                  data-reveal-stagger
                >
                  {filteredProducts.map((p, index) => {
                    return (
                      <div
                        key={p.id}
                        data-reveal="up"
                        data-reveal-delay={String(Math.min(index, 7) * 60)}
                        onClick={() =>
                          setSelectedProductModal({
                            title: p.title,
                            category: p.code || title,
                            image: p.image,
                            description: `${p.title} - Ashik Lights Premium Collection. Built with finest craftsmanship, K9 crystal purity & optical efficiency.`,
                            specs: [
                              { label: "Product Name", value: p.title },
                              { label: "Collection", value: title },
                              { label: "Material", value: p.material || "Premium K9 Crystal & Brass" },
                              { label: "Warranty", value: "3-Year On-Site" },
                            ],
                          })
                        }
                        className="group bg-white rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-2xs hover:shadow-2xl hover-border-glow transition-all duration-400 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer relative"
                      >
                        {/* Top Accent Line on Hover */}
                        <div className="h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Top Image with Zoom Hover & Dark Lightbox Overlay */}
                        <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          />
                          {/* Hover Overlay with Eye Icon */}
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <Eye className="w-4 h-4 text-[#B8860B]" /> View Specifications
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 text-center bg-white border-t border-slate-100 flex flex-col justify-between flex-grow">
                          <h3 className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#B8860B] transition-colors duration-300 leading-snug line-clamp-2">
                            {p.title}
                          </h3>
                          <div className="mt-3 pt-2 border-t border-slate-50 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#B8860B] opacity-80 group-hover:opacity-100 transition-opacity">
                            <span>Explore Details</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Consultation Box — Dark Luxury Container */}
                <div
                  className="bg-gradient-to-r from-[#1A1813] via-[#2C261E] to-[#1A1813] text-white rounded-3xl p-8 sm:p-10 border border-[#332D24] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                  data-reveal="up"
                >
                  <div className="space-y-3 text-center md:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-white/10">
                      <Sparkles className="w-3.5 h-3.5" />
                      Need Tailored Lighting Specs?
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      Custom Size & CAD Layout Support
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl">
                      Visit our flagship showroom in Teynampet, Chennai or speak directly with our lighting architects for on-site load calculations & layout advice.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-shimmer px-8 py-4 text-white text-xs sm:text-sm font-bold rounded-full shadow-xl hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer z-10 shrink-0 flex items-center gap-2"
                  >
                    <span>Talk to Architect</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <ProductModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          onOpenConsultation={() => {
            setSelectedProductModal(null);
            window.location.assign("/contact");
          }}
        />
      </main>
    </ScrollRevealProvider>
  );
}
