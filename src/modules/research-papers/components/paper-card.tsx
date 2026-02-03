import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Media } from "@/modules/cms/components/Media";
import { ResearchPaper } from "@/payload-types";

interface ResearchPaperCardProps {
	data: Pick<ResearchPaper, "title" | "heroImage" | "slug">;
}

export const PapersCard = ({ data }: ResearchPaperCardProps) => {
	const { title, heroImage, slug } = data;

	return (
		<article className="card relative aspect-4/5 overflow-hidden rounded-xl p-3 text-card shadow-sm transition hover:shadow-md sm:aspect-9/10 sm:p-4 md:p-6">
			<Link
				aria-label={`Read research paper: ${title}`}
				className="absolute inset-0 z-20"
				href={`/resources/research-papers/${slug}`}
			/>
			<div className="relative z-15 flex h-full flex-col items-center justify-between gap-3 sm:gap-4">
				<h3 className="line-clamp-3 text-center font-semibold text-base sm:text-title-4">
					{title}
				</h3>

				<div className="w-full space-y-3 sm:space-y-4">
					<Button
						asChild
						className="relative z-20 w-full"
						size="sm"
						variant="secondary"
					>
						<Link href={`/resources/research-papers/${slug}`}>Read Paper</Link>
					</Button>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-foreground to-transparent" />
			{heroImage && typeof heroImage !== "number" && (
				<Media
					fill
					imgClassName="object-cover"
					resource={heroImage}
					size="33vw"
				/>
			)}
		</article>
	);
};
