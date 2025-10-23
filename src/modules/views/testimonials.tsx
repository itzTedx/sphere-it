import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

import { TESTIMONIALS, Testimonial } from "@/data/testimonials";

export const Testimonials = () => {
  return (
    <section className="container">
      <div className="max-w-7xl py-12 md:container md:py-16 xl:py-20">
        <div className="mb-12 flex flex-col items-center gap-4">
          <Badge>Client Testimonials</Badge>
          <h2 className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2">
            Wall of <span className="text-primary-600">love</span>
          </h2>
        </div>
        <div className="relative grid h-[90svh] gap-1 md:grid-cols-3 xl:gap-4">
          <div className="absolute inset-x-0 z-10 h-40 bg-gradient-to-b from-background to-transparent" />

          <Marquee className="[--duration:10s]" vertical>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
          <Marquee className="hidden [--duration:10s] md:flex" reverse vertical>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
          <Marquee className="hidden [--duration:20s] md:flex" vertical>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>

          <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-20% from-background to-transparent" />
        </div>
        <div className="-mt-6 relative z-10 mx-auto flex w-fit items-center justify-center gap-1.5 rounded-full bg-card p-1.5 shadow-lg">
          <p className="px-3 font-sans text-muted-foreground text-xs lg:text-base">View the impact on our clients</p>
          <Button className="bg-primary-950">Browse customer stories</Button>
        </div>
      </div>
    </section>
  );
};

function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <Card className="rounded-xl p-0 shadow-md">
      <CardHeader className="border-b bg-muted p-3 xl:p-4">
        <CardTitle className="leading-none">{data.name}</CardTitle>
        <CardDescription>{data.designation}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-stone-700 xl:text-base">{data.content}</p>
        <span className="text-stone-400 text-xs xl:text-sm">{data.industry}</span>
      </CardContent>
    </Card>
  );
}
