import type { Metadata } from "next";
import "@/styles/globals.css";
import Link from "next/link";

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
          <SkipToContent />

          <div className="pointer-events-none fixed inset-0 z-20 mx-auto flex h-full w-full max-w-7xl justify-between">
            <div className="h-full w-px bg-border" />
            <div className="h-full w-px bg-border" />
          </div>
          <Navbar />
          {/* <ReactLenis root>{children}</ReactLenis> */}
          {children}
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

function SkipToContent() {
  return (
    <Link
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3.5 focus-visible:left-3 focus-visible:z-99999 focus-visible:inline-block focus-visible:rounded-md focus-visible:bg-muted focus-visible:px-3 focus-visible:py-2 focus-visible:font-display focus-visible:text-muted-foreground focus-visible:text-subhead-sm focus-visible:ring-primary-600"
      href="#main-content"
    >
      Skip to main content
    </Link>
  );
}
