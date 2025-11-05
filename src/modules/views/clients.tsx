import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CLIENTS } from "@/data/constants";

export const Clients = memo(() => {
  return (
    <section className="border-y">
      <div className="mx-auto max-w-7xl max-xl:container">
        <div className="space-y-4 rounded-3xl border bg-card px-6 py-9 md:px-16 md:py-10">
          <h3 className="text-center text-title-5">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h3>

          <div className="group relative space-y-3">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Button asChild variant="link">
                <Link
                  className="group/link block font-display font-medium text-sm text-stone-600 duration-150 hover:opacity-75"
                  href="/"
                >
                  <span> Meet Our Customers</span>
                  <svg
                    aria-hidden="true"
                    className="mt-[0em] ml-[0.3em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100 motion-reduce:transition-none"
                    fill="none"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
            <ul className="sm:grid-col-4 grid grid-cols-3 items-center justify-center gap-2 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs md:grid-cols-5 lg:grid-cols-6">
              {CLIENTS.map((client) => (
                <li className="relative m-3 aspect-16/6 max-md:last:hidden md:m-9" key={client.id}>
                  <Image
                    alt={`${client.name} logo`}
                    className="object-contain object-center"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 12vw"
                    src={client.src}
                  />
                </li>
              ))}
            </ul>
            {/* <ClientLogos /> */}
          </div>
        </div>
      </div>
    </section>
  );
});

Clients.displayName = "Clients";
