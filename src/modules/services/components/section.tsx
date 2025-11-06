import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("my-10 *:space-y-6 sm:my-12 *:sm:space-y-9 md:my-14 lg:my-16", {
  variants: {
    outlined: {
      true: "border-y *:container *:max-w-7xl *:rounded-3xl *:border *:bg-card *:p-6 *:sm:p-9",
      false: "container max-w-7xl",
    },
  },
  defaultVariants: {
    outlined: false,
  },
});

export const Section = ({
  children,
  outlined = false,
  className,
}: React.ComponentProps<"section"> & { outlined?: boolean }) => {
  return (
    <section className={cn(sectionVariants({ outlined }), className)}>
      <div>{children}</div>
    </section>
  );
};
