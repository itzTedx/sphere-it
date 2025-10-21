"use client";

import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "@/components/ui/radix/tabs";

import { IconArrowRight } from "@/assets/icons/arrows";
import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";

import { SERVICES } from "@/data/services";

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50">
      <div className="container">
        <Tabs className="container max-w-7xl border-x pb-12" defaultValue="elevate">
          <div className="-space-x-px relative mx-auto inline-flex pb-4">
            <svg fill="none" height="64" viewBox="0 0 86 64" width="86" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50.5 45C57.8095 56.6952 71.7084 63.9997 85.5 64V0H0.5C14.2915 0 27.1905 7.30481 34.5 19L50.5 45Z"
                fill="white"
              />
            </svg>
            <div className="flex h-16 items-center justify-center bg-card">
              <TabsList className="flex items-center justify-center rounded-none bg-card">
                <TabsTrigger className="pl-1" value="elevate">
                  <div className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconElevate className="m-auto text-stone-500" />
                  </div>
                  Elevate
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="automate">
                  <div className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconAutomate className="m-auto text-stone-500" />
                  </div>
                  Automate
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="evaluate">
                  <div className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconEvaluate className="m-auto text-stone-500" />
                  </div>
                  Evaluate
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="assure">
                  <div className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconAssure className="m-auto text-stone-500" />
                  </div>
                  Assure
                </TabsTrigger>
                <TabsTrigger className="pl-1" value="augment">
                  <div className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                    <IconAugment className="m-auto text-stone-500" />
                  </div>
                  Augment
                </TabsTrigger>
              </TabsList>
            </div>
            <svg fill="none" height="64" viewBox="0 0 86 64" width="86" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M35.5 45C28.1905 56.6952 14.2916 63.9997 0.5 64V0H85.5C71.7085 0 58.8095 7.30481 51.5 19L35.5 45Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="container max-w-6xl">
            <Card className="rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1.5))] border border-stone-500/10 bg-stone-500/10 p-1.5 shadow-none">
              <TabsContents className="rounded-3xl bg-card px-12 py-16 shadow-md" mode="auto-height">
                {SERVICES.map(({ Icon, ...service }) => (
                  <TabsContent className="grid grid-cols-5 gap-8" key={service.id} value={service.id}>
                    <div className="col-span-2 space-y-8">
                      <div className="space-y-4">
                        <Badge variant="secondary">
                          <Icon />
                          {service.id}
                        </Badge>
                        <h2 className="text-primary-900 text-title-4">{service.title}</h2>
                        <p className="text-balance text-lg text-stone-800">{service.description}</p>
                        <ul className="space-y-6">
                          {service.lists.map(({ id, Icon, feature }) => (
                            <li className="flex items-center gap-3" key={id}>
                              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-400/16">
                                <Icon className="text-primary-600" />
                              </div>
                              <p className="font-medium text-sm text-stone-700">{feature}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild>
                        <Link href="/services">
                          Learn more <IconArrowRight />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative col-span-3">
                      <Image alt="" className="object-contain" fill src="/svg/elevate.svg" />
                    </div>
                  </TabsContent>
                ))}
              </TabsContents>
            </Card>
            <MiniCta className="-mt-14 mx-14" />
          </div>
        </Tabs>
      </div>
    </section>
  );
};
