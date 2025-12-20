import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
	IconArrowRight,
	IconBullseye,
	IconRocket,
	IconSearch,
	IconShield,
} from "@/assets/icons";

export default function AxisServicePage() {
	return (
		<main id="main-content">
			<header className="relative z-50 space-y-4 border-b bg-card py-9 sm:space-y-6 sm:py-12 md:py-16">
				<div className="container grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div>
						<h1 className="text-primary-900 text-title-4 md:text-title-3">
							A.X.I.S Methodology
						</h1>

						<p className="mb-6 text-lg sm:text-xl">
							Tested and proven Sphere methodology for excellence
						</p>

						<div className="space-x-4">
							<Button asChild size="lg" variant="secondary">
								<Link href="/services">
									Get Started
									<span className="w-7">
										<IconArrowRight />
									</span>
								</Link>
							</Button>
						</div>
					</div>
					<div className="relative order-first aspect-10/7 overflow-hidden rounded-xl lg:order-last">
						<Image
							alt=""
							className="object-cover"
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							src="/images/services/assure-in-action.webp"
						/>
					</div>
				</div>
			</header>

			<section className="container max-w-7xl py-12 sm:py-16 md:py-20">
				<div>
					<Badge>Value Proposition</Badge>
					<h2 className="mt-1.5 text-primary-900 text-title-3 md:text-title-2">
						Precision, Predictability, and Outcomes
					</h2>
					<p className="mt-2 text-lg text-muted-foreground">
						AXIS Methodology is a proven, structured, and data-driven framework
						designed to deliver clarity, predictability, and measurable outcomes
						for the clients. With precision and pragmatism at its core, AXIS
						enables faster decisions, predictable delivery, and strong business
						value.
					</p>
				</div>
				<div className="mt-6 grid gap-6 sm:grid-cols-2">
					<div className="rounded-2xl border bg-card p-6 shadow-sm">
						<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
							<IconBullseye className="size-6" />
						</div>
						<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
							Assess
						</h3>
						<p className="text-lg">
							In the Assess phase, it provides complete clarity and confidence
							by precisely defining the problem, scope, risks, success metrics
							and stakeholder expectations. This ensures that the clients will
							gain a structured understanding of their current state, what truly
							needs to be solved, and the roadmap required to move forward
							without ambiguity or rework.
						</p>
					</div>
					<div className="rounded-2xl border bg-card p-6 shadow-sm">
						<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
							<IconSearch className="size-6" />
						</div>
						<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
							eXplore
						</h3>
						<p className="text-lg">
							In the eXplore phase, it delivers evidence backed feasibility,
							stress tested options, predictable cost and effort insights, and
							early validation of what will work before any major implementation
							investment. This ensures that the solution is viable, scalable,
							and aligned with the client's environment.
						</p>
					</div>
					<div className="rounded-2xl border bg-card p-6 shadow-sm">
						<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
							<IconRocket className="size-6" />
						</div>
						<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
							Implement
						</h3>
						<p className="text-lg">
							This ensures faster time to value through disciplined execution,
							structured governance, transparent progress checkpoints, and
							seamless integration across systems and teams. Close coordination
							across all teams ensures smooth integration and an on-time, stable
							deployment.
						</p>
					</div>
					<div className="rounded-2xl border bg-card p-6 shadow-sm">
						<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
							<IconShield className="size-6" />
						</div>
						<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
							Sustain
						</h3>
						<p className="text-lg">
							Sustain enables long term reliability with continuous performance
							monitoring, data backed insights, governance rhythms, and
							proactive enhancements. Clients benefit from a stable solution
							that evolves with their business, supported by clear improvements,
							minimal disruptions, and a structured path for future scalability.
						</p>
					</div>
				</div>
			</section>

			<Cta />
		</main>
	);
}
