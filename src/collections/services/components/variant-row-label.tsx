"use client";

import { useRowLabel } from "@payloadcms/ui";

export const VariantRowLabel = () => {
	const { data, rowNumber } = useRowLabel<{
		name?: string;
	}>();
	const parts = [data?.name].filter(Boolean);
	const label = parts.length > 0 ? parts.join(" · ") : `Partner ${rowNumber}`;
	return <span>{label}</span>;
};
