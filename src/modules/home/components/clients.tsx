import Link from "next/link";

import { LogoCarousel } from "@/components/ui/logo-carousel";

import { IconChevronRight } from "@/assets/icons";

import { CLIENTS } from "@/data/constants";

export const Clients = () => {
  return (
    <section className="container border-y">
      <div className="mx-auto max-w-7xl border-x">
        <div className="space-y-4 rounded-3xl border bg-card px-16 py-10">
          <h3 className="text-center text-title-5">
            Trusted by <span className="text-primary">500+ Leading</span> Organizations
          </h3>

          <div className="group relative space-y-3">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link className="block font-medium text-sm duration-150 hover:opacity-75" href="/">
                <span> Meet Our Customers</span>

                <IconChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <LogoCarousel
              className="transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs"
              columns={7}
              logos={CLIENTS}
            />
            <LogoCarousel
              className="transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs"
              columns={7}
              logos={CLIENTS}
            />
          </div>

          {/* <Marquee className="[--duration:60s]" pauseOnHover repeat={3}>
            {CLIENTS.map((client) => (
              <TestimonialCard img={client.img} key={client.id} />
            ))}
          </Marquee>
          <Marquee className="[--duration:60s]" pauseOnHover repeat={3} reverse>
            {CLIENTS.map((client) => (
              <TestimonialCard img={client.img} key={client.id} />
            ))}
          </Marquee> */}
        </div>
      </div>
    </section>
  );
};
