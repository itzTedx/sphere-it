import React from "react";

import type { ButtonBlock as ButtonBlockProps } from "src/payload-types";

import { cn } from "@/lib/utils";

import { CMSLink } from "../../components/Link";

type Props = {
	className?: string;
	id?: string;
} & ButtonBlockProps;

export const ButtonBlock: React.FC<Props> = ({
	className,
	id,
	style,
	size,
	link,
}) => {
	if (!link) {
		return null;
	}

	const linkType = link.type === "reference" ? "reference" : "custom";
	const url =
		link.type === "page"
			? (link.page ?? undefined)
			: link.type === "custom"
				? (link.url ?? undefined)
				: undefined;

	const buttonLink = (
		<CMSLink
			appearance={style}
			className={cn("not-prose", className)}
			label={link.label}
			newTab={link.newTab}
			reference={linkType === "reference" ? link.reference : undefined}
			size={size ?? undefined}
			type={linkType}
			url={linkType === "custom" ? url : undefined}
		/>
	);

	if (!id) {
		return buttonLink;
	}

	return <div id={id}>{buttonLink}</div>;
};
