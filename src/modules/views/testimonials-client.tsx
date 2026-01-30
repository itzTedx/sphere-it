"use client";

import { memo, useEffect, useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

import { EmployeeTestimonial } from "@/payload-types";

import { TestimonialCard } from "./components/testimonial-card";

interface TestimonialsClientProps {
	testimonials: EmployeeTestimonial[];
}

export const TestimonialsClient = memo(
	({ testimonials }: TestimonialsClientProps) => {
		const [isLoaded, setIsLoaded] = useState(false);

		useEffect(() => {
			setIsLoaded(true);
		}, []);

		if (!isLoaded) {
			return null;
		}

		// Show fallback if no testimonials
		if (!testimonials || testimonials.length === 0) {
			return null;
		}

		return (
			<section
				aria-labelledby="testimonials-heading"
				className="mx-auto max-w-7xl max-xl:container"
			>
				<div className="max-w-7xl pb-12 md:container md:pb-16 xl:pb-20">
					<div className="mb-12 flex flex-col items-center gap-4">
						<h2
							className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2"
							id="testimonials-heading"
						>
							Employee <span className="text-primary-600">Testimonials</span>
						</h2>
					</div>
					<div
						aria-label="Client testimonials carousel"
						className="group/all relative grid h-[90svh] gap-1 md:grid-cols-3 xl:gap-4"
						role="region"
					>
						<div
							aria-hidden="true"
							className="absolute inset-x-0 z-10 h-40 bg-linear-to-b from-background to-transparent"
						/>

						<Marquee
							aria-label="Testimonials column 1 "
							className="[--duration:38s]"
							pauseOnHover
							vertical
						>
							{testimonials
								.slice(0, Math.max(1, Math.ceil(testimonials.length / 3)))
								.map((t) => (
									<TestimonialCard data={t} key={t.id} />
								))}
						</Marquee>
						<Marquee
							aria-label="Testimonials column 2"
							className="hidden [--duration:38s] md:flex"
							pauseOnHover
							reverse
							vertical
						>
							{testimonials.length > 1 &&
								testimonials
									.slice(
										Math.max(1, Math.ceil(testimonials.length / 3)),
										Math.max(2, Math.ceil((testimonials.length * 2) / 3))
									)
									.map((t) => <TestimonialCard data={t} key={t.id} />)}
						</Marquee>
						<Marquee
							aria-label="Testimonials column 3"
							className="hidden [--duration:46s] md:flex"
							pauseOnHover
							vertical
						>
							{testimonials.length > 2 &&
								testimonials
									.slice(Math.max(2, Math.ceil((testimonials.length * 2) / 3)))
									.map((t) => <TestimonialCard data={t} key={t.id} />)}
						</Marquee>

						<div
							aria-hidden="true"
							className="absolute inset-x-0 bottom-0 z-10 h-48 bg-linear-to-t from-20% from-background to-transparent"
						/>
					</div>
					<div className="-mt-6 relative z-10 mx-auto flex w-fit items-center justify-center gap-1.5 rounded-full bg-card p-1.5 shadow-lg">
						<p className="px-3 font-sans text-muted-foreground text-xs lg:text-base">
							View the impact on our clients
						</p>
						<Button asChild size="sm" variant="secondary">
							<Link href="/testimonials">
								Browse{" "}
								<span className="hidden sm:inline">customer stories</span>
							</Link>
						</Button>
					</div>
				</div>
			</section>
		);
	}
);

TestimonialsClient.displayName = "TestimonialsClient";
