import type { StaticImageData } from "next/image";
import NextImage from "next/image";

import { cn } from "@/lib/utils";
import { getMediaUrl } from "@/modules/cms/utils/getMediaUrl";

import { cssVariables } from "../css-variables";
import type { Props as MediaProps } from "../types";

const { breakpoints } = cssVariables;

export const Image = (props: MediaProps) => {
	const {
		alt: altFromProps,
		fill,
		height: heightFromProps,
		imgClassName,
		priority,
		quality,
		resource,
		size: sizeFromProps,
		src: srcFromProps,
		width: widthFromProps,
	} = props;

	let width: number | undefined | null;
	let height: number | undefined | null;
	let alt = altFromProps;
	let src: StaticImageData | string = srcFromProps || "";

	if (!src && resource && typeof resource === "object") {
		const {
			alt: altFromResource,
			height: fullHeight,
			url,
			width: fullWidth,
		} = resource;

		width = widthFromProps ?? fullWidth;
		height = heightFromProps ?? fullHeight;
		alt = altFromResource ?? alt;

		src = getMediaUrl(url);
	}

	// NOTE: this is used by the browser to determine which image to download at different screen sizes
	const sizes = sizeFromProps
		? sizeFromProps
		: Object.entries(breakpoints)
				.map(([, value]) => `(max-width: ${value}px) ${value}px`)
				.join(", ");

	return (
		<NextImage
			alt={alt || ""}
			className={cn(imgClassName)}
			fill={fill}
			height={!fill ? height || heightFromProps : undefined}
			priority={priority}
			quality={quality}
			sizes={sizes}
			src={src}
			width={!fill ? width || widthFromProps : undefined}
		/>
	);
};
