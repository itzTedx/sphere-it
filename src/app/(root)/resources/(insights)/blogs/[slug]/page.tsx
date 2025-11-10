import { ViewTransition } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import MDXContent from "@/components/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { slugify } from "@/lib/utils";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { TableOfContent } from "@/modules/views/components/table-of-content";

import { BLOGS } from "../data/mock-blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

const getBlogBySlug = (slug: string) => {
  const blog = BLOGS.find((r) => r.slug === slug);

  if (!blog) return notFound();

  return blog;
};

const structuredData = (blog: (typeof BLOGS)[number]) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.title,
  description: blog.excerpt,
  image: `${BASE_URL}${blog.image}`,
  datePublished: blog.publishedAt,
  dateModified: blog.publishedAt,
  author: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/resources/blogs/${blog.slug}`,
  },
  articleSection: blog.category,
  keywords: [blog.category, "digital transformation", "technology", "IT consulting", COMPANY_NAME],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOGS.find((r) => r.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | ${COMPANY_NAME} Blog`,
    description: blog.excerpt,
    keywords: [
      blog.category,
      "digital transformation",
      "technology blog",
      "IT consulting",
      "enterprise solutions",
      COMPANY_NAME,
      "UAE technology",
      "GCC technology",
    ],
    authors: [{ name: COMPANY_NAME }],
    publisher: COMPANY_NAME,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      url: `${BASE_URL}/resources/blogs/${blog.slug}`,
      siteName: COMPANY_NAME,
      locale: "en_US",
      images: [
        {
          url: `${BASE_URL}${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`${BASE_URL}${blog.image}`],
      creator: "@sphereglobal",
      site: "@sphereglobal",
    },
    alternates: {
      canonical: `${BASE_URL}/resources/blogs/${blog.slug}`,
    },
    category: blog.category,
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
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  const jsonLd = structuredData(blog);

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="blog-structured-data"
        type="application/ld+json"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: BASE_URL },
          { name: "Resources", item: `${BASE_URL}/resources` },
          { name: "Blogs", item: `${BASE_URL}/resources/blogs` },
          { name: blog.title, item: `${BASE_URL}/resources/blogs/${blog.slug}` },
        ]}
      />
      <main>
        <header className="border-b bg-card py-6 sm:py-8 md:py-12" role="banner">
          <div className="container max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4 py-4 sm:space-y-6 sm:py-6">
                <nav aria-label="Breadcrumb navigation">
                  <Button
                    aria-label="Go back to all blogs"
                    asChild
                    className="group max-sm:size-9"
                    size="sm"
                    variant="ghost"
                  >
                    <Link href="/resources/blogs">
                      <IconArrowLeft aria-hidden="true" className="group-hover:-translate-x-1 transition-transform" />
                      <span className="hidden sm:inline">All Blogs</span>
                    </Link>
                  </Button>
                </nav>

                <div className="space-y-3">
                  <ViewTransition name={`title-${blog.slug}`}>
                    <h1 className="text-primary-900 text-title-2">{blog.title}</h1>
                  </ViewTransition>
                  <ViewTransition name={`excerpt-${blog.slug}`}>
                    <p className="text-balance text-base text-muted-foreground sm:text-lg">{blog.excerpt}</p>
                  </ViewTransition>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <ViewTransition name={`category-${blog.slug}`}>
                    <Badge variant="secondary">{blog.category}</Badge>
                  </ViewTransition>
                  <ViewTransition name={`date-${blog.slug}`}>
                    <Badge
                      aria-label={`Published on ${blog.publishedAt}`}
                      className="bg-muted text-muted-foreground shadow-none"
                    >
                      <time dateTime={blog.publishedAt}>{blog.publishedAt}</time>
                    </Badge>
                  </ViewTransition>
                </div>
              </div>
              <ViewTransition name={`image-${blog.slug}`}>
                <div className="rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] border bg-stone-alpha-10 p-2">
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-lg">
                    <Image
                      alt={`${blog.title} - Featured image`}
                      className="object-cover"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      src={blog.image}
                    />
                  </div>
                </div>
              </ViewTransition>
            </div>
          </div>
        </header>
        <div className="container mb-24 max-w-7xl border-b">
          <div className="grid gap-6 lg:grid-cols-4">
            <aside className="hidden border-r lg:block lg:py-6 lg:pr-6">
              <TableOfContent className="mt-0" />
            </aside>
            <article
              className="prose prose-stone prose-lg col-span-3 mx-auto max-w-none py-4 prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
              itemProp="articleBody"
            >
              <MDXContent
                components={{
                  h1: (props) => <h1 id={slugify(props.children)} {...props} />,
                  h2: (props) => <h2 id={slugify(props.children)} {...props} />,
                  h3: (props) => <h3 id={slugify(props.children)} {...props} />,
                  h4: (props) => <h4 id={slugify(props.children)} {...props} />,
                  h5: (props) => <h5 id={slugify(props.children)} {...props} />,
                  h6: (props) => <h6 id={slugify(props.children)} {...props} />,
                }}
                source={blog.content}
              />
            </article>
          </div>
        </div>
        <Cta showForm />
      </main>
    </>
  );
}
