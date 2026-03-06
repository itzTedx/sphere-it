"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";
import type { ButtonBlock as ButtonBlockType } from "src/payload-types";

import {
	Tabs,
	TabsContent,
	TabsContents,
	TabsList,
	TabsTrigger,
} from "@/components/ui/radix/tabs";

import { IconCheckmark, IconPuzzle, IconSearch } from "@/assets/icons";
import { IconLayers } from "@/assets/icons/layers";

import { cn } from "@/lib/utils";

import { CMSLink } from "../cms/components/Link";

type Phase = {
	letter: string;
	title: string;
	description: string;
};

interface AxisCardClientProps {
	className?: string;
	title: string;
	learnMoreLink: ButtonBlockType["link"];
	phases: Phase[];
}

const CYCLE_INTERVAL = 4000; // 4 seconds

// Map phase letters to icons
const PHASE_ICONS: Record<string, React.ReactNode> = {
	A: <IconPuzzle className="size-6 sm:size-12" />,
	X: <IconSearch className="size-6 sm:size-12" />,
	I: <IconCheckmark className="size-6 sm:size-12" />,
	S: <IconLayers className="size-6 sm:size-12" />,
};

const DEFAULT_PHASES: Phase[] = [
	{
		letter: "A",
		title: "Assess",
		description:
			"Define the problem, scope, risks, and success metrics to establish a clear starting point.",
	},
	{
		letter: "X",
		title: "eXplore",
		description:
			"Validate solution options with feasibility checks, evidence-backed insights, and predictable cost and effort.",
	},
	{
		letter: "I",
		title: "Implement",
		description:
			"Execute with structured governance, disciplined delivery, and seamless integration across systems.",
	},
	{
		letter: "S",
		title: "Sustain",
		description:
			"Drive long-term reliability through continuous monitoring, proactive improvements, and scalable support.",
	},
];

export function AxisCardClient({
	className,
	title,
	learnMoreLink,
	phases,
}: AxisCardClientProps) {
	const axisPhases = phases.length > 0 ? phases : DEFAULT_PHASES;
	const [activeIndex, setActiveIndex] = useState(0);
	const currentPhase = axisPhases[activeIndex]!;
	const currentTab = currentPhase.letter.toLowerCase();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Need to rerender when active index changes
	useEffect(() => {
		const timer = window.setTimeout(() => {
			setActiveIndex(
				(previousIndex) => (previousIndex + 1) % axisPhases.length
			);
		}, CYCLE_INTERVAL);

		return () => {
			window.clearTimeout(timer);
		};
	}, [activeIndex, axisPhases.length]);

	const handleTabChange = (value: string) => {
		const index = axisPhases.findIndex(
			(phase) => phase.letter.toLowerCase() === value
		);
		if (index !== -1) {
			setActiveIndex(index);
		}
	};

	return (
		<article
			className={cn(
				"relative flex flex-col overflow-hidden rounded-2xl border bg-card",
				className
			)}
		>
			<div className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-6 xl:p-10">
				<header className="flex items-center justify-between">
					<h3 className="text-primary-900 text-title-5 xl:text-title-4">
						{title}
					</h3>
				</header>
				<Tabs
					className="gap-4"
					onValueChange={handleTabChange}
					value={currentTab}
				>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<TabsList className="flex h-auto flex-row justify-start gap-1 sm:h-fit">
							{axisPhases.map((phase, index) => (
								<TabsTrigger
									className={cn(
										"relative size-10 overflow-hidden text-stone-500"
									)}
									key={phase.letter}
									value={phase.letter.toLowerCase()}
								>
									<span
										className={
											"relative z-10 shrink-0 items-center justify-center font-bold transition-all duration-300"
										}
									>
										{phase.letter}
									</span>

									{activeIndex === index && (
										<motion.span
											animate={{ width: "100%" }}
											aria-hidden={true}
											className="absolute inset-0 left-0 z-0 rounded-r-[calc(var(--radius-md)-3px)] bg-accent"
											initial={{ width: "0%" }}
											key={activeIndex}
											transition={{
												duration: CYCLE_INTERVAL / 1000,
												ease: "linear",
											}}
										/>
									)}
								</TabsTrigger>
							))}
						</TabsList>
						{learnMoreLink && (
							<CMSLink
								appearance="default"
								label={learnMoreLink.label}
								newTab={learnMoreLink.newTab}
								reference={
									learnMoreLink.type === "reference"
										? learnMoreLink.reference
										: undefined
								}
								size="default"
								type={
									learnMoreLink.type === "reference" ? "reference" : "custom"
								}
								url={
									learnMoreLink.type === "page"
										? (learnMoreLink.page ?? undefined)
										: learnMoreLink.type === "custom"
											? (learnMoreLink.url ?? undefined)
											: undefined
								}
							/>
						)}
					</div>
					<TabsContents className="flex-1 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.25))] border bg-stone-alpha-10 p-1">
						<div className="flex items-center justify-between rounded-xl bg-linear-to-br from-primary-200 to-card p-4 shadow-sm sm:p-6">
							{axisPhases.map((phase, index) => (
								<TabsContent
									key={phase.letter}
									value={phase.letter.toLowerCase()}
								>
									{activeIndex === index && (
										<motion.div
											animate={{ opacity: 1, y: 0 }}
											className={cn("relative")}
											exit={{ opacity: 0, y: 10 }}
											initial={{ opacity: 0, y: 10 }}
											key={phase.letter}
											transition={{ duration: 0.4, ease: "easeOut" }}
										>
											<div className="flex items-start gap-3 sm:gap-4 xl:gap-5">
												<motion.div
													animate={{ scale: 1, rotate: 0 }}
													className={cn(
														"flex size-12 shrink-0 items-center justify-center rounded-xl bg-card font-bold text-primary-600 shadow-md sm:size-14 md:size-16 xl:size-20 xl:text-2xl"
													)}
													initial={{ scale: 0.8, rotate: -180 }}
													transition={{
														duration: 0.5,
														ease: [0.34, 1.56, 0.64, 1],
													}}
												>
													{PHASE_ICONS[phase.letter.toUpperCase()] ?? (
														<IconPuzzle className="size-6 sm:size-12" />
													)}
												</motion.div>
												<div className="flex-1 space-y-1.5">
													<motion.h4
														animate={{ opacity: 1, x: 0 }}
														className={cn(
															"font-semibold text-primary-600 text-xl leading-none sm:text-2xl"
														)}
														initial={{ opacity: 0, x: -10 }}
														transition={{ delay: 0.2, duration: 0.4 }}
													>
														{phase.title}
													</motion.h4>
													<motion.p
														animate={{ opacity: 1, x: 0 }}
														className="text-balance text-sm text-stone-800 leading-tight sm:text-base"
														initial={{ opacity: 0, x: -10 }}
														transition={{ delay: 0.3, duration: 0.4 }}
													>
														{phase.description}
													</motion.p>
												</div>
											</div>
										</motion.div>
									)}
								</TabsContent>
							))}
						</div>
					</TabsContents>
				</Tabs>
			</div>
		</article>
	);
}
