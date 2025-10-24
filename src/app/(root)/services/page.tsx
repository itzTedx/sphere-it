import { Metadata } from "next";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";

import { SERVICES } from "@/data/services";
import { BASE_URL } from "@/data/site-config";
import { WhyMatters } from "@/modules/views/why-matters";

import { ServiceCard } from "./components/service-card";
import { structuredData } from "./structured-data";

const meta = {
  title: "IT Services - AI, Automation & Digital Transformation | Sphere IT",
  description:
    "Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation. Certified professionals delivering measurable outcomes.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "IT services",
    "artificial intelligence",
    "process automation",
    "data analytics",
    "managed IT services",
    "digital transformation",
    "enterprise solutions",
    "BFSI technology",
    "AI implementation",
    "business automation",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: `${BASE_URL}/services`,
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sphere IT Services - AI, Automation & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/services-og.jpg"],
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {structuredData.map((data, index) => (
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} key={index} type="application/ld+json" />
      ))}
      <main>
        <header className="border-b bg-card py-16 sm:py-20 md:py-28">
          <div className="container max-w-7xl">
            <Badge>Services</Badge>
            <div className="mt-4 max-w-4xl space-y-4 sm:space-y-6">
              <h1 className="text-primary-900 text-title-3 sm:text-title-2 md:text-title-1">
                Powering Business from <span className="text-primary-600">Automation to Augmentation</span>
              </h1>
              <div className="space-y-3">
                <h2 className="font-display text-subhead-lg">
                  We deliver solutions that are precise, pragmatic, and outcome-driven.
                </h2>
                <p className="text-balance text-lg text-stone-700 sm:text-xl md:text-lead">
                  Technology should deliver clarity, reliability, and measurable value. At Sphere IT, our services are
                  designed to simplify complexity and accelerate outcomes. Guided by precision and pragmatism, we help
                  organizations adopt AI, automate processes, harness data, secure platforms, and scale talent - without
                  over-engineering.
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* <section>
          <div className="container max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <p className="text-base text-stone-700 sm:text-lg">
              Sphere IT helps organizations simplify complexity and accelerate results through five integrated service
              lines - each designed to deliver measurable outcomes with precision and pragmatism.
            </p>
          </div>
        </section> */}
        <section className="relative z-50 mx-4 mt-12 rounded-2xl sm:mx-6 sm:rounded-3xl sm:p-8 md:rounded-4xl md:bg-card md:p-12 lg:p-16">
          <ul className="space-y-8 sm:space-y-12 md:space-y-16">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        </section>
        <WhyMatters />
        <Cta />
      </main>
    </>
  );
}
