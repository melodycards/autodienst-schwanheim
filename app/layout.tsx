import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Autodienst Schwanheim | Autowerkstatt in Frankfurt am Main";
const siteDescription =
  "Autowerkstatt in Frankfurt-Schwanheim: TÜV & AU-Service, Inspektion, Ölwechsel, Reifenservice, Fahrzeugdiagnose, Akku, Auspuff, Getriebe und Radeinstellung.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";

  return {
    title: siteTitle,
    description: siteDescription,
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
      icon: "/autodienst-logo.png",
      shortcut: "/autodienst-logo.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
