import type { MetadataRoute } from "next";
import { services } from "./data/services";
import { siteUrl } from "./data/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/impressum", "/datenschutz", ...services.map(service => `/leistungen/${service.slug}`)].map(path => ({ url: `${siteUrl}${path}` }));
}
