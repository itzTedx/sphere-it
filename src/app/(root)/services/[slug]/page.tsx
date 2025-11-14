import { Fragment, Suspense } from "react";

import type { Metadata } from "next/dist/types";
import Image from "next/image";
import { notFound } from "next/navigation";

import { IconBox } from "@/components/icon-box";
import { Cta, MiniCta } from "@/components/layout/cta";
import MDXContent from "@/components/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import * as Icons from "@/assets/icons";
import { IconArrowRight, IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { getServiceBySlug } from "@/modules/services/actions";
import {
  Card,
  CardContent,
  CardGroup,
  CardIcon,
  ListCard,
  ListCardContent,
  ListCardHeader,
} from "@/modules/services/components/card-list";
import { Certificate } from "@/modules/services/components/certifications";
import { FeatureItem, FeatureList } from "@/modules/services/components/feature-list";
import { Header } from "@/modules/services/components/header";
import { Industry } from "@/modules/services/components/industry";
import { Section } from "@/modules/services/components/section";

import { CaseButton } from "../components/case-button";
import { SERVICES } from "../data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  const ICONS = {
    elevate: IconElevate,
    automate: IconAutomate,
    evaluate: IconEvaluate,
    assure: IconAssure,
    augment: IconAugment,
  } as const;

  const Icon = ICONS[service.metadata.badge as keyof typeof ICONS];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metadata.title,
    description: service.metadata.meta.description,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: "${BASE_URL}",
    },
    serviceType: service.metadata.category,
    category: service.metadata.category,
    keywords: service.metadata.meta.keywords,
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    offers: {
      "@type": "Offer",
      description: service.metadata.meta.description,
      category: service.metadata.category,
    },
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: `${BASE_URL}` },
          { name: "Services", item: `${BASE_URL}/services` },
          { name: service.metadata.title, item: `${BASE_URL}/services/${service.metadata.badge}` },
        ]}
      />
      <main id="main-content">
        <header className="relative z-50 space-y-4 border-b bg-card py-9 sm:space-y-6 sm:py-12 md:py-16 lg:py-20">
          <div className="container grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="space-y-6">
              <Badge>
                <Icon />
                {service.metadata.badge}
              </Badge>
              <h1 className="text-primary-900 text-title-4 md:text-title-3">{service.metadata.title}</h1>
              {Array.isArray(service.metadata.description) ? (
                <ul className="space-y-2 text-lg sm:text-xl">
                  {service.metadata.description.map((item, index) => (
                    <li className="flex gap-2" key={index}>
                      <Icons.IconCheckmark className="mt-2.5 size-3.5 shrink-0 text-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg sm:text-xl">{service.metadata.description}</p>
              )}
              {service.metadata.partners && (
                <div className="flex items-start gap-4 md:hidden">
                  <h2 className="font-display text-muted-foreground text-subhead-base">Partners:</h2>
                  <ul className="flex flex-wrap items-center gap-4">
                    {service.metadata.partners.map((partner) => (
                      <Fragment key={partner}>
                        <li>
                          <Image alt="" height={30} src={partner} width={90} />
                        </li>

                        <li className="h-3 w-px bg-muted-background last:hidden" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
              <div className="space-x-4">
                <Button size="lg">
                  Get Started
                  <span className="w-7">
                    <IconArrowRight />
                  </span>
                </Button>
                <Button size="lg" variant="ghost">
                  {service.metadata.badge === "assure"
                    ? "Request a Assure"
                    : service.metadata.badge === "augment"
                      ? "Explore Talent Models"
                      : "Request a Demo"}
                </Button>
              </div>
            </div>
            <div className="relative order-first aspect-10/7 lg:order-last">
              <Image
                alt={service.metadata.title}
                className="object-contain"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={service.metadata.image}
              />
            </div>
          </div>
          {service.metadata.partners && (
            <div className="container hidden max-w-7xl items-center justify-end gap-4 md:flex">
              <h2 className="font-display text-muted-foreground text-subhead-base">Partners:</h2>
              <ul className="flex items-center gap-4 pr-6">
                {service.metadata.partners.map((partner) => (
                  <Fragment key={partner}>
                    <li>
                      <Image alt="" height={30} src={partner} width={90} />
                    </li>

                    <li className="h-3 w-px bg-muted-background last:hidden" />
                  </Fragment>
                ))}
              </ul>
            </div>
          )}
        </header>
        <article className="prose prose-stone prose-h2:mt-0 prose-h3:mt-4 prose-ol:mt-0 prose-table:mt-0 prose-table:prose-p:mt-0 prose-ul:mt-0 prose-h2:mb-6 prose-h3:mb-4 prose-headings:mb-4 max-w-none pb-12 prose-h2:font-semibold prose-h2:text-title-4 prose-h3:text-title-5 prose-headings:text-primary-900 prose-li:prose-p:text-base prose-li:text-base prose-p:text-base prose-p:leading-normal prose-p:tracking-tight sm:prose-h2:text-title-3 sm:prose-h3:text-title-4 sm:prose-li:prose-p:text-lg sm:prose-li:text-lg sm:prose-p:text-lg lg:prose-h2:text-title-2 lg:prose-h3:text-title-3 lg:prose-p:text-xl">
          <MDXContent
            components={{
              Section,
              Header,
              Badge,
              Button: (props) => (
                <Suspense fallback={<Button {...props} />}>
                  <CaseButton {...props} />
                </Suspense>
              ),
              CardGroup,
              Card,
              CardIcon,
              CardContent,
              ListCard,
              ListCardHeader,
              ListCardContent,
              Certificate,
              FeatureList,
              FeatureItem,
              Industry,
              IconBox,
              ...Icons,
              Cta: (props) => <MiniCta {...props} className="not-prose" />,
            }}
            source={service.content}
          />
        </article>

        <Cta
          buttonText={
            service.metadata.badge === "elevate" || service.metadata.badge === "evaluate"
              ? "Speak With an Expert"
              : undefined
          }
          showForm
          title={
            service.metadata.badge === "elevate"
              ? "Ready to Elevate Your Enterprise with AI That Works?"
              : service.metadata.badge === "evaluate"
                ? "Empower Decisions with Data That Delivers."
                : undefined
          }
        />
      </main>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} - ${service.id.charAt(0).toUpperCase() + service.id.slice(1)} | ${COMPANY_NAME}`,
    description: service.description,
    keywords: [
      ...service.meta.keywords,
      COMPANY_NAME,
      "Dubai technology",
      "UAE technology",
      "GCC technology",
      "enterprise solutions",
      "digital transformation",
    ],

    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
      url: `${BASE_URL}/services/${service.id}`,
      siteName: COMPANY_NAME,
      locale: "en_US",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.image],
      creator: "@sphereitglobal",
      site: "@sphereitglobal",
    },
    alternates: {
      canonical: `${BASE_URL}/services/${service.id}`,
    },
    category: service.meta.category,
    classification: `${service.title}, ${service.meta.category}, Digital Transformation`,
    other: {
      "geo.region": "AE",
      "geo.country": "United Arab Emirates",
      "geo.placename": "Dubai",
      "DC.title": service.title,
      "DC.description": service.description,
      "DC.subject": `${service.title}, ${service.meta.category}, Digital Transformation`,
      "DC.creator": COMPANY_NAME,
      "DC.publisher": COMPANY_NAME,
      "DC.language": "en",
      "DC.coverage": "Global",
      "DC.rights": "© 2024 Sphere IT. All rights reserved.",
      "service.category": service.meta.category,
      "service.industries": service.meta.industry.join(", "),
      "service.certifications": service.meta.certifications.join(", "),
      "service.technologies": service.meta.technologies.join(", "),
      "service.benefits": service.meta.benefits.join(", "),
    },
  };
}
