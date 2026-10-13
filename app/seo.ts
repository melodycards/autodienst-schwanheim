import type { Metadata } from "next";

export const siteUrl = "https://www.autodienst-schwanheim.de";
export const siteTitle = "Autodienst Schwanheim | Autowerkstatt in Frankfurt am Main";
export const siteDescription =
  "Autodienst Schwanheim ist eine Kfz-Werkstatt in Frankfurt-Schwanheim für TÜV & AU-Service, Inspektion, Ölwechsel, Reifenservice, Fahrzeugdiagnose, Klima-Check, Bremsenservice und weitere Kfz-Leistungen.";

export function isProductionHost(
  host: string | null,
  deployment = process.env.VERCEL_ENV,
  runtime = process.env.NODE_ENV,
): boolean {
  return runtime === "production"
    && (!deployment || deployment === "production")
    && host?.toLowerCase() === new URL(siteUrl).host;
}

export function pageSeo(path: string, title = siteTitle, description = siteDescription): Metadata {
  const url = `${siteUrl}${path.replace(/\/+$/, "")}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: "website", locale: "de_DE",
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Außenansicht von Autodienst Schwanheim in Frankfurt-Schwanheim" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
  };
}
