import type { Metadata } from "next";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata: Metadata = {
  title: "High Ceiling Chandeliers Chennai",
  description:
    "Custom multi-tier crystal statement chandeliers engineered with structural ceiling plates for double-height foyers and stairwells in Chennai.",
  alternates: { canonical: "/high-ceiling-chandeliers" },
  openGraph: {
    title: "High Ceiling Chandeliers Chennai | Ashik Lights",
    description:
      "Custom drop-length multi-tier crystal rain chandeliers engineered for double-height villas, foyers and stairwells.",
    url: "https://ashiklights.in/high-ceiling-chandeliers",
  },
};

export default function HighCeilingChandeliersPage() {
  const products = [
    {
      id: "hc-1",
      title: "Crystal Raindrop High-Ceiling Chandelier",
      code: "AL-HC-2001",
      material: "Raindrop K9 Crystal & Polished Steel",
      dimensions: "Ø 40\" x H 144\"",
      image: "/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp",
      subCat: "foyer",
    },
    {
      id: "hc-2",
      title: "Multi-Tier Crystal Tree Branch Chandelier",
      code: "AL-HC-2002",
      material: "Solid Brass Branch & K9 Leaves",
      dimensions: "Ø 48\" x H 120\"",
      image: "/assets/High Ceiling Chandeliers/Multi-Tier Crystal Tree Branch Chandelier.webp",
      subCat: "villa",
    },
    {
      id: "hc-3",
      title: "Butterfly Crystal Disc Cascade Chandelier",
      code: "AL-HC-2003",
      material: "Butterfly Crystal Discs & Gold Wire",
      dimensions: "Ø 36\" x H 108\"",
      image: "/assets/High Ceiling Chandeliers/Butterfly Crystal Disc Cascade Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-4",
      title: "Cascading Crystal Cone Pendant Chandelier",
      code: "AL-HC-2004",
      material: "Cone Faceted Crystals & Steel Canopy",
      dimensions: "Ø 30\" x H 96\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Cone Pendant Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-5",
      title: "Abstract Wave Rod High-Ceiling Chandelier",
      code: "AL-HC-2005",
      material: "Sculptural Brass Wave Rods",
      dimensions: "L 60\" x W 18\" x H 120\"",
      image: "/assets/High Ceiling Chandeliers/Abstract Wave Rod High-Ceiling Chandelier.webp",
      subCat: "villa",
    },
    {
      id: "hc-6",
      title: "Cascading Crystal Acorn Pendant Chandelier",
      code: "AL-HC-2006",
      material: "Acorn Cut Crystal Orbs & Gold Steel",
      dimensions: "Ø 32\" x H 110\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Acorn Pendant Chandelier.webp",
      subCat: "foyer",
    },
    {
      id: "hc-7",
      title: "Cascading Crystal Cube Pendant Chandelier",
      code: "AL-HC-2007",
      material: "Geometric Crystal Cubes & Black Rail",
      dimensions: "Ø 28\" x H 100\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Cube Pendant Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-8",
      title: "Cascading Crystal Dome Pendant Chandelier",
      code: "AL-HC-2008",
      material: "Dome Crystal Shades & Gold Cords",
      dimensions: "Ø 36\" x H 118\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Dome Pendant Chandelier-prompt.webp",
      subCat: "foyer",
    },
    {
      id: "hc-9",
      title: "Cascading Crystal Flower LED Chandelier",
      code: "AL-HC-2009",
      material: "Handmade Crystal Petals & Gold Canopy",
      dimensions: "Ø 34\" x H 105\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Flower LED Chandelier.webp",
      subCat: "foyer",
    },
    {
      id: "hc-10",
      title: "Cascading Crystal Jellyfish Pendant Chandelier",
      code: "AL-HC-2010",
      material: "Fine Crystal Strings & Blown Glass",
      dimensions: "Ø 30\" x H 125\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Jellyfish Pendant Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-11",
      title: "Cascading Crystal Tube High-Ceiling Chandelier",
      code: "AL-HC-2011",
      material: "Fluted Crystal Tubes & Champagne Gold",
      dimensions: "Ø 32\" x H 130\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Tube High-Ceiling Chandelier.webp",
      subCat: "foyer",
    },
    {
      id: "hc-12",
      title: "Cascading Crystal Tube LED Chandelier",
      code: "AL-HC-2012",
      material: "Linear Crystal Rods & Warm LED",
      dimensions: "Ø 28\" x H 115\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Crystal Tube LED Chandelier-prompt.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-13",
      title: "Cascading Opal Globe LED Chandelier",
      code: "AL-HC-2013",
      material: "Opal Diffuser Globes & Matte Black",
      dimensions: "Ø 30\" x H 100\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Opal Globe LED Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-14",
      title: "Cascading Opal Oval Globe Chandelier",
      code: "AL-HC-2014",
      material: "Frosted Oval Glass & Brass Cords",
      dimensions: "Ø 32\" x H 105\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Opal Oval Globe Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-15",
      title: "Cascading Orbital Ring LED Chandelier",
      code: "AL-HC-2015",
      material: "3D Orbital Rings & Warm LED Halo",
      dimensions: "Ø 42\" x H 135\"",
      image: "/assets/High Ceiling Chandeliers/Cascading Orbital Ring LED Chandelier.webp",
      subCat: "villa",
    },
    {
      id: "hc-16",
      title: "Crystal Icicle Cascade LED Chandelier",
      code: "AL-HC-2016",
      material: "Faceted Crystal Icicle Drops",
      dimensions: "Ø 36\" x H 140\"",
      image: "/assets/High Ceiling Chandeliers/Crystal Icicle Cascade LED Chandelier-prompt.webp",
      subCat: "foyer",
    },
    {
      id: "hc-17",
      title: "Crystal Rod and Sphere Cascade Chandelier",
      code: "AL-HC-2017",
      material: "Combined Rods & Crystal Spheres",
      dimensions: "Ø 38\" x H 125\"",
      image: "/assets/High Ceiling Chandeliers/Crystal Rod and Sphere Cascade Chandelier.webp",
      subCat: "foyer",
    },
    {
      id: "hc-18",
      title: "Geometric Frame Cascade LED Chandelier",
      code: "AL-HC-2018",
      material: "Gold Geometric Frames & Crystal",
      dimensions: "L 36\" x W 36\" x H 110\"",
      image: "/assets/High Ceiling Chandeliers/Geometric Frame Cascade LED Chandelier.webp",
      subCat: "villa",
    },
    {
      id: "hc-19",
      title: "Luxury Crystal Vine Cascade Chandelier",
      code: "AL-HC-2019",
      material: "Braided Vine Steel & Crystal Buds",
      dimensions: "Ø 40\" x H 130\"",
      image: "/assets/High Ceiling Chandeliers/Luxury Crystal Vine Cascade Chandelier.webp",
      subCat: "villa",
    },
    {
      id: "hc-20",
      title: "Multi-Tier Crystal Leaf Ring Chandelier",
      code: "AL-HC-2020",
      material: "Concentric Leaf Rings & Brass",
      dimensions: "Ø 44\" x H 120\"",
      image: "/assets/High Ceiling Chandeliers/Multi-Tier Crystal Leaf Ring Chandelier.webp",
      subCat: "villa",
    },
    {
      id: "hc-21",
      title: "Multicolour Glass Lantern Cascade Chandelier",
      code: "AL-HC-2021",
      material: "Hand-Blown Multicolour Glass Lanterns",
      dimensions: "Ø 34\" x H 115\"",
      image: "/assets/High Ceiling Chandeliers/Multicolour Glass Lantern Cascade Chandelier.webp",
      subCat: "stairwell",
    },
    {
      id: "hc-22",
      title: "Multicolour Teardrop Glass Cascade Chandelier",
      code: "AL-HC-2022",
      material: "Artisanal Colored Glass Teardrops",
      dimensions: "Ø 36\" x H 128\"",
      image: "/assets/High Ceiling Chandeliers/Multicolour Teardrop Glass Cascade Chandelier.webp",
      subCat: "stairwell",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="high-ceiling-chandeliers"
      title="High Ceiling Chandeliers"
      tagline="Designed for dramatic double-height spaces."
      description="Custom multi-tier crystal statement chandeliers engineered with structural ceiling plates for foyers and stairwells."
      heroImage="/banner/High Ceiling Chandeliers.webp"
      badges={[
        { icon: "SlidersHorizontal", text: "Custom Cable Drops" },
        { icon: "UserCheck", text: "Structural CAD Support" },
        { icon: "ShieldCheck", text: "Load Capacity Tested" },
      ]}
      subCategories={[
        { id: "all", label: "All High Ceiling" },
        { id: "foyer", label: "Foyer Cascades" },
        { id: "stairwell", label: "Stairwell Multi-Pendants" },
        { id: "villa", label: "Grand Villa Tiered" },
      ]}
      products={products}
    />
  );
}
