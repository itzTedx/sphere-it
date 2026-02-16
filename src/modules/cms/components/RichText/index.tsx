import React from "react";

import { Route } from "next";
import Link from "next/link";

import type {
	DefaultNodeTypes,
	DefaultTypedEditorState,
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
	ButtonBlock as ButtonBlockProps,
	CardBlock as CardBlockProps,
	CertificationsBlock as CertificationsBlockProps,
	ListBlock as ListBlockProps,
	MediaBlock as MediaBlockProps,
} from "@/payload-types";

import { BannerBlock } from "../../blocks/Banner/Component";
import { ButtonBlock } from "../../blocks/button/Component";
import { CardBlock } from "../../blocks/card/Component";
import { CertificationsBlock } from "../../blocks/certifications/Component";
import { ListBlock } from "../../blocks/list/Component";
import { MediaBlock } from "../../blocks/MediaBlock/Component";

type NodeTypes =
	| DefaultNodeTypes
	| SerializedBlockNode<
			| MediaBlockProps
			| BannerBlockProps
			| CardBlockProps
			| CertificationsBlockProps
			| ButtonBlockProps
			| ListBlockProps
	  >;

type TextConverterArgs = {
	node: {
		text: string;
		$?: {
			color?: string;
			[key: string]: unknown;
		};
		[key: string]: unknown;
	};
	[key: string]: unknown;
};

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

export const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
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
	text: (args: TextConverterArgs) => {
		const { node } = args;
		const primaryColor = node.$?.color === "primary";
		const accentColor = node.$?.color === "accent";
		const mutedColor = node.$?.color === "muted";

		// Let the default converter handle marks like <strong>, <em>, etc.
		const defaultText =
			typeof defaultConverters.text === "function"
				? defaultConverters.text!(args as never)
				: node.text;

		if (primaryColor) {
			return <span className="text-primary">{defaultText}</span>;
		}
		if (accentColor) {
			return <span className="text-accent">{defaultText}</span>;
		}
		if (mutedColor) {
			return <span className="text-muted-foreground">{defaultText}</span>;
		}
		return defaultText;
	},
	heading: ({ node, nodesToJSX }) => {
		// Extract plain text from node children for ID generation
		const extractText = (nodes: DefaultNodeTypes[]): string => {
			return nodes
				.map((child) => {
					if (child.type === "text") {
						return child.text || "";
					}
					if ("children" in child && child.children) {
						return extractText(child.children as DefaultNodeTypes[]);
					}
					return "";
				})
				.join("");
		};

		const text = extractText(node.children as DefaultNodeTypes[]);
		const id = slugify(text);

		const Tag = node.tag;

		return <Tag id={id}>{nodesToJSX({ nodes: node.children })}</Tag>;
	},

	blocks: {
		button: ({ node }) => <ButtonBlock className="mb-4" {...node.fields} />,
		banner: ({ node }) => <BannerBlock className="mb-4" {...node.fields} />,
		list: ({ node }) => <ListBlock className="mb-4" {...node.fields} />,
		card: ({ node }) => <CardBlock className="mb-4" {...node.fields} />,
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
		certifications: ({ node }) => (
			<CertificationsBlock className="mb-4" {...node.fields} />
		),
	},
});

type Props = {
	data: DefaultTypedEditorState;
	enableGutter?: boolean;
	enableProse?: boolean;
} & React.ComponentProps<typeof ConvertRichText>;

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
