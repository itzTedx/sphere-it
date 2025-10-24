import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "@/components/ui/radix/tabs";

import { IconArrowRight, IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons";

import { SERVICES } from "@/data/services";

export const Services = memo(() => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50">
      <div className="max-sm:px-0">
        <Tabs className="container max-w-7xl pb-12 max-sm:px-0 md:border-x" defaultValue="elevate">
          <div className="-space-x-px relative mx-auto inline-flex max-sm:bg-card max-sm:px-4 md:pb-4">
            <svg
              className="hidden shrink-0 sm:block"
              fill="none"
              height="64"
              viewBox="0 0 86 64"
              width="86"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.5 45C57.8095 56.6952 71.7084 63.9997 85.5 64V0H0.5C14.2915 0 27.1905 7.30481 34.5 19L50.5 45Z"
                fill="white"
              />
            </svg>
            <div className="flex items-center justify-center bg-card sm:h-11 md:h-16">
              <TabsList className="flex h-auto flex-wrap items-center justify-center rounded-none bg-card">
                <TabsTrigger className="pl-1" value="elevate">
                  <div aria-hidden="true" className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconElevate className="m-auto text-stone-500" />
                  </div>
                  Elevate
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="automate">
                  <div aria-hidden="true" className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconAutomate className="m-auto text-stone-500" />
                  </div>
                  Automate
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="evaluate">
                  <div aria-hidden="true" className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconEvaluate className="m-auto text-stone-500" />
                  </div>
                  Evaluate
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="assure">
                  <div aria-hidden="true" className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconAssure className="m-auto text-stone-500" />
                  </div>
                  Assure
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="augment">
                  <div aria-hidden="true" className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconAugment className="m-auto text-stone-500" />
                  </div>
                  Augment
                </TabsTrigger>
              </TabsList>
            </div>
            <svg
              className="hidden shrink-0 sm:block"
              fill="none"
              height="64"
              viewBox="0 0 86 64"
              width="86"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.5 45C28.1905 56.6952 14.2916 63.9997 0.5 64V0H85.5C71.7085 0 58.8095 7.30481 51.5 19L35.5 45Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="container max-w-6xl">
            <Card className="rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1.5))] border border-stone-alpha-10 bg-stone-alpha-10 p-1 shadow-none md:p-1.5">
              <TabsContents className="rounded-3xl bg-card p-6 shadow-md md:px-12 md:py-16" mode="auto-height">
                {SERVICES.map(({ Icon, ...service }) => (
                  <TabsContent
                    className="grid gap-4 sm:gap-6 md:grid-cols-5 md:gap-8"
                    key={service.id}
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
                      <Button asChild className="w-full sm:w-auto">
                        <Link href={`/services/${service.id}`}>
                          Learn more <IconArrowRight />
                        </Link>
                      </Button>
                    </div>
                    <div className="aspect-6/4 overflow-hidden rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1))] border bg-stone-alpha-10 p-1 sm:aspect-auto md:col-span-3">
                      <div className="relative aspect-auto size-full overflow-hidden rounded-3xl">
                        <Image
                          alt={`${service.title} - ${service.description}`}
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          className="object-cover object-left"
                          fetchPriority={service.id === "elevate" ? "high" : "auto"}
                          fill
                          placeholder="blur"
                          priority={service.id === "elevate"}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          src={service.image}
                        />
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </TabsContents>
            </Card>
            <MiniCta className="md:-mt-14 mt-4 md:mx-14" />
          </div>
        </Tabs>
      </div>
    </section>
  );
});

Services.displayName = "Services";
