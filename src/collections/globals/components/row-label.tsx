"use client";

import { useRowLabel } from "@payloadcms/ui";

export const ArrayRowLabel = () => {
	const { data, rowNumber } = useRowLabel<{ name?: string }>();

	const customLabel = `${data.name || "Client"} ${String(rowNumber).padStart(2, "0")} `;

	return <div>Custom Label: {customLabel}</div>;
};
