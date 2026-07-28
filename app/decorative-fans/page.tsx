"use client";

import React from "react";
import CategoryCatalog from "@/components/CategoryCatalog";
import { Fan, Award, ShieldCheck } from "lucide-react";

export default function DecorativeFansPage() {
  const products = [
    {
      id: "df-1",
      title: "Crystal Dome Retractable Blade Ceiling Fan",
      code: "AL-DF-3001",
      material: "Crystal Dome & Retractable ABS Blades",
      dimensions: "42\" Sweep • BLDC Motor",
      price: "₹24,500",
      image: "/assets/Decorative Fan/Crystal Dome Retractable Blade Ceiling Fan.webp",
      subCat: "retractable",
    },
    {
      id: "df-2",
      title: "Luxury Crystal Waterfall Retractable Ceiling Fan",
      code: "AL-DF-3002",
      material: "K9 Crystal Waterfall & Retractable Blades",
      dimensions: "42\" Sweep • Smart Remote",
      price: "₹28,900",
      image: "/assets/Decorative Fan/Luxury Crystal Waterfall Retractable Blade Ceiling Fan.webp",
      subCat: "retractable",
    },
    {
      id: "df-3",
      title: "Crystal Leaf Drum Retractable Blade Ceiling Fan",
      code: "AL-DF-3003",
      material: "Gold Crystal Leaf Shade & LED",
      dimensions: "42\" Sweep • Dimmable CCT",
      price: "₹26,000",
      image: "/assets/Decorative Fan/Crystal Leaf Drum Retractable Blade Ceiling Fan.webp",
      subCat: "retractable",
    },
    {
      id: "df-4",
      title: "Tiered Crystal Cascade Retractable Ceiling Fan",
      code: "AL-DF-3004",
      material: "Tiered Crystal Drops & Whisper BLDC",
      dimensions: "42\" Sweep • 6 Speeds",
      price: "₹27,500",
      image: "/assets/Decorative Fan/Tiered Crystal Cascade Retractable Blade Ceiling Fan.webp",
      subCat: "retractable",
    },
    {
      id: "df-5",
      title: "Black Double-Ring LED Retractable Ceiling Fan",
      code: "AL-DF-3005",
      material: "Matte Black Frame & LED Halo",
      dimensions: "42\" Sweep • Low Noise",
      price: "₹19,800",
      image: "/assets/Decorative Fan/Black Double-Ring LED Retractable Ceiling Fan.webp",
      subCat: "led-fan",
    },
    {
      id: "df-6",
      title: "Modern White Drum LED Retractable Ceiling Fan",
      code: "AL-DF-3006",
      material: "White Acrylic Drum & Clear Blades",
      dimensions: "42\" Sweep • 3000K LED",
      price: "₹18,500",
      image: "/assets/Decorative Fan/Modern White Drum LED Retractable Ceiling Fan.webp",
      subCat: "led-fan",
    },
    {
      id: "df-7",
      title: "White Dual-Tone Ring LED Retractable Fan",
      code: "AL-DF-3007",
      material: "Dual-Tone Halo Ring & BLDC",
      dimensions: "42\" Sweep • Remote",
      price: "₹17,900",
      image: "/assets/Decorative Fan/White Dual-Tone Ring LED Retractable Ceiling Fan.webp",
      subCat: "bldc",
    },
    {
      id: "df-8",
      title: "White Round LED Retractable Blade Ceiling Fan",
      code: "AL-DF-3008",
      material: "Minimal Round Profile & Hideaway Blades",
      dimensions: "42\" Sweep • Dimmable",
      price: "₹16,500",
      image: "/assets/Decorative Fan/White Round LED Retractable Blade Ceiling Fan.webp",
      subCat: "bldc",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="decorative-fans"
      title="Decorative Fan"
      tagline="Whisper-quiet air delivery with integrated light rings."
      description="Energy-saving BLDC motor ceiling fans crafted with retractable blades, crystal shades, and dimmable LED halos."
      heroImage="/assets/Decorative Fan/Crystal Dome Retractable Blade Ceiling Fan.webp"
      badges={[
        { icon: Fan, text: "Super Efficient BLDC Motor" },
        { icon: Award, text: "Retractable Hideaway Blades" },
        { icon: ShieldCheck, text: "5-Year Motor Warranty" },
      ]}
      subCategories={[
        { id: "all", label: "All Decorative Fans" },
        { id: "retractable", label: "Retractable Blade Fans" },
        { id: "led-fan", label: "LED Halo Fans" },
        { id: "bldc", label: "BLDC Smart Fans" },
      ]}
      products={products}
    />
  );
}
