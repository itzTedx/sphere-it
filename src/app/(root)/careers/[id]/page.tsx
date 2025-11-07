import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

import { IconArrowLeft, IconLink, IconSocialLinkedin, IconSocialX } from "@/assets/icons";
import { IconLocation } from "@/assets/icons/location";
import { IconStopwatch } from "@/assets/icons/stopwatch";

import { ROLES } from "../data/mockup-roles";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function CareerPage({ params }: Props) {
  const { id } = await params;
  const application = ROLES.find((r) => r.id === Number(id));

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
          <div className="flex items-center gap-2 text-lg text-stone-700">
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
        </header>
      </section>
    </main>
  );
}
