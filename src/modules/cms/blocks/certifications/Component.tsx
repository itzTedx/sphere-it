import React from "react";

import type { CertificationsBlock as CertificationsBlockProps } from "src/payload-types";

import { cn } from "@/lib/utils";
import { CertificateTitle } from "@/modules/services/components/certifications";
import { Industry } from "@/modules/services/components/industry";
import { Section } from "@/modules/services/components/section";

import { Media } from "../../components/Media";
import RichText from "../../components/RichText";
import { industrySlugToLabel } from "./config";

type Props = {
	className?: string;
} & CertificationsBlockProps;

export const CertificationsBlock: React.FC<Props> = ({
	className,
	certifications,
	industries,
	title,
}) => {
	const hasCertifications = certifications && certifications.length > 0;
	return (
		<Section className={cn("not-prose", className)} outlined>
			<RichText
				className="mx-auto max-w-4xl text-balance text-center text-title-3"
				data={title}
				enableGutter={false}
			/>

			<div
				className={cn(
					"mt-9 grid gap-12",
					!hasCertifications ? "grid-cols-1" : "grid-cols-2"
				)}
			>
				<div
					className={cn(
						"grid grid-cols-3 gap-6 text-center",
						!hasCertifications
							? "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
							: "grid-cols-2 md:grid-cols-3"
					)}
				>
					{industries?.map((industry) => (
						<Industry key={industry}>{industrySlugToLabel(industry)}</Industry>
					))}
				</div>
				{hasCertifications && (
					<div className="grid gap-4">
						{certifications.map((certification) => (
							<div className="flex gap-2" key={certification.title}>
								<div className="flex aspect-square items-center justify-center rounded-3xl bg-background p-3">
									{certification.icon ? (
										<div className="relative size-20">
											<Media
												alt={`Certificate - ${certification.title}`}
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
			</div>
		</Section>
	);
};
