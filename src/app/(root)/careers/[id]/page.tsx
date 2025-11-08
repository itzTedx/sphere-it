import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import MDXContent from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

import { IconArrowLeft, IconLink, IconSocialLinkedin, IconSocialX } from "@/assets/icons";
import { IconLocation } from "@/assets/icons/location";
import { IconStopwatch } from "@/assets/icons/stopwatch";

import { JobApplicationForm } from "@/modules/form/job-application-form";
import { ApplyNowButton, CareersTab } from "@/modules/views/components/careers-tabs";

import { ROLES } from "../data/mockup-roles";

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

  return (
    <main className="py-12">
      <section className="container max-w-5xl rounded-xl border bg-card py-6">
        <header className="space-y-3">
          <Button asChild className="group" variant="ghost">
            <Link href="/careers">
              <IconArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              All Jobs
            </Link>
          </Button>
          <div>
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-title-3">{application.title}</h1>
              <div className="inline-flex gap-3">
                <Button size="icon" variant="outline">
                  <IconLink />
                </Button>
                <Button size="icon" variant="outline">
                  <IconSocialX />
                </Button>
                <Button size="icon" variant="outline">
                  <IconSocialLinkedin />
                </Button>
              </div>
            </div>
            <div className="mb-6 flex items-center gap-2 text-lg text-stone-700">
              <div className="flex items-center gap-2">
                <IconLocation className="size-4 text-muted-foreground" />
                <span>{application.location}</span>
              </div>
              <span aria-hidden="true" className="size-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-2">
                <IconStopwatch className="size-4 text-muted-foreground" />
                <span>{application.time}</span>
              </div>
            </div>
          </div>
          <ApplyNowButton />
        </header>
        <CareersTab>
          <TabsContent value="overview">
            <article className="prose prose-stone mt-6 prose-h3:mb-2 max-w-none prose-h1:font-medium prose-headings:text-primary-900">
              <MDXContent source={application.content} />
            </article>
            <ApplyNowButton className="mt-6" />
          </TabsContent>
          <TabsContent value="application">
            <JobApplicationForm
              initialData={{
                department: application.department,
                workMode: application.workMode,
              }}
            />
          </TabsContent>
        </CareersTab>
      </section>
    </main>
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
