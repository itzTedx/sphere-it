export type Research = {
	metadata: ResearchMetadata;
	content: string;
};

export interface ResearchMetadata {
	title: string;
	category: string;
	image: string;
	slug: string;
	lists?: {
		label: string;
		value: string;
	}[];
	client?: {
		logo: string;
		name: string;
		description: string;
		industry: string;
		size: string;
		founded: string;
		location: string;
	};
	meta: {
		title: string;
		description: string;
	};
}
