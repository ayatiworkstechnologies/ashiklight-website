"use client";

import React from "react";
import CategoryCatalog from "@/components/CategoryCatalog";
import { Sparkles, Award, ShieldCheck } from "lucide-react";

export default function IndoorLightsPage() {
  const products = [
    {
      id: "in-1",
      title: "ArcGlow Minimal LED Wall Light",
      code: "AL-IN-5001",
      material: "Sculptural Curved Aluminum & Acrylic",
      dimensions: "H 24\" x W 6\"",
      image: "/assets/Indoor light catalog/ArcGlow Minimal LED Wall Light.webp",
      subCat: "wall",
    },
    {
      id: "in-2",
      title: "Axis Pro Adjustable Track Spotlight",
      code: "AL-IN-5002",
      material: "360° Swivel Aluminum Body",
      dimensions: "12W • 24° Optics",
      image: "/assets/Indoor light catalog/Axis Pro Adjustable Track Spotlight.webp",
      subCat: "track",
    },
    {
      id: "in-3",
      title: "Eclipse Selective COB Downlight",
      code: "AL-IN-5003",
      material: "Dark Anti-Glare Baffle Downlight",
      dimensions: "Cutout Ø 75mm • 15W",
      image: "/assets/Indoor light catalog/Eclipse Selective COB Downlight.webp",
      subCat: "downlights",
    },
    {
      id: "in-4",
      title: "Halo Surface-Mount Cylinder Light",
      code: "AL-IN-5004",
      material: "Matte Black Aluminum Cylinder",
      dimensions: "Ø 90mm x H 120mm",
      image: "/assets/Indoor light catalog/Halo Surface-Mount Cylinder Light.webp",
      subCat: "downlights",
    },
    {
      id: "in-5",
      title: "Noir Cone Magnetic Pendant Light",
      code: "AL-IN-5005",
      material: "Slim Cone Magnetic Track Pendant",
      dimensions: "Ø 60mm • 48V Low Voltage",
      image: "/assets/Indoor light catalog/Noir Cone Magnetic Pendant  Light.webp",
      subCat: "track",
    },
    {
      id: "in-6",
      title: "Slim Magnetic Beam Light",
      code: "AL-IN-5006",
      material: "Linear Opal Magnetic Module",
      dimensions: "L 300mm • 12W 3000K",
      image: "/assets/Indoor light catalog/Slim_Magnetic_Beam_Light.webp",
      subCat: "track",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="indoor-lights"
      title="Indoor Lights"
      tagline="Warm, ambient and seamless functional lighting."
      description="Flush mount ceiling luminaires, surface downlights, magnetic track modules and cove profile lights for modern homes."
      heroImage="/banner/Indoor Lights.webp"
      badges={[
        { icon: Sparkles, text: "Ultra Slim Profile" },
        { icon: Award, text: "TrueColor >90 CRI" },
        { icon: ShieldCheck, text: "3-Year Warranty" },
      ]}
      subCategories={[
        { id: "all", label: "All Indoor Lights" },
        { id: "downlights", label: "Recessed Downlights" },
        { id: "track", label: "Magnetic Track Modules" },
        { id: "wall", label: "Indoor Wall Sconces" },
      ]}
      products={products}
    />
  );
}
