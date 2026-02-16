import React from "react";

import type { ColumnBlock as ColumnBlockProps } from "src/payload-types";

import { cn } from "@/lib/utils";

import RichText from "../../components/RichText";

type Props = {
	className?: string;
} & ColumnBlockProps;

export const ColumnBlock: React.FC<Props> = ({
	className,
	contents,
	columns,
}) => {
	const numericColumns =
		typeof columns === "string"
			? Number.parseInt(columns, 10)
			: typeof columns === "number"
				? columns
				: 2;

	return (
		<div
			className={cn(
				"grid gap-4",
				numericColumns === 2
					? "grid-cols-2"
					: numericColumns === 3
						? "grid-cols-3"
						: numericColumns === 4
							? "grid-cols-4"
							: "grid-cols-2",
				className
			)}
		>
			{contents &&
				contents.map((content) => {
					return (
						<div key={content.id}>
							<RichText
								className="prose-li:before:-left-6 prose-li:relative prose-ul:list-none prose-li:before:absolute prose-li:before:top-2 prose-li:before:size-4 prose-li:before:bg-[url('/svg/checkbox.svg')] prose-li:before:bg-contain prose-li:before:bg-no-repeat prose-li:before:content-['']"
								data={content.content}
								enableGutter={false}
							/>
						</div>
					);
				})}
		</div>
	);
};
