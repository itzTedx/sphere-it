import { Route } from "next";
import Link from "next/link";

import {
	DefaultNodeTypes,
	type DefaultTypedEditorState,
	SerializedBlockNode,
	SerializedLinkNode,
} from "@payloadcms/richtext-lexical";
import {
	RichText as ConvertRichText,
	JSXConvertersFunction,
	LinkJSXConverter,
} from "@payloadcms/richtext-lexical/react";

import { cn, slugify } from "@/lib/utils";
import type {
	BannerBlock as BannerBlockProps,
	MediaBlock as MediaBlockProps,
} from "@/payload-types";

import { BannerBlock } from "../../blocks/Banner/Component";
import { MediaBlock } from "../../blocks/MediaBlock/Component";

type NodeTypes =
	| DefaultNodeTypes
	| SerializedBlockNode<MediaBlockProps | BannerBlockProps>;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
	const { value, relationTo } = linkNode.fields.doc!;
	if (typeof value !== "object") {
		throw new Error("Expected value to be an object");
	}
	const slug = value.slug;
	return relationTo === "research-papers"
		? `/resources/research-papers/${slug}`
		: `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
	defaultConverters,
}) => ({
	...defaultConverters,
	...LinkJSXConverter({ internalDocToHref }),
	link: ({ node, nodesToJSX }) => {
		const children = nodesToJSX({
			nodes: node.children,
		});

		let href = node.fields.url ?? "";
		let newTab = node.fields.newTab;

		// Auto-detect external HTTP/HTTPS links and open in new tab
		if (node.fields.linkType !== "internal" && !newTab) {
			newTab = href.startsWith("http://") || href.startsWith("https://");
		}

		if (node.fields.linkType === "internal") {
			href = internalDocToHref({
				linkNode: node as SerializedLinkNode,
			});
		}

		const rel = newTab ? "noopener noreferrer" : undefined;
		const target = newTab ? "_blank" : undefined;

		return (
			<Link href={href as Route} rel={rel} target={target}>
				{children}
			</Link>
		);
	},
	heading: ({ node, nodesToJSX }) => {
		// if (node.tag === "h2") {
		// 	const text = nodesToJSX({ nodes: node.children });

		// 	const id = text
		// 		.join("")
		// 		.toLowerCase()
		// 		.replace(/\s+/g, "-")
		// 		.replace(/[^a-z0-9-]/g, "");
		// 	return <h2 id={id}>{text}</h2>;
		// }
		const text = nodesToJSX({ nodes: node.children }).join("");
		const id = slugify(text);
		const Tag = node.tag;
		return <Tag id={id}>{text}</Tag>;
	},
	blocks: {
		banner: ({ node }) => (
			<BannerBlock className="col-start-2 mb-4" {...node.fields} />
		),
		mediaBlock: ({ node }) => (
			<MediaBlock
				className="col-span-3 col-start-1"
				imgClassName="m-0"
				{...node.fields}
				captionClassName="mx-auto max-w-[48rem]"
				disableInnerContainer={true}
				enableGutter={false}
			/>
		),
	},
});

type Props = {
	data: DefaultTypedEditorState;
	enableGutter?: boolean;
	enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
	const { className, enableProse = true, enableGutter = true, ...rest } = props;
	return (
		<ConvertRichText
			className={cn(
				"payload-richtext",
				{
					container: enableGutter,
					"max-w-none": !enableGutter,
					"prose md:prose-md dark:prose-invert mx-auto": enableProse,
				},
				className
			)}
			converters={jsxConverters}
			{...rest}
		/>
	);
}
