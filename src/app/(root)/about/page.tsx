import { Suspense } from "react";

import { Metadata } from "next/dist/types";
import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { PathsBackground } from "@/components/ui/motion/lines-path-background";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";

import { CheckmarkIconBox } from "@/assets/checkmark-iconbox";
import { IconArrowRight, IconCheckmark, IconPdf } from "@/assets/icons";
import { IconSocialLinkedin } from "@/assets/icons/social";
import { IconChip } from "@/assets/icons/technology";
import { LogoIcon } from "@/assets/logo";

import { HIRING_CTA, OUR_VALUES } from "@/data/about";
import { BASE_URL } from "@/data/site-config";
import { LEADERS, TEAMS, Team } from "@/data/teams";
import { DownloadDeck } from "@/modules/auth/components/download-deck";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { Clients } from "@/modules/views";

import { structuredData } from "./structured-data";

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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: `${BASE_URL}` },
          { name: "About", item: `${BASE_URL}/about` },
        ]}
      />
      <main>
        <header
          className="relative z-50 h-[calc(100svh-9rem)] overflow-hidden border-b bg-card sm:h-[calc(100lvh-4rem)]"
          role="banner"
        >
          <div className="container flex h-full max-w-7xl flex-col justify-between py-9 sm:py-16 md:py-20">
            <div className="max-w-2xl">
              <Badge variant="ghost">About</Badge>
              <h1 className="text-primary-900 text-title-3 md:text-title-1">
                Technology and talent that work where it matters most.
              </h1>
            </div>
            <div className="max-w-xl space-y-6">
              <p className="text-balance text-stone-700 md:text-lg">
                Technology is only as powerful as the outcomes it creates. At Sphere IT, we exist to remove complexity
                and make technology work for business. Our mission is clear: to deliver solutions that are{" "}
                <span className="text-primary-700">
                  precisely engineered, practically applied, and built for real-world impact.
                </span>
              </p>
              <Suspense
                fallback={
                  <Button className="bg-stone-200/30 text-stone-700" variant="ghost">
                    View Our Intro Deck
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50"
                    >
                      <IconPdf aria-hidden="true" className="text-accent" />
                    </span>
                  </Button>
                }
              >
                <DownloadDeck />
              </Suspense>
            </div>
          </div>

          <PathsBackground className="h-[calc(100lvh-4rem)] w-full" position={-1} />
        </header>

        <div className="mt-24 border-y">
          <Clients />
        </div>
        <section
          aria-labelledby="about-heading"
          className="container relative my-12 max-w-7xl overflow-hidden md:my-12"
          id="main-content"
        >
          <div className="container max-w-4xl py-12">
            <Badge showDashes>
              <LogoIcon /> Our Story
            </Badge>
            <h2 className="my-4 text-primary-900 text-title-2" id="about-heading">
              Sphere IT was founded in 2016 with core mission
            </h2>
            <div className="space-y-3">
              <p>
                To equip clients to adopt technology effectively through the right people, processes, and execution
                expertise. Headquartered in Dubai, Sphere IT is a Middle East–focused IT services firm delivering
                technology services and resources to leading banks and enterprises in the region. Sphere IT delivers
                services across managed services, automated process workflows, data management and intelligence, AI
                enablement, and specialized technology talent augmentation.
              </p>
              <p className="text-xl">
                With more than 300 professionals operating across the region and a Center of Excellence in Bangalore,
                Sphere IT enables organizations in the Middle East to leverage technology with precision and pragmatism.
                Sphere IT has built{" "}
                <strong className="font-semibold text-primary-600">
                  deep domain expertise, proven delivery track records, and the trust of leading financial institutions
                  across the region.
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

        <section aria-labelledby="values-heading" className="container max-w-7xl py-20">
          <Badge showDashes>
            <IconChip className="text-accent" /> Our Values
          </Badge>
          <h2 className="mt-6 text-primary-900 text-title-2" id="values-heading">
            Precision and Pragmatism
          </h2>
          <p className="mt-4 max-w-4xl text-balance text-lg text-muted-foreground">
            At Sphere IT, two values shape everything we do - Precision and Pragmatism. Together, they define how we
            deliver technology and how we build trust with every client we serve.
          </p>

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
                  <h3 className="text-primary-900 text-title-3">{value.title}</h3>
                  <p className="font-display text-lg text-stone-600">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="team-heading" className="border-y" id="team">
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
              {LEADERS.map((team, i) => (
                <TeamCard data={team} key={i} />
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
              {TEAMS.map((team, i) => (
                <TeamCard data={team} key={i} />
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
        <Cta showForm />
      </main>
    </>
  );
}

function TeamCard({ data }: { data: Team }) {
  return (
    <article className="group p-4" role="listitem">
      <div className="relative aspect-square overflow-hidden rounded-full">
        {data.linkedin && (
          <Link
            aria-label="Connect with team member on LinkedIn"
            className="text-stone-700 transition-colors hover:text-primary-600"
            href="https://linkedin.com/company/sphere-it-global"
          >
            <IconSocialLinkedin aria-hidden="true" />
          </Link>
        )}
        <Image
          alt={`${data.name} - ${data.designation}`}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          src={data.image}
        />
      </div>

      <div className="mt-4 space-y-1 px-4 text-center font-display">
        <h4 className="text-stone-900 text-subhead-lg">{data.name}</h4>
        <p className="text-stone-500 text-subhead-sm">{data.designation}</p>
      </div>
    </article>
  );
}
