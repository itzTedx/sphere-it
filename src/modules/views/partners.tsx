import { memo } from "react";

import Image from "next/image";

import { AnimatedGroup } from "@/components/ui/animated-group";

import { PARTNERS } from "@/data/constants";

export const Partners = memo(() => {
	return (
		<section className="my-16 md:mb-28">
			<div className="mx-auto max-w-7xl max-xl:container">
				<div className="space-y-4 rounded-3xl border bg-card px-6 py-9 md:px-16 md:py-10">
					<h3 className="text-center text-title-5">
						Our <span className="text-primary">Partners</span>
					</h3>

					<div className="group relative space-y-3">
						<AnimatedGroup
							as="ul"
							className="flex flex-wrap items-center justify-center gap-12 transition-all duration-500"
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
										},
									},
								},
								item: {
									hidden: {
										opacity: 0,
										filter: "blur(12px)",
										y: -20,
										rotateX: 90,
									},
									visible: {
										opacity: 1,
										filter: "blur(0px)",
										y: 0,
										rotateX: 0,
										transition: {
											type: "spring",
											bounce: 0.3,
											duration: 1,
										},
									},
								},
							}}
						>
							{PARTNERS.map((partner) => (
								<li
									className="relative aspect-6/2 h-9 md:aspect-11/4 md:h-11"
									key={partner.id}
								>
									<Image
										alt={`${partner.name} logo`}
										className="object-contain object-center"
										fill
										loading="lazy"
										sizes="(max-width: 768px) 50vw, (max-width: 1200px) 42vw, 33vw"
										src={partner.src}
									/>
								</li>
							))}
						</AnimatedGroup>
					</div>
				</div>
			</div>
		</section>
	);
});

Partners.displayName = "Partners";
