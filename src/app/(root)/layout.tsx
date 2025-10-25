import type { Metadata } from "next";
import "@/styles/globals.css";

import ReactLenis from "lenis/react";

import { BreakpointIndicator } from "@/components/dev/breakpoint-ind";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/layout/structured-data";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

import { inter, mono, sans } from "@/assets/fonts";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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

  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("scroll-smooth")} lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={cn(inter.variable, sans.className, mono.variable, "antialiased")}>
        <Providers>
          {/* Skip Navigation Links */}
          <a
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
            href="#main-content"
          >
            Skip to main content
          </a>

          <div className="pointer-events-none fixed inset-0 z-20 mx-auto flex h-full w-full max-w-7xl justify-between">
            <div className="h-full w-px bg-border" />
            <div className="h-full w-px bg-border" />
          </div>
          <Navbar />
          <ReactLenis root>{children}</ReactLenis>
          <Footer />
          <Toaster position="top-center" richColors />
        </Providers>
        <BreakpointIndicator />

        {/* Live region for screen reader announcements */}
        <div aria-atomic="true" aria-live="polite" className="sr-only" id="live-region" />
      </body>
    </html>
  );
}
