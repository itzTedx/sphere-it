import type { Metadata } from "next/dist/types";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { IconChevronDown } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { listBlogs } from "@/modules/blogs/actions/query";
import { BlogCard } from "@/modules/blogs/components/blog-card";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";

import { BlogsSidebar } from "../components/blogs-sidebar";
import { InsightsLayout } from "../components/insights-layout";
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

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogsPage(props: { searchParams: SearchParams }) {
	const searchParams = await props.searchParams;
	const search =
		typeof searchParams.search === "string" ? searchParams.search : undefined;

	const categoryParam =
		typeof searchParams.category === "string"
			? searchParams.category
			: undefined;
	const categories = categoryParam ? categoryParam.split(",") : undefined;

	const isFeatured = searchParams.featured === "true";

	const [filteredBlogs, allBlogsForStats] = await Promise.all([
		listBlogs({
			search,
			categories,
			isFeatured,
		}),
		listBlogs(),
	]);

	return (
		<InsightsLayout>
			{structuredData.map((data, index) => (
				<Script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
					key={index}
					type="application/ld+json"
				/>
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
					<BlogsSidebar
						data={allBlogsForStats}
						filteredCount={filteredBlogs.length}
					/>
					<main className="col-span-3 mb-12">
						<article className="grid grid-cols-3 gap-4 py-6">
							{filteredBlogs.length > 0 ? (
								filteredBlogs.map((blog) => (
									<BlogCard
										className={cn(blog.isFeatured && "col-span-full")}
										data={blog}
										key={blog.id}
									/>
								))
							) : (
								<div className="col-span-3 flex h-64 flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-muted-foreground">
									<p className="font-medium text-lg">No blogs found</p>
									<p className="text-sm">
										Try adjusting your filters or search terms.
									</p>
								</div>
							)}
						</article>
						{filteredBlogs.length > 12 && (
							<div className="flex items-center justify-center">
								<Button variant="ghost">
									Load More{" "}
									<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
										<IconChevronDown className="text-stone-500" />
									</span>
								</Button>
							</div>
						)}
					</main>
				</div>
				<Cta />
			</TabsContent>
		</InsightsLayout>
	);
}
