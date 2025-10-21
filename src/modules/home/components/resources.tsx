import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardMedia, CardTitle } from "@/components/ui/card";

import { IconChevronDownFill } from "@/assets/icons";

export const Resources = () => {
  return (
    <section className="border-y">
      <div className="mx-auto max-w-7xl border-x">
        <div className="rounded-3xl border bg-card">
          <div className="border-b p-8">
            <h2 className="text-primary-900 text-title-2">
              Real Stories. <span className="text-primary-600">Real Impact.</span>
            </h2>
          </div>
          <ul className="flex items-center divide-x border-b">
            <li className="relative w-full p-3">
              <Link className="absolute inset-0" href="/resources/insights" />
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="text-primary-600 text-subhead-lg">Insights</h3>
                <p className="text-sm text-stone-700">The latest articles, news, blogs, and learnings.</p>
              </div>
            </li>
            <li className="relative w-full p-3">
              <Link className="absolute inset-0" href="/resources/insights" />
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="text-primary-600 text-subhead-lg">Case Studies</h3>
                <p className="text-sm text-stone-700">Success stories from companies like yours.</p>
              </div>
            </li>
            <li className="relative w-full p-3">
              <Link className="absolute inset-0" href="/resources/insights" />
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="text-primary-600 text-subhead-lg">Research Papers</h3>
                <p className="text-sm text-stone-700">Deep dives into technology trends and proven methods.</p>
              </div>
            </li>
          </ul>
          <article className="grid grid-cols-3 gap-6 p-8">
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
              <Link href="/resources/insights">
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
