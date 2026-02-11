"use client";

import { useRowLabel } from "@payloadcms/ui";

export const TagRowLabel = () => {
	const { data, rowNumber } = useRowLabel<{
		tag?: string;
	}>();
	const parts = [data?.tag].filter(Boolean);
	const label = parts.length > 0 ? parts.join(" · ") : `${rowNumber}`;
	return <span>{label}</span>;
};
