import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowDown } from "@/assets/icons";

import RichText from "../cms/components/RichText";
import { getHomepageGlobal } from "../global/homepage";

export const Hero = async () => {
	const data = await getHomepageGlobal();
	const { hero, services } = data;

	return (
		<header className="relative overflow-hidden bg-foreground" role="banner">
			<section
				aria-labelledby="hero-heading"
				className="relative z-10 flex min-h-[calc(100svh-4rem)]"
			>
				<div className="-translate-x-1/2 container absolute bottom-0 left-1/2 z-50 flex w-full max-w-7xl flex-col items-center gap-6 pt-12 pb-9 text-center md:h-full md:flex-1 md:justify-between md:pt-16 md:pb-16 lg:pt-28">
					<AnimatedGroup
						className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-background md:flex-1"
						variants={{
							container: {
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.15,
									},
								},
							},
							item: {
								hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
								visible: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)",
									transition: {
										duration: 1.2,
										type: "spring",
										bounce: 0.3,
									},
								},
							},
						}}
					>
						<RichText
							className="text-balance prose-h1:text-card! prose-h1:text-title-3 md:prose-h1:text-title-2 xl:prose-h1:text-title-1"
							data={hero.title}
							enableGutter={false}
						/>
						{/* <h1
							className="text-card text-title-3 md:text-title-2 xl:text-title-1"
							id="hero-heading"
						>
							Driven by People <br />
							<span className="text-accent">Powered by Technology.</span>
						</h1> */}

						<p className="text-balance text-lg md:text-xl">
							{/* Trusted partner driving digital transformation, data and
							technology services for BFSI and essential industries across the
							Middle East. */}
							{hero.description}
						</p>
						<AnimatedGroup
							aria-label="Main actions"
							className="flex w-full items-center justify-center gap-4"
							role="group"
							variants={{
								container: {
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.25,
											delay: 0.4,
										},
									},
								},
								item: {
									hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
									visible: {
										opacity: 1,
										y: 0,
										filter: "blur(0px)",
										transition: {
											duration: 1.2,
											type: "spring",
											bounce: 0.3,
										},
									},
								},
							}}
						>
							<Button
								aria-describedby="hero-description"
								asChild
								className="group after:-translate-x-64 relative overflow-hidden after:absolute after:z-50 after:h-[150%] after:w-9 after:rotate-12 after:bg-linear-to-r after:from-transparent after:via-primary-300/20 after:to-transparent after:opacity-0 after:mix-blend-plus-lighter after:transition-[translate_opacity] after:duration-500 after:ease-out after:group-hover:translate-x-64 after:group-hover:opacity-100 max-sm:w-full"
							>
								<Link href="/services">Explore Services</Link>
							</Button>
							<Button
								aria-describedby="hero-description"
								asChild
								className="z-50 bg-stone-200/25 text-stone-100 max-sm:w-full"
								variant="ghost"
							>
								<Link href="/contact">Contact us</Link>
							</Button>
						</AnimatedGroup>
					</AnimatedGroup>
					<Link
						className="group relative z-50 mx-auto flex max-w-fit flex-col items-center justify-center gap-4"
						href="#services"
					>
						<IconArrowDown className="size-4 animate-bounce text-stone-200 transition-transform duration-500 group-hover:translate-y-3 group-hover:animate-none" />
						<span className="text-stone-200 text-subhead-sm">
							Scroll to Explore
						</span>
					</Link>
				</div>
				<video
					autoPlay
					className="mask-b-to-95% pointer-events-none absolute inset-0 h-full w-full object-cover"
					loop
					muted
					playsInline
					poster="/videos/hero-reel-poster.webp"
					slot="media"
				>
					<source src="/videos/hero-reel.webm" type="video/webm" />
					Your browser does not support the video tag.
				</video>
			</section>

			<section
				aria-labelledby="hero-services-heading"
				className="container relative z-10 max-w-md pt-16 pb-4 text-center md:pt-20 xl:pb-9"
				id="services"
			>
				<Badge className="mx-auto" variant="ghost">
					Services
				</Badge>
				<RichText
					className="prose-headings:text-primary-100! prose-headings:text-title-5 md:prose-headings:text-title-4"
					data={services.title}
					enableGutter={false}
				/>
				{/* <h2
					className="text-primary-100 text-title-5 md:text-title-4"
					id="hero-services-heading"
				>
					Delivering Technology That{" "}
					<span className="text-primary-600">Works for You</span>
				</h2> */}
			</section>
		</header>
	);
};
