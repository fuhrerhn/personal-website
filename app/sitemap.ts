import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// no lastModified: Cache Components doesn't allow reading the time while prerendering
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/archive`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
