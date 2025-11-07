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
      <header className="relative z-50 h-[calc(100lvh-4rem)] overflow-hidden border-b bg-card" role="banner">
        <div className="container relative z-50 h-full max-w-7xl space-y-10 py-9 sm:py-12 md:py-16">
          <section className="grid grid-cols-2 gap-6">
            <Badge className="col-span-full">Careers at sphere it global</Badge>
            <h1 className="text-primary-900 text-title-3">
              Build the Future of Technology with <span className="text-primary-600">Precision and Purpose.</span>
            </h1>
            <p className="text-base text-stone-800">
              At Sphere IT, we believe in empowering people who combine clarity of thought with the courage to innovate.
              Whether you’re engineering intelligent platforms or delivering complex transformations, your work here
              shapes industries.
            </p>
          </section>
          <section className="grid grid-cols-12 gap-4">
            <div className="col-span-7 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between gap-24 rounded-2xl border bg-background px-6 py-9">
                  <p className="text-balance text-lg">
                    Work with leading BFSI and enterprise clients on projects that demand accuracy, structure, and
                    impact.
                  </p>
                  <div className="space-y-3">
                    <IconBox>
                      <IconBullseye className="text-primary-600" />
                    </IconBox>
                    <h2 className="text-title-5">Precision in Practice</h2>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border bg-background p-6">
                  <div className="relative size-2 rounded-full bg-green-600">
                    <div className="-inset-1 absolute animate-pulse rounded-full bg-green-600/25" />
                  </div>
                  <p className="font-display text-stone-700 text-subhead-sm">7 Current Opening Roles</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 rounded-2xl border bg-background p-6">
                  <div className="-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-border *:data-[slot=avatar]:grayscale">
                    {TEAMS.splice(0, 4).map((team) => (
                      <Avatar key={team.name}>
                        <AvatarImage alt={team.name} src={team.image} title={team.name} />
                      </Avatar>
                    ))}
                  </div>
                  <Button asChild variant="ghost">
                    <Link href="/about#team">Meet our Team</Link>
                  </Button>
                </div>

                <div className="flex h-full flex-col justify-between rounded-2xl border bg-background px-6 py-9">
                  <p className="text-balance text-lg">We focus on real outcomes - meaningful work over buzzwords.</p>
                  <div className="space-y-3">
                    <IconBox>
                      <IconPuzzle className="text-primary-600" />
                    </IconBox>
                    <h2 className="text-title-5">Pragmatism in Action</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-5 flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-foreground p-9 text-muted-background">
              <div className="space-y-2">
                <h2 className="text-card text-title-3">People First</h2>
                <p className="text-balance text-lg">
                  Growth programs, cross-border exposure, and a culture that values skill, transparency, and trust.
                </p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="max-w-40 space-y-2">
                  <div className="flex items-center gap-1.5 text-yellow-500 *:size-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar aria-hidden="true" key={i} />
                    ))}
                  </div>
                  <p className="text-balance text-[0.625rem] uppercase">
                    Employee satisfaction rated by our global teams
                  </p>
                </div>
                <Button variant="secondary">View Open Roles</Button>
              </div>
              <IconTrendUp className="-left-[10%] pointer-events-none absolute bottom-0 size-96 text-stone-400 opacity-10" />
            </div>
          </section>
        </div>

        <PathsBackground className="h-[calc(100lvh-4rem)] w-full" position={-1} />
      </header>
      <section className="container max-w-5xl py-9 sm:py-12 md:py-16 lg:py-20">
        <header className="space-y-3 text-center">
          <Badge className="mx-auto" variant="ghost">
            Join us
          </Badge>
          <h3 className="text-title-2">
            Current Openings <span className="text-stone-500 text-title-4">({ROLES.length})</span>
          </h3>
        </header>

        <div className="mt-9 space-y-10">
          {groupRolesByDepartment(ROLES).map(([department, roles]) => (
            <section className="space-y-6" key={department}>
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-stone-900 text-title-4">{department}</h4>
                <Badge variant="outline">
                  {roles.length} {pluralize("role", roles.length)}
                </Badge>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {roles.map((role) => (
                  <RoleCard data={role} key={role.id} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="mb-9 border-y sm:mb-12 md:mb-16 lg:mb-20">
        <div className="container max-w-5xl">
          <div className="rounded-4xl border bg-card p-16">
            <Badge variant="ghost">Application</Badge>
            <h3 className="mt-2.5 mb-6 text-primary-900 text-title-3">Join Our Talent Network</h3>
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
    <article className="group flex h-full flex-col gap-6 rounded-2xl border bg-background p-6 transition duration-200 hover:bg-card hover:shadow-md">
      <div className="space-y-3">
        <h5 className="text-stone-900 text-title-5">{data.title}</h5>
        <div className="flex items-center gap-2 text-sm text-stone-700">
          <div className="flex items-center gap-1.5">
            <IconLocation className="size-4 text-muted-foreground" />
            <span>{data.location}</span>
          </div>
          <span aria-hidden="true" className="size-1 rounded-full bg-stone-300" />
          <div className="flex items-center gap-1.5">
            <IconStopwatch className="size-4 text-muted-foreground" />
            <span>{data.time}</span>
          </div>
        </div>
        <p className="text-sm text-stone-700">{data.description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3">
        <Badge variant="secondary">{data.department}</Badge>
        <Button asChild size="sm" variant="ghost">
          <Link href={`/careers/${data.id}`}>View details</Link>
        </Button>
      </div>
    </article>
  );
}
