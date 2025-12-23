import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { IconChevronDown } from "@/assets/icons";

import { listResearchPapers } from "@/modules/research-papers/actions";
import { ResearchMetadata } from "@/modules/research-papers/actions/types";

import { InsightsLayout } from "../components/insights-layout";
export default function ResearchPaperPage() {
	const papers = listResearchPapers();
	return (
		<InsightsLayout>
			<TabsContent value="/resources/research-papers">
				<div className="container max-w-7xl">
					<main className="mb-12">
						<article className="grid grid-cols-3 gap-4 py-6">
							{papers.map((study) => (
								<PapersCard data={study} key={study.slug} />
							))}
						</article>
						<div className="flex items-center justify-center">
							<Button variant="ghost">
								Load More{" "}
								<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
									<IconChevronDown className="text-stone-500" />
								</span>
							</Button>
						</div>
					</main>
				</div>
				<Cta />
			</TabsContent>
		</InsightsLayout>
	);
}

interface ResearchPaperCardProps {
	data: ResearchMetadata;
}

const PapersCard = ({ data }: ResearchPaperCardProps) => {
	const { title, image, slug, lists } = data;

	return (
		<article className="card relative aspect-9/10 overflow-hidden rounded-xl p-4 text-card shadow-sm transition hover:shadow-md sm:p-6">
			<Link
				aria-label={`Read case study: ${title}`}
				className="absolute inset-0 z-20"
				href={`/resources/research-papers/${slug}`}
			/>
			<div className="relative z-15 flex h-full flex-col items-center justify-between gap-3 sm:gap-4">
				<h3 className="line-clamp-3 text-center font-semibold text-base sm:text-title-4">
					{title}
				</h3>

				<div className="w-full space-y-3 sm:space-y-4">
					{lists && (
						<ul className="grid grid-cols-2 gap-2 sm:gap-3" role="list">
							{lists?.map((list) => (
								<li key={list.label}>
									<span className="block font-bold text-sm sm:text-subhead-lg">
										{list.value}
									</span>
									<p className="text-xs sm:text-subhead-base">{list.label}</p>
								</li>
							))}
						</ul>
					)}
					<Button
						asChild
						className="relative z-20 w-full"
						size="sm"
						variant="secondary"
					>
						<Link href={`/resources/case-studies/${slug}`}>Read Paper</Link>
					</Button>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-foreground to-transparent" />
			<Image
				alt={`${title} - Background image`}
				className="object-cover"
				fill
				loading="lazy"
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
				src={image}
			/>
		</article>
	);
};
