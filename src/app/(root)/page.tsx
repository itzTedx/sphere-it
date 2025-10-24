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
