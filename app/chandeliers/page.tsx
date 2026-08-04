import type { Metadata } from "next";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata: Metadata = {
  title: "Chandeliers in Chennai",
  description:
    "Discover a timeless collection of chandeliers in classic, modern and luxury crystal styles for every interior. Visit Ashik Lights' Teynampet showroom, Chennai.",
  alternates: { canonical: "/chandeliers" },
  openGraph: {
    title: "Chandeliers in Chennai | Ashik Lights",
    description:
      "Statement grand crystal & brass chandeliers for luxury living rooms, dining areas and foyers.",
    url: "https://ashiklights.in/chandeliers",
  },
};

export default function ChandeliersPage() {
  const products = [
    {
      id: "ch-1",
      title: "Luxury Floral Crystal Chandelier",
      code: "AL-CH-1001",
      material: "K9 Optical Crystal & Gold Brass",
      dimensions: "Ø 36\" x H 32\"",
      image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
      subCat: "crystal",
    },
    {
      id: "ch-2",
      title: "Golden Tiered Crystal Waterfall Chandelier",
      code: "AL-CH-1002",
      material: "Cascading Crystal & Brushed Gold",
      dimensions: "Ø 32\" x H 40\"",
      image: "/assets/chandeliers/Golden Tiered Crystal Waterfall Chandelier.webp",
      subCat: "crystal",
    },
    {
      id: "ch-3",
      title: "Rectangular Amber Crystal Island Pendant",
      code: "AL-CH-1003",
      material: "Amber Faceted Crystal & Steel",
      dimensions: "L 42\" x W 14\" x H 12\"",
      image: "/assets/chandeliers/Rectangular Amber Crystal Island Pendant Light.webp",
      subCat: "modern",
    },
    {
      id: "ch-4",
      title: "Five-Arm Crystal Cup LED Chandelier",
      code: "AL-CH-1004",
      material: "Solid Brass & Crystal Cups",
      dimensions: "Ø 30\" x H 26\"",
      image: "/assets/chandeliers/Five-Arm Crystal Cup LED Chandelier-prompt.webp",
      subCat: "classic",
    },
    {
      id: "ch-5",
      title: "Six-Arm Crystal Cup LED Chandelier",
      code: "AL-CH-1005",
      material: "Cast Brass & Optical Crystal",
      dimensions: "Ø 34\" x H 28\"",
      image: "/assets/chandeliers/Six-Arm Crystal Cup LED Chandelier.webp",
      subCat: "classic",
    },
    {
      id: "ch-6",
      title: "Large Multi-Arm Crystal Cup Chandelier",
      code: "AL-CH-1006",
      material: "Tiered Brass & Faceted Crystal",
      dimensions: "Ø 42\" x H 38\"",
      image: "/assets/chandeliers/Large Multi-Arm Crystal Cup LED Chandelier.webp",
      subCat: "crystal",
    },
    {
      id: "ch-7",
      title: "Cascading Crystal Disc Butterfly Chandelier",
      code: "AL-CH-1007",
      material: "Laser Cut Metal & Crystal Discs",
      dimensions: "Ø 28\" x H 36\"",
      image: "/assets/chandeliers/Cascading Crystal Disc Butterfly LED Chandelier.webp",
      subCat: "modern",
    },
    {
      id: "ch-8",
      title: "Bubble Crystal Disc Butterfly Chandelier",
      code: "AL-CH-1008",
      material: "Clear Crystal & Champagne Gold",
      dimensions: "Ø 30\" x H 32\"",
      image: "/assets/chandeliers/Bubble Crystal Disc Butterfly Chandelier.webp",
      subCat: "modern",
    },
    {
      id: "ch-9",
      title: "Butterfly Crystal Globe Cascade Chandelier",
      code: "AL-CH-1009",
      material: "Glass Globes & Crystal Accents",
      dimensions: "Ø 24\" x H 44\"",
      image: "/assets/chandeliers/Butterfly Crystal Globe Cascade Chandelier.webp",
      subCat: "modern",
    },
    {
      id: "ch-10",
      title: "Crystal Leaf Sputnik Pendant Chandelier",
      code: "AL-CH-1010",
      material: "Sputnik Brass & Crystal Leaves",
      dimensions: "Ø 32\" x H 24\"",
      image: "/assets/chandeliers/Crystal Leaf Sputnik Pendant Chandelier.webp",
      subCat: "modern",
    },
    {
      id: "ch-11",
      title: "Golden Textured Globe Cascade Chandelier",
      code: "AL-CH-1011",
      material: "Textured Amber Glass Globes",
      dimensions: "Ø 26\" x H 40\"",
      image: "/assets/chandeliers/Golden Textured Globe Cascade LED Chandelier.webp",
      subCat: "modern",
    },
    {
      id: "ch-12",
      title: "Interlocking Crystal Ring LED Pendant Light",
      code: "AL-CH-1012",
      material: "Interlocking Gold Rings & Crystals",
      dimensions: "Ø 32\" x Ø 20\" Ring",
      image: "/assets/chandeliers/Interlocking Crystal Ring LED Pendant Light.webp",
      subCat: "minimal",
    },
    {
      id: "ch-13",
      title: "Linear Crystal Leaf Branch Pendant Light",
      code: "AL-CH-1013",
      material: "Brushed Brass Branch & Crystal Leaves",
      dimensions: "L 48\" x W 12\" x H 18\"",
      image: "/assets/chandeliers/Linear Crystal Leaf Branch Pendant Light.webp",
      subCat: "minimal",
    },
    {
      id: "ch-14",
      title: "Luxury Crystal Leaf Branch Chandelier",
      code: "AL-CH-1014",
      material: "Sculptural Gold Branch & K9 Leaves",
      dimensions: "Ø 38\" x H 22\"",
      image: "/assets/chandeliers/Luxury Crystal Leaf Branch Chandelier.webp",
      subCat: "crystal",
    },
    {
      id: "ch-15",
      title: "Multi-Pendant Crystal Branch Chandelier",
      code: "AL-CH-1015",
      material: "Branch Canopy & Crystal Drops",
      dimensions: "L 40\" x H 30\"",
      image: "/assets/chandeliers/Multi-Pendant Crystal Branch Chandelier.webp",
      subCat: "modern",
    },
    {
      id: "ch-16",
      title: "Round Amber Crystal Drum Chandelier",
      code: "AL-CH-1016",
      material: "Amber Crystal Rods & Gold Frame",
      dimensions: "Ø 28\" x H 16\"",
      image: "/assets/chandeliers/Round Amber Crystal Drum Pendant Chandelier.webp",
      subCat: "classic",
    },
    {
      id: "ch-17",
      title: "Round Crystal Drum Flush Ceiling Light",
      code: "AL-CH-1017",
      material: "Crystal Beaded Drum & Brass",
      dimensions: "Ø 24\" x H 10\"",
      image: "/assets/chandeliers/Round Crystal Drum Flush-Mount Ceiling Light.webp",
      subCat: "classic",
    },
    {
      id: "ch-18",
      title: "Two-Tier Crystal Ring Drop Chandelier",
      code: "AL-CH-1018",
      material: "Double Ring Gold Steel & Crystals",
      dimensions: "Ø 30\" x Ø 18\" Rings",
      image: "/assets/chandeliers/Two-Tier Crystal Ring Drop Chandelier.webp",
      subCat: "minimal",
    },
    {
      id: "ch-19",
      title: "Triple Vertical Crystal Ring Pendant Light",
      code: "AL-CH-1019",
      material: "3 Vertical Crystal Halo Rings",
      dimensions: "H 42\" x W 14\"",
      image: "/assets/chandeliers/Triple Vertical Crystal Ring Pendant Light.webp",
      subCat: "minimal",
    },
    {
      id: "ch-20",
      title: "Vertical Double Crystal Ring Pendant Light",
      code: "AL-CH-1020",
      material: "Dual Vertical Crystal Loops",
      dimensions: "H 32\" x W 12\"",
      image: "/assets/chandeliers/Vertical Double Crystal Ring Pendant Light.webp",
      subCat: "minimal",
    },
    {
      id: "ch-21",
      title: "Double Concentric Crystal Ring Ceiling Light",
      code: "AL-CH-1021",
      material: "Dual Concentric Crystal Rings",
      dimensions: "Ø 26\" x H 6\"",
      image: "/assets/chandeliers/Double Concentric Crystal Ring Ceiling Light.webp",
      subCat: "minimal",
    },
    {
      id: "ch-22",
      title: "Interlocking Crystal Ring LED Ceiling Light",
      code: "AL-CH-1022",
      material: "Interlocked Crystal Bands",
      dimensions: "Ø 22\" x H 7\"",
      image: "/assets/chandeliers/Interlocking Crystal Ring LED Ceiling Light.webp",
      subCat: "minimal",
    },
    {
      id: "ch-23",
      title: "Square Crystal Drop Flush Ceiling Light",
      code: "AL-CH-1023",
      material: "Square Faceted Crystal & Mirror Steel",
      dimensions: "18\" x 18\" x H 8\"",
      image: "/assets/chandeliers/Square Crystal Drop Flush-Mount Ceiling Light.webp",
      subCat: "crystal",
    },
    {
      id: "ch-24",
      title: "Square Crystal LED Flush Ceiling Light",
      code: "AL-CH-1024",
      material: "Geometric Square Crystal Grid",
      dimensions: "20\" x 20\" x H 6\"",
      image: "/assets/chandeliers/Square Crystal LED Flush-Mount Ceiling Light.webp",
      subCat: "crystal",
    },
    {
      id: "ch-25",
      title: "Square Faceted Crystal LED Ceiling Light",
      code: "AL-CH-1025",
      material: "Faceted K9 Crystals & Stainless",
      dimensions: "16\" x 16\" x H 6\"",
      image: "/assets/chandeliers/Square Faceted Crystal LED Ceiling Light.webp",
      subCat: "crystal",
    },
    {
      id: "ch-26",
      title: "Square Crystal LED Ceiling Light",
      code: "AL-CH-1026",
      material: "Compact Square Crystal Luminaire",
      dimensions: "14\" x 14\" x H 5\"",
      image: "/assets/chandeliers/square Crystal LED Ceiling Light.webp",
      subCat: "crystal",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="chandeliers"
      title="Chandeliers"
      tagline="Statement lighting that defines your space."
      description="Discover a timeless collection of chandeliers in classic, modern and luxury crystal styles for every interior."
      heroImage="/banner/Chandeliers.webp"
      mobileHeroImage="/banner/Chandeliers mob.webp"
      badges={[
        { icon: "Sparkles", text: "Premium K9 Crystal" },
        { icon: "UserCheck", text: "Expert Guidance" },
        { icon: "ShieldCheck", text: "Custom Size Options" },
      ]}
      subCategories={[
        { id: "all", label: "All Chandeliers" },
        { id: "crystal", label: "Crystal Chandeliers" },
        { id: "modern", label: "Modern Chandeliers" },
        { id: "classic", label: "Classic Chandeliers" },
        { id: "minimal", label: "Minimal Chandeliers" },
      ]}
      products={products}
    />
  );
}
