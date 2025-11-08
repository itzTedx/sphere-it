import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <Card aria-labelledby={`testimonial-${data.id}-name`} className="rounded-xl p-0 shadow-md" role="article">
      <CardHeader className="border-b bg-muted p-3 xl:p-4">
        <CardTitle className="leading-none" id={`testimonial-${data.id}-name`}>
          {data.name}
        </CardTitle>
        <CardDescription>{data.designation}</CardDescription>
      </CardHeader>
      <CardContent>
        <blockquote className="text-sm text-stone-700 xl:text-base">"{data.content}"</blockquote>
        <span aria-label={`Industry: ${data.industry}`} className="text-stone-400 text-xs xl:text-sm">
          {data.industry}
        </span>
      </CardContent>
    </Card>
  );
}
