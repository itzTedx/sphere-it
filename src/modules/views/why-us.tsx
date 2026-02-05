"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";
import {
	Tabs,
	TabsContent,
	TabsContents,
	TabsList,
	TabsTrigger,
} from "@/components/ui/radix/tabs";

import {
	IconCheckmark,
	IconChevronRight,
	IconPuzzle,
	IconSearch,
} from "@/assets/icons";
import { IconLayers } from "@/assets/icons/layers";

import { TECH_STACKS } from "@/data/constants";
import { cn } from "@/lib/utils";

export const WhyUs = () => {
	return (
		<section aria-labelledby="why-us-heading" className="relative z-50">
			<div className="container mx-auto max-w-7xl space-y-4 lg:space-y-6">
				<header className="space-y-2 md:space-y-4">
					{/* <Badge variant="secondary">Why sphere it</Badge> */}
					<div className="grid gap-2 md:grid-cols-3 md:gap-4">
						<h2
							className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2"
							id="why-us-heading"
						>
							What sets{" "}
							<span className="text-primary-600">Sphere IT apart</span>
						</h2>
						<p className="text-justify text-base text-muted-foreground tracking-tighter md:col-span-2">
							We believe technology should be both precisely engineered and
							practically applied. That’s why forward-looking technology
							organizations across the Middle East trust us to deliver AL-driven
							platforms, intelligent automation, resilient infrastructure, and
							on-demand expertise that create measurable outcomes.
						</p>
					</div>
				</header>

				<div className="grid gap-4 md:grid-cols-12 xl:gap-6">
					<GuidedByCard className="md:col-span-5" />
					<AxisCard className="md:col-span-7" />
					<TechStackCard className="md:col-span-6" />
					<ReliabilityCard className="md:col-span-6" />
					<div className="col-span-full">
						<MiniCta
							description="We make it work for your business, reducing complexity and accelerating value."
							layout="horizontal"
							title="What we say, What we do.</span>"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

interface CardProps {
	className?: string;
}

function GuidedByCard({ className }: CardProps) {
	return (
		<article
			className={cn(
				"flex flex-col justify-between rounded-2xl border bg-card",
				className
			)}
		>
			<div className="space-y-2 p-6 xl:space-y-4 xl:p-10">
				<header>
					<Badge variant="ghost">Guided by</Badge>
					<h3 className="text-primary-900 text-title-5 xl:text-title-3">
						Precision & <br />
						Pragmatism
					</h3>
				</header>
				<p className="text-base text-muted-foreground lg:text-sm xl:text-lg">
					Every solution is built with technical accuracy and business sense -
					ensuring innovation that actually delivers.
				</p>
			</div>
		</article>
	);
}

const AXIS_PHASES = [
	{
		letter: "A",
		title: "Assess",
		description:
			"Define the problem, scope, risks, and success metrics to establish a clear starting point.",
		icon: <IconPuzzle className="size-6 sm:size-12" />,
	},
	{
		letter: "X",
		title: "eXplore",
		description:
			"Validate solution options with feasibility checks, evidence-backed insights, and predictable cost and effort.",
		icon: <IconSearch className="size-6 sm:size-12" />,
	},
	{
		letter: "I",
		title: "Implement",
		description:
			"Execute with structured governance, disciplined delivery, and seamless integration across systems.",
		icon: <IconCheckmark className="size-6 sm:size-12" />,
	},
	{
		letter: "S",
		title: "Sustain",
		description:
			"Drive long-term reliability through continuous monitoring, proactive improvements, and scalable support.",
		icon: <IconLayers className="size-6 sm:size-12" />,
	},
] as const;

const CYCLE_INTERVAL = 4000; // 4 seconds

function AxisCard({ className }: CardProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const currentPhase = AXIS_PHASES[activeIndex]!;
	const currentTab = currentPhase.letter.toLowerCase();

	// biome-ignore lint/correctness/useExhaustiveDependencies: No Need to rerender when active index changes
	useEffect(() => {
		const timer = window.setTimeout(() => {
			setActiveIndex(
				(previousIndex) => (previousIndex + 1) % AXIS_PHASES.length
			);
		}, CYCLE_INTERVAL);

		return () => {
			window.clearTimeout(timer);
		};
	}, [activeIndex]);

	const handleTabChange = (value: string) => {
		const index = AXIS_PHASES.findIndex(
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
						Sphere Methodology
						{/* Delivering Clarity and Predictable Outcomes */}
					</h3>
				</header>
				<Tabs
					className="gap-4"
					onValueChange={handleTabChange}
					value={currentTab}
				>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<TabsList className="flex h-auto flex-row justify-start gap-1 sm:h-fit">
							{AXIS_PHASES.map((phase, index) => (
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
						<Button asChild>
							<Link href="/methodology">Learn More</Link>
						</Button>
					</div>
					<TabsContents className="flex-1 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.25))] border bg-stone-alpha-10 p-1">
						<div className="flex items-center justify-between rounded-xl bg-linear-to-br from-primary-200 to-card p-4 shadow-sm sm:p-6">
							{AXIS_PHASES.map((phase) => (
								<TabsContent
									key={phase.letter}
									value={phase.letter.toLowerCase()}
								>
									{activeIndex === AXIS_PHASES.indexOf(phase) && (
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
													{phase.icon}
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

							{/* <Button>Learn more</Button> */}
						</div>
					</TabsContents>
				</Tabs>
			</div>
		</article>
	);
}

function TechStackCard({ className }: CardProps) {
	return (
		<article
			className={cn(
				"relative grid overflow-hidden rounded-2xl border bg-card md:grid-cols-2",
				className
			)}
		>
			<div className="flex flex-col justify-between p-6 pr-0 sm:p-8 lg:flex-1">
				<header>
					<Badge variant="ghost">Results-Driven Delivery</Badge>
					<h3 className="text-primary-900 text-title-5 xl:text-title-4">
						Driven by People, Powered by Technology.
					</h3>
				</header>
				<Button asChild className="w-fit" variant="outline">
					<Link href="/resources/case-studies">Read case studies</Link>
				</Button>
			</div>
			<div className="relative">
				<div className="relative z-10 m-6 mb-0 space-y-3 rounded-t-xl bg-stone-alpha-10 p-3 pb-0 shadow-lg backdrop-blur-md">
					<span className="flex items-center gap-2 text-muted-background">
						<IconLayers /> Tech Stack
					</span>
					<div className="relative flex h-[240px] w-full overflow-hidden rounded-xl bg-card shadow-md">
						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/4 bg-linear-to-b from-card/80 to-transparent"
						/>
						<Marquee
							className="w-full p-4 [--duration:40s] [--gap:0.75rem]"
							repeat={3}
							vertical
						>
							{TECH_STACKS.map((review) => (
								<StackCard key={review.name} {...review} />
							))}
						</Marquee>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-card to-transparent"
				/>
			</div>
		</article>
	);
}

function StackCard({ img, name }: (typeof TECH_STACKS)[number]) {
	return (
		<figure className="group/stack flex w-full items-center justify-between gap-2.5">
			<div className="flex items-center gap-2.5">
				<div className="flex size-10 items-center justify-center rounded-lg bg-card shadow-sm transition-transform group-hover/stack:scale-110">
					<Image
						alt={`Tech-stack: ${name}`}
						className="object-contain"
						height={24}
						src={img}
						width={24}
					/>
				</div>
				<figcaption className="font-medium text-foreground text-sm">
					{name}
				</figcaption>
			</div>
			<div className="flex size-7 items-center justify-center rounded-full border">
				<IconChevronRight />
			</div>
		</figure>
	);
}

function ReliabilityCard({ className }: CardProps) {
	return (
		<article
			className={cn(
				"grid grid-cols-5 overflow-hidden rounded-2xl border bg-card",
				className
			)}
		>
			<div className="col-span-3 p-6 sm:p-8 lg:px-10 lg:pt-10">
				<h3 className="text-balance text-primary-900 text-title-5 xl:text-title-3">
					Reliability at the Core
				</h3>
			</div>

			<div className="relative col-span-2 h-full w-full xl:aspect-square">
				<Image
					alt="Reliability at the core of technology solutions - reducing complexity and accelerating business value"
					className="z-10 object-contain"
					fill
					loading="lazy"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					src="/svg/reliability.svg"
				/>
				<FlickeringGrid
					aria-hidden="true"
					className="mask-[radial-gradient(120px_circle_at_bottom,white,transparent)] absolute inset-0 z-1 opacity-50"
					color="#C3A5FA"
					flickerChance={0.1}
					gridGap={4}
					height={360}
					maxOpacity={0.5}
					squareSize={4}
					width={360}
				/>
			</div>
		</article>
	);
}
