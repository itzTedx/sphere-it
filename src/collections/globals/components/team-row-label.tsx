"use client";

import { useRowLabel } from "@payloadcms/ui";

export const TeamRowLabel = () => {
	const { data } = useRowLabel<{ name?: string }>();

	const customLabel = `${data.name || "Team Member"} `;

	return <div>{customLabel}</div>;
};
