import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import { IntroOverlay } from "./IntroOverlay";
import { isProductionHost, siteUrl, siteTitle, siteDescription } from "./seo";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const indexable = isProductionHost(requestHeaders.get("host"));

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: [
      "Autodienst Schwanheim",
      "Kfz-Werkstatt Frankfurt-Schwanheim",
      "Autowerkstatt Frankfurt am Main",
      "TÜV AU-Service",
      "Inspektion",
      "Ölwechsel",
      "Reifenservice",
      "Fahrzeugdiagnose",
      "Bremsenservice",
    ],
    metadataBase: new URL(siteUrl),
    robots: indexable ? undefined : { index: false, follow: false },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      type: "website",
      locale: "de_DE",
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Außenansicht von Autodienst Schwanheim in Frankfurt-Schwanheim",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [`${siteUrl}/og.png`],
    },
    icons: {
      icon: "/assets/optimized/autodienst-logo-160.png",
      shortcut: "/assets/optimized/autodienst-logo-160.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body><IntroOverlay /><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
