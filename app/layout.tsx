import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import { IntroOverlay } from "./IntroOverlay";

const siteTitle = "Autodienst Schwanheim | Autowerkstatt in Frankfurt am Main";
const siteDescription =
  "Autodienst Schwanheim ist eine Kfz-Werkstatt in Frankfurt-Schwanheim für TÜV & AU-Service, Inspektion, Ölwechsel, Reifenservice, Fahrzeugdiagnose, Klima-Check, Bremsenservice und weitere Kfz-Leistungen.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";

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
    metadataBase: new URL(origin),
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      type: "website",
      locale: "de_DE",
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
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
