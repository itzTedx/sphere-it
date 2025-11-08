import type { Metadata } from "next";
import Link from "next/link";

import { IconBox } from "@/components/icon-box";
import { Cta } from "@/components/layout/cta";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PathsBackground } from "@/components/ui/motion/lines-path-background";

import { IconPuzzle, IconTrendUp } from "@/assets/icons";
import { IconBullseye } from "@/assets/icons/bullseye";
import { IconLocation } from "@/assets/icons/location";
import { IconStar } from "@/assets/icons/star";
import { IconStopwatch } from "@/assets/icons/stopwatch";

import { BASE_URL } from "@/data/site-config";
import { TEAMS } from "@/data/teams";
import { pluralize } from "@/lib/utils";
import { JobApplicationForm } from "@/modules/form/job-application-form";

import { ROLES } from "./data/mockup-roles";

type Role = (typeof ROLES)[number];

function groupRolesByDepartment(roles: readonly Role[]) {
  const groups = new Map<Role["department"], Role[]>();

  roles.forEach((role) => {
    const current = groups.get(role.department);

    if (current) {
      current.push(role);
      return;
    }

    groups.set(role.department, [role]);
  });

  return Array.from(groups.entries());
}

const meta = {
  title: "Careers at Sphere IT Global - Digital Transformation & IT Innovation Partner",

  description:
    "Learn how Sphere IT drives enterprise transformation through AI, automation, and cloud engineering. Discover our mission, leadership, and global team powering innovation across industries.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "Sphere IT Global",
    "IT solutions",
    "technology services",
    "digital transformation",
    "BFSI technology",
    "software development",
    "cloud solutions",
    "GCC technology",
    "precision engineering",
    "pragmatic solutions",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: `${BASE_URL}/about`,
    siteName: "Sphere IT Global",
    images: [
      {
        url: "/images/banking.webp",
        width: 1200,
        height: 630,
        alt: "Sphere IT Global - IT Solutions and Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/banking.webp"],
  },

  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function CareersPage() {
  return (
    <main>
      <header className="relative z-50 min-h-[calc(100lvh-4rem)] overflow-hidden border-b bg-card">
        <div className="container relative z-50 h-full max-w-7xl space-y-6 py-6 sm:space-y-8 sm:py-9 md:space-y-10 md:py-12 lg:py-16">
          <section aria-labelledby="careers-heading" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Badge className="col-span-full">Careers at sphere it global</Badge>
            <h1 className="text-primary-900 text-title-4 sm:text-title-3" id="careers-heading">
              Build the Future of Technology with <span className="text-primary-600">Precision and Purpose.</span>
            </h1>
            <p className="text-sm text-stone-800 sm:text-base">
              At Sphere IT, we believe in empowering people who combine clarity of thought with the courage to innovate.
              Whether you're engineering intelligent platforms or delivering complex transformations, your work here
              shapes industries.
            </p>
          </section>
          <section
            aria-label="Career highlights and benefits"
            className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between gap-12 rounded-2xl border bg-background px-4 py-6 sm:gap-16 sm:px-6 sm:py-9 md:gap-24">
                  <p className="text-balance text-base sm:text-lg">
                    Work with leading BFSI and enterprise clients on projects that demand accuracy, structure, and
                    impact.
                  </p>
                  <div className="space-y-3">
                    <IconBox>
                      <IconBullseye aria-hidden="true" className="text-primary-600" />
                    </IconBox>
                    <h2 className="text-title-5">Precision in Practice</h2>
                  </div>
                </div>
                <div
                  aria-live="polite"
                  className="hidden items-center gap-3 rounded-2xl border bg-background p-4 sm:flex sm:gap-4 sm:p-6"
                >
                  <div aria-hidden="true" className="relative size-2 rounded-full bg-green-600">
                    <div className="-inset-1 absolute animate-pulse rounded-full bg-green-600/25" />
                  </div>
                  <p className="font-display text-stone-700 text-subhead-sm">
                    <span className="sr-only">Status: </span>7 Current Opening Roles
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 rounded-2xl border bg-background p-4 sm:p-6">
                  <div
                    aria-label="Team members"
                    className="-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-border *:data-[slot=avatar]:grayscale"
                  >
                    {TEAMS.splice(0, 4).map((team) => (
                      <Avatar className="transition hover:z-50 hover:scale-110" key={team.name}>
                        <AvatarImage alt={team.name} src={team.image} title={team.name} />
                      </Avatar>
                    ))}
                  </div>
                  <Button aria-label="Navigate to meet our team section" asChild size="sm" variant="ghost">
                    <Link href="/about#team">Meet our Team</Link>
                  </Button>
                </div>

                <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border bg-background px-4 py-6 sm:px-6 sm:py-9">
                  <p className="text-balance text-base sm:text-lg">
                    We focus on real outcomes - meaningful work over buzzwords.
                  </p>
                  <div className="space-y-3">
                    <IconBox>
                      <IconPuzzle aria-hidden="true" className="text-primary-600" />
                    </IconBox>
                    <h2 className="text-title-5">Pragmatism in Action</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-foreground p-6 text-muted-background sm:p-9 lg:col-span-5">
              <div className="space-y-2">
                <h2 className="text-card text-title-4 sm:text-title-3">People First</h2>
                <p className="text-balance text-base sm:text-lg">
                  Growth programs, cross-border exposure, and a culture that values skill, transparency, and trust.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-full space-y-2 sm:max-w-40">
                  <div
                    aria-label="5 out of 5 stars rating"
                    className="flex items-center gap-1.5 text-yellow-500 *:size-4"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar aria-hidden="true" key={i} />
                    ))}
                  </div>
                  <p className="text-balance text-[0.625rem] uppercase">
                    Employee satisfaction rated by our global teams
                  </p>
                </div>
                <Button
                  aria-label="Scroll to view open job roles"
                  asChild
                  className="w-full sm:w-auto"
                  variant="secondary"
                >
                  <Link href="#open-roles">View Open Roles</Link>
                </Button>
              </div>
              <IconTrendUp
                aria-hidden="true"
                className="-left-[10%] pointer-events-none absolute bottom-0 size-64 text-stone-400 opacity-10 sm:size-80 md:size-96"
              />
            </div>
          </section>
        </div>

        <PathsBackground className="h-[calc(100lvh-4rem)] w-full" position={-1} />
      </header>
      <section
        aria-labelledby="open-roles-heading"
        className="container max-w-5xl py-6 sm:py-9 md:py-12 lg:py-16 xl:py-20"
        id="open-roles"
      >
        <header className="space-y-2 text-center sm:space-y-3">
          <Badge className="mx-auto" variant="ghost">
            Join us
          </Badge>
          <h2 className="text-title-3 sm:text-title-2" id="open-roles-heading">
            Current Openings <span className="text-stone-500 text-title-5 sm:text-title-4">({ROLES.length})</span>
          </h2>
        </header>

        <div className="mt-6 space-y-8 sm:mt-9 sm:space-y-10">
          {groupRolesByDepartment(ROLES).map(([department, roles]) => (
            <section
              aria-labelledby={`department-${department.toLowerCase().replace(/\s+/g, "-")}`}
              className="space-y-4 sm:space-y-6"
              key={department}
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-4">
                <h3
                  className="text-stone-900 text-title-5 sm:text-title-4"
                  id={`department-${department.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {department}
                </h3>
                <Badge
                  aria-label={`${roles.length} ${pluralize("role", roles.length)} in ${department}`}
                  variant="outline"
                >
                  {roles.length} {pluralize("role", roles.length)}
                </Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {roles.map((role) => (
                  <RoleCard data={role} key={role.id} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section aria-labelledby="application-heading" className="mb-6 border-y sm:mb-9 md:mb-12 lg:mb-16 xl:mb-20">
        <div className="container max-w-5xl">
          <div className="rounded-2xl border bg-card p-6 sm:rounded-3xl sm:p-8 md:rounded-4xl md:p-12 lg:p-16">
            <Badge variant="ghost">Application</Badge>
            <h2 className="mt-2.5 mb-4 text-primary-900 text-title-4 sm:mb-6 sm:text-title-3" id="application-heading">
              Join Our Talent Network
            </h2>
            <JobApplicationForm />
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}

function RoleCard({ data }: { data: Role }) {
  return (
    <article className="group flex h-full flex-col gap-4 rounded-2xl border bg-background p-4 transition duration-200 hover:bg-card hover:shadow-md sm:gap-6 sm:p-6">
      <div className="space-y-2 sm:space-y-3">
        <h4 className="text-stone-900 text-title-6 sm:text-title-5">{data.title}</h4>
        <div className="flex flex-wrap items-center gap-2 text-stone-700 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <IconLocation aria-hidden="true" className="size-3.5 text-muted-foreground sm:size-4" />
            <span>{data.location}</span>
          </div>
          <span aria-hidden="true" className="size-1 rounded-full bg-stone-300" />
          <div className="flex items-center gap-1.5">
            <IconStopwatch aria-hidden="true" className="size-3.5 text-muted-foreground sm:size-4" />
            <span>{data.time}</span>
          </div>
        </div>
        <p className="text-stone-700 text-xs sm:text-sm">{data.description}</p>
      </div>
      <div className="mt-auto flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <Badge aria-label={`Department: ${data.department}`} className="text-xs sm:text-sm" variant="secondary">
          {data.department}
        </Badge>
        <Button
          aria-label={`View details for ${data.title} position`}
          asChild
          className="w-full sm:w-auto"
          size="sm"
          variant="ghost"
        >
          <Link href={`/careers/${data.id}`}>View details</Link>
        </Button>
      </div>
    </article>
  );
}
