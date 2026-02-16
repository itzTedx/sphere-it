import React from "react";

import type { ListBlock as ListBlockProps } from "src/payload-types";

import { cn } from "@/lib/utils";
import {
	CardGroup,
	ListCard,
	ListCardHeader,
} from "@/modules/services/components/card-list";

import RichText from "../../components/RichText";

type Props = {
	className?: string;
} & ListBlockProps;

export const ListBlock: React.FC<Props> = ({ className, items, columns }) => {
	const numericColumns =
		typeof columns === "string"
			? Number.parseInt(columns, 10)
			: typeof columns === "number"
				? columns
				: 2;
	const cardColumns =
		numericColumns === 3 || numericColumns === 4
			? (numericColumns as 3 | 4)
			: 2;

	return (
		<CardGroup className={cn("", className)} cols={cardColumns}>
			{items?.map((card) => {
				return (
					<ListCard key={card.id}>
						<ListCardHeader className="not-prose">
							<h3 className="prose-h3:mb-0">{card.title}</h3>
							<p>{card.description}</p>
						</ListCardHeader>

						<RichText
							className="prose-li:prose-base! prose-li:before:-left-6 prose-li:relative prose-ul:list-none p-3 text-sm! prose-li:before:absolute prose-li:before:top-2 prose-li:before:size-4 prose-li:before:bg-[url('/svg/checkbox.svg')] prose-li:before:bg-contain prose-li:before:bg-no-repeat prose-li:before:content-[''] md:p-6"
							data={card.content}
							enableGutter={false}
						/>
					</ListCard>
				);
			})}
		</CardGroup>
	);
};
