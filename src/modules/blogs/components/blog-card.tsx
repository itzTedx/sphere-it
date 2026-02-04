import { ViewTransition } from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";

import { IconChevronRight } from "@/assets/icons";

import { cn } from "@/lib/utils";
import { Media } from "@/modules/cms/components/Media";
import { Blog } from "@/payload-types";

export interface BlogCardProps {
	data: Pick<
		Blog,
		| "blogCategories"
		| "description"
		| "publishedAt"
		| "title"
		| "slug"
		| "id"
		| "isFeatured"
		| "blogCategories"
		| "heroImage"
	>;
}

export function BlogCard({
	data,
	className,
	...props
}: React.ComponentProps<typeof Card> & BlogCardProps) {
	return (
		<div className={cn("@container relative", className)} {...props}>
			<Card className={cn("card grid @sm:grid-cols-2 shadow-sm")}>
				<Link
					className="absolute inset-0 z-10"
					href={`/resources/blogs/${data.slug}`}
				/>
				<CardContent className="@sm:order-1 order-2 flex flex-col justify-between gap-2 @sm:p-6 p-3">
					<div className="@sm:order-1 order-2 @sm:space-y-2.5">
						<ViewTransition name={`title-${data.slug}`}>
							<CardTitle className="font-semibold @sm:text-title-5 text-primary-900 leading-normal @sm:xl:text-title-5 xl:text-lg">
								{data.title}
							</CardTitle>
						</ViewTransition>
						<ViewTransition name={`excerpt-${data.slug}`}>
							<CardDescription className="@max-sm:hidden @sm:xl:text-lg">
								{data.description}
							</CardDescription>
						</ViewTransition>
						<Button
							asChild
							className="group/link relative z-20 @max-sm:hidden text-accent"
							size="sm"
							variant="link"
						>
							<Link href={`/resources/blogs/${data.slug}`}>
								Read More{" "}
								<IconChevronRight className="size-3 translate-y-1 text-accent opacity-0 transition-all duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100 motion-reduce:transition-none" />
							</Link>
						</Button>
					</div>

					<div className="@sm:order-2 order-1 flex items-center justify-between">
						{data.blogCategories &&
							data.blogCategories.map((category) => {
								if (typeof category === "object")
									return (
										<ViewTransition
											key={category.id}
											name={`category-${category.id}-${data.slug}`}
										>
											<Badge variant="secondary">{category.category}</Badge>
										</ViewTransition>
									);
							})}
						{data.publishedAt && (
							<ViewTransition name={`date-${data.slug}`}>
								<Badge className="@max-sm:hidden bg-muted text-muted-foreground shadow-none">
									<time dateTime={data.publishedAt}>
										{new Intl.DateTimeFormat("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
										}).format(new Date(data.publishedAt))}
									</time>
								</Badge>
							</ViewTransition>
						)}
					</div>
				</CardContent>
				<ViewTransition name={`image-${data.slug}`}>
					<div className="relative @sm:order-2 order-1 flex aspect-4/3 items-end justify-end overflow-hidden rounded-xl p-4 @sm:shadow-md">
						{/* <Image alt="" className="object-cover" fill src={data.heroImage} /> */}
						{data.heroImage && typeof data.heroImage !== "string" && (
							<Media
								fill
								imgClassName="object-cover"
								resource={data.heroImage}
								size="33vw"
							/>
						)}
						{data.publishedAt && (
							<Badge className="z-10 @sm:hidden bg-stone-700/80 px-2 text-muted shadow-none backdrop-blur-lg">
								<time dateTime={data.publishedAt}>
									{new Intl.DateTimeFormat("en-US", {
										year: "numeric",
										month: "short",
										day: "numeric",
									}).format(new Date(data.publishedAt))}
								</time>
							</Badge>
						)}
					</div>
				</ViewTransition>
			</Card>
		</div>
	);
}
