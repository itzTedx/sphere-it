import { OpenPanelComponent } from "@openpanel/nextjs";

export default function OpenPanelProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const apiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL ?? "";
	const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID ?? "";
	const isEnabled = Boolean(apiUrl && clientId);

	return (
		<>
			{isEnabled && (
				<OpenPanelComponent
					apiUrl={apiUrl}
					clientId={clientId}
					globalProperties={{
						environment: process.env.NODE_ENV,
					}}
					scriptUrl="https://analytics.zironpro.ae/op1.js"
					trackAttributes={true}
					trackOutgoingLinks={true}
					trackScreenViews={true}
				/>
			)}
			{children}
		</>
	);
}
