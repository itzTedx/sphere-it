import { Metadata } from "next";
import Image from "next/image";

import { IconBox } from "@/components/icon-box";
import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";

import { SERVICES } from "@/data/services";
import { WhyMatters } from "@/modules/views/why-matters";
import { Service } from "@/types/service";

export const metadata: Metadata = {
  title: "IT Services - AI, Automation & Digital Transformation | Sphere IT",
  description:
    "Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation. Certified professionals delivering measurable outcomes.",
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
    title: "IT Services - AI, Automation & Digital Transformation | Sphere IT",
    description:
      "Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation.",
    type: "website",
    url: "https://sphereit.com/services",
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
    title: "IT Services - AI, Automation & Digital Transformation | Sphere IT",
    description:
      "Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation.",
    images: ["/images/services-og.jpg"],
  },
  alternates: {
    canonical: "https://sphereit.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IT Services",
            description:
              "Comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation",
            provider: {
              "@type": "Organization",
              name: "Sphere IT",
              url: "https://sphereit.com",
            },
            serviceType: "IT Services",
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "IT Services",
              itemListElement: SERVICES.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.serviceTitle,
                  description: service.overview,
                },
                position: index + 1,
              })),
            },
          }),
        }}
        type="application/ld+json"
      />
      <main>
        <header className="bg-card py-16 sm:py-20 md:py-28">
          <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge>Services</Badge>
            <div className="mt-4 max-w-4xl space-y-4 sm:space-y-6">
              <h1 className="text-primary-900 text-title-3 sm:text-title-2 md:text-title-1">
                Powering Business from <span className="text-primary-600">Automation to Augmentation</span>
              </h1>
              <p className="text-balance text-lg text-stone-700 sm:text-xl md:text-lead">
                We help organizations simplify complexity and accelerate results - delivering solutions that are
                precise, pragmatic, and outcome-driven.
              </p>
            </div>
          </div>
        </header>
        <section>
          <div className="container max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <p className="text-base text-stone-700 sm:text-lg">
              Sphere IT helps organizations simplify complexity and accelerate results through five integrated service
              lines - each designed to deliver measurable outcomes with precision and pragmatism.
            </p>
          </div>
        </section>
        <section className="relative z-50 mx-4 rounded-2xl sm:mx-6 sm:rounded-3xl sm:p-8 md:rounded-4xl md:bg-card md:p-12 lg:p-16">
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

function ServiceCard({ service }: { service: Service }) {
  return (
    <li
      className="card group relative grid grid-cols-1 gap-4 rounded-2xl bg-card p-4 shadow-md transition-all hover:shadow-lg sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:rounded-4xl"
      key={service.id}
    >
      <div className="relative aspect-[1.44/1] overflow-hidden rounded-xl sm:aspect-[1.2/1] sm:rounded-2xl md:aspect-[1.44/1] md:rounded-3xl group-even:md:order-2">
        <Image
          alt={`${service.serviceTitle} - Sphere IT Services`}
          className="object-cover"
          fill
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
          src={service.image}
        />
      </div>
      <div className="flex flex-col justify-between px-2 sm:px-4 md:px-6 group-even:md:order-1">
        <div className="space-y-3 py-2 sm:space-y-4 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <IconBox state="active">
              <service.Icon className="text-primary-600" />
            </IconBox>
            <h2 className="text-lg text-primary-800 sm:text-xl md:text-title-4">{service.serviceTitle}</h2>
          </div>
          <p className="font-display text-sm text-stone-700 sm:text-base md:text-subhead-sm">{service.overview}</p>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {service.tags.map((tag) => (
              <li
                className="rounded-md bg-stone-alpha-10 px-2 py-1.5 font-mono text-stone-600 text-xs uppercase sm:rounded-lg sm:px-3 sm:py-2 sm:text-badge"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t py-2 sm:py-3">
          <h3 className="font-display font-medium text-lg text-stone-600 sm:text-xl">
            <span className="font-semibold text-2xl text-primary-900 sm:text-3xl md:text-4xl">40%</span> faster
            deployment
          </h3>
          <ul className="flex items-center gap-2 font-display text-stone-500 text-xs sm:gap-3 sm:text-subhead-sm">
            <li>AI</li>
            <li>
              <div className="size-1 rounded-full bg-accent sm:size-1.5" />
            </li>
            <li>Agile</li>
            <li>
              <div className="size-1 rounded-full bg-accent sm:size-1.5" />
            </li>
            <li>Certification</li>
          </ul>
        </div>
      </div>
    </li>
  );
}
