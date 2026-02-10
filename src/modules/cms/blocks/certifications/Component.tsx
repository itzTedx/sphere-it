import React from "react";

import type { CertificationsBlock as CertificationsBlockProps } from "src/payload-types";

import { cn } from "@/lib/utils";
import { CardGroup } from "@/modules/services/components/card-list";
import { CertificateTitle } from "@/modules/services/components/certifications";
import { Industry } from "@/modules/services/components/industry";
import { Section } from "@/modules/services/components/section";

import { Media } from "../../components/Media";

type Props = {
	className?: string;
} & CertificationsBlockProps;

export const CertificationsBlock: React.FC<Props> = ({
	className,
	certifications,
}) => {
	return (
		<Section className={cn("not-prose", className)} outlined>
			<h3 className="text-center">
				Certified excellence and industry partnerships{" "}
				<br className="hidden sm:block" />{" "}
				<span className="font-medium text-stone-600">
					built to power business transformation.
				</span>
			</h3>
			<CardGroup className="mt-9 gap-12">
				<div className="grid grid-cols-3 gap-6 text-center">
					<Industry>Retail Banking</Industry>
					<Industry>Corp Banking</Industry>
					<Industry>Wealth Management</Industry>
					<Industry>Insurance</Industry>
					<Industry>Conglomerates</Industry>
					<Industry>Government Entities</Industry>
				</div>
				{certifications && (
					<div className="grid gap-4">
						{certifications.map((certification) => (
							<div className="flex" key={certification.title}>
								<div className="flex aspect-square items-center justify-center rounded-3xl bg-background p-3">
									{certification.icon ? (
										<div className="relative size-20">
											<Media
												alt="Certificate"
												className="object-contain"
												fill
												resource={certification.icon}
											/>
										</div>
									) : (
										<span className="flex size-20 items-center justify-center text-center font-display font-medium text-sm leading-tight">
											{certification.title}
										</span>
									)}
								</div>
								<CertificateTitle title={certification.title} />
							</div>
						))}
					</div>
				)}
			</CardGroup>
		</Section>
	);
};
