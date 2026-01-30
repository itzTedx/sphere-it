import { Suspense } from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";

import { BASE_URL } from "@/data/site-config";
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
					<article className="grid grid-cols-3 gap-4 py-6">
						{paged.docs.map((study) => (
							<PapersCard data={study} key={study.slug} />
						))}
					</article>
					{paged.totalPages > 1 && (
						<nav
							aria-label="Pagination"
							className="mt-6 flex items-center justify-between"
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
			<Cta />
		</TabsContent>
	);
}

// Skeleton components
function ResearchPapersPageSkeleton() {
	return (
		<TabsContent value="/resources/research-papers">
			<div className="container max-w-7xl">
				<ResearchPapersMainContentSkeleton />
				<Cta />
			</div>
		</TabsContent>
	);
}

function ResearchPapersMainContentSkeleton() {
	return (
		<main className="mb-12">
			<article className="grid grid-cols-3 gap-4 py-6">
				{Array.from({ length: 6 }).map((_, index) => (
					<div className="space-y-3" key={index}>
						<Skeleton className="aspect-4/3 w-full rounded-xl" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-2/3" />
					</div>
				))}
			</article>
			<nav className="mt-6 flex items-center justify-between">
				<Skeleton className="h-10 w-20" />
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-10 w-20" />
			</nav>
		</main>
	);
}

const meta = {
	title: "Sphere IT Research Papers - AI, Automation & Digital Transformation",
	description:
		"Access in-depth research papers from Sphere IT on AI platforms, IT solutions, process automation, and enterprise digital transformation. Learn from real-world insights and innovation.",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"FAQs",
		"frequently asked questions",
		"Sphere IT services",
		"AI platform questions",
		"automation FAQs",
		"data management questions",
		"managed services FAQs",
		"talent augmentation questions",
		"IT consulting FAQs",
		"digital transformation questions",
	],
	openGraph: {
		title: meta.title,
		description: meta.description,
		type: "website",
		url: `${BASE_URL}/resources/faqs`,
	},

	alternates: {
		canonical: `${BASE_URL}/resources/faqs`,
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
