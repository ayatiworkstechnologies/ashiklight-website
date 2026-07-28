import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ashiklights.in";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/contact",
    "/chandeliers",
    "/high-ceiling-chandeliers",
    "/indoor-lights",
    "/decorative-fans",
    "/wall-pendant-lights",
    "/led-mirrors",
    "/architectural-lights",
    "/outdoor-lights",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
