"use client";

export const ClientOnly = ({
	children,
	isLogged,
}: {
	children: React.ReactNode;
	isLogged?: boolean;
}) => {
	if (isLogged) {
		console.log(children);
	}

	return <>{children}</>;
};
