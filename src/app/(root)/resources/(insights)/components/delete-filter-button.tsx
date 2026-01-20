"use client";

import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { AnimateIcon } from "@/components/ui/base/icon";
import { Button } from "@/components/ui/button";

import { IconTrash } from "@/assets/icons/trash";

export const ClearFilterButton = ({
	...props
}: React.ComponentProps<typeof Button>) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const hasFilters =
		searchParams.has("category") ||
		searchParams.has("search") ||
		searchParams.has("featured");

	if (!hasFilters) return null;

	return (
		<AnimateIcon animateOnHover>
			<Button
				className="hover:text-accent"
				onClick={() => router.replace(pathname as Route)}
				size="sm"
				variant="ghost"
				{...props}
			>
				<IconTrash /> Clear Filters
			</Button>
		</AnimateIcon>
	);
};
