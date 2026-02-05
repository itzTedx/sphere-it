import Image from "next/image";

import { AnimatedGroup } from "@/components/ui/animated-group";

import { CLIENTS } from "@/data/constants";

export const Clients = () => {
	return (
		<section className="mx-auto max-w-7xl pt-12 max-xl:container">
			<div className="space-y-4 rounded-3xl border bg-card px-6 py-9 md:px-16 md:py-10">
				<h3 className="text-center text-title-5">
					Trusted by <span className="text-primary">Leading Organizations</span>
				</h3>

				<div className="group relative space-y-3">
					<AnimatedGroup
						as="ul"
						className="grid grid-cols-2 items-center justify-center gap-2 transition-all duration-500 sm:grid-cols-5"
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
						{CLIENTS.map((client) => (
							<li
								className="relative m-3 aspect-6/2 md:m-8 md:aspect-11/4"
								key={client.id}
							>
								<Image
									alt={`${client.name} logo`}
									className="object-contain object-center"
									fill
									loading="lazy"
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 42vw, 33vw"
									src={client.src}
								/>
							</li>
						))}
					</AnimatedGroup>
				</div>
			</div>
		</section>
	);
};
