import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import StickyHelpWidget from "@/components/StickyHelpWidget";
import AdvancedAnimations from "@/components/AdvancedAnimations";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#040812",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ashiklights.in"),
  title: {
    default:
      "Ashik Lights | Luxury Decorative & Architectural Lighting Chennai",
    template: "%s | Ashik Lights Chennai",
  },
  description:
    "Explore statement crystal chandeliers, high-ceiling foyer cascades, BLDC decorative ceiling fans, architectural magnetic tracks, vanity LED mirrors & IP65 outdoor lights at Ashik Lights Chennai.",
  keywords: [
    "Ashik Lights",
    "Chandeliers Chennai",
    "Luxury Lighting Showroom Chennai",
    "High Ceiling Chandeliers Chennai",
    "Decorative Fans Chennai",
    "LED Mirrors Chennai",
    "Architectural Lighting Chennai",
    "Outdoor Lights Chennai",
    "Anna Salai Lighting Store",
    "ECR Lighting Showroom",
  ],
  authors: [{ name: "Ashik Lights", url: "https://ashiklights.in" }],
  creator: "Ashik Lights",
  publisher: "Ashik Lights",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Ashik Lights | Luxury Decorative & Architectural Lighting Chennai",
    description:
      "Transform your villa, living room, and foyer with luxury chandeliers, decorative fans, LED mirrors, and architectural magnetic tracks from Ashik Lights Chennai.",
    url: "https://ashiklights.in",
    siteName: "Ashik Lights",
    images: [
      {
        url: "/assets/banner.webp",
        width: 1200,
        height: 630,
        alt: "Ashik Lights Luxury Lighting Showroom Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashik Lights | Luxury Lighting Showroom Chennai",
    description:
      "Statement chandeliers, foyer cascades, decorative fans, and architectural lighting in Chennai.",
    images: ["/assets/banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLdStoreSchema = {
  "@context": "https://schema.org",
  "@type": "LightingStore",
  name: "Ashik Lights",
  image: "https://ashiklights.in/assets/banner.webp",
  "@id": "https://ashiklights.in/#store",
  url: "https://ashiklights.in",
  telephone: "+91-08754860555",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#313, Anna Salai, Opposite to Kamaraj Arangam, Teynampet",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0498,
    longitude: 80.2474,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/ashiklights",
    "https://www.instagram.com/ashik_lights",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Knowledge File"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdStoreSchema),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} font-sans antialiased bg-[#040812] text-slate-100 selection:bg-white selection:text-[#040812]`}
      >
        <PageLoader />
        <AdvancedAnimations />
        {children}
        <StickyHelpWidget />
      </body>
    </html>
  );
}
