import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solriselearning.org"),
  title: {
    default: "SolRise Learning Academy | Personalized K–12 Tutoring",
    template: "%s | SolRise Learning Academy",
  },
  description: "Personalized K–12 math, reading, Spanish, academic coaching, homeschool support, and enrichment—in person and online.",
  keywords: ["K-12 tutoring", "math tutor", "reading tutor", "Spanish tutoring", "academic coaching", "homeschool portfolio evaluation", "online tutoring", "SolRise Learning Academy"],
  authors: [{ name: "SolRise Learning Academy" }],
  creator: "SolRise Learning Academy",
  publisher: "SolRise Learning Academy",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [{ url: "/SolRise-logo-2.png", type: "image/png" }],
    shortcut: "/SolRise-logo-2.png",
    apple: "/SolRise-logo-2.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SolRise Learning Academy",
    title: "SolRise Learning Academy | Where Confidence Rises",
    description: "Personalized learning that builds skills, confidence, and lifelong success for K–12 students.",
    images: [{ url: "/SolRise-logo.png", width: 1024, height: 1024, alt: "SolRise Learning Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolRise Learning Academy | Where Confidence Rises",
    description: "Personalized K–12 tutoring, coaching, and homeschool support—in person and online.",
    images: ["/SolRise-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SolRise Learning Academy",
    url: "https://www.solriselearning.org",
    logo: "https://www.solriselearning.org/SolRise-logo.png",
    email: "solriselearning@gmail.com",
    telephone: "+1-617-281-9357",
    founder: { "@type": "Person", name: "Dianne Gonzalez" },
    description: "Personalized K–12 tutoring, academic coaching, homeschool support, and enrichment offered in person and online.",
    areaServed: "United States",
    knowsAbout: ["Mathematics", "Reading", "Spanish", "Academic coaching", "Homeschool education"],
  };

  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
