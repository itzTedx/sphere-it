import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { IconChevronDown } from "@/assets/icons";

import { InsightsLayout } from "../components/insights-layout";

export default function CaseStudiesPage() {
  return (
    <InsightsLayout>
      <TabsContent value="/resources/case-studies">
        <div className="container max-w-7xl">
          <main className="mb-12">
            <article className="grid grid-cols-3 gap-4 py-6">Case Studies</article>
            <div className="flex items-center justify-center">
              <Button variant="ghost">
                Load More{" "}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
                  <IconChevronDown className="text-stone-500" />
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
