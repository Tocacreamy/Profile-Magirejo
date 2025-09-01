import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pages = [
    "/",
    "/tentang",
    "/organisasi",
    "/umkm",
    "/fasilitas",
    "/budaya",
  ];
  const now = new Date();

  return pages.map((path) => ({
    url: base ? `${base}${path}` : path,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
