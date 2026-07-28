import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Ashik Lights

> Premier luxury decorative and architectural lighting brand in Chennai, Tamil Nadu, India. Specializing in statement crystal chandeliers, high-ceiling foyer cascades, BLDC decorative ceiling fans, architectural magnetic tracks, frameless vanity LED mirrors, and IP65 outdoor landscape luminaires.

## Core Products & Collections

- [Chandeliers](https://ashiklights.in/chandeliers): Statement grand crystal & brass chandeliers for luxury living rooms and dining spaces.
- [High Ceiling Chandeliers](https://ashiklights.in/high-ceiling-chandeliers): Custom multi-tier and drop cable chandeliers engineered for double-height foyers, staircases, and luxury villas.
- [Indoor Lights](https://ashiklights.in/indoor-lights): Warm flush mount ceiling luminaires, surface downlights, and cove profile lights.
- [Decorative Fan](https://ashiklights.in/decorative-fans): Whisper-quiet BLDC motor ceiling fans with retractable blades, solid wood finishes, and LED light rings.
- [Wall & Pendant Lights](https://ashiklights.in/wall-pendant-lights): Artisanal hand-blown glass island pendants and champagne gold wall sconces.
- [LED Mirror](https://ashiklights.in/led-mirrors): Frameless vanity LED mirrors with smart touch sensors, anti-fog demisters, and dual CCT lighting halos.
- [Architectural Lights](https://ashiklights.in/architectural-lights): Magnetic 48V track spotlights, low-glare UGR<13 recessed downlights, and linear LED channels.
- [Outdoor Lights](https://ashiklights.in/outdoor-lights): Weatherproof IP65 outdoor wall sconces, garden bollards, spike spotlights, and facade wall washers.

## Showroom Locations (Chennai)

- **Teynampet Showroom**: Anna Salai, Teynampet, Chennai, Tamil Nadu
- **Anna Nagar Showroom**: 2nd Avenue, Anna Nagar, Chennai, Tamil Nadu
- **ECR Showroom**: East Coast Road, Uthandi / Palavakkam, Chennai, Tamil Nadu
- **Velachery Showroom**: Bypass Road, Velachery, Chennai, Tamil Nadu
- **Tambaram Showroom**: GST Road, Tambaram, Chennai, Tamil Nadu
- **Porur Showroom**: Mount-Poonamallee Road, Porur, Chennai, Tamil Nadu

## Contact Information

- Phone: +91 067548 60555
- Email: info@ashiklights.in
- Website: https://ashiklights.in
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
