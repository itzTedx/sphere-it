import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";
import { TabsContent, TabsContents } from "@/components/ui/radix/tabs";

import { IconArrowRight, IconCheckmark } from "@/assets/icons";

import { SERVICES } from "@/data/services";

import { ServiceCardSkeleton } from "./components/home/service-card-skeleton";
import { ServicesTabs } from "./components/home/service-tabs";

export const Services = memo(() => {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50"
      id="main-content"
    >
      <div className="relative max-sm:px-0">
        <ServicesTabs>
          <Card className="md:mask-b-from-78% md:mask-b-to-99% rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1.5))] border border-stone-alpha-10 bg-stone-alpha-10 p-1 shadow-none backdrop-blur-md md:p-1.5">
            <TabsContents className="rounded-3xl bg-card p-6 shadow-md md:px-12 md:pt-16 md:pb-28" mode="auto-height">
              {SERVICES.map(({ Icon, ...service }) => (
                <TabsContent
                  aria-labelledby={`${service.id}-tab`}
                  className="grid gap-4 sm:gap-6 md:grid-cols-5 md:gap-8"
                  id={`${service.id}-panel`}
                  key={service.id}
                  role="tabpanel"
                  value={service.id}
                >
                  <div className="space-y-8 md:col-span-2">
                    <div className="space-y-4">
                      <Badge variant="secondary">
                        <Icon />
                        {service.id}
                      </Badge>
                      <h2 className="text-primary-900 text-title-5 md:text-title-4">{service.title}</h2>
                      <p className="text-balance text-stone-800 md:text-lg">{service.description}</p>
                      <ul className="space-y-4 sm:space-y-5 md:space-y-6">
                        {service.lists.map(({ id, Icon, feature }) => (
                          <li className="flex items-center gap-3" key={id}>
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-400/16 sm:size-12">
                              <Icon className="size-6 text-primary-600 sm:size-7" />
                            </div>
                            <p className="font-medium text-sm text-stone-700">{feature}</p>
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
                  <div className="aspect-6/4 overflow-hidden rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1))] border bg-stone-alpha-10 p-1 sm:aspect-auto md:col-span-3">
                    <div className="relative aspect-auto size-full overflow-hidden rounded-3xl bg-radial-[at_50%_100%] from-primary-950 to-primary-800">
                      <div className="absolute top-12 left-1/4 z-10 size-full rounded-3xl border-2 border-primary-500 bg-primary-300/15 backdrop-blur-md">
                        <div className="flex items-center gap-4 p-6">
                          <div className="flex size-12 items-center justify-center rounded-xl border-2 border-primary-500 bg-primary-800 shadow-xl">
                            <Icon className="text-card" />
                          </div>
                          <h3 className="text-card text-title-4 capitalize">{service.id}</h3>
                        </div>
                        <ServiceCardSkeleton />
                      </div>
                      <div className="absolute top-24 left-1/6 z-9 size-full translate-x-2 rounded-3xl border-2 border-primary-500" />

                      <div className="absolute bottom-12 left-12 z-50 flex flex-col gap-3">
                        {service.tags.map((tag) => (
                          <div
                            className="flex max-w-fit items-center gap-2 rounded-xl border-2 border-primary-600 bg-primary-900 p-2 shadow-3xl"
                            key={tag}
                          >
                            <IconCheckmark className="size-3 text-primary-400" />{" "}
                            <span className="text-primary-200 text-subhead-sm">{tag}</span>
                          </div>
                        ))}
                        {service.partners && (
                          <div>
                            <h4 className="mb-3 text-primary-500 text-subhead-xs">Partners</h4>
                            <ul className="flex flex-wrap items-center gap-2">
                              {service.partners.map((partner) => (
                                <li
                                  className="flex h-10 items-center justify-center rounded-xl bg-muted px-4 py-1.5"
                                  key={partner}
                                >
                                  <Image
                                    alt={partner}
                                    className="max-h-full w-fit object-contain"
                                    height={40}
                                    src={partner}
                                    width={120}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
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
                    </div>
                  </div>
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
