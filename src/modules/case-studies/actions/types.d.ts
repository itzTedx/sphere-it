export type CaseStudy = {
	metadata: CaseStudyMetadata;
	content: string;
};

export interface CaseStudyMetadata {
	title: string;
	category: string;
	image: string;
	slug: string;
}
