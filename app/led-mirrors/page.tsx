import type { Metadata } from "next";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata: Metadata = {
  title: "LED Vanity Mirrors Chennai",
  description:
    "Frameless high-definition vanity LED mirrors featuring feather touch switches, integrated demister pads and dual CCT lighting. Shop at Ashik Lights, Chennai.",
  alternates: { canonical: "/led-mirrors" },
  openGraph: {
    title: "LED Vanity Mirrors Chennai | Ashik Lights",
    description:
      "Touch-sensor anti-fog LED bathroom and vanity mirrors with dual color temperature control.",
    url: "https://ashiklights.in/led-mirrors",
  },
};

export default function LedMirrorsPage() {
  const products = [
    {
      id: "lm-1",
      title: "Round Halo LED Bathroom Mirror",
      code: "AL-LM-4001",
      material: "5mm HD Copper-Free Glass • Warm LED Halo",
      dimensions: "Ø 30\" Round",
      image: "/assets/Led Mirror/Round Halo LED Bathroom Mirror.webp",
      subCat: "round",
    },
    {
      id: "lm-2",
      title: "Oval Ring LED Vanity Mirror",
      code: "AL-LM-4002",
      material: "Frameless Oval • Touch Sensor Switch",
      dimensions: "W 20\" x H 36\"",
      image: "/assets/Led Mirror/Oval Ring LED Vanity Mirror.webp",
      subCat: "oval",
    },
    {
      id: "lm-3",
      title: "Round Ring LED Vanity Mirror",
      code: "AL-LM-4003",
      material: "Front & Backlit Dual LED Ring",
      dimensions: "Ø 28\" Round",
      image: "/assets/Led Mirror/Round Ring LED Vanity Mirror.webp",
      subCat: "round",
    },
    {
      id: "lm-4",
      title: "Rectangular Dual-Side LED Mirror",
      code: "AL-LM-4004",
      material: "Dual CCT Warm/White • Smart Demister",
      dimensions: "24\" x 36\"",
      image: "/assets/Led Mirror/Rectangular Dual-Side LED Mirror.webp",
      subCat: "rectangle",
    },
    {
      id: "lm-5",
      title: "Rectangular Edge-Lit Bathroom Mirror",
      code: "AL-LM-4005",
      material: "Edge-Lit Anti-Glare Acrylic Frame",
      dimensions: "30\" x 40\"",
      image: "/assets/Led Mirror/Rectangular Edge-Lit Bathroom Mirror.webp",
      subCat: "rectangle",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="led-mirrors"
      title="LED Mirror"
      tagline="Flawless vanity reflection with touch sensors and anti-fog."
      description="Frameless high-definition vanity LED mirrors featuring feather touch switches, integrated demister pads and dual CCT lighting."
      heroImage="/banner/LED Mirror.webp"
      mobileHeroImage="/banner/LED Mirror mob.webp"
      badges={[
        { icon: "Maximize2", text: "5mm HD Copper-Free Glass" },
        { icon: "Award", text: "Smart Anti-Fog Demister" },
        { icon: "ShieldCheck", text: "Feather Touch Sensor" },
      ]}
      subCategories={[
        { id: "all", label: "All LED Mirrors" },
        { id: "round", label: "Round Vanity Mirrors" },
        { id: "oval", label: "Pill & Oval Mirrors" },
        { id: "rectangle", label: "Rectangle Backlit" },
      ]}
      products={products}
    />
  );
}
