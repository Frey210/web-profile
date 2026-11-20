import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer, Header } from "@/components/shell";
import { site } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fariz Achmad Faizal — IoT × Embedded × Airport Systems",
    template: "%s — Fariz Achmad Faizal"
  },
  description: "Building complete technology systems from sensors to production deployment across airport infrastructure, industrial automation, IoT, embedded systems, and backend engineering.",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  keywords: ["systems engineer", "industrial automation", "IoT engineer", "embedded systems", "airport infrastructure", "startup CTO"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Fariz Achmad Faizal — Builder at the Edge",
    description: "Airport infrastructure QA officer, startup CTO, and IoT systems engineer."
  },
  twitter: {
    card: "summary_large_image",
    title: "Fariz Achmad Faizal — Builder at the Edge",
    description: "Complete technology systems from sensors to production deployment."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Electrical Engineer / IoT Specialist / CTO",
    worksFor: [
      { "@type": "Organization", name: "PT Angkasa Pura I" },
      { "@type": "Organization", name: "PT Media Teknologi Celebes" }
    ],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Hasanuddin" },
    address: { "@type": "PostalAddress", addressLocality: "Makassar", addressCountry: "ID" },
    url: site.url,
    sameAs: [site.links.linkedin, site.links.github, site.links.sinta, site.links.scholar]
  };

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${space.variable} ${pixel.variable} font-sans`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
