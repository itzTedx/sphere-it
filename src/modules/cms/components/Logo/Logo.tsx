import Image from "next/image";

import clsx from "clsx";

interface Props {
	className?: string;
	loading?: "lazy" | "eager";
	priority?: "auto" | "high" | "low";
}

export const Logo = (props: Props) => {
	const {
		loading: loadingFromProps,
		priority: priorityFromProps,
		className,
	} = props;

	const loading = loadingFromProps || "lazy";
	const priority = priorityFromProps || "low";

	return (
		<Image
			alt="Payload Logo"
			className={clsx("h-[34px] w-full max-w-34", className)}
			decoding="async"
			fetchPriority={priority}
			height={34}
			loading={loading}
			src="/logo.png"
			width={34}
		/>
	);
};
