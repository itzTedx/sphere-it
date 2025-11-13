import type { Metadata } from "next/dist/types";
import Link from "next/link";
import { redirect } from "next/navigation";

import MDXContent from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { IconArrowLeft } from "@/assets/icons";
import { IconLocation } from "@/assets/icons/location";
import { IconStopwatch } from "@/assets/icons/stopwatch";

import { BASE_URL } from "@/data/site-config";
import { JobApplicationForm } from "@/modules/form/job-application-form";
import { ApplyNowButton, CareersTab } from "@/modules/views/components/careers-tabs";
import { ShareButtons } from "@/modules/views/components/share-buttons";

import { ROLES } from "../data/mockup-roles";
import { generateStructuredData } from "./structured-data";

interface Props {
  params: Promise<{ id: string }>;
}

const getJobById = (id: string) => {
  return ROLES.find((r) => r.id === Number(id));
};

export default async function CareerPage({ params }: Props) {
  const { id } = await params;
  const application = getJobById(id);

  if (!application) return redirect("/careers");

  const structuredData = generateStructuredData(application, id);

  return (
    <>
      {structuredData.map((data, index) => (
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} key={index} type="application/ld+json" />
      ))}
      <main className="sm:py-9 md:py-12">
        <section
          aria-labelledby="job-title"
          className="container max-w-5xl bg-card py-4 sm:rounded-xl sm:border sm:py-6 md:py-8"
        >
          <header>
            <div className="flex w-full items-center gap-2 sm:flex-col sm:items-start">
              <nav aria-label="Breadcrumb navigation">
                <Button
                  aria-label="Go back to all job listings"
                  asChild
                  className="group max-sm:size-9"
                  variant="ghost"
                >
                  <Link href="/careers">
                    <IconArrowLeft aria-hidden="true" className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden sm:block">All Jobs</span>
                  </Link>
                </Button>
              </nav>

              <div className="flex w-full flex-1 items-center justify-between gap-3 sm:gap-4">
                <h1 className="text-title-4 sm:text-title-3 md:text-title-2" id="job-title">
                  {application.title}
                </h1>
                <ShareButtons title={application.title} url={`${BASE_URL}/careers/${id}`} />
              </div>
            </div>
            <dl className="mb-4 flex flex-wrap items-center gap-2 text-base text-stone-700 max-sm:mt-4 sm:mb-6 sm:gap-3 sm:text-lg">
              <div className="flex items-center gap-2">
                <IconLocation aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd className="break-words">{application.location}</dd>
                </div>
              </div>
              <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-stone-300" />
              <div className="flex items-center gap-2">
                <IconStopwatch aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <div>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{application.time}</dd>
                </div>
              </div>
            </dl>

            <ApplyNowButton aria-label={`Apply for ${application.title} position`} />
          </header>
          <CareersTab>
            <TabsContent aria-labelledby="overview-tab" id="overview-panel" value="overview">
              <article
                aria-labelledby="job-overview-heading"
                className="prose prose-stone mt-4 prose-h3:mb-2 max-w-none prose-h1:font-medium prose-headings:text-primary-900 prose-p:text-sm prose-p:leading-relaxed sm:mt-6 sm:prose-p:text-base"
              >
                <h2 className="sr-only" id="job-overview-heading">
                  Job Overview
                </h2>
                <MDXContent source={application.content} />
              </article>
              <ApplyNowButton aria-label={`Apply for ${application.title} position`} className="mt-4 sm:mt-6" />
            </TabsContent>
            <TabsContent aria-labelledby="application-tab" id="application-panel" value="application">
              <section aria-labelledby="application-form-heading">
                <h2 className="sr-only" id="application-form-heading">
                  Job Application Form
                </h2>
                <JobApplicationForm
                  initialData={{
                    department: application.department,
                    workMode: application.workMode,
                  }}
                />
              </section>
            </TabsContent>
          </CareersTab>
        </section>
      </main>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const application = getJobById(id);

  if (!application) {
    return {
      title: "Job Not Found | Sphere IT",
      description: "Explore more roles at Sphere IT Global.",
    };
  }

  return {
    title: `${application.title} | Careers at Sphere IT`,
    description: application.description,
    openGraph: {
      title: `${application.title} | Sphere IT Global`,
      description: application.description,
      url: `https://sphereitglobal.com/careers/${id}`,
      images: [
        {
          url: "https://sphereitglobal.com/og-application.jpg",
          width: 1200,
          height: 630,
          alt: application.title,
        },
      ],
    },
  };
}
