import React from "react";

import { Route } from "next";
import Link from "next/link";

import type { BannerBlock as BannerBlockProps } from "src/payload-types";

import { Button } from "@/components/ui/button";

import { IconAiCloud, IconArrowUpRight } from "@/assets/icons";

import { cn } from "@/lib/utils";

type Props = {
	className?: string;
} & BannerBlockProps;

export const BannerBlock: React.FC<Props> = ({
	className,
	content,
	link,
	linkText,
}) => {
	return (
		<div
			className={cn(
				"not-prose relative z-999 flex flex-col items-center justify-between gap-3 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*3))] bg-foreground p-4 sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-6 lg:flex-row lg:px-6 lg:py-8",
				className
			)}
		>
			<div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-950 sm:size-12">
					<IconAiCloud className="text-purple-400" />
				</div>
				<div className="flex w-full flex-col items-center justify-between gap-3 sm:gap-4 lg:flex-row">
					<div>
						<h3 className="text-balance font-semibold text-card text-xl leading-tight tracking-[0.01em] lg:text-2xl [&>span]:text-accent">
							{content}
						</h3>
					</div>
				</div>
			</div>

			<Button
				asChild
				className="w-full justify-between bg-primary-900 pl-4 text-primary-300 hover:bg-primary-900 hover:text-primary-200 hover:brightness-150 sm:w-auto"
				size="lg"
				variant="ghost"
			>
				<Link href={link as Route} title="Explore our services">
					{linkText}
					<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-400 sm:size-9">
						<IconArrowUpRight className="text-primary-900" />
					</span>
				</Link>
			</Button>
		</div>
	);
};
