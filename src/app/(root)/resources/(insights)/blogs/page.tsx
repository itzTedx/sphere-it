import { Suspense } from "react";

import type { Metadata } from "next/dist/types";
import Link from "next/link";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { listBlogs, listBlogsPaged } from "@/modules/blogs/actions/query";
import { BlogCard } from "@/modules/blogs/components/blog-card";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";

import { BlogsSidebar } from "../components/blogs-sidebar";
import { InsightsLayout } from "../components/insights-layout";
import { MobileFilters } from "./components/mobile-filters";
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

export default function BlogsPage(props: { searchParams: SearchParams }) {
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
			<Suspense fallback={<BlogsPageSkeleton />}>
				<BlogsContent searchParams={props.searchParams} />
			</Suspense>
		</InsightsLayout>
	);
}

async function BlogsContent(props: { searchParams: SearchParams }) {
	const searchParams = await props.searchParams;
	const search =
		typeof searchParams.search === "string" ? searchParams.search : undefined;
	const pageParam =
		typeof searchParams.page === "string" ? searchParams.page : undefined;
	const page = Math.max(1, Number(pageParam || 1) || 1);

	const categoryParam =
		typeof searchParams.category === "string"
			? searchParams.category
			: undefined;
	const categories = categoryParam ? categoryParam.split(",") : undefined;

	const isFeatured = searchParams.featured === "true";

	return (
		<TabsContent value="/resources/blogs">
			<div className="container grid max-w-7xl gap-8 lg:grid-cols-4">
				<Suspense fallback={<BlogsSidebarSkeleton />}>
					<div className="hidden lg:block">
						<BlogsSidebarContent />
					</div>
				</Suspense>
				<Suspense fallback={<BlogsMainContentSkeleton />}>
					<MobileFiltersContent />
					<BlogsMainContent
						categories={categories}
						categoryParam={categoryParam}
						isFeatured={isFeatured}
						page={page}
						search={search}
					/>
				</Suspense>
			</div>
			<Cta />
		</TabsContent>
	);
}

// Skeleton components
function BlogsPageSkeleton() {
	return (
		<TabsContent value="/resources/blogs">
			<div className="container grid max-w-7xl gap-8 lg:grid-cols-4">
				<div className="hidden lg:block">
					<BlogsSidebarSkeleton />
				</div>
				<BlogsMainContentSkeleton />
			</div>
			<Cta />
		</TabsContent>
	);
}

function BlogsSidebarSkeleton() {
	return (
		<aside className="sticky top-16 max-h-fit space-y-4 py-6">
			<Skeleton className="h-10 w-full" />
			<div className="h-px w-full bg-muted" />
			<Skeleton className="h-32 w-full rounded-lg" />
			<Skeleton className="h-20 w-full rounded-lg" />
			<div className="h-px w-full bg-muted" />
			<div className="flex items-center justify-between">
				<Skeleton className="h-4 w-20" />
				<Skeleton className="h-8 w-20" />
			</div>
		</aside>
	);
}

function BlogsMainContentSkeleton() {
	return (
		<main className="mb-12">
			<article className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<div className="space-y-3" key={index}>
						<Skeleton className="aspect-4/3 w-full rounded-xl" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-2/3" />
					</div>
				))}
			</article>
		</main>
	);
}

// Separated content components
async function BlogsSidebarContent() {
	const allBlogsForStats = await listBlogs();

	return (
		<BlogsSidebar
			data={allBlogsForStats}
			filteredCount={0} // This will be updated by the main content
		/>
	);
}

async function MobileFiltersContent() {
	const allBlogsForStats = await listBlogs();

	return (
		<MobileFilters
			data={allBlogsForStats}
			filteredCount={0} // This will be updated by the main content
		/>
	);
}

async function BlogsMainContent({
	search,
	categories,
	isFeatured,
	page,
	categoryParam,
}: {
	search?: string;
	categories?: string[];
	isFeatured: boolean;
	page: number;
	categoryParam?: string;
}) {
	const pagedBlogs = await listBlogsPaged({
		search,
		categories,
		isFeatured,
		page,
		limit: 12,
	});

	const buildHref = (nextPage: number) => {
		const query: Record<string, string> = {};
		if (search) query.search = search;
		if (categoryParam) query.category = categoryParam;
		if (isFeatured) query.featured = "true";
		if (nextPage > 1) query.page = String(nextPage);
		return {
			pathname: "/resources/blogs",
			query,
		};
	};

	return (
		<main className="mb-12">
			<article className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
				{pagedBlogs.docs.length > 0 ? (
					pagedBlogs.docs.map((blog) => (
						<BlogCard
							className={cn(blog.isFeatured && "col-span-full")}
							data={blog}
							key={blog.id}
						/>
					))
				) : (
					<div className="col-span-full flex h-64 flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-muted-foreground sm:col-span-2 lg:col-span-3">
						<p className="font-medium text-lg">No blogs found</p>
						<p className="text-sm">
							Try adjusting your filters or search terms.
						</p>
					</div>
				)}
			</article>
			{pagedBlogs.totalPages > 1 && (
				<nav
					aria-label="Pagination"
					className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
				>
					{pagedBlogs.hasPrevPage ? (
						<Button asChild variant="outline">
							<Link href={buildHref(page - 1)}>Previous</Link>
						</Button>
					) : (
						<Button disabled variant="outline">
							Previous
						</Button>
					)}
					<span className="text-muted-foreground text-sm">
						Page {pagedBlogs.page} of {pagedBlogs.totalPages}
					</span>
					{pagedBlogs.hasNextPage ? (
						<Button asChild variant="outline">
							<Link href={buildHref(page + 1)}>Next</Link>
						</Button>
					) : (
						<Button disabled variant="outline">
							Next
						</Button>
					)}
				</nav>
			)}
		</main>
	);
}
