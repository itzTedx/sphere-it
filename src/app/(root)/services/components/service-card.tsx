import Image from "next/image";
import Link from "next/link";

import { IconBox } from "@/components/icon-box";

import { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <li
      className="group relative grid grid-cols-1 gap-4 rounded-2xl bg-card p-4 shadow-md sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:rounded-4xl"
      key={service.id}
    >
      <Link className="absolute inset-0" href={`/services/${service.id}`} />
      <div className="relative aspect-[1.44/1] overflow-hidden rounded-xl sm:aspect-[1.2/1] sm:rounded-2xl md:aspect-[1.44/1] md:rounded-3xl group-even:md:order-2">
        <Image
          alt={`${service.serviceTitle} - Sphere IT Services`}
          className="object-cover"
          fill
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
          src={service.image}
        />
      </div>
      <div className="flex flex-col justify-between px-2 sm:px-4 md:px-6 group-even:md:order-1">
        <div className="space-y-3 py-2 sm:space-y-4 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <IconBox state="active">
              <service.Icon className="text-primary-600" />
            </IconBox>
            <h2 className="text-lg text-primary-800 sm:text-xl md:text-title-4">{service.serviceTitle}</h2>
          </div>
          <p className="font-display text-sm text-stone-700 sm:text-lg">{service.overview}</p>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {service.tags.map((tag) => (
              <li
                className="rounded-md bg-stone-alpha-10 px-2 py-1.5 font-mono text-stone-600 text-xs uppercase sm:rounded-lg sm:px-3 sm:py-2 sm:text-badge"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t py-2 sm:py-3">
          <h3 className="font-display font-medium text-lg text-stone-600 sm:text-xl">
            <span className="font-semibold text-2xl text-primary-900 sm:text-3xl md:text-4xl">40%</span> faster
            deployment
          </h3>
          <ul className="flex items-center gap-2 font-display text-stone-500 text-xs sm:gap-3 sm:text-subhead-sm">
            <li>AI</li>
            <li>
              <div className="size-1 rounded-full bg-accent sm:size-1.5" />
            </li>
            <li>Agile</li>
            <li>
              <div className="size-1 rounded-full bg-accent sm:size-1.5" />
            </li>
            <li>Certification</li>
          </ul>
        </div>
      </div>
    </li>
  );
}
