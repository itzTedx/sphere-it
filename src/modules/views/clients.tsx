import { AnimatedGroup } from "@/components/ui/animated-group";

import { Media } from "@/modules/cms/components/Media";
import { getClients } from "@/modules/global/clients";

export const Clients = async () => {
	const clients = await getClients();

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
						{clients.map((client) => (
							<li
								className="relative m-3 aspect-6/2 md:m-8 md:aspect-11/4"
								key={client.id}
							>
								<Media
									alt={`${client.name} logo`}
									fill
									imgClassName="object-contain object-center"
									resource={client.logo}
									size="(max-width: 768px) 50vw, (max-width: 1200px) 42vw, 33vw"
								/>
							</li>
						))}
					</AnimatedGroup>
				</div>
			</div>
		</section>
	);
};
