import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { IconChevronDown } from "@/assets/icons";

import { BlogCardProps } from "@/modules/blogs/components/blog-card";

import {
	CategoryFilter,
	FeaturedFilter,
	SearchInput,
	Stats,
} from "./blog-filters";
import { ClearFilterButton } from "./delete-filter-button";

export const BlogsSidebar = ({
	data,
	filteredCount,
}: {
	data: BlogCardProps["data"][];
	filteredCount: number;
}) => {
	// Calculate category counts
	const categoryCounts = data.reduce(
		(acc, blog) => {
			blog.blogCategories?.forEach((cat) => {
				if (typeof cat === "object" && cat.slug && cat.category) {
					if (!acc[cat.slug]) {
						acc[cat.slug] = {
							label: cat.category,
							count: 0,
							slug: cat.slug,
						};
					}
					acc[cat.slug].count++;
				}
			});
			return acc;
		},
		{} as Record<string, { label: string; count: number; slug: string }>
	);

	const categories = Object.values(categoryCounts).sort((a, b) =>
		a.label.localeCompare(b.label)
	);

	// Calculate featured count
	const featuredCount = data.filter((blog) => blog.isFeatured).length;

	return (
		<aside className="sticky top-16 max-h-fit space-y-4 py-6">
			<SearchInput placeholder="Search" />
			<div className="dashed-stroke" />
			<Collapsible
				className="overflow-hidden rounded-lg border bg-card/30"
				defaultOpen={true}
			>
				<CollapsibleTrigger className="[&[data-state=open]>svg]:-rotate-180 group flex w-full cursor-pointer items-center justify-between bg-card p-3 text-label text-stone-400">
					Categories
					<IconChevronDown className="size-3 transition-transform group-hover:scale-120 group-hover:text-stone-600" />
				</CollapsibleTrigger>
				<CollapsibleContent defaultOpen keepRendered>
					<div className="space-y-2 p-3 text-muted-foreground text-sm">
						{categories.map((option) => (
							<CategoryFilter
								category={option.label}
								count={option.count}
								key={option.slug}
								slug={option.slug}
							/>
						))}
					</div>
				</CollapsibleContent>
			</Collapsible>

			<FeaturedFilter count={featuredCount} />
			<div className="dashed-stroke" />
			<div className="flex items-center justify-between">
				<Stats filtered={filteredCount} total={data.length} />
				<ClearFilterButton />
			</div>
		</aside>
	);
};
