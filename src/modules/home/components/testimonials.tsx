import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

import { TESTIMONIALS, Testimonial } from "@/data/testimonials";

export const Testimonials = () => {
  return (
    <section className="container">
      <div className="container max-w-7xl border-x py-20">
        <div className="mb-12 flex flex-col items-center gap-4">
          <Badge>Client Testimonials</Badge>
          <h2 className="text-primary-900 text-title-2">
            Wall of <span className="text-primary-600">love</span>
          </h2>
        </div>
        <div className="relative grid h-[80svh] grid-cols-3 gap-4">
          <div className="absolute inset-x-0 z-10 h-40 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
          <Marquee className="[--duration:10s]" vertical>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
          <Marquee className="[--duration:10s]" reverse vertical>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
          <Marquee className="[--duration:20s]" vertical>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <Card className="rounded-xl p-0 shadow-md">
      <CardHeader className="border-b bg-muted p-4">
        <CardTitle className="leading-none">{data.name}</CardTitle>
        <CardDescription>{data.designation}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data.content}</p>
        <span>{data.industry}</span>
      </CardContent>
    </Card>
  );
}
