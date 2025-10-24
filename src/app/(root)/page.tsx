import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Cta } from "@/components/layout/cta";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

// Dynamic imports for non-critical components
const About = dynamic(() => import("@/modules/views/about").then((mod) => ({ default: mod.About })), {
  loading: () => <div className="h-96 animate-pulse rounded-3xl bg-stone-100" />,
});

const Clients = dynamic(() => import("@/modules/views/clients").then((mod) => ({ default: mod.Clients })), {
  loading: () => <div className="h-32 animate-pulse rounded-3xl bg-stone-100" />,
});

const Resources = dynamic(() => import("@/modules/views/resources").then((mod) => ({ default: mod.Resources })), {
  loading: () => <div className="h-96 animate-pulse rounded-3xl bg-stone-100" />,
});

const Services = dynamic(() => import("@/modules/views/services").then((mod) => ({ default: mod.Services })), {
  loading: () => <div className="h-96 animate-pulse rounded-3xl bg-stone-100" />,
});

const Testimonials = dynamic(
  () => import("@/modules/views/testimonials").then((mod) => ({ default: mod.Testimonials })),
  {
    loading: () => <div className="h-96 animate-pulse rounded-3xl bg-stone-100" />,
  }
);

const WhyUs = dynamic(() => import("@/modules/views/why-us").then((mod) => ({ default: mod.WhyUs })), {
  loading: () => <div className="h-96 animate-pulse rounded-3xl bg-stone-100" />,
});

// Keep Hero as static import for above-the-fold content
import { Hero } from "@/modules/views";

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
