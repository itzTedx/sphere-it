import { Suspense } from "react";

import { connection } from "next/server";

async function AdminLayoutInner(props: { children: React.ReactNode }) {
	await connection();
	return props.children;
}

export default function AdminLayout(props: { children: React.ReactNode }) {
	return (
		<Suspense fallback={null}>
			<AdminLayoutInner>{props.children}</AdminLayoutInner>
		</Suspense>
	);
}
