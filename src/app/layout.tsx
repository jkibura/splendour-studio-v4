import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { Analytics } from "@/components/layout/Analytics";
import { site } from "@/data/site";
import { seoContent } from "@/data/seo";
import { organizationStructuredData } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: seoContent.defaultTitle,
    template: seoContent.titleTemplate
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/favicon.svg" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: seoContent.locale,
    siteName: site.name,
    title: seoContent.openGraphTitle,
    description: site.description,
    url: site.siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.twitterTitle,
    description: site.description
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = organizationStructuredData();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
