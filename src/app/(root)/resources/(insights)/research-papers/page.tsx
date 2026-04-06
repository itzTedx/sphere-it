import { Suspense } from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { listResearchPapersPaged } from "@/modules/research-papers/actions";
import { PapersCard } from "@/modules/research-papers/components/paper-card";

import { InsightsLayout } from "../components/insights-layout";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ResearchPaperPage(props: {
	searchParams: SearchParams;
}) {
	return (
		<InsightsLayout>
			<Suspense fallback={<ResearchPapersPageSkeleton />}>
				<ResearchPapersContent searchParams={props.searchParams} />
			</Suspense>
		</InsightsLayout>
	);
}

async function ResearchPapersContent(props: { searchParams: SearchParams }) {
	const searchParams = await props.searchParams;
	const pageParam =
		typeof searchParams.page === "string" ? searchParams.page : undefined;
	const page = Math.max(1, Number(pageParam || 1) || 1);

	const paged = await listResearchPapersPaged({ page, limit: 12 });

	const buildHref = (nextPage: number) => {
		const query: Record<string, string> = {};
		if (nextPage > 1) query.page = String(nextPage);
		return {
			pathname: "/resources/research-papers",
			query,
		};
	};

	return (
		<TabsContent value="/resources/research-papers">
			<div className="container max-w-7xl">
				<main className="mb-12">
					<article className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
						{paged.docs.map((study) => (
							<PapersCard data={study} key={study.slug} />
						))}
					</article>
					{paged.totalPages > 1 && (
						<nav
							aria-label="Pagination"
							className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"
						>
							{paged.hasPrevPage ? (
								<Button asChild variant="outline">
									<Link href={buildHref(page - 1)}>Previous</Link>
								</Button>
							) : (
								<Button disabled variant="outline">
									Previous
								</Button>
							)}
							<span className="text-muted-foreground text-sm">
								Page {paged.page} of {paged.totalPages}
							</span>
							{paged.hasNextPage ? (
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
			</div>
		</TabsContent>
	);
}

// Skeleton components
function ResearchPapersPageSkeleton() {
	return (
		<TabsContent value="/resources/research-papers">
			<div className="container max-w-7xl">
				<ResearchPapersMainContentSkeleton />
			</div>
		</TabsContent>
	);
}

function ResearchPapersMainContentSkeleton() {
	const skeletonCardKeys = [
		"skeleton-card-1",
		"skeleton-card-2",
		"skeleton-card-3",
		"skeleton-card-4",
		"skeleton-card-5",
		"skeleton-card-6",
	];

	return (
		<main className="mb-12">
			<article className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
				{skeletonCardKeys.map((skeletonKey) => (
					<div className="space-y-3" key={skeletonKey}>
						<Skeleton className="aspect-4/3 w-full rounded-xl" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-2/3" />
					</div>
				))}
			</article>
			<nav className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
				<Skeleton className="h-10 w-20" />
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-10 w-20" />
			</nav>
		</main>
	);
}

const meta = {
	title:
		"Research Papers on AI, Automation & Digital Transformation | Sphere IT",
	description:
		"Explore Sphere IT research papers covering enterprise AI adoption, process automation, digital transformation strategy, and technology implementation insights for UAE and GCC organizations.",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"research papers",
		"AI research papers",
		"digital transformation research",
		"process automation insights",
		"enterprise AI strategy",
		"technology thought leadership",
		"UAE digital transformation",
		"GCC technology insights",
		"IT consulting research",
		`${COMPANY_NAME} research`,
	],
	authors: [{ name: COMPANY_NAME }],
	publisher: COMPANY_NAME,
	openGraph: {
		title: meta.title,
		description: meta.description,
		type: "website",
		url: `${BASE_URL}/resources/research-papers`,
		siteName: COMPANY_NAME,
		images: [
			{
				url: `${BASE_URL}/images/services-og.jpg`,
				width: 1200,
				height: 630,
				alt: `${COMPANY_NAME} research papers and insights`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: meta.title,
		description: meta.description,
		images: [`${BASE_URL}/images/services-og.jpg`],
	},

	alternates: {
		canonical: `${BASE_URL}/resources/research-papers`,
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
