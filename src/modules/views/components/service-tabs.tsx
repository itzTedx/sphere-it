import { Tabs, TabsList, TabsTrigger } from "@/components/ui/radix/tabs";

import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons";

const SERVICES_TABS_LISTS = [
  {
    id: "elevate",
    Icon: IconElevate,
    name: "Elevate",
  },
  {
    id: "automate",
    Icon: IconAutomate,
    name: "Automate",
  },
  {
    id: "evaluate",
    Icon: IconEvaluate,
    name: "Evaluate",
  },
  {
    id: "assure",
    Icon: IconAssure,
    name: "Assure",
  },
  {
    id: "augment",
    Icon: IconAugment,
    name: "Augment",
  },
];

export const ServicesTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs
      aria-label="Services navigation"
      className="container relative z-10 max-w-7xl pb-12 max-sm:px-0 md:border-x"
      defaultValue="elevate"
    >
      <div className="-space-x-px relative mx-auto inline-flex max-sm:bg-card max-sm:px-4 md:pb-4">
        <svg
          className="hidden shrink-0 sm:block"
          fill="none"
          height="64"
          viewBox="0 0 86 64"
          width="86"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.5 45C57.8095 56.6952 71.7084 63.9997 85.5 64V0H0.5C14.2915 0 27.1905 7.30481 34.5 19L50.5 45Z"
            fill="white"
          />
        </svg>
        <div className="flex items-center justify-center bg-card max-sm:pb-3 sm:h-11 md:h-16">
          <TabsList
            aria-label="Service categories"
            className="flex h-auto flex-wrap items-center justify-center rounded-none bg-card"
            role="tablist"
          >
            {SERVICES_TABS_LISTS.map(({ id, Icon, name }) => (
              <TabsTrigger aria-controls={`${id}-panel`} className="pl-1" key={id} role="tab" value={id}>
                <div aria-hidden="true" className="flex size-6 rounded-md bg-stone-300 shadow-sm transition-colors">
                  <Icon className="m-auto size-5 text-stone-500" />
                </div>
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <svg
          className="hidden shrink-0 sm:block"
          fill="none"
          height="64"
          viewBox="0 0 86 64"
          width="86"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.5 45C28.1905 56.6952 14.2916 63.9997 0.5 64V0H85.5C71.7085 0 58.8095 7.30481 51.5 19L35.5 45Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="container max-w-6xl">{children}</div>
    </Tabs>
  );
};
