import { Suspense } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";

import { listCaseStudiesPaged } from "@/modules/case-studies/actions/query";
import { CaseStudyCard } from "@/modules/case-studies/components/case-study-card";

import { InsightsLayout } from "../components/insights-layout";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function CaseStudiesPage(props: {
	searchParams: SearchParams;
}) {
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
					<div className="space-y-3" key={index}>
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
