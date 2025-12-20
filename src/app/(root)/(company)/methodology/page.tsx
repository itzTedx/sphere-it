import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";

import { IconArrowRight } from "@/assets/icons";

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

			<Cta />
		</main>
	);
}
