import { AnimatedGroup } from "@/components/ui/animated-group";

import { Media } from "@/modules/cms/components/Media";
import { getPartners } from "@/modules/global/partners";

export const Partners = async () => {
	const partners = await getPartners();

	return (
		<section className="my-16 md:mb-28">
			<div className="mx-auto max-w-7xl max-xl:container">
				<div className="space-y-4 rounded-3xl border bg-card px-4 py-6 sm:px-6 sm:py-9 md:px-16 md:py-10">
					<h3 className="text-center text-title-5">
						Our <span className="text-primary">Partners</span>
					</h3>

					<div className="group relative space-y-3">
						<AnimatedGroup
							as="ul"
							className="flex flex-wrap items-center justify-center gap-10 transition-all duration-500 md:gap-12"
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
							{partners.map((partner) => (
								<li
									className="relative aspect-6/2 h-8 md:aspect-11/4 md:h-11"
									key={partner.id}
								>
									<Media
										alt={`${partner.name} logo`}
										fill
										imgClassName="object-contain object-center"
										resource={partner.logo}
										size="(max-width: 768px) 50vw, (max-width: 1200px) 42vw, 33vw"
									/>
								</li>
							))}
						</AnimatedGroup>
					</div>
				</div>
			</div>
		</section>
	);
};
