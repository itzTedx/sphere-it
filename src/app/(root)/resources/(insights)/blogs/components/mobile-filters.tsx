"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { IconAiGear, IconChevronDown } from "@/assets/icons";

import { cn } from "@/lib/utils";
import { BlogCardProps } from "@/modules/blogs/components/blog-card";

import { BlogsSidebar } from "../../components/blogs-sidebar";

interface MobileFiltersProps {
	data: BlogCardProps["data"][];
	filteredCount: number;
}

export function MobileFilters({ data, filteredCount }: MobileFiltersProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Collapsible
			className="w-full lg:hidden"
			onOpenChange={setIsOpen}
			open={isOpen}
		>
			<CollapsibleTrigger asChild>
				<Button className="w-full justify-between" variant="outline">
					<span className="flex items-center gap-2">
						<IconAiGear className="size-4" />
						Filters
					</span>

					<IconChevronDown
						className={cn(
							"size-4 transition-transform",
							isOpen && "rotate-180"
						)}
					/>
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="mt-3 sm:mt-4">
				<div className="rounded-lg border bg-card/30 p-4">
					<BlogsSidebar
						className="block md:hidden"
						data={data}
						filteredCount={filteredCount}
					/>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
