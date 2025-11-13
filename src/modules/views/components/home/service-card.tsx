"use client";

import Image from "next/image";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";
import { TextEffect } from "@/components/ui/text-effect";

import { IconCheckmark } from "@/assets/icons";

import { Service, ServiceListItem } from "@/types/service";

import { ServiceCardSkeleton } from "./service-card-skeleton";

type ServiceCardProps = {
  service: Omit<Service, "Icon" | "lists"> & {
    lists: Array<Omit<ServiceListItem, "Icon">>;
  };
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="aspect-square overflow-hidden rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1))] border bg-stone-alpha-10 p-1 md:col-span-3 md:aspect-auto">
      <div className="relative aspect-auto size-full overflow-hidden rounded-3xl bg-radial-[at_50%_100%] from-primary-950 to-primary-800">
        <div className="absolute top-10 left-1/4 z-10 size-full rounded-3xl border-2 border-primary-500 bg-primary-300/15 backdrop-blur-md md:top-12">
          <div className="flex items-center gap-4 p-6">
            <div className="flex size-9 items-center justify-center rounded-lg border-2 border-primary-500 bg-primary-800 shadow-xl md:size-12 md:rounded-xl">
              {/* <Icon className="size-5 text-card md:size-6" /> */}
            </div>
            <TextEffect
              as="h3"
              className="text-card text-title-5 capitalize md:text-title-4"
              per="char"
              preset="fade-in-blur"
            >
              {service.id}
            </TextEffect>
          </div>
          <ServiceCardSkeleton />
        </div>
        <div className="-translate-x-1 md:-translate-x-0 absolute top-20 left-1/6 z-9 size-full rounded-3xl border-2 border-primary-500/50 bg-primary-500/5 backdrop-blur-md md:top-24" />

        <AnimatedGroup
          className="absolute bottom-6 left-6 z-50 flex flex-col gap-3 lg:gap-2 xl:bottom-8 xl:left-8 xl:gap-3"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delay: 0.2,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          {service.tags.map((tag) => (
            <div
              className="flex max-w-fit items-center gap-2 rounded-lg border-2 border-primary-600 bg-primary-900 px-2 py-1.5 shadow-3xl xl:rounded-xl xl:p-2"
              key={tag}
            >
              <IconCheckmark className="size-3 text-primary-400" />{" "}
              <span className="text-primary-200 text-subhead-xs md:text-subhead-sm">{tag}</span>
            </div>
          ))}
          {service.partners && (
            <div>
              <h4 className="mb-3 text-primary-500 text-subhead-xs">Partners</h4>
              <AnimatedGroup
                as="ul"
                className="flex flex-wrap items-center gap-2"
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2,
                        delay: 0.4,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,

                      transition: {
                        duration: 1.2,
                        type: "spring",
                        bounce: 0.3,
                      },
                    },
                  },
                }}
              >
                {service.partners.map((partner) => (
                  <li
                    className="flex h-8 items-center justify-center rounded-md bg-muted px-2 py-1 md:h-9 md:rounded-xl md:px-3 md:py-1.5"
                    key={partner}
                  >
                    <Image
                      alt={partner}
                      className="max-h-full w-fit object-contain"
                      height={50}
                      src={partner}
                      width={150}
                    />
                  </li>
                ))}
              </AnimatedGroup>
            </div>
          )}
        </AnimatedGroup>

        <FlickeringGrid
          aria-hidden="true"
          className="absolute inset-0 z-1 opacity-50 [mask-image:radial-gradient(820px_circle_at_top,white,transparent)]"
          color="#C3A5FA"
          flickerChance={0.1}
          gridGap={4}
          height={440}
          maxOpacity={0.5}
          squareSize={4}
          width={550}
        />
      </div>
    </div>
  );
};
