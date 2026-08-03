"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import ProductModal, { ProductModalData } from "@/components/ProductModal";
import { VectorDiamondGrid, VectorLightRays } from "@/components/VectorAccents";
import {
  ChevronRight,
  Filter,
  Heart,
  Sparkles,
  UserCheck,
  ShieldCheck,
  SlidersHorizontal,
  Maximize2,
  Award,
  Fan,
  Sun,
  Grid,
  List,
  Eye,
  ArrowRight,
} from "lucide-react";

// Badges are passed as icon name strings (not component references) so category
// pages can stay Server Components — React Server Components can't pass
// function/component props across the server -> client boundary.
const badgeIconMap = {
  Sparkles,
  UserCheck,
  ShieldCheck,
  SlidersHorizontal,
  Maximize2,
  Award,
  Fan,
  Sun,
} as const;

export type BadgeIconName = keyof typeof badgeIconMap;

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
  mobileHeroImage?: string;
  badges: { icon: BadgeIconName; text: string }[];
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
  mobileHeroImage,
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ashiklights.in/" },
      { "@type": "ListItem", position: 2, name: "Collections", item: "https://ashiklights.in/#collections" },
      { "@type": "ListItem", position: 3, name: title, item: `https://ashiklights.in/${categorySlug}` },
    ],
  };

  const effectiveMobileHeroImage =
    mobileHeroImage ||
    (heroImage.includes("mob.webp")
      ? heroImage
      : heroImage.replace(/\.webp$/, " mob.webp"));

  return (
    <ScrollRevealProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-[#0A1628]">
        <TopBanner />
        <Header />

        {/* Category Hero Banner — Exact Homepage Hero Design */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#0A1628] border-b border-white/15">
          {/* Full Width Background Image — Bright & Unzoomed */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Hero Banner */}
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className={`object-cover object-right lg:object-center brightness-105 contrast-[1.02] ${
                effectiveMobileHeroImage ? "hidden md:block" : ""
              }`}
            />
            {/* Mobile Hero Banner */}
            {effectiveMobileHeroImage && (
              <Image
                src={effectiveMobileHeroImage}
                alt={`${title} Mobile Banner`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center brightness-105 contrast-[1.02] md:hidden"
              />
            )}
            {/* Desktop Overlay: Left-side shade ONLY for text contrast; Right side is 100% bright & unshaded */}
            <div className="hidden md:block absolute inset-y-0 left-0 md:w-[58%] lg:w-[48%] bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-transparent pointer-events-none" />
            {/* Mobile Overlay: Graceful left-to-right gradient fade so right 30%+ of banner is 100% unshaded */}
            <div className="block md:hidden absolute inset-y-0 left-0 w-[72%] sm:w-[65%] bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/75 to-transparent pointer-events-none" />
            <div className="block md:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1628] to-transparent pointer-events-none" />
          </div>

          {/* Vector Diamond Grid Background Pattern */}
          <VectorDiamondGrid className="opacity-[0.04] z-[1]" />
          <VectorLightRays className="-top-20 -left-20 z-[1] hidden lg:block" />

          {/* Floating Sparkle Particles */}
          <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block">
            <span className="sparkle" />
            <span className="sparkle" />
            <span className="sparkle" />
            <span className="sparkle" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20 w-full">
            <div className="max-w-[85%] sm:max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {title}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-white/90 font-medium">
                &ldquo;{tagline}&rdquo;
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb — Positioned AFTER / AT BOTTOM OF HERO */}
        <div className="bg-[#0D1E35] border-b border-white/15 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/#collections" className="hover:text-white transition-colors duration-300">
              Collections
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-white font-bold">{title}</span>
            {selectedSubCategory !== "all" && (
              <>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-slate-300 font-medium capitalize">
                  {subCategories.find((s) => s.id === selectedSubCategory)?.label || selectedSubCategory}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Main Catalog View: Left Filter + Right Product Grid */}
        <section ref={catalogRef} className="py-12 lg:py-16 bg-[#0A1628] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Mobile Horizontal Filter Bar — app-style scrollable chips */}
              <div className="lg:hidden -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide snap-x snap-mandatory">
                  {subCategories.map((item) => {
                    const isSelected = selectedSubCategory === item.id;
                    const count = getSubCategoryCount(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSubCategoryChange(item.id)}
                        className={`shrink-0 snap-start flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer active:scale-95 ${
                          isSelected
                            ? "bg-white text-[#040812] border-white shadow-md scale-[1.03]"
                            : "bg-[#0D1E35] text-slate-300 border-white/15"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                            isSelected ? "bg-[#040812]/20 text-[#040812]" : "bg-[#0A1628] text-slate-400 border border-white/15"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Left Sidebar Filter Panel — Luxury Styling (desktop only) */}
              <div
                className="hidden lg:block lg:col-span-3 bg-[#0D1E35] rounded-3xl p-6 border border-white/15 shadow-2xs space-y-6 lg:sticky lg:top-24"
                data-reveal="left"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2.5 font-semibold text-slate-900 text-sm">
                    <div className="w-8 h-8 rounded-xl bg-[#0A1628] flex items-center justify-center text-white border border-white/15 shadow-2xs">
                      <Filter className="w-4 h-4" />
                    </div>
                    <span className="font-serif font-bold text-base text-white">Filter Catalog</span>
                  </div>
                  {selectedSubCategory !== "all" && (
                    <button
                      onClick={() => handleSubCategoryChange("all")}
                      className="text-xs font-bold text-white hover:underline cursor-pointer transition-all"
                    >
                      Reset Filter
                    </button>
                  )}
                </div>

                {/* Category Radio / Pill Filters */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Sub-Categories
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {subCategories.map((item) => {
                      const isSelected = selectedSubCategory === item.id;
                      const count = getSubCategoryCount(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSubCategoryChange(item.id)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-white text-[#040812] border-white font-semibold shadow-sm"
                              : "bg-[#0A1628] text-slate-300 border-white/15 hover:border-white/60 hover:bg-[#0D1E35]"
                          }`}
                        >
                          <span className="truncate">{item.label}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              isSelected
                                ? "bg-[#040812]/20 text-[#040812]"
                                : "bg-[#0A1628] text-slate-400 border border-white/15"
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
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1E35] p-4 rounded-2xl border border-white/15 shadow-2xs"
                  data-reveal="up"
                >
                  <div className="text-xs font-medium text-slate-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Showing <span className="font-bold text-white">{filteredProducts.length}</span> of {products.length} Products
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Sort */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-400 font-medium">Sort:</span>
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="bg-[#0A1628] border border-white/15 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-200 focus:outline-none focus:border-white transition-colors duration-300 cursor-pointer shadow-2xs"
                      >
                        <option value="popular">Most Popular</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                      </select>
                    </div>

                    {/* Grid/List View Switch */}
                    <div className="flex items-center gap-1 bg-[#0A1628] p-1 rounded-xl border border-white/15">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                          viewMode === "grid"
                            ? "bg-white text-[#040812] shadow-2xs"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                        title="Grid View"
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                          viewMode === "list"
                            ? "bg-white text-[#040812] shadow-2xs"
                            : "text-slate-400 hover:text-slate-200"
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
                            description: `Built with finest craftsmanship, optical purity & high-efficiency LED layout. Perfect for luxury residential and commercial spaces.`,
                            specs: [
                              { label: "Collection", value: title },
                              { label: "Material", value: p.material || "Premium K9 Crystal & Brass" },
                              { label: "Warranty", value: "3-Year On-Site" },
                            ],
                          })
                        }
                        className="group bg-[#0D1E35] rounded-3xl overflow-hidden border border-white/15 shadow-2xs hover:shadow-2xl hover-border-glow transition-all duration-400 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer relative"
                      >
                        {/* Top Accent Line on Hover */}
                        <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                              <Eye className="w-4 h-4 text-slate-900" /> View Specifications
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 text-center bg-[#0D1E35] border-t border-white/15 flex flex-col justify-between flex-grow">
                          <h3 className="font-semibold text-xs sm:text-sm text-white group-hover:text-white transition-colors duration-300 leading-snug line-clamp-2">
                            {p.title}
                          </h3>
                          <div className="mt-3 pt-2 border-t border-white/10 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-white/90 opacity-80 group-hover:opacity-100 transition-opacity">
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
                  className="bg-gradient-to-r from-[#040812] via-[#0D1E35] to-[#040812] text-white rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                  data-reveal="up"
                >
                  <div className="space-y-3 text-center md:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/15">
                      <Sparkles className="w-3.5 h-3.5" />
                      Need Personalized Lighting Specs?
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      Custom Size &amp; CAD Layout Support
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl">
                      Visit our flagship showroom in Teynampet, Chennai or speak directly with our lighting architects for on-site load calculations &amp; layout advice.
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
