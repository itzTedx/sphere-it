import Image from "next/image";
import { notFound } from "next/navigation";

import { IconBox } from "@/components/icon-box";
import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { IconArrowRight } from "@/assets/icons";

import { KeyFeatureCard } from "@/modules/views/components/key-feature-card";

import { SERVICES } from "./data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = ["elevate", "automate", "elevate", "assure", "augment"];

  return routes.map((slug) => ({
    slug,
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
        <Badge showDashes>
          <Icon /> Key Features
        </Badge>
        <div className="mt-4 grid grid-cols-2 gap-9">
          <h2 className="text-primary-900 text-title-2">{service.feature.title}</h2>
          <p className="text-lg text-muted-foreground">{service.feature.description}</p>
        </div>
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
        <div className="mx-auto max-w-7xl py-20">
          <div className="max-w-2xl space-y-4">
            <Badge>How {service.id} Transforms</Badge>
            <h2 className="text-primary-900 text-title-2">
              Scale Smarter. <span className="text-primary-600">Grow Faster.</span> Lead with Data.
            </h2>
            <p className="text-lg text-muted-foreground">
              Harness the power of intelligent automation and predictive analytics to accelerate growth, enhance
              efficiency, and make data-driven decisions with confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
