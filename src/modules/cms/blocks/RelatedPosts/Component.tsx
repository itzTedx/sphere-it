import React from "react";

import { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";
import clsx from "clsx";

import { Blog } from "@/payload-types";

import { Card } from "../../components/Card";
import RichText from "../../components/RichText";

export type RelatedPostsProps = {
	className?: string;
	docs?: Blog[];
	introContent?: DefaultTypedEditorState;
};

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
	const { className, docs, introContent } = props;

	return (
		<div className={clsx("lg:container", className)}>
			{introContent && <RichText data={introContent} enableGutter={false} />}

			<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
				{docs?.map((doc, index) => {
					if (typeof doc === "string") return null;

					return (
						<Card doc={doc} key={index} relationTo="posts" showCategories />
					);
				})}
			</div>
		</div>
	);
};
