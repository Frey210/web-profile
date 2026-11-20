import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer, Header } from "@/components/shell";
import { SmoothScroll } from "@/components/smooth-scroll";
import { FloatingStatus } from "@/components/floating-status";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fariz Achmad Faizal — Systems Engineer & Startup CTO",
    template: "%s — Fariz Achmad Faizal"
  },
  description:
    "Building complete technology systems from sensor firmware to production cloud infrastructure across airport critical electronics, industrial automation, and IoT platforms.",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  keywords: ["systems engineer", "industrial automation", "IoT engineer", "embedded systems", "airport infrastructure", "startup CTO", "Fariz Achmad Faizal"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Fariz Achmad Faizal — Systems Engineer & Startup CTO",
    description: "Airport infrastructure QA officer, startup CTO, and IoT systems engineer."
  },
  twitter: {
    card: "summary_large_image",
    title: "Fariz Achmad Faizal — Systems Engineer & Startup CTO",
    description: "Complete technology systems from sensors to production deployment."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a"
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
      <body className={`${inter.variable} ${space.variable} font-sans`}>
        <ScrollProgress />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Header />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
        <FloatingStatus />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
