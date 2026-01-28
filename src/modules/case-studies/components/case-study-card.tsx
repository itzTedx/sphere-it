import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Media } from "@/modules/cms/components/Media";
import { CaseStudy } from "@/payload-types";

interface CaseStudyCardProps {
	data: Pick<CaseStudy, "title" | "heroImage" | "slug" | "highlights">;
}

export const CaseStudyCard = ({ data }: CaseStudyCardProps) => {
	const { title, heroImage, slug, highlights } = data;

	return (
		<article className="card relative aspect-9/10 overflow-hidden rounded-xl p-4 text-card shadow-sm transition hover:shadow-md sm:p-6">
			<Link
				aria-label={`Read case study: ${title}`}
				className="absolute inset-0 z-20"
				href={`/resources/case-studies/${slug}`}
			/>
			<div className="relative z-15 flex h-full flex-col items-center justify-between gap-3 sm:gap-4">
				<h3 className="line-clamp-3 text-center font-semibold text-base sm:text-title-4">
					{title}
				</h3>

				<div className="w-full space-y-3 sm:space-y-4">
					{highlights && (
						<ul className="grid grid-cols-2 gap-2 sm:gap-3" role="list">
							{highlights?.map((list) => (
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
						<Link href={`/resources/case-studies/${slug}`}>Read Study</Link>
					</Button>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-foreground to-transparent" />
			{heroImage && typeof heroImage !== "string" && (
				<Media className="object-cover" fill resource={heroImage} size="33vw" />
			)}
		</article>
	);
};
