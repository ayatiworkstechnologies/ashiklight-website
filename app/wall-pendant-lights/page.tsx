"use client";

import React from "react";
import CategoryCatalog from "@/components/CategoryCatalog";
import { Sparkles, UserCheck, ShieldCheck } from "lucide-react";

export default function WallPendantLightsPage() {
  const products = [
    {
      id: "wp-1",
      title: "Amber Glass Halo Wall Sconce",
      code: "AL-WP-8001",
      material: "Amber Glass & Brushed Brass",
      dimensions: "Ø 10\" x H 14\"",
      image: "/assets/Wall & Pendant Lights/Amber Glass Halo Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-2",
      title: "Amber Textured Glass Disc Wall Sconce",
      code: "AL-WP-8002",
      material: "Textured Amber Glass Disc",
      dimensions: "Ø 12\" Disc",
      image: "/assets/Wall & Pendant Lights/Amber Textured Glass Disc Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-3",
      title: "Antique Layered Ring Wall Light",
      code: "AL-WP-8003",
      material: "Layered Antique Brass Rings",
      dimensions: "H 16\" x W 8\"",
      image: "/assets/Wall & Pendant Lights/Antique Layered Ring Wall Light.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-4",
      title: "Clear Glass Floral Disc Wall Light",
      code: "AL-WP-8004",
      material: "Handcrafted Floral Glass Disc",
      dimensions: "Ø 14\" Disc",
      image: "/assets/Wall & Pendant Lights/Clear Glass Floral Disc Wall Light.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-5",
      title: "Clustered Textured Glass Bud Pendant",
      code: "AL-WP-8005",
      material: "Textured Glass Buds & Gold Cables",
      dimensions: "3-Light Cluster",
      image: "/assets/Wall & Pendant Lights/Clustered Textured Glass Bud Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-6",
      title: "Crystal Crown LED Wall Sconce",
      code: "AL-WP-8006",
      material: "Crown Faceted Crystals & Gold",
      dimensions: "H 12\" x W 6\"",
      image: "/assets/Wall & Pendant Lights/Crystal Crown LED Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-7",
      title: "Crystal Crown Half-Drum Wall Light",
      code: "AL-WP-8007",
      material: "Half-Drum Crystal Shield",
      dimensions: "H 14\" x W 8\"",
      image: "/assets/Wall & Pendant Lights/Crystal Crown Half-Drum Wall Light.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-8",
      title: "Crystal Globe Disc Wall Sconce",
      code: "AL-WP-8008",
      material: "Crystal Globe & Brass Disc Backer",
      dimensions: "Ø 10\" x Depth 6\"",
      image: "/assets/Wall & Pendant Lights/Crystal Globe Disc Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-9",
      title: "Crystal Hourglass Double-Globe Light",
      code: "AL-WP-8009",
      material: "Hourglass Crystal & Dual Orbs",
      dimensions: "H 18\" x W 6\"",
      image: "/assets/Wall & Pendant Lights/Crystal Hourglass Double-Globe Wall Light.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-10",
      title: "Crystal Leaf Single Pendant Light",
      code: "AL-WP-8010",
      material: "Solid Brass & Crystal Leaf Shade",
      dimensions: "Ø 8\" Shade",
      image: "/assets/Wall & Pendant Lights/Crystal Leaf Single Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-11",
      title: "Double Glass Globe Linear Pendant",
      code: "AL-WP-8011",
      material: "Dual Glass Globes & Gold Rod",
      dimensions: "W 24\" x H 10\"",
      image: "/assets/Wall & Pendant Lights/Double Glass Globe Linear Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-12",
      title: "Dual Glass Globe Brass Wall Sconce",
      code: "AL-WP-8012",
      material: "Opal & Amber Glass Globes",
      dimensions: "H 20\" x W 8\"",
      image: "/assets/Wall & Pendant Lights/Dual Glass Globe Brass Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-13",
      title: "Dual-Sided Amber Glass Wall Light",
      code: "AL-WP-8013",
      material: "Bi-Directional Amber Glass Shades",
      dimensions: "H 16\" x W 6\"",
      image: "/assets/Wall & Pendant Lights/Dual-Sided Amber Glass Wall Light.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-14",
      title: "Dual-Tiered Glass Disc Pendant Light",
      code: "AL-WP-8014",
      material: "Tiered Fused Glass Discs",
      dimensions: "Ø 14\" x H 18\"",
      image: "/assets/Wall & Pendant Lights/Dual-Tiered Glass Disc Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-15",
      title: "Ribbed Opal Glass Cylinder Pendant",
      code: "AL-WP-8015",
      material: "Fluted Opal Glass & Brass Cap",
      dimensions: "Ø 6\" x H 16\"",
      image: "/assets/Wall & Pendant Lights/Ribbed Opal Glass Cylinder Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-16",
      title: "Sculptural Brass Leaf Wall Sconce",
      code: "AL-WP-8016",
      material: "Cast Brass Ginkgo Leaf Motif",
      dimensions: "H 14\" x W 10\"",
      image: "/assets/Wall & Pendant Lights/Sculptural Brass Leaf Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-17",
      title: "Single Amber Glass Globe Pendant",
      code: "AL-WP-8017",
      material: "Handblown Amber Glass Sphere",
      dimensions: "Ø 10\" Sphere",
      image: "/assets/Wall & Pendant Lights/Single Amber Glass Globe Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-18",
      title: "Textured Glass Ring Pendant Light",
      code: "AL-WP-8018",
      material: "Artisanal Textured Glass Loop",
      dimensions: "Ø 12\" Ring",
      image: "/assets/Wall & Pendant Lights/Textured Glass Ring Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-19",
      title: "Vertical Glass Cylinder Wall Sconce",
      code: "AL-WP-8019",
      material: "Smoked Glass Tube & Brass Base",
      dimensions: "H 18\" x W 4\"",
      image: "/assets/Wall & Pendant Lights/Vertical Glass Cylinder Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-20",
      title: "Warm Amber Glass Cone Pendant Light",
      code: "AL-WP-8020",
      material: "Cone Amber Glass & Brass Fitting",
      dimensions: "Ø 8\" x H 12\"",
      image: "/assets/Wall & Pendant Lights/Warm Amber Glass Cone Pendant Light.webp",
      subCat: "pendants",
    },
    {
      id: "wp-21",
      title: "Warm Glass Disc Modern Wall Sconce",
      code: "AL-WP-8021",
      material: "Concentric Glass Disc Halo",
      dimensions: "Ø 10\" x Depth 4\"",
      image: "/assets/Wall & Pendant Lights/Warm Glass Disc Modern Wall Sconce.webp",
      subCat: "wall-sconces",
    },
    {
      id: "wp-22",
      title: "Wave Textured Glass Disc Wall Light",
      code: "AL-WP-8022",
      material: "Fluid Wave Textured Glass Plate",
      dimensions: "Ø 12\" Plate",
      image: "/assets/Wall & Pendant Lights/Wave Textured Glass Disc Wall Light.webp",
      subCat: "wall-sconces",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="wall-pendant-lights"
      title="Wall & Pendant Lights"
      tagline="Artisanal glass, blown pendants and ambient wall sconces."
      description="Elevate your bedside, dining nook, corridor or feature wall with hand-blown glass island pendants and solid brass sconces."
      heroImage="/assets/Wall & Pendant Lights/Amber Glass Halo Wall Sconce.webp"
      badges={[
        { icon: Sparkles, text: "Handblown Glass" },
        { icon: UserCheck, text: "Solid Brass Fitting" },
        { icon: ShieldCheck, text: "3-Year Warranty" },
      ]}
      subCategories={[
        { id: "all", label: "All Wall & Pendants" },
        { id: "wall-sconces", label: "Wall Sconces" },
        { id: "pendants", label: "Pendant Lights" },
      ]}
      products={products}
    />
  );
}
