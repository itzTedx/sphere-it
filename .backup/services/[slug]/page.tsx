import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { IconBox } from "@/components/icon-box";
import { Cta, MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { PreviewCard, PreviewCardPanel, PreviewCardTrigger } from "@/components/ui/base/preview-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { IconArrowRight } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

import { SERVICES } from "../data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.id === slug);

  if (!service) return notFound();

  const Icon = service.Icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: "${BASE_URL}",
    },
    serviceType: service.meta.category,
    category: service.meta.category,
    keywords: service.meta.keywords.join(", "),
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    offers: {
      "@type": "Offer",
      description: service.description,
      category: service.meta.category,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Industries Served",
        value: service.meta.industry.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Certifications",
        value: service.meta.certifications.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Technologies",
        value: service.meta.technologies.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Benefits",
        value: service.meta.benefits.join(", "),
      },
    ],
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <main id="main-content">
        <header className="relative z-50 space-y-4 border-b bg-card py-20 sm:space-y-6">
          <div className="container grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="space-y-6">
              <Badge>
                <Icon /> {service.id}
              </Badge>
              <h1 className="text-primary-900 text-title-4 sm:text-title-3 lg:text-title-2">{service.title}</h1>
              <p className="text-lg sm:text-xl">{service.description}</p>
              <div className="space-x-4">
                <Button size="lg">
                  Get Started
                  <span className="w-7">
                    <IconArrowRight />
                  </span>
                </Button>
                <Button size="lg" variant="ghost">
                  Request a Demo
                </Button>
              </div>
            </div>
            <div className="relative order-first aspect-10/7 lg:order-last">
              <Image
                alt={service.title}
                className="object-contain"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={service.image}
              />
            </div>
          </div>
          <div className="container flex max-w-7xl items-center justify-end gap-4">
            <h2 className="font-display text-muted-foreground text-subhead-base">Partners:</h2>
            <ul className="flex items-center gap-4 pr-6">
              <li>
                <Image alt="" height={30} src="/images/partners/grey-chain.svg" width={152} />
              </li>
              <li className="h-3 w-px bg-muted-background" />
              <li>
                <Image alt="" height={30} src="/images/partners/ms-copilot.svg" width={98} />
              </li>
            </ul>
          </div>
        </header>
        <section className="container max-w-7xl space-y-4 py-12">
          <h2 className="text-stone-900 text-title-3">
            <span className="capitalize">{service.id}</span> in Action
          </h2>

          <p
            className="max-w-3xl text-balance text-3xl text-stone-600 [&_span]:text-primary-600 [&_strong]:text-stone-700"
            dangerouslySetInnerHTML={{ __html: service.inAction }}
          />
        </section>
        <section className="container max-w-7xl py-12">
          <header>
            <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:gap-9">
              <h2 className="text-primary-900 text-title-4 md:text-title-2">{service.feature.title}</h2>
              <p className="text-lg text-muted-foreground">{service.feature.description}</p>
            </div>
          </header>
          <div className="grid gap-6 pt-9 sm:grid-cols-2 lg:grid-cols-2">
            {service.feature.features.map((feature) => (
              <Card className="space-y-6 rounded-3xl p-6 shadow-md" key={feature.title}>
                <IconBox state="active">
                  <feature.Icon />
                </IconBox>
                <div className="space-y-3">
                  <h3 className="text-primary-900 text-title-5">{feature.title}</h3>
                  <p className="text-base text-stone-800 tracking-tight sm:text-lg">{feature.description}</p>
                </div>
              </Card>
            ))}
            <MiniCta
              className="col-span-full"
              description="So you can focus on growth instead of complexity"
              layout="horizontal"
              showButton={false}
              title="Elevate makes AI simple to Build and Scale"
            />
          </div>
        </section>

        <section className="relative z-50 border bg-card sm:mx-4 sm:rounded-3xl">
          <div className="mx-auto max-w-7xl space-y-6 py-12 max-sm:container sm:py-16 lg:py-20">
            <header className="max-w-2xl space-y-4">
              <Badge>How {service.id} Transforms</Badge>
              <h2 className="text-primary-900 text-title-4 lg:text-title-2">
                Scale Smarter. <span className="text-primary-600">Grow Faster.</span> Lead with Data.
              </h2>
              <p className="text-lg text-muted-foreground">
                Harness the power of intelligent automation and predictive analytics to accelerate growth, enhance
                efficiency, and make data-driven decisions with confidence.
              </p>
            </header>
            <article className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.transformation.features.map((feature, i) => (
                <div
                  className="card overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-primary-600/40 shadow-md transition-all hover:shadow-lg"
                  key={`${i}-${feature.title}`}
                >
                  <div className="p-4 sm:p-6">
                    <h3 className="text-primary-900 text-title-6 sm:text-title-5">{feature.title}</h3>
                    <p className="text-sm text-stone-700 sm:text-base">{feature.description}</p>
                  </div>
                  <div className="relative aspect-16/15">
                    <Image
                      alt={feature.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={feature.image}
                    />
                  </div>
                </div>
              ))}
            </article>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.transformation.metrics.map((metric, i) => (
                <li
                  className="card rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.5))] bg-stone-alpha-10 p-1.5 shadow-sm transition-all hover:shadow-md"
                  key={`${i}-${metric.value}`}
                >
                  <div className="h-full space-y-3 rounded-xl bg-card p-4 shadow-sm sm:p-6">
                    <h4 className="text-primary-800 text-title-4">{metric.value}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{metric.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="my-12 border-y sm:my-16 lg:my-20">
          <div className="container max-w-7xl space-y-6 rounded-3xl border bg-card p-6 sm:space-y-9 sm:p-9">
            <header className="space-y-4">
              <Badge>Industries we serve</Badge>
              <div className="grid gap-4 lg:grid-cols-2">
                <h2 className="text-primary-900 text-title-4 lg:text-title-2">
                  Driving Growth across Priority Sectors
                </h2>
                <p className="text-lg text-stone-600">
                  We apply enterprise-grade AI where reliability and governance matter most—starting with BFSI and
                  extending to priority enterprise sectors across the GCC.
                </p>
              </div>
            </header>
            <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5">
              {service.industries.map((industry, i) => (
                <li className="rounded-3xl bg-card p-4 shadow-md sm:p-6" key={`${i}-${industry.title}`}>
                  <PreviewCard delay={50}>
                    <PreviewCardTrigger aria-label={`${industry.title} sector expertise`} className="cursor-pointer">
                      <IconBox>
                        <industry.Icon className="text-stone-500" />
                      </IconBox>
                      <h3
                        className="mt-4 text-primary-900 text-title-6 leading-none sm:mt-6 [&>span]:text-sm"
                        dangerouslySetInnerHTML={{ __html: industry.title }}
                      />
                    </PreviewCardTrigger>
                    <PreviewCardPanel className="w-72 p-0" side="top">
                      <div className="flex items-center gap-2 border-b p-3">
                        <IconBox state="active">
                          <industry.Icon className="text-primary-500" />
                        </IconBox>
                        <h3
                          className="text-primary-900 text-title-6 leading-none [&>span]:hidden"
                          dangerouslySetInnerHTML={{ __html: industry.title }}
                        />
                      </div>
                      <div className="p-3">
                        <span className="font-mono text-stone-400 text-xs uppercase">Overview</span>
                        <p className="font-display text-stone-700">{industry.description}</p>
                      </div>
                    </PreviewCardPanel>
                  </PreviewCard>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Cta />
      </main>
    </>
  );
}
