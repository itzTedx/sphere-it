import { Suspense } from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { listCaseStudiesPaged } from "@/modules/case-studies/actions/query";
import { CaseStudyCard } from "@/modules/case-studies/components/case-study-card";

import { InsightsLayout } from "../components/insights-layout";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const caseStudiesMeta = {
	shortTitle: "Case Studies - Client Success & Digital Transformation",
	description:
		"Explore Sphere IT case studies: real outcomes in AI, automation, cloud, and digital transformation for enterprises across the UAE, GCC, and beyond.",
};

const caseStudiesTitle = (page: number) =>
	page > 1
		? `${caseStudiesMeta.shortTitle} | Page ${page} | Sphere IT`
		: `${caseStudiesMeta.shortTitle} | Sphere IT`;

const ogImageUrl = `${BASE_URL}/images/services-og.jpg`;

type CaseStudiesPageProps = {
	searchParams: SearchParams;
};

export async function generateMetadata({
	searchParams,
}: CaseStudiesPageProps): Promise<Metadata> {
	const sp = await searchParams;
	const pageParam = typeof sp.page === "string" ? sp.page : undefined;
	const page = Math.max(1, Number(pageParam || 1) || 1);
	const canonicalPath = `${BASE_URL}/resources/case-studies`;
	const canonical = page > 1 ? `${canonicalPath}?page=${page}` : canonicalPath;
	const title = caseStudiesTitle(page);

	return {
		title,
		description: caseStudiesMeta.description,
		keywords: [
			"case studies",
			"IT consulting case studies",
			"digital transformation case studies",
			"enterprise AI success stories",
			"automation case studies",
			"cloud migration examples",
			"UAE technology projects",
			"GCC digital transformation",
			`${COMPANY_NAME} clients`,
			"technology implementation outcomes",
		],
		authors: [{ name: COMPANY_NAME }],
		publisher: COMPANY_NAME,
		openGraph: {
			title,
			description: caseStudiesMeta.description,
			type: "website",
			url: canonical,
			siteName: COMPANY_NAME,
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: `${COMPANY_NAME} case studies and client success stories`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: caseStudiesMeta.description,
			images: [ogImageUrl],
		},
		alternates: {
			canonical,
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
}

export default async function CaseStudiesPage(props: CaseStudiesPageProps) {
	return (
		<InsightsLayout>
			<Suspense fallback={<CaseStudiesPageSkeleton />}>
				<CaseStudiesContent searchParams={props.searchParams} />
			</Suspense>
		</InsightsLayout>
	);
}

async function CaseStudiesContent(props: { searchParams: SearchParams }) {
	const searchParams = await props.searchParams;
	const pageParam =
		typeof searchParams.page === "string" ? searchParams.page : undefined;
	const page = Math.max(1, Number(pageParam || 1) || 1);

	const paged = await listCaseStudiesPaged({ page, limit: 12 });

	const buildHref = (nextPage: number) => {
		const query: Record<string, string> = {};
		if (nextPage > 1) query.page = String(nextPage);
		return {
			pathname: "/resources/case-studies",
			query,
		};
	};

	return (
		<TabsContent value="/resources/case-studies">
			<div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
				<main className="mb-8 sm:mb-12">
					<article className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:py-6 lg:grid-cols-3 xl:gap-6">
						{paged.docs.map((study) => (
							<CaseStudyCard data={study} key={study.slug} />
						))}
					</article>
					{paged.totalPages > 1 && (
						<nav
							aria-label="Pagination"
							className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0"
						>
							<div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start">
								{paged.hasPrevPage ? (
									<Button
										asChild
										className="flex-1 sm:flex-none"
										size="sm"
										variant="outline"
									>
										<Link href={buildHref(page - 1)}>Previous</Link>
									</Button>
								) : (
									<Button
										className="flex-1 sm:flex-none"
										disabled
										size="sm"
										variant="outline"
									>
										Previous
									</Button>
								)}
								{paged.hasNextPage ? (
									<Button
										asChild
										className="flex-1 sm:flex-none"
										size="sm"
										variant="outline"
									>
										<Link href={buildHref(page + 1)}>Next</Link>
									</Button>
								) : (
									<Button
										className="flex-1 sm:flex-none"
										disabled
										size="sm"
										variant="outline"
									>
										Next
									</Button>
								)}
							</div>
							<span className="text-center text-muted-foreground text-sm sm:text-left">
								Page {paged.page} of {paged.totalPages}
							</span>
						</nav>
					)}
				</main>
			</div>
		</TabsContent>
	);
}

// Skeleton components
function CaseStudiesPageSkeleton() {
	return (
		<TabsContent value="/resources/case-studies">
			<div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
				<CaseStudiesMainContentSkeleton />
			</div>
		</TabsContent>
	);
}

function CaseStudiesMainContentSkeleton() {
	return (
		<main className="mb-8 sm:mb-12">
			<article className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:py-6 lg:grid-cols-3 xl:gap-6">
				{Array.from({ length: 6 }).map((_, index) => (
					<div
						className="space-y-3"
						key={`case-study-skeleton-${
							// biome-ignore lint/suspicious/noArrayIndexKey: we need to use the index as the key
							index + 1
						}`}
					>
						<Skeleton className="aspect-4/3 w-full rounded-xl" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-2/3" />
					</div>
				))}
			</article>
			<nav className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
				<div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start">
					<Skeleton className="h-10 w-20 sm:w-20" />
					<Skeleton className="h-10 w-20 sm:w-20" />
				</div>
				<Skeleton className="h-4 w-24" />
			</nav>
		</main>
	);
}
