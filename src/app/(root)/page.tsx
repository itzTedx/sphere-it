import type { Metadata } from "next";

import { Cta } from "@/components/layout/cta";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { About, Clients, Hero, Resources, Services, Testimonials, WhyUs } from "@/modules/views";

const meta = {
  title: "Sphere IT - Digital Transformation Partner in UAE & GCC",
  description:
    "Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms, automation frameworks, and scalable solutions",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "digital transformation",
    "AI platforms",
    "automation frameworks",
    "UAE IT consulting",
    "GCC technology solutions",
    "ISO/IEC 42001",
    "enterprise AI",
    "process automation",
    "data analytics",
    "cloud solutions",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: COMPANY_NAME,
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: meta.title,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/twitter-image.jpg"],
    creator: "@sphereglobal",
  },
  alternates: {
    canonical: BASE_URL,
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
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <About />
      <WhyUs />
      <Resources />
      <Testimonials />
      <Cta />
    </main>
  );
}
