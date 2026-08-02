import type { Metadata } from "next";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata: Metadata = {
  title: "Architectural Lighting Chennai",
  description:
    "Magnetic track spotlights, trimless recessed architectural downlights (UGR<13), wall washers and linear profile LED channels. Ashik Lights, Chennai.",
  alternates: { canonical: "/architectural-lights" },
  openGraph: {
    title: "Architectural Lighting Chennai | Ashik Lights",
    description:
      "Precision beam architectural lighting, trimless channels, and magnetic track systems for Chennai homes and offices.",
    url: "https://ashiklights.in/architectural-lights",
  },
};

export default function ArchitecturalLightsPage() {
  const products = [
    {
      id: "ar-1",
      title: "Circular Magnetic Power Track Series",
      code: "AL-AR-6001",
      material: "Circular 48V Magnetic Rail System",
      dimensions: "Ø 1200mm Ring Track",
      image: "/assets/Architecture Light/Circular Magnetic Power Track Series.webp",
      subCat: "magnetic",
    },
    {
      id: "ar-2",
      title: "Gobo Projection Light Series",
      code: "AL-AR-6002",
      material: "Precision Pattern Optical Projector",
      dimensions: "30W LED • Custom Gobo",
      image: "/assets/Architecture Light/Gobo Light.webp",
      subCat: "trimless",
    },
    {
      id: "ar-3",
      title: "Linear Wall Washer Series",
      code: "AL-AR-6003",
      material: "Asymmetric Wall Washing Optics",
      dimensions: "L 1000mm • 24W 3000K",
      image: "/assets/Architecture Light/Linear Wall Washer Series.webp",
      subCat: "profiles",
    },
    {
      id: "ar-4",
      title: "Magnetic Linear Spotlight Series",
      code: "AL-AR-6004",
      material: "Recessed Magnetic Linear Baffle",
      dimensions: "L 600mm • 18W",
      image: "/assets/Architecture Light/Magnetic Linear Series.webp",
      subCat: "magnetic",
    },
    {
      id: "ar-5",
      title: "Mini Magnetic Spotlight Series",
      code: "AL-AR-6005",
      material: "Compact Adjustable Magnetic Pod",
      dimensions: "Ø 35mm • 6W 24° Beam",
      image: "/assets/Architecture Light/Mini Magnetic Series.webp",
      subCat: "magnetic",
    },
    {
      id: "ar-6",
      title: "Polarized Wall Washer Spotlight Series",
      code: "AL-AR-6006",
      material: "Polarized Optics Wall Washer",
      dimensions: "Trimless Recessed • 18W",
      image: "/assets/Architecture Light/Polarized Wall Washer Spotlight Series.webp",
      subCat: "trimless",
    },
  ];

  return (
    <CategoryCatalog
      categorySlug="architectural-lights"
      title="Architectural Lights"
      tagline="Precision beam control, glare-free downlights and tracks."
      description="Magnetic track spotlights, trimless recessed architectural downlights (UGR<13), wall washers and linear profile LED channels."
      heroImage="/banner/Architectural Lights.webp"
      badges={[
        { icon: "Sparkles", text: "Low Glare UGR < 13" },
        { icon: "SlidersHorizontal", text: "15°/24°/36° Optics" },
        { icon: "ShieldCheck", text: "Meanwell LED Drivers" },
      ]}
      subCategories={[
        { id: "all", label: "All Architectural" },
        { id: "magnetic", label: "Magnetic Track Systems" },
        { id: "trimless", label: "Trimless Recessed" },
        { id: "profiles", label: "Linear Wall Washers" },
      ]}
      products={products}
    />
  );
}
