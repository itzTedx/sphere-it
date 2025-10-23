import { notFound } from "next/navigation";

import { SERVICES } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = ["elevate", "automate", "elevate", "assure", "augment"];

  return routes.map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.id === slug);

  if (!service) return notFound();

  return <div>{service.title}</div>;
}
