import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardMedia, CardTitle } from "@/components/ui/card";

import { IconChevronDownFill } from "@/assets/icons";

const RESOURCES_LINKS = [
  {
    id: 1,
    title: "Insights",
    description: "The latest articles, news, blogs, and learnings.",
    href: "/resources/insights",
  },
  {
    id: 2,
    title: "Case Studies",
    description: "Success stories from companies like yours.",
    href: "/resources/case-Studies",
  },
  {
    id: 3,
    title: "Research Papers",
    description: "Deep dives into technology trends and proven methods.",
    href: "/resources/case-Studies",
  },
];

export const Resources = () => {
  return (
    <section className="border-y">
      <div className="mx-auto max-w-7xl max-xl:container">
        <div className="rounded-3xl border bg-card">
          <div className="border-b p-8">
            <h2 className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2">
              Real Stories. <span className="text-primary-600">Real Impact.</span>
            </h2>
          </div>
          <ul className="flex items-center divide-x border-b">
            {RESOURCES_LINKS.map((link) => (
              <li className="relative p-2 md:w-full xl:p-3" key={link.id}>
                <Link className="absolute inset-0" href="/resources/blogs" />
                <div className="rounded-xl bg-card p-3 shadow-sm xl:p-6">
                  <h3 className="text-primary-600 text-subhead-sm md:text-subhead-lg">{link.title}</h3>
                  <p className="hidden text-stone-700 text-xs md:inline xl:text-sm">{link.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <article className="grid gap-6 p-8 md:grid-cols-3">
            <Card className="card">
              <CardMedia alt="" className="aspect-4/3" src="/images/banking.webp" />
              <CardContent>
                <CardHeader>
                  <Badge variant="secondary">Consultancy</Badge>
                  <CardTitle>Digital Transformation at Mashreq Bank, UAE</CardTitle>
                </CardHeader>
              </CardContent>
            </Card>
            <Card className="card">
              <CardMedia alt="" className="aspect-4/3" src="/images/banking.webp" />
              <CardContent>
                <CardHeader>
                  <Badge variant="secondary">Consultancy</Badge>
                  <CardTitle>Digital Transformation at Mashreq Bank, UAE</CardTitle>
                </CardHeader>
              </CardContent>
            </Card>
            <Card className="card">
              <CardMedia alt="" className="aspect-4/3" src="/images/banking.webp" />
              <CardContent>
                <CardHeader>
                  <Badge variant="secondary">Consultancy</Badge>
                  <CardTitle>Digital Transformation at Mashreq Bank, UAE</CardTitle>
                </CardHeader>
              </CardContent>
            </Card>
            <div />
            <Button asChild className="mx-auto w-fit" variant="ghost">
              <Link href="/resources/blogs">
                Explore Resources
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
                  <IconChevronDownFill className="text-stone-500" />
                </span>
              </Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};
