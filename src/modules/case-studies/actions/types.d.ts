export type CaseStudy = {
	metadata: CaseStudyMetadata;
	content: string;
};

export interface CaseStudyMetadata {
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
