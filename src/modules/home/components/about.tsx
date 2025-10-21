import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { PreviewCard, PreviewCardPanel, PreviewCardTrigger } from "@/components/ui/base/preview-card";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";

import { IconArrowRight, IconBank, IconCar } from "@/assets/icons";

import { BEST_AT } from "@/data/constants";

export const About = () => {
  return (
    <>
      <section className="container">
        <div className="container relative mx-auto max-w-7xl overflow-hidden border-x">
          <div className="container relative z-10 max-w-3xl space-y-5 py-16">
            <Badge className="text-badge">Technology. Talent. Transformation.</Badge>
            <h2 className="text-primary-900 text-title-2">
              Delivering with <span className="text-primary-600">Precision and Pragmatism</span>
            </h2>
            <p className="text-justify text-2xl text-stone-800 tracking-tighter">
              Sphere IT helps forward-thinking enterprises integrate AI, automation, and talent seamlessly across their
              technology ecosystem - without disrupting existing workflows.
              <br />
              Our approach combines{" "}
              <span className="font-medium text-primary-600">precise delivery with pragmatic execution,</span> helping
              organizations balance time, quality, and cost. Every engagement is designed to be accurate, scalable, and
              outcome-driven - so you see measurable results, faster. <br />
              We are a global IT consulting company with deep domain expertise across{" "}
              <PreviewCard delay={100}>
                <PreviewCardTrigger className="cursor-pointer underline transition-colors hover:text-primary-600">
                  banking
                </PreviewCardTrigger>
                <PreviewCardPanel className="w-fit bg-primary-400" side="top">
                  <IconBank className="size-9 text-primary-950" />
                </PreviewCardPanel>
              </PreviewCard>
              ,{" "}
              <PreviewCard delay={100}>
                <PreviewCardTrigger className="cursor-pointer underline transition-colors hover:text-primary-600">
                  automotive
                </PreviewCardTrigger>
                <PreviewCardPanel className="w-fit bg-primary-400" side="top">
                  <IconCar className="size-9 text-primary-950" />
                </PreviewCardPanel>
              </PreviewCard>
              ,{" "}
              <PreviewCard delay={100}>
                <PreviewCardTrigger className="cursor-pointer underline transition-colors hover:text-primary-600">
                  insurance
                </PreviewCardTrigger>
                <PreviewCardPanel className="w-fit bg-primary-400" side="top">
                  <IconCar className="size-9 text-primary-950" />
                </PreviewCardPanel>
              </PreviewCard>
              , and{" "}
              <PreviewCard delay={100}>
                <PreviewCardTrigger className="cursor-pointer underline transition-colors hover:text-primary-600">
                  mobility
                </PreviewCardTrigger>
                <PreviewCardPanel className="w-fit bg-primary-400" side="top">
                  <IconCar className="size-9 text-primary-950" />
                </PreviewCardPanel>
              </PreviewCard>{" "}
              sectors.
            </p>
            <Button asChild variant="ghost">
              <Link href="/services">
                Explore our Capabilities
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
                  <IconArrowRight className="text-stone-500" />
                </span>
              </Link>
            </Button>
          </div>

          <FlickeringGrid
            className="absolute inset-0 z-1 opacity-50"
            color="#D6D3D1"
            flickerChance={0.1}
            gridGap={4}
            height={1080}
            maxOpacity={0.5}
            squareSize={4}
            width={1920}
          />
        </div>
      </section>
      <section className="container border-y">
        <div className="mx-auto max-w-7xl border-x">
          <div className="container space-y-10 rounded-4xl bg-card px-12 py-16">
            <div className="space-y-5">
              <Badge className="text-badge">We’re best at</Badge>
              <h2 className="text-primary-900 text-title-4 md:text-title-2">
                Turning Complexity Into <span className="text-primary-600">Clarity</span>
              </h2>
              <p className="max-w-4xl text-balance">
                We design AI and automation frameworks that integrate seamlessly with enterprise ecosystems - aligning
                with ISO/IEC 42001 standards to ensure security, transparency, and scalable performance at every layer.
              </p>
              <Button asChild variant="ghost">
                <Link href="/services">
                  See what our customer says
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
                    <IconArrowRight className="text-stone-500" />
                  </span>
                </Link>
              </Button>
            </div>
            <ul className="grid grid-cols-4 gap-3">
              {BEST_AT.map((t) => (
                <li className="rounded-2xl border border-stone-500/10 bg-stone-500/10 p-1.5" key={t.id}>
                  <div className="h-full space-y-6 rounded-xl bg-card p-5 shadow-sm">
                    <div>
                      <IconBank className="text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-primary-800 text-subhead-lg">{t.title}</h3>
                      <p className="text-base">{t.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
