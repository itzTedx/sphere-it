import {
	MetaDescriptionComponent as MetaDescriptionComponent_a8a977ebc872c5d5ea7ee689724c0860,
	MetaImageComponent as MetaImageComponent_a8a977ebc872c5d5ea7ee689724c0860,
	MetaTitleComponent as MetaTitleComponent_a8a977ebc872c5d5ea7ee689724c0860,
	OverviewComponent as OverviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
	PreviewComponent as PreviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
} from "@payloadcms/plugin-seo/client";
import {
	BlockquoteFeatureClient as BlockquoteFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	BlocksFeatureClient as BlocksFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	BoldFeatureClient as BoldFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	FixedToolbarFeatureClient as FixedToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	HeadingFeatureClient as HeadingFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	HorizontalRuleFeatureClient as HorizontalRuleFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	IndentFeatureClient as IndentFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	InlineToolbarFeatureClient as InlineToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	ItalicFeatureClient as ItalicFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	LinkFeatureClient as LinkFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	OrderedListFeatureClient as OrderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	ParagraphFeatureClient as ParagraphFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	TableFeatureClient as TableFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	UnderlineFeatureClient as UnderlineFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	UnorderedListFeatureClient as UnorderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	UploadFeatureClient as UploadFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
} from "@payloadcms/richtext-lexical/client";
import {
	LexicalDiffComponent as LexicalDiffComponent_44fe37237e0ebf4470c9990d8cb7b07e,
	RscEntryLexicalCell as RscEntryLexicalCell_44fe37237e0ebf4470c9990d8cb7b07e,
	RscEntryLexicalField as RscEntryLexicalField_44fe37237e0ebf4470c9990d8cb7b07e,
} from "@payloadcms/richtext-lexical/rsc";
import { SlugField as SlugField_3817bf644402e67bfe6577f60ef982de } from "@payloadcms/ui";
import { CollectionCards as CollectionCards_ab83ff7e88da8d3530831f296ec4756a } from "@payloadcms/ui/rsc";

export const importMap = {
	"@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell":
		RscEntryLexicalCell_44fe37237e0ebf4470c9990d8cb7b07e,
	"@payloadcms/richtext-lexical/rsc#RscEntryLexicalField":
		RscEntryLexicalField_44fe37237e0ebf4470c9990d8cb7b07e,
	"@payloadcms/richtext-lexical/rsc#LexicalDiffComponent":
		LexicalDiffComponent_44fe37237e0ebf4470c9990d8cb7b07e,
	"@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient":
		HorizontalRuleFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient":
		InlineToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient":
		FixedToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#UploadFeatureClient":
		UploadFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#OrderedListFeatureClient":
		OrderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#UnorderedListFeatureClient":
		UnorderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#BlocksFeatureClient":
		BlocksFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#ParagraphFeatureClient":
		ParagraphFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#UnderlineFeatureClient":
		UnderlineFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#BoldFeatureClient":
		BoldFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#ItalicFeatureClient":
		ItalicFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#IndentFeatureClient":
		IndentFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#LinkFeatureClient":
		LinkFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#HeadingFeatureClient":
		HeadingFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/plugin-seo/client#OverviewComponent":
		OverviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
	"@payloadcms/plugin-seo/client#MetaTitleComponent":
		MetaTitleComponent_a8a977ebc872c5d5ea7ee689724c0860,
	"@payloadcms/plugin-seo/client#MetaImageComponent":
		MetaImageComponent_a8a977ebc872c5d5ea7ee689724c0860,
	"@payloadcms/plugin-seo/client#MetaDescriptionComponent":
		MetaDescriptionComponent_a8a977ebc872c5d5ea7ee689724c0860,
	"@payloadcms/plugin-seo/client#PreviewComponent":
		PreviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
	"@payloadcms/ui#SlugField": SlugField_3817bf644402e67bfe6577f60ef982de,
	"@payloadcms/richtext-lexical/client#TableFeatureClient":
		TableFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/richtext-lexical/client#BlockquoteFeatureClient":
		BlockquoteFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
	"@payloadcms/ui/rsc#CollectionCards":
		CollectionCards_ab83ff7e88da8d3530831f296ec4756a,
};
