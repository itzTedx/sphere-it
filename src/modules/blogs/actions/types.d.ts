export type Blog = {
	metadata: BlogMetadata;
	content: string;
};

export interface BlogMetadata {
	title: string;
	description: string;
	slug: string;
	publishedAt: string;
	heroImage: string;
	isFeatured?: boolean;
	blogCategories?: { id: number; category: string; slug: string }[];
	meta?: {
		title: string;
		description: string;
	};
}
