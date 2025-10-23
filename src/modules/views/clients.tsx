import Image from "next/image";
import Link from "next/link";

import { IconChevronRight } from "@/assets/icons";

import { CLIENTS } from "@/data/constants";

export const Clients = () => {
  return (
    <section className="border-y">
      <div className="mx-auto max-w-7xl max-xl:container">
        <div className="space-y-4 rounded-3xl border bg-card px-6 py-9 md:px-16 md:py-10">
          <h3 className="text-center text-title-5">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h3>

          <div className="group relative space-y-3">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                className="block font-display font-medium text-sm text-stone-600 duration-150 hover:opacity-75"
                href="/"
              >
                <span> Meet Our Customers</span>

                <IconChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <ul className="grid grid-cols-6 items-center justify-center gap-2 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs">
              {CLIENTS.map((client) => (
                <li className="relative m-9 aspect-16/6" key={client.id}>
                  <Image alt="" className="object-contain object-center" fill src={client.src} />
                </li>
              ))}
            </ul>
            {/* <ClientLogos /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
