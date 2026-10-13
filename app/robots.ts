import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isProductionHost, siteUrl } from "./seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  return {
    rules: isProductionHost(requestHeaders.get("host"))
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
