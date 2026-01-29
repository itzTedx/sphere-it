import { Suspense } from "react";

import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
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
			<Suspense fallback={null}>
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
			<div className="container max-w-7xl">
				<main className="mb-12">
					<article className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
						{paged.docs.map((study) => (
							<CaseStudyCard data={study} key={study.slug} />
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
