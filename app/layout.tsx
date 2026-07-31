import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Micaela Quizon | Software Developer",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Micaela Quizon | Software Developer",
    description: siteConfig.description,
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Micaela Quizon — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Micaela Quizon | Software Developer",
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Micaela Quizon",
    jobTitle: "Software Developer",
    address: { "@type": "PostalAddress", addressRegion: "California", addressCountry: "US" },
    url: siteConfig.url,
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
