import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer, Header } from "@/components/shell";
import { FloatingStatus } from "@/components/floating-status";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";
import { InteractiveMascot } from "@/components/interactive-mascot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "fariz.dev — Systems Engineer & IoT CTO",
    template: "%s — fariz.dev"
  },
  description:
    "Systems engineer, startup CTO, and airport infrastructure QA officer. Building complete technology systems from sensor firmware and IoT platforms to critical airport electronics and cloud architecture.",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  keywords: [
    "systems engineer",
    "IoT engineer",
    "startup CTO",
    "airport electronics QA",
    "industrial automation",
    "embedded firmware",
    "fariz.dev",
    "Fariz Achmad Faizal"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "fariz.dev",
    title: "fariz.dev — Systems Engineer & IoT CTO",
    description:
      "Systems engineering, IoT platform architecture, and certified airport electronics quality assurance."
  },
  twitter: {
    card: "summary_large_image",
    title: "fariz.dev — Systems Engineer & IoT CTO",
    description:
      "Systems engineering, IoT platform architecture, and certified airport electronics quality assurance."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080811"
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
        <Header />
        <main id="main-content">{children}</main>
        <InteractiveMascot companion />
        <Footer />
        <FloatingStatus />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
