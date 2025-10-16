import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IconArrowRight } from "@/assets/icons/arrows";
import { IconAiGear } from "@/assets/icons/gear";

export default function Home() {
  return (
    <main>
      <header className="container bg-card">
        <section className="container max-w-7xl border-x pt-28 pb-9 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-primary-900 text-title-1">
              Delivering <span className="text-primary-700">Accuracy.</span> Driving Outcomes.
            </h1>
            <p className="text-2xl">
              Empowering forward-looking organizations with talent and technology that deliver measurable outcomes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button>Explore Services</Button>
              <Button variant="ghost">Contact us</Button>
            </div>
          </div>
          <div className="flex items-center gap-6 py-12">
            <div className="flex flex-1 items-center">
              <div className="h-0.5 w-full bg-gradient-to-l from-primary-700 to-stone-100" />
              <div className="size-1.5 shrink-0 rounded-full bg-primary-700" />
            </div>
            <p className="font-mono text-muted-foreground uppercase">We can help you Manage</p>
            <div className="flex flex-1 items-center">
              <div className="size-1.5 shrink-0 rounded-full bg-primary-700" />
              <div className="h-0.5 w-full bg-gradient-to-r from-primary-700 to-stone-100" />
            </div>
          </div>
        </section>
      </header>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50 pb-12">
        <div className="container max-w-7xl border-x">
          <Tabs className="container max-w-6xl" defaultValue="elevate">
            <div className="relative mx-auto inline-flex pb-9">
              <svg fill="none" height="64" viewBox="0 0 86 64" width="86" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50.5 45C57.8095 56.6952 71.7084 63.9997 85.5 64V0H0.5C14.2915 0 27.1905 7.30481 34.5 19L50.5 45Z"
                  fill="white"
                />
              </svg>
              <div className="flex h-16 items-center justify-center bg-card">
                <TabsList className="flex items-center justify-center rounded-none bg-card">
                  <TabsTrigger value="elevate">Elevate</TabsTrigger>
                  <TabsTrigger value="automate">Automate</TabsTrigger>
                  <TabsTrigger value="evaluate">Evaluate</TabsTrigger>
                  <TabsTrigger value="assure">Assure</TabsTrigger>
                  <TabsTrigger value="augment">Augment</TabsTrigger>
                </TabsList>
              </div>
              <svg fill="none" height="64" viewBox="0 0 86 64" width="86" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M35.5 45C28.1905 56.6952 14.2916 63.9997 0.5 64V0H85.5C71.7085 0 58.8095 7.30481 51.5 19L35.5 45Z"
                  fill="white"
                />
              </svg>
            </div>

            <TabsContent
              className="rounded-[calc(var(--radius-3xl)+calc(var(--spacing)*1.5))] border border-stone-500/10 bg-stone-500/10 p-1.5"
              value="elevate"
            >
              <div className="grid grid-cols-5 gap-8 rounded-3xl bg-card px-12 py-16">
                <div className="col-span-2 space-y-8">
                  <div className="space-y-4">
                    <Badge>Elevate</Badge>
                    <h2 className="text-primary-900 text-title-4">Powering Intelligent Transformation</h2>
                    <p className="text-balance text-lg text-stone-800">
                      Unlock the power of AI with compliant, ready-to-use solutions that deliver results faster.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-center gap-3">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-400/16">
                          <IconAiGear className="text-primary-600" />
                        </div>
                        <p className="text-stone-700">
                          Accelerate AI adoption with 60+ reusable, compliant components.
                        </p>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary-400/16">
                          <IconAiGear className="text-primary-600" />
                        </div>
                        <p className="text-stone-700">
                          Deliver enterprise-grade intelligence powered by Agile and DevOps precision.
                        </p>
                      </li>
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
              </div>
            </TabsContent>
            <MiniCta className="-mt-14 mx-14" />
          </Tabs>
        </div>
      </section>
      <section className="border-y">
        <div className="mx-auto max-w-7xl border-x">
          <div className="rounded-3xl bg-card p-9">
            <h3 className="text-center">
              Trusted by <span className="text-primary">500+ Leading</span> Organizations
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
