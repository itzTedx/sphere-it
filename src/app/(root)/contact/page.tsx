import type { Metadata } from "next/dist/types";

import { Cta } from "@/components/layout/cta";

import { BASE_URL } from "@/data/site-config";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import {
  ContactFormSection,
  ContactHeader,
  ContactResourcesSection,
  SocialMediaSection,
} from "@/modules/views/components";

import { structuredData } from "./structured-data";

const meta = {
  title: "Contact Sphere IT | Connect with Our IT Experts",
  description:
    "Get in touch with Sphere IT for IT consulting, digital transformation, or project collaboration. Reach us via email, phone, or WhatsApp - we’re here to help you scale.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "contact sphere global",
    "AI consulting contact",
    "technology solutions contact",
    "digital transformation consulting",
    "automation frameworks contact",
    "enterprise technology support",
    "AI platform consultation",
    "business automation contact",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${BASE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: `${BASE_URL}` },
          { name: "Contact", item: `${BASE_URL}/contact` },
        ]}
      />
      <main>
        <ContactHeader />
        <ContactFormSection />
        <SocialMediaSection />
        <ContactResourcesSection />
        <Cta />
      </main>
    </>
  );
}
