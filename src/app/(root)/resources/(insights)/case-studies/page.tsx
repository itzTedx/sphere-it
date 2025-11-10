import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { IconChevronDown } from "@/assets/icons";

import { InsightsLayout } from "../components/insights-layout";
import { CASE_STUDIES, CaseStudy } from "./data/mock-studies";

export default function CaseStudiesPage() {
  return (
    <InsightsLayout>
      <TabsContent value="/resources/case-studies">
        <div className="container max-w-7xl">
          <main className="mb-12">
            <article className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard data={study} key={study.slug} />
              ))}
            </article>
            <div className="flex items-center justify-center">
              <Button aria-label="Load more case studies" variant="ghost">
                Load More{" "}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
                  <IconChevronDown aria-hidden="true" className="text-stone-500" />
                </span>
              </Button>
            </div>
          </main>
        </div>
        <Cta />
      </TabsContent>
    </InsightsLayout>
  );
}

interface CaseStudyCardProps {
  data: CaseStudy;
}

const CaseStudyCard = ({ data }: CaseStudyCardProps) => {
  const { title, client, lists, image, slug } = data;
  return (
    <article className="card relative aspect-9/12 overflow-hidden rounded-xl p-4 text-card shadow-sm transition hover:shadow-md sm:p-6">
      <Link
        aria-label={`Read case study: ${title}`}
        className="absolute inset-0 z-20"
        href={`/resources/case-studies/${slug}`}
      />
      <div className="relative z-15 flex h-full flex-col items-center justify-between gap-3 sm:gap-4">
        <h3 className="line-clamp-2 text-center font-semibold text-base sm:text-title-4">{title}</h3>

        <Image alt={`${client.name} brand logo`} className="object-contain" height={80} src={client.logo} width={80} />

        <div className="w-full space-y-3 sm:space-y-4">
          <ul className="grid grid-cols-2 gap-2 sm:gap-3" role="list">
            {lists.map((list) => (
              <li key={list.label}>
                <span className="block font-bold text-sm sm:text-subhead-lg">{list.value}</span>
                <p className="text-xs sm:text-subhead-base">{list.label}</p>
              </li>
            ))}
          </ul>
          <Button asChild className="relative z-20 w-full" size="sm" variant="secondary">
            <Link href={`/resources/case-studies/${slug}`}>Read Study</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-foreground to-transparent" />
      <Image
        alt={`${title} - Background image`}
        className="object-cover"
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        src={image}
      />
    </article>
  );
};
