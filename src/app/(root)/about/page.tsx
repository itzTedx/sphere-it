import { Fragment } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/radix/accordion";

import { CheckmarkIconBox } from "@/assets/checkmark-iconbox";
import { IconArrowRight, IconCheckmark } from "@/assets/icons";
import { IconSocialLinkedin } from "@/assets/icons/social";
import { IconTimeline } from "@/assets/icons/timeline";
import { LogoOutline } from "@/assets/logo";

import { CORE_VALUES, HIRING_CTA, OUR_VALUES, TIMELINE } from "@/data/about";
import { BASE_URL } from "@/data/site-config";
import { Clients } from "@/modules/views";

import { breadcrumbStructuredData, structuredData } from "./structured-data";

const meta = {
  title: "About Sphere IT Global - Digital Transformation & IT Innovation Partner",
  description:
    "Learn how Sphere IT drives enterprise transformation through AI, automation, and cloud engineering. Discover our mission, leadership, and global team powering innovation across industries.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "Sphere IT Global",
    "IT solutions",
    "technology services",
    "digital transformation",
    "BFSI technology",
    "software development",
    "cloud solutions",
    "GCC technology",
    "precision engineering",
    "pragmatic solutions",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: `${BASE_URL}/about`,
    siteName: "Sphere IT Global",
    images: [
      {
        url: "/images/banking.webp",
        width: 1200,
        height: 630,
        alt: "Sphere IT Global - IT Solutions and Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/banking.webp"],
  },

  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        type="application/ld+json"
      />
      <main>
        <header
          className="relative h-lvh overflow-hidden bg-gradient-to-b from-primary-800 to-primary-900"
          role="banner"
        >
          <div className="mx-auto h-full max-w-7xl border-x">
            <div className="container flex h-full flex-col justify-between py-16 text-background md:py-24">
              <div className="max-w-xl space-y-6 py-6 md:py-12">
                <p className="text-balance md:text-lg">
                  Sphere IT Global delivers future-ready IT solutions — from software and cloud to design and
                  resourcing. With decades of cross-industry expertise, we turn complex challenges into growth
                  opportunities.
                </p>
                <Button asChild className="bg-stone-200/30 text-muted" variant="ghost">
                  <Link
                    aria-label="Explore our service capabilities and opportunities"
                    href="/services"
                    title="Explore our capabilities"
                  >
                    Explore Open Opportunities
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50">
                      <IconArrowRight aria-hidden="true" className="text-stone-100" />
                    </span>
                  </Link>
                </Button>
              </div>
              <div className="max-w-2xl">
                <Badge variant="ghost">About</Badge>
                <h1 className="text-title-3 md:text-title-1">
                  We're driving the new era of scalable, future-ready IT solutions.
                </h1>
              </div>
            </div>
          </div>
          <LogoOutline
            aria-hidden="true"
            className="-top-1/2 absolute left-1/2 z-1000 rotate-35 text-primary-300 opacity-50"
          />
        </header>
        <div className="mt-24 border-y">
          <Clients />
        </div>
        <section
          aria-labelledby="about-heading"
          className="container relative my-12 max-w-7xl overflow-hidden md:my-12"
        >
          <div className="container max-w-4xl py-12">
            <Badge showDashes>About us</Badge>
            <h2 className="my-4 text-primary-900 text-title-2" id="about-heading">
              Our story started with our founders, in 2016
            </h2>
            <div className="space-y-3">
              <p className="text-xl">
                Sphere IT has grown from a software provider for banks, insurance and automotive platforms into a
                trusted partner for forward-looking organizations across the GCC. We deliver technology and talent
                solutions that balance precision with pragmatism; helping clients achieve efficiency, resilience and
                measurable growth.
              </p>
              <p className="text-xl">
                Technology is only as powerful as the outcomes it creates. At Sphere IT, we exist to remove complexity
                and make technology work for business. Our mission is clear: to deliver solutions that are{" "}
                <strong className="font-semibold text-primary-600">
                  precisely engineered, practically applied, and built for real-world impact.
                </strong>
              </p>
            </div>
          </div>
          <FlickeringGrid
            aria-hidden="true"
            className="absolute inset-0 z-1 opacity-50"
            color="#D6D3D1"
            flickerChance={0.1}
            gridGap={4}
            height={1080}
            maxOpacity={0.5}
            squareSize={4}
            width={1920}
          />
        </section>
        <section aria-labelledby="timeline-heading" className="relative z-50 mx-4 rounded-4xl border bg-card">
          <div className="mx-auto max-w-7xl py-12">
            <Badge className="mx-auto" showDashes>
              <IconTimeline aria-hidden="true" /> Timeline
            </Badge>
            <h2 className="mt-4 text-center text-primary-900 text-title-2" id="timeline-heading">
              Our <span className="text-primary-600">Story</span>
            </h2>

            <div aria-label="Company timeline" className="container mt-9" role="list">
              {TIMELINE.map((timeline, index) => (
                <Fragment key={timeline.serial}>
                  <article
                    aria-labelledby={`timeline-${timeline.serial}-title`}
                    className="rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1.5)))] bg-muted p-1.5"
                    role="listitem"
                  >
                    <Card className="rounded-2xl">
                      <CardHeader className="px-2 py-1">
                        <div className="flex items-center gap-4">
                          <span
                            aria-label={`Step ${timeline.serial}`}
                            className="flex size-8 items-center justify-center rounded-full bg-card font-mono text-badge shadow-sm"
                          >
                            {timeline.serial}
                          </span>
                          <CardTitle className="font-bold text-subhead-base" id={`timeline-${timeline.serial}-title`}>
                            {timeline.year}
                          </CardTitle>
                          <CardDescription className="text-subhead-base">{timeline.title}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 rounded-lg bg-card p-4 shadow-sm">
                        <p className="text-base text-stone-500">{timeline.description}</p>
                        <ul className="grid grid-cols-2 gap-6" role="list">
                          {timeline.lists.map(({ id, Icon, item }) => (
                            <li className="flex items-center gap-3" key={id}>
                              <Icon aria-hidden="true" className="size-4 text-accent" />
                              <p className="font-display text-stone-600 text-subhead-sm">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </article>

                  {TIMELINE.length !== index + 1 ? <DashedLine /> : null}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="values-heading" className="container max-w-7xl py-20">
          <Badge showDashes>Our Values</Badge>
          <h2 className="mt-6 text-primary-900 text-title-2" id="values-heading">
            Precision and Pragmatism
          </h2>
          <p className="mt-4 max-w-4xl text-balance text-lg text-muted-foreground">
            At Sphere IT, two values shape everything we do - Precision and Pragmatism. Together, they define how we
            deliver technology and how we build trust with every client we serve.
          </p>
          <Button asChild className="mt-6" variant="ghost">
            <Link
              aria-label="Read client testimonials and feedback"
              href="/resources/testimonials"
              title="See what our client says"
            >
              See what our client says
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
                <IconArrowRight aria-hidden="true" className="text-stone-500" />
              </span>
            </Link>
          </Button>
          <div aria-label="Company core values" className="my-9 grid grid-cols-1 gap-6 sm:grid-cols-2" role="list">
            {OUR_VALUES.map((value) => (
              <article className="overflow-hidden rounded-2xl bg-card shadow-md" key={value.id} role="listitem">
                <div className="relative aspect-5/3 bg-gradient-to-b from-primary-500/40 to-transparent">
                  <Image
                    alt={`Illustration representing ${value.title} - ${value.badge}`}
                    className="object-cover"
                    fill
                    src={value.image}
                  />
                </div>
                <div className="space-y-2 px-8 py-6">
                  <Badge variant="secondary">{value.badge}</Badge>
                  <h3 className="text-primary-900 text-title-3">{value.title}</h3>
                  <p className="font-display text-lg text-stone-600">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="overflow-hidden rounded-xl border">
            <h4 className="p-6 text-lead text-muted-foreground">Our core values that drive us forward:</h4>
            <Accordion aria-label="Core values details" className="w-full" type={"multiple"}>
              {CORE_VALUES.map((item, index) => (
                <AccordionItem
                  className="px-6 py-4 transition-colors data-[state=open]:bg-card"
                  key={index}
                  value={`item-${index + 1}`}
                >
                  <AccordionTrigger className="decoration-2 decoration-primary-300 underline-offset-2" showArrow={true}>
                    <h5 className="text-stone-800 text-title-5">{item.value}</h5>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl text-balance text-stone-700" keepRendered={true}>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section aria-labelledby="team-heading" className="border-y">
          <div className="container max-w-7xl space-y-6 rounded-4xl border bg-card py-12">
            <div>
              <Badge>Our People, Our Precision</Badge>

              <div className="max-w-4xl">
                <h2 className="mt-6 text-primary-900 text-title-2" id="team-heading">
                  Meet the Minds Behind Sphere IT
                </h2>
                <p className="mt-3 text-balance text-lg text-stone-600">
                  Sphere IT is led by industry experts in financial technology, IT services, and enterprise
                  transformation. Our leadership team shares one belief: technology should serve people, not the other
                  way around.
                </p>
              </div>
            </div>

            <Item className="border-border" size="sm" variant="muted">
              <ItemMedia>
                <IconCheckmark aria-hidden="true" className="size-5 text-stone-600" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="font-display text-subhead-lg">
                  <h3 className="text-stone-600">Leadership That Sets the Direction</h3>
                </ItemTitle>
              </ItemContent>
            </Item>

            <div
              aria-label="Leadership team"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <TeamCard i={i} key={i} />
              ))}
            </div>

            <Item className="border-border" size="sm" variant="muted">
              <ItemMedia>
                <IconCheckmark aria-hidden="true" className="size-5 text-stone-600" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="font-display text-subhead-lg">
                  <h3 className="text-stone-600">Experts Who Make It Happen</h3>
                </ItemTitle>
              </ItemContent>
            </Item>

            <div
              aria-label="Expert team members"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              role="list"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <TeamCard i={i} key={i} />
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="hiring-heading" className="container max-w-7xl py-20">
          <Badge>We're Hiring</Badge>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <h2 className="text-primary-900 text-title-2" id="hiring-heading">
                Join team Sphere IT
              </h2>
              <p className="mt-3 max-w-xl text-balance text-lg">
                We're always looking for thinkers, builders, and problem-solvers who thrive on precision and purposeful
                innovation.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link
                aria-label="View current job openings and career opportunities"
                href="/careers"
                title="Explore open Opportunities"
              >
                Explore open Opportunities
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
                  <IconArrowRight aria-hidden="true" className="text-stone-500" />
                </span>
              </Link>
            </Button>
          </div>
          <ul
            aria-label="Career benefits"
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            role="list"
          >
            {HIRING_CTA.map((cta, i) => (
              <li
                className="flex items-center gap-2 rounded-2xl bg-card p-3 shadow-md"
                key={`${i}-${cta}`}
                role="listitem"
              >
                <CheckmarkIconBox aria-hidden="true" className="size-11" />
                <p className="font-display font-medium text-primary-900 text-subhead-base">{cta}</p>
              </li>
            ))}
          </ul>
        </section>
        <Cta />
      </main>
    </>
  );
}

function DashedLine() {
  return (
    <div className="px-9">
      <svg
        className="text-stone-300"
        fill="none"
        height="24"
        viewBox="0 0 2 24"
        width="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.750002 0L0.75 24" stroke="currentColor" strokeDasharray="6 4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function TeamCard({ i }: { i: number }) {
  return (
    <article className="p-4" key={i} role="listitem">
      <div className="relative aspect-square overflow-hidden rounded-5xl shadow-sm">
        <Image
          alt={`Team member ${i + 1} profile photo`}
          className="object-cover transition-transform hover:scale-105"
          fill
          src={`/images/avatar-${i + 1}.jpg`}
        />
      </div>
      <div className="mt-4 flex items-center justify-between px-4">
        <div className="space-y-1 font-display">
          <h4 className="text-stone-900 text-subhead-lg">Person Name</h4>
          <p className="text-stone-500 text-subhead-base">Designation</p>
        </div>
        <a
          aria-label="Connect with team member on LinkedIn"
          className="text-stone-700 transition-colors hover:text-primary-600"
          href="https://linkedin.com/company/sphere-it-global"
        >
          <IconSocialLinkedin aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
