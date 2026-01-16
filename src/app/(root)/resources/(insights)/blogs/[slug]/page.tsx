import { ViewTransition } from "react";

import type { Metadata } from "next/dist/types";
import Link from "next/link";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { generateMeta } from "@/lib/generateMeta";
import { findBlogBySlug, listBlogs } from "@/modules/blogs/actions/query";
import { Media } from "@/modules/cms/components/Media";
import RichText from "@/modules/cms/components/RichText";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { TableOfContent } from "@/modules/views/components/table-of-content";
import { Blog } from "@/payload-types";

export async function generateStaticParams() {
	const blogs = await listBlogs();

	return blogs.map((study) => ({
		slug: study.slug,
	}));
}

interface Props {
	params: Promise<{ slug: string }>;
}

const structuredData = (blog: Blog) => {
	const image =
		blog.heroImage && typeof blog.heroImage !== "number"
			? blog.heroImage.url
			: "";
	const category =
		blog.blogCategories && blog.blogCategories.length > 0
			? (() => {
					const cat = blog.blogCategories[0];
					if (typeof cat === "string") return cat;
					if (
						typeof cat === "object" &&
						cat !== null &&
						"category" in cat
					)
						return cat.category;
					return "Technology";
			  })()
			: "Technology";

	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: blog.title,
		description: blog.description,
		image: image ? `${BASE_URL}${image}` : undefined,
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
		articleSection: category,
		keywords: [
			category,
			"digital transformation",
			"technology",
			"IT consulting",
			COMPANY_NAME,
		],
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// const { isEnabled: draft } = await draftMode()
	const { slug } = await params;
	const blog = await findBlogBySlug(slug);

	if (!blog) {
		return {
			title: "Blog Not Found",
			description: "The requested blog post could not be found.",
		};
	}

	return generateMeta({ doc: blog });
}

export default async function BlogPage({ params }: Props) {
	const { slug } = await params;

	const blog = await findBlogBySlug(slug);

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
					{
						name: blog.title,
						item: `${BASE_URL}/resources/blogs/${blog.slug}`,
					},
				]}
			/>
			<main>
				<header
					className="border-b bg-card py-6 sm:py-8 md:py-12"
					role="banner"
				>
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
											<IconArrowLeft
												aria-hidden="true"
												className="group-hover:-translate-x-1 transition-transform"
											/>
											<span className="hidden sm:inline">All Blogs</span>
										</Link>
									</Button>
								</nav>

								<div className="space-y-3">
									<ViewTransition name={`title-${blog.slug}`}>
										<h1 className="text-primary-900 text-title-2">
											{blog.title}
										</h1>
									</ViewTransition>
									<ViewTransition name={`excerpt-${blog.slug}`}>
										<p className="text-balance text-base text-muted-foreground sm:text-lg">
											{blog.description}
										</p>
									</ViewTransition>
								</div>
								<div className="flex flex-wrap items-center gap-3">
									{blog.blogCategories &&
										blog.blogCategories.map((category) => {
											if (typeof category === "object")
												return (
													<ViewTransition
														key={category.id}
														name={`category-${blog.slug}`}
													>
														<Badge variant="secondary">
															{category.category}
														</Badge>
													</ViewTransition>
												);
										})}

									{blog.publishedAt && (
										<ViewTransition name={`date-${blog.slug}`}>
											<Badge
												aria-label={`Published on ${blog.publishedAt}`}
												className="bg-muted text-muted-foreground shadow-none"
											>
												<time dateTime={blog.publishedAt}>
													{blog.publishedAt}
												</time>
											</Badge>
										</ViewTransition>
									)}
								</div>
							</div>
							<ViewTransition name={`image-${blog.slug}`}>
								<div className="rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] border bg-stone-alpha-10 p-2">
									<div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-lg">
										{blog.heroImage && typeof blog.heroImage !== "string" && (
											<Media
												fill
												imgClassName="object-cover"
												resource={blog.heroImage}
												size="33vw"
											/>
										)}
										{/* <Image
											alt={`${blog.title} - Featured image`}
											className="object-cover"
											fill
											priority
											src={blog.image}
										/> */}
									</div>
								</div>
							</ViewTransition>
						</div>
					</div>
				</header>
				<div className="container mb-24 max-w-7xl">
					<div className="grid gap-6 lg:grid-cols-4">
						<aside className="hidden lg:block lg:py-6 lg:pr-6">
							<TableOfContent className="mt-0" />
						</aside>

						<article
							className="col-span-3 mx-auto max-w-none py-4"
							itemProp="articleBody"
						>
							<RichText
								className="prose prose-stone prose-lg prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
								data={blog.content}
								enableGutter={false}
							/>
							{/* <MDXContent
								components={{
									h1: (props) => <h1 id={slugify(props.children)} {...props} />,
									h2: (props) => <h2 id={slugify(props.children)} {...props} />,
									h3: (props) => <h3 id={slugify(props.children)} {...props} />,
									h4: (props) => <h4 id={slugify(props.children)} {...props} />,
									h5: (props) => <h5 id={slugify(props.children)} {...props} />,
									h6: (props) => <h6 id={slugify(props.children)} {...props} />,
								}}
								source={blog.content}
							/> */}
						</article>
					</div>
				</div>
				<Cta showForm />
			</main>
		</>
	);
}
