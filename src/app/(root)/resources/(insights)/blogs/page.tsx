import { ViewTransition } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

import { IconChevronDown, IconChevronRight } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";

import { BlogsSidebar } from "../components/blogs-sidebar";
import { InsightsLayout } from "../components/layout";
import { BLOGS } from "./data/mock-blogs";
import { structuredData } from "./structured-data";

const meta = {
  title: "Blogs - Technology Insights & Digital Transformation | Sphere IT",
  description:
    "Stay ahead with fresh perspectives, expert insights, and stories that inspire. Explore our latest articles on digital transformation, AI solutions, automation, and technology trends.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "technology blog",
    "digital transformation insights",
    "AI solutions blog",
    "automation articles",
    "enterprise technology",
    "IT consulting blog",
    "technology trends",
    "business transformation",
    "cloud solutions blog",
    "data analytics insights",
  ],

  publisher: COMPANY_NAME,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: `${BASE_URL}/resources/blogs`,
    siteName: COMPANY_NAME,
    images: [
      {
        url: "/images/blogs/banking.jpg",
        width: 1200,
        height: 630,
        alt: "Sphere IT Blog - Technology Insights & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/blogs/banking.jpg"],
    creator: "@sphereglobal",
  },
  alternates: {
    canonical: `${BASE_URL}/resources/blogs`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogsPage() {
  return (
    <InsightsLayout>
      {structuredData.map((data, index) => (
        <Script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} key={index} type="application/ld+json" />
      ))}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: `${BASE_URL}` },
          { name: "Resources", item: `${BASE_URL}/resources` },
          { name: "Blogs", item: `${BASE_URL}/resources/blogs` },
        ]}
      />
      <TabsContent value="/resources/blogs">
        <div className="container grid max-w-7xl grid-cols-4 gap-8">
          <BlogsSidebar />
          <main className="col-span-3 mb-12">
            <article className="grid grid-cols-3 gap-4 py-6">
              {BLOGS.map((blog) => (
                <BlogCard className={cn(blog.isFeatured && "col-span-full")} data={blog} key={blog.slug} />
              ))}
            </article>
            <div className="flex items-center justify-center">
              <Button variant="ghost">
                Load More{" "}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
                  <IconChevronDown className="text-stone-500" />
                </span>
              </Button>
            </div>
          </main>
        </div>
        <Cta />
      </TabsContent>
    </InsightsLayout>
  );
}

interface BlogCardProps {
  data: (typeof BLOGS)[number];
}
export function BlogCard({ data, className, ...props }: React.ComponentProps<typeof Card> & BlogCardProps) {
  console.log("transition name in blogs card: ", `title-${data.slug}`);

  return (
    <div className={cn("@container relative", className)} {...props}>
      <Card className={cn("card grid @sm:grid-cols-2 shadow-sm")}>
        <Link className="absolute inset-0 z-10" href={`/resources/blogs/${data.slug}`} />
        <CardContent className="@sm:order-1 order-2 flex flex-col justify-between gap-2 @sm:p-6 p-3">
          <div className="@sm:order-1 order-2 @sm:space-y-2.5">
            <ViewTransition name={`title-${data.slug}`}>
              <CardTitle className="font-semibold @sm:text-title-5 text-primary-900 @sm:xl:text-title-4">
                {data.title}
              </CardTitle>
            </ViewTransition>
            <ViewTransition name={`excerpt-${data.slug}`}>
              <CardDescription className="@max-sm:hidden @sm:xl:text-lg">{data.excerpt}</CardDescription>
            </ViewTransition>
            <Button asChild className="group/link relative z-20 @max-sm:hidden text-accent" size="sm" variant="link">
              <Link href={`/resources/blogs/${data.slug}`}>
                Read More{" "}
                <IconChevronRight className="size-3 translate-y-1 text-accent opacity-0 transition-all duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100 motion-reduce:transition-none" />
              </Link>
            </Button>
          </div>
          <div className="@sm:order-2 order-1 flex items-center justify-between">
            <ViewTransition name={`category-${data.slug}`}>
              <Badge variant="secondary">{data.category}</Badge>
            </ViewTransition>
            <ViewTransition name={`date-${data.slug}`}>
              <Badge className="@max-sm:hidden bg-muted text-muted-foreground shadow-none">{data.publishedAt}</Badge>
            </ViewTransition>
          </div>
        </CardContent>
        <ViewTransition name={`image-${data.slug}`}>
          <div className="relative @sm:order-2 order-1 flex aspect-4/3 items-end justify-end overflow-hidden rounded-xl p-4 @sm:shadow-md">
            <Image alt="" className="object-cover" fill src={data.image} />
            <Badge className="z-10 @sm:hidden bg-stone-700/80 px-2 text-muted shadow-none backdrop-blur-lg">
              {data.publishedAt}
            </Badge>
          </div>
        </ViewTransition>
      </Card>
    </div>
  );
}
