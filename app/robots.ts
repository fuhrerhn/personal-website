import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    // keep crawlers out of preview deployments
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
