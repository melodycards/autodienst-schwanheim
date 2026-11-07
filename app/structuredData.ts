import { contact } from "./data/contact";
import { siteUrl } from "./seo";

export const businessId = `${siteUrl}/#werkstatt`;

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": businessId,
  name: "Autodienst Schwanheim",
  url: siteUrl,
  telephone: contact.landlineHref.replace("tel:", ""),
  email: contact.email,
  image: `${siteUrl}/assets/optimized/foto-werkstatt-eingang-1200.webp`,
  logo: `${siteUrl}/assets/optimized/autodienst-logo-320.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    postalCode: "60529",
    addressLocality: "Frankfurt am Main",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" },
  ],
};

export function serviceStructuredData(service: { slug: string; title: string; description: string }) {
  const url = `${siteUrl}/leistungen/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}#service`, name: service.title, description: service.description, url, provider: { "@id": businessId } },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Autodienst Schwanheim", item: siteUrl },
          { "@type": "ListItem", position: 2, name: service.title, item: url },
        ],
      },
    ],
  };
}
