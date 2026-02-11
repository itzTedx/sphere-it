"use client";

import { useRowLabel } from "@payloadcms/ui";

export const FeatureRowLabel = () => {
	const { data, rowNumber } = useRowLabel<{
		feature?: string;
	}>();
	const parts = [data?.feature].filter(Boolean);
	const label = parts.length > 0 ? parts.join(" · ") : `${rowNumber}`;
	return <span>{label}</span>;
};
