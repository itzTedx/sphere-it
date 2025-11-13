import { memo } from "react";

import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";
import { TabsContent, TabsContents } from "@/components/ui/radix/tabs";

import { IconArrowRight } from "@/assets/icons";

import { SERVICES } from "@/data/services";
import { ServiceListItem } from "@/types/service";

import { ServicesTabs } from "./components/home/service-tabs";
import { ServiceCard } from "./components/service-card";

export const Services = memo(() => {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50"
      id="main-content"
    >
      <div className="relative max-sm:px-0">
        <ServicesTabs>
          <Card className="md:mask-b-from-78% md:mask-b-to-99% mt-3 rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1.5))] border border-stone-alpha-10 bg-stone-alpha-10 p-1 shadow-none backdrop-blur-md md:mt-0 md:p-1.5">
            <TabsContents
              className="rounded-3xl bg-card p-6 shadow-md md:p-8 md:pb-28 xl:px-12 xl:pt-16"
              mode="auto-height"
            >
              {SERVICES.map(({ Icon, ...service }) => (
                <TabsContent
                  aria-labelledby={`${service.id}-tab`}
                  className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-5 md:gap-8"
                  id={`${service.id}-panel`}
                  key={service.id}
                  role="tabpanel"
                  value={service.id}
                >
                  <div className="space-y-6 md:col-span-2 xl:space-y-8">
                    <div className="space-y-3 lg:space-y-4">
                      <Badge variant="secondary">
                        <Icon />
                        {service.id}
                      </Badge>
                      <h2 className="text-primary-900 text-title-5 md:text-title-4">{service.title}</h2>
                      <p className="text-balance text-base text-stone-800 leading-relaxed md:text-lg lg:leading-tight">
                        {service.description}
                      </p>
                      <ul className="space-y-3 md:space-y-4">
                        {service.lists.map(({ id, Icon, feature }) => (
                          <li className="flex items-center gap-3" key={id}>
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-400/16 xl:size-12">
                              <Icon className="size-6 text-primary-600 xl:size-7" />
                            </div>
                            <p className="font-medium text-sm text-stone-600">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/services/${service.id}`}>
                        Learn more <IconArrowRight />
                      </Link>
                    </Button>
                  </div>

                  <ServiceCard
                    service={{
                      ...service,
                      lists: service.lists.map(({ Icon: _Icon, ...listItem }) => listItem) as Array<
                        Omit<ServiceListItem, "Icon">
                      >,
                    }}
                  />
                  {/* <Image
                        alt={`Illustration showing ${service.title} service capabilities and features`}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        className="object-cover object-left"
                        fetchPriority={service.id === "elevate" ? "high" : "auto"}
                        fill
                        placeholder="blur"
                        priority={service.id === "elevate"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={service.image}
                      /> */}
                </TabsContent>
              ))}
            </TabsContents>
          </Card>
          <MiniCta className="md:-mt-20 mt-4 md:mx-14" />
        </ServicesTabs>
        <FlickeringGrid
          aria-hidden="true"
          className="absolute inset-0 z-1 opacity-50 [mask-image:radial-gradient(820px_circle_at_top,white,transparent)]"
          color="#C3A5FA"
          flickerChance={0.1}
          gridGap={4}
          height={1080}
          maxOpacity={0.5}
          squareSize={4}
          width={1920}
        />
      </div>
    </section>
  );
});

Services.displayName = "Services";
