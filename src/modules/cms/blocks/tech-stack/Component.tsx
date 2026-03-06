import React from "react";

import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

import * as Icons from "@/assets/icons";

import { TECH_STACKS } from "@/data/constants";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
	label: string;
};

export const TechStackBlock: React.FC<Props> = ({ className, label }) => {
	return (
		<div
			className={cn(
				"relative z-10 space-y-3 rounded-xl bg-stone-alpha-10 p-3",
				className
			)}
		>
			<span className="flex items-center gap-2 font-medium text-stone-500">
				<Icons.IconLayers />
				{label}
			</span>
			<div className="not-prose relative flex w-full overflow-hidden rounded-xl bg-card shadow-md">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-linear-to-r from-background to-transparent"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-linear-to-l from-background to-transparent"
				/>
				<Marquee
					className="w-full p-4 [--duration:40s] [--gap:3rem]"
					repeat={3}
				>
					{TECH_STACKS.map((review) => (
						<StackCard key={review.name} {...review} />
					))}
				</Marquee>
			</div>
		</div>
	);
};

function StackCard({ img, name }: (typeof TECH_STACKS)[number]) {
	return (
		<figure className="group/stack flex items-center justify-center gap-2.5">
			<div className="flex size-10 items-center justify-center rounded-lg bg-card shadow-sm transition-transform group-hover/stack:scale-110">
				<Image
					alt={`Tech-stack: ${name}`}
					className="object-contain"
					height={24}
					src={img}
					width={24}
				/>
			</div>
			<figcaption className="font-medium text-foreground">{name}</figcaption>
		</figure>
	);
}
