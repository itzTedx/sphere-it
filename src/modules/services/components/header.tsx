import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

export function Header({ className, badge, children, ...props }: React.ComponentProps<"header"> & { badge?: string }) {
  return (
    <header
      className={cn(
        "prose-h2:mt-0 mb-3 prose-h2:mb-0 prose-p:mb-0 grid gap-6 pb-3 prose-headings:text-primary-900 prose-p:text-muted-foreground sm:grid-cols-2",
        className
      )}
      {...props}
    >
      {badge && (
        <div className="col-span-full">
          <Badge>{badge}</Badge>
        </div>
      )}
      {children}
    </header>
  );
}
