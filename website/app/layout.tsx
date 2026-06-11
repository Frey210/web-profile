import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer, Header } from "@/components/shell";
import { site } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fariz Achmad Faizal - IoT, Embedded, Airport Infrastructure Engineer",
    template: "%s - Fariz Achmad Faizal"
  },
  description:
    "I build complete technology systems from sensors to production deployment across airport infrastructure, industrial automation, IoT, embedded systems, backend, and infrastructure engineering.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Fariz Achmad Faizal - Builder at the Edge",
    description: "Airport infrastructure QA officer, startup CTO, and IoT systems engineer.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fariz Achmad Faizal - Builder at the Edge",
    description: "Complete technology systems from sensors to production deployment.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: site.url
  }
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
