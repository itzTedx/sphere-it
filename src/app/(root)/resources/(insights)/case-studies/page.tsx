import { Cta } from "@/components/layout/cta";
import { TabsContent } from "@/components/ui/tabs";

import { listCaseStudies } from "@/modules/case-studies/actions/query";
import { CaseStudyCard } from "@/modules/case-studies/components/case-study-card";

import { InsightsLayout } from "../components/insights-layout";

export default async function CaseStudiesPage() {
	const studies = await listCaseStudies();
	return (
		<InsightsLayout>
			<TabsContent value="/resources/case-studies">
				<div className="container max-w-7xl">
					<main className="mb-12">
						<article className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
							{studies.map((study) => (
								<CaseStudyCard data={study} key={study.slug} />
							))}
						</article>
					</main>
				</div>
				<Cta />
			</TabsContent>
		</InsightsLayout>
	);
}
