import Image from "next/image";
import { notFound } from "next/navigation";

import { IconBox } from "@/components/icon-box";
import { Cta, MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { PreviewCard, PreviewCardPanel, PreviewCardTrigger } from "@/components/ui/base/preview-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { IconArrowRight } from "@/assets/icons";

import { KeyFeatureCard } from "@/modules/views/components/key-feature-card";

import { SERVICES } from "./data/services";

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

  const service = SERVICES.find((s) => s.id === slug);

  if (!service) return notFound();

  const Icon = service.Icon;

  return (
    <main>
      <header className="space-y-14 border-b bg-card py-16 sm:py-20 md:py-28">
        <div className="container grid max-w-7xl grid-cols-2 items-center gap-7">
          <div className="space-y-6">
            <Badge>
              <Icon /> {service.id}
            </Badge>
            <h1 className="text-primary-900 text-title-2">{service.title}</h1>
            <p className="text-xl">{service.description}</p>
            <div>
              <Button>
                Get Started
                <span className="w-7">
                  <IconArrowRight />
                </span>
              </Button>
            </div>
          </div>
          <div className="relative aspect-10/7">
            <Image alt={service.title} className="object-contain" fill src={service.image} />
          </div>
        </div>
        <ul className="container grid max-w-7xl grid-cols-3 gap-4">
          {service.key.map((key) => (
            <KeyFeatureCard data={key} key={key.id} />
          ))}
        </ul>
      </header>
      <section className="container max-w-7xl py-12">
        <header>
          <Badge showDashes>
            <Icon /> Key Features
          </Badge>
          <div className="mt-4 grid grid-cols-2 gap-9">
            <h2 className="text-primary-900 text-title-2">{service.feature.title}</h2>
            <p className="text-lg text-muted-foreground">{service.feature.description}</p>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-6 pt-9">
          {service.feature.features.map((feature) => (
            <Card className="space-y-6 rounded-3xl p-6 shadow-md" key={feature.title}>
              <IconBox state="active">
                <feature.Icon />
              </IconBox>
              <div className="space-y-3">
                <h3 className="text-primary-900 text-title-5">{feature.title}</h3>
                <p className="text-lg text-stone-800 tracking-tight">{feature.description}</p>
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
      <section className="relative z-50 mx-4 rounded-3xl border bg-card">
        <div className="mx-auto max-w-7xl space-y-6 py-20">
          <header className="max-w-2xl space-y-4">
            <Badge>How {service.id} Transforms</Badge>
            <h2 className="text-primary-900 text-title-2">
              Scale Smarter. <span className="text-primary-600">Grow Faster.</span> Lead with Data.
            </h2>
            <p className="text-lg text-muted-foreground">
              Harness the power of intelligent automation and predictive analytics to accelerate growth, enhance
              efficiency, and make data-driven decisions with confidence.
            </p>
          </header>
          <article className="grid grid-cols-3 gap-3">
            {service.transformation.features.map((feature, i) => (
              <div
                className="card overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-primary-600/40 shadow-md transition-all hover:shadow-lg"
                key={`${i}-${feature.title}`}
              >
                <div className="p-6">
                  <h3 className="text-primary-900 text-title-5">{feature.title}</h3>
                  <p className="text-base text-stone-700">{feature.description}</p>
                </div>
                <div className="relative aspect-16/15">
                  <Image alt={feature.title} className="object-cover" fill src={feature.image} />
                </div>
              </div>
            ))}
          </article>
          <ul className="grid grid-cols-4 gap-4">
            {service.transformation.metrics.map((metric, i) => (
              <li
                className="card rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.5))] bg-stone-alpha-10 p-1.5 shadow-sm transition-all hover:shadow-md"
                key={`${i}-${metric.value}`}
              >
                <div className="h-full space-y-3 rounded-xl bg-card p-6 shadow-sm">
                  <h4 className="text-primary-800 text-title-4">{metric.value}</h4>
                  <p className="text-muted-foreground">{metric.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="my-20 border-y">
        <div className="container max-w-7xl space-y-9 rounded-3xl border bg-card p-9">
          <header className="space-y-4">
            <Badge>Industries we serve</Badge>
            <div className="grid grid-cols-2 gap-4">
              <h2 className="text-primary-900 text-title-2">Driving Growth across Priority Sectors</h2>
              <p className="text-lg text-stone-600">
                We apply enterprise-grade AI where reliability and governance matter most—starting with BFSI and
                extending to priority enterprise sectors across the GCC.
              </p>
            </div>
          </header>
          <ul className="grid grid-cols-5 gap-4">
            {service.industries.map((industry, i) => (
              <li className="rounded-3xl bg-card p-6 shadow-md" key={`${i}-${industry.title}`}>
                <PreviewCard delay={50}>
                  <PreviewCardTrigger aria-label="Automotive sector expertise" className="cursor-pointer">
                    <IconBox>
                      <industry.Icon className="text-stone-500" />
                    </IconBox>
                    <h3
                      className="mt-6 text-primary-900 text-title-6 leading-none [&>span]:text-sm"
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
  );
}
