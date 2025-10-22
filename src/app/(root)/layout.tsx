import type { Metadata } from "next";
import "@/styles/globals.css";

import ReactLenis from "lenis/react";

import { BreakpointIndicator } from "@/components/dev/breakpoint-ind";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/layout/structured-data";

import { inter, mono, sans } from "@/assets/fonts";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://sphere-global.com"),
  title: {
    default: "Sphere Global - AI & Technology Solutions",
    template: "%s | Sphere Global",
  },
  description:
    "Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms, automation frameworks, and scalable solutions.",
  keywords: [
    "AI solutions",
    "technology consulting",
    "automation frameworks",
    "artificial intelligence",
    "enterprise technology",
    "digital transformation",
    "ISO 42001 certified",
    "Dubai technology",
    "India technology",
    "AI platforms",
    "data analytics",
    "business automation",
  ],
  authors: [{ name: "Sphere Global" }],
  creator: "Sphere Global",
  publisher: "Sphere Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sphere-global.com",
    siteName: "Sphere Global",
    title: "Sphere Global - AI & Technology Solutions",
    description:
      "Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms and automation frameworks.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sphere Global - AI & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sphere Global - AI & Technology Solutions",
    description:
      "Empowering forward-looking organizations with talent and technology that deliver measurable outcomes.",
    images: ["/images/twitter-image.jpg"],
    creator: "@sphereglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://sphere-global.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={cn(inter.variable, sans.className, mono.variable, "antialiased")}>
        <div className="pointer-events-none fixed inset-0 z-20 mx-auto flex h-full w-full max-w-7xl justify-between">
          <div className="h-full w-px bg-border" />
          <div className="h-full w-px bg-border" />
        </div>
        <Navbar />
        <ReactLenis root>{children}</ReactLenis>
        <Footer />
        <BreakpointIndicator />
      </body>
    </html>
  );
}
