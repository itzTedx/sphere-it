import Link from "next/link";
import { redirect } from "next/navigation";

import { NAV_LINKS } from "@/data/constants";

export default function TestPage() {
  if (process.env.NODE_ENV !== "development") return redirect("/");

  return (
    <div className="container min-h-svh max-w-7xl py-12">
      {NAV_LINKS.map((link) => (
        <li className="grid bg-card font-display lg:grid-cols-[1fr_.60fr_.60fr]" key={link.id}>
          {link.resources?.map((link) =>
            link.id === "explore" ? (
              <div className="flex flex-col p-2" key={link.id}>
                <small className="px-2 pb-3 font-display font-medium text-sm text-stone-400 uppercase">{link.id}</small>
                <div className="grid h-full grid-cols-2 gap-2">
                  {link.links.map((link) => (
                    <Link
                      className="flex h-full w-full flex-1 select-none flex-col justify-between rounded-md border bg-stone-100 p-4 no-underline outline-hidden transition-all duration-200 hover:bg-primary-100 focus:shadow-md group-hover:border-primary-500 group-focus-visible:border-primary-500 group-focus-visible:bg-primary-100 md:p-6"
                      href="/services"
                      key={link.href}
                      title="Explore our services"
                    >
                      <link.Icon className="size-7 text-stone-500 transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600" />
                      <div>
                        <div className="font-medium text-lg sm:mt-4">{link.label}</div>
                        <p className="text-muted-foreground text-sm leading-tight">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-1 border-l p-2" key={link.id}>
                <span className="px-3 font-display font-medium text-sm text-stone-400 uppercase">{link.id}</span>
                <ul>
                  {link.links.map((menu) => (
                    <li className="relative" key={menu.label}>
                      <Link
                        className="group relative z-10 flex items-center gap-3 rounded-md p-3"
                        href={menu.href}
                        title={menu.label}
                      >
                        <div className="flex size-12 items-center justify-center rounded-md border transition-colors group-hover:border-primary-500/10 group-hover:bg-primary-500/10 group-focus-visible:border-primary-600 group-focus-visible:bg-primary-500/10">
                          <menu.Icon className="size-5 shrink-0 text-stone-500 transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600" />
                        </div>
                        <div>
                          <span className="font-display text-subhead-base leading-none transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600">
                            {menu.label}
                          </span>
                          <p className="line-clamp-2 font-display text-muted-foreground text-sm transition-colors group-hover:text-primary-500 group-focus-visible:text-primary-500">
                            {menu.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </li>
      ))}
    </div>
  );
}
