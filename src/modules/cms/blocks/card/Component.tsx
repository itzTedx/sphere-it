import React from "react";

import type { CardBlock as CardBlockProps } from "src/payload-types";

import * as Icons from "@/assets/icons";

import { cn } from "@/lib/utils";
import {
	Card,
	CardGroup,
	CardIcon,
} from "@/modules/services/components/card-list";

import RichText from "../../components/RichText";

type Props = {
	className?: string;
	icon?: string | null;
} & CardBlockProps;

const iconEntries = Object.entries(Icons).filter(
	([, Component]) => typeof Component === "function"
) as [keyof typeof Icons, React.ComponentType<{ className?: string }>][];

const getIconByName = (name?: string | null) =>
	iconEntries.find(([iconName]) => iconName === name)?.[1];

const FallbackIcon =
	getIconByName("IconAiCloud") ||
	getIconByName("IconCloud") ||
	iconEntries[0]?.[1];

export const CardBlock: React.FC<Props> = ({
	className,
	cards,
	columns,
	style,
}) => {
	const cardVariant = style === "outlined" ? "outlined" : "card";
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
		<CardGroup className={cn(" ", className)} cols={cardColumns}>
			{cards?.map((card) => {
				const IconComponent =
					(card.icon && getIconByName(card.icon)) || FallbackIcon;

				return (
					<Card key={card.id} variant={cardVariant}>
						{IconComponent && <CardIcon icon={<IconComponent />} />}
						<RichText
							className="prose-lg mb-0 prose-headings:mb-0 prose-p:mb-0 prose-headings:font-medium prose-headings:text-primary-900 prose-headings:text-title-5"
							data={card.content}
							enableGutter={false}
						/>
					</Card>
				);
			})}
		</CardGroup>
	);
};
