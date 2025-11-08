import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Cta } from "@/components/layout/cta";
import MDXContent from "@/components/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BLOGS } from "../data/mock-blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

const getBlogBySlug = (slug: string) => {
  const blog = BLOGS.find((r) => r.slug === slug);

  if (!blog) return notFound();

  return blog;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);
  console.log("transition name in blog page: ", `title-${blog.slug}`);
  return (
    <main>
      <header className="border-b bg-card py-6 sm:py-8 md:py-12">
        <div className="container grid max-w-7xl grid-cols-2 gap-12">
          <div className="space-y-6 py-6">
            <nav aria-label="Breadcrumb navigation">
              <Button aria-label="Go back to all blogs" asChild className="group max-sm:size-9" variant="ghost">
                <Link href="/resources/blogs">
                  <IconArrowLeft aria-hidden="true" className="group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:block">All Blogs</span>
                </Link>
              </Button>
            </nav>

            <div className="space-y-3">
              <ViewTransition name={`title-${blog.slug}`}>
                <h1 className="text-primary-900 text-title-2">{blog.title}</h1>
              </ViewTransition>
              <ViewTransition name={`excerpt-${blog.slug}`}>
                <p className="text-balance text-lg text-muted-foreground">{blog.excerpt}</p>
              </ViewTransition>
            </div>
            <div className="flex items-center gap-3">
              <ViewTransition name={`category-${blog.slug}`}>
                <Badge variant="secondary">{blog.category}</Badge>
              </ViewTransition>
              <ViewTransition name={`date-${blog.slug}`}>
                <Badge className="@max-sm:hidden bg-muted text-muted-foreground shadow-none">{blog.publishedAt}</Badge>
              </ViewTransition>
            </div>
          </div>
          <ViewTransition name={`image-${blog.slug}`}>
            <div className="rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] border p-2">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image alt={blog.title} className="object-cover" fill src={blog.image} />
              </div>
            </div>
          </ViewTransition>
        </div>
      </header>
      <div className="container grid max-w-7xl grid-cols-4 gap-4">
        <aside>Table of Content</aside>
        <article className="prose prose-stone prose-lg col-span-3 mt-4 max-w-none prose-h1:font-medium prose-headings:text-primary-900 sm:mt-6">
          <MDXContent source={blog.content} />
        </article>
      </div>
      <Cta showForm />
    </main>
  );
}
