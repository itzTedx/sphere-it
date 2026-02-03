import { memo } from "react";

import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight, IconBank } from "@/assets/icons";

import { BEST_AT } from "@/data/constants";

export const About = memo(() => {
	return (
		<>
			{/* Capabilities Section */}
			<section aria-labelledby="capabilities-heading" className="border-y">
				<div className="mx-auto max-w-7xl max-xl:container">
					<div className="space-y-8 rounded-4xl bg-card px-6 py-12 sm:space-y-10 sm:px-8 lg:px-12 lg:py-16">
						<div className="space-y-3 md:space-y-4 xl:space-y-5">
							<Badge className="text-badge">We're best at</Badge>
							<h2
								className="text-primary-900 text-title-4 sm:text-title-3 xl:text-title-2"
								id="capabilities-heading"
							>
								Turning Complexity Into{" "}
								<span className="text-primary-600">Clarity</span>
							</h2>
							<p className="max-w-4xl text-balance text-base sm:text-lg lg:text-base xl:text-lg">
								We design AI and automation frameworks that integrate seamlessly
								with enterprise ecosystems - aligning with ISO/IEC 42001
								standards to ensure security, transparency, and scalable
								performance at every layer.
							</p>
							<Button asChild className="mt-4" variant="ghost">
								<Link
									aria-label="Read customer testimonials"
									href="/testimonials"
								>
									See what our customer says
									<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
										<IconArrowRight className="text-stone-500" />
									</span>
								</Link>
							</Button>
						</div>

						{/* Responsive Grid */}
						<AnimatedGroup
							aria-label="Our core capabilities"
							as="ul"
							className="grid gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
							variants={{
								container: {
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.05,
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
							{BEST_AT.map((capability) => (
								<li
									className="rounded-2xl border border-stone-alpha-10 bg-stone-alpha-10 p-1 xl:p-1.5"
									key={capability.id}
									role="listitem"
								>
									<article className="h-full space-y-4 rounded-xl bg-card p-4 shadow-sm lg:p-3 xl:space-y-6 xl:p-5">
										<div className="flex items-center">
											<IconBank
												aria-hidden="true"
												className="text-primary-500"
											/>
										</div>
										<div className="space-y-2 xl:space-y-3">
											<h3 className="text-primary-800 text-subhead-md md:text-subhead-base xl:text-subhead-lg">
												{capability.title}
											</h3>
											<p className="text-sm tracking-tight xl:text-base xl:leading-relaxed">
												{capability.description}
											</p>
										</div>
									</article>
								</li>
							))}
						</AnimatedGroup>
					</div>
				</div>
			</section>
		</>
	);
});

About.displayName = "About";
