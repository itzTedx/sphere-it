import { Suspense } from "react";

import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { listResearchPapersPaged } from "@/modules/research-papers/actions";
import { PapersCard } from "@/modules/research-papers/components/paper-card";

import { InsightsLayout } from "../components/insights-layout";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ResearchPaperPage(props: {
	searchParams: SearchParams;
}) {
	return (
		<InsightsLayout>
			<Suspense fallback={null}>
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
