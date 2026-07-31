"use client";

import React from "react";
import CategoryCatalog from "@/components/CategoryCatalog";
import { Sun, Award, ShieldCheck } from "lucide-react";

export default function OutdoorLightsPage() {
  const products = [
    {
      id: "ow-1",
      title: "Spike Spotlight 10W",
      code: "AL-OS-7001",
      material: "Die-Cast Aluminum • Adjustable Angle",
      dimensions: "IP65 • 3000K Warm White",
      image: "/assets/Outdoor Light Catalog/Spike Spotlight.webp",
      subCat: "spike",
    },
    {
      id: "ow-2",
      title: "Bollard Pathway Light 60cm",
      code: "AL-OB-7002",
      material: "Anti-Rust Aluminum & Opal Diffuser",
      dimensions: "H 600mm • IP65",
      image: "/assets/Outdoor Light Catalog/Bollarad Light.webp",
      subCat: "bollard",
    },
    {
      id: "ow-3",
      title: "Up Down Narrow Wall Light",
      code: "AL-OW-7003",
      material: "Dual Beam Aluminum Wall Sconce",
      dimensions: "IP65 • 2 x 6W Cree LED",
      image: "/assets/Outdoor Light Catalog/Up Down Narrow Wall Light.webp",
      subCat: "wall",
    },
    {
      id: "ow-4",
      title: "Cylinder Surface Outdoor Light",
      code: "AL-OW-7004",
      material: "Weatherproof Matte Black Cylinder",
      dimensions: "IP65 • Ø 90mm",
      image: "/assets/Outdoor Light Catalog/Cylinder Surface Light.webp",
      subCat: "wall",
    },
    {
      id: "ow-5",
      title: "Slit Recessed Step Light",
      code: "AL-OW-7005",
      material: "Low Glare Recessed Step Luminaire",
      dimensions: "IP65 • 3W Warm White",
      image: "/assets/Outdoor Light Catalog/Slit all Light.webp",
      subCat: "step",
    },
    {
      id: "ow-6",
      title: "Outdoor Wall Washer Light 36W",
      code: "AL-OW-7006",
      material: "Heavy-Duty Die-Cast Facade Washer",
      dimensions: "IP66 • L 500mm",
      image: "/assets/Outdoor Light Catalog/Wall Washer Light.webp",
      subCat: "wall",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="outdoor-lights"
      title="Outdoor Lights"
      tagline="Illuminate your outdoors with beauty and durability."
      description="Weather-resistant IP65 outdoor wall sconces, garden bollards, spike spotlights, and facade wall washers."
      heroImage="/banner/Outdoor Lights.webp"
      badges={[
        { icon: Sun, text: "Weather Resistant IP65" },
        { icon: Award, text: "Corrosion Proof Body" },
        { icon: ShieldCheck, text: "3-Year Warranty" },
      ]}
      subCategories={[
        { id: "all", label: "All Outdoor Lights" },
        { id: "wall", label: "Outdoor Wall Lights" },
        { id: "bollard", label: "Bollard Pathway Lights" },
        { id: "spike", label: "Garden Spike Spotlights" },
        { id: "step", label: "Recessed Step Lights" },
      ]}
      products={products}
    />
  );
}
