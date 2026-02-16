"use client";

import { useRowLabel } from "@payloadcms/ui";

export const ListRowLabel = () => {
	const { data } = useRowLabel<{ title?: string }>();

	const customLabel = `${data.title || "List"}`;

	return <div>{customLabel}</div>;
};
