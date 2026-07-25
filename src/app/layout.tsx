import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolRise Learning Academy | Where Confidence Rises",
  description: "Personalized K–12 tutoring, academic coaching, homeschool support, and enrichment—in person and online.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
