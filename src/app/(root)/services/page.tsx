import Image from "next/image";

import { IconBox } from "@/components/icon-box";
import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";

import { SERVICES } from "@/data/services";
import { WhyMatters } from "@/modules/views/why-matters";
import { Service } from "@/types/service";

export default function ServicesPage() {
  return (
    <main>
      <header className="bg-card py-28">
        <div className="container max-w-7xl">
          <Badge>Services</Badge>
          <div className="mt-4 max-w-4xl space-y-6">
            <h1 className="text-primary-900 text-title-1">
              Powering Business from <span className="text-primary-600">Automation to Augmentation</span>
            </h1>
            <p className="text-balance text-lead text-stone-700">
              We helps organizations simplify complexity and accelerate results - delivering solutions that are precise,
              pragmatic, and outcome-driven.
            </p>
          </div>
        </div>
      </header>
      <section>
        <p className="container max-w-7xl py-12">
          Sphere IT helps organizations simplify complexity and accelerate results through five integrated service lines
          - each designed to deliver measurable outcomes with precision and pragmatism.
        </p>
      </section>
      <section className="relative z-50 mx-6 rounded-4xl bg-card p-16">
        <ul className="space-y-16">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>
      </section>
      <WhyMatters />
      <Cta />
    </main>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <li
      className="card group relative grid grid-cols-2 gap-3 rounded-4xl bg-card p-6 shadow-md transition-all hover:shadow-lg"
      key={service.id}
    >
      <div className="relative aspect-[1.44/1] overflow-hidden rounded-3xl group-even:order-2">
        <Image alt={service.serviceTitle} className="object-cover" fill src={service.image} />
      </div>
      <div className="flex flex-col justify-between px-6 group-even:order-1">
        <div className="space-y-4 py-3">
          <div className="flex items-center gap-3">
            <IconBox state="active">
              <service.Icon className="text-primary-600" />
            </IconBox>
            <h2 className="text-primary-800 text-title-4">{service.serviceTitle}</h2>
          </div>
          <p className="font-display text-stone-700 text-subhead-sm">{service.overview}</p>
          <ul className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li
                className="rounded-lg bg-stone-alpha-10 px-3 py-2 font-mono text-badge text-stone-600 uppercase"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t py-3">
          <h3 className="font-display font-medium text-stone-600 text-xl">
            <span className="font-semibold text-4xl text-primary-900">40%</span> faster deployment
          </h3>
          <ul className="flex items-center gap-3 font-display text-stone-500 text-subhead-sm">
            <li>AI</li>
            <li>
              <div className="size-1.5 rounded-full bg-accent" />
            </li>
            <li>Agile</li>
            <li>
              <div className="size-1.5 rounded-full bg-accent" />
            </li>
            <li>Certification</li>
          </ul>
        </div>
      </div>
    </li>
  );
}
