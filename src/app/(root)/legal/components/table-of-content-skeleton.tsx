import { TableOfContents } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

export const TableOfContentSkeleton = () => {
  return (
    <aside className="mt-12 h-fit overflow-hidden rounded-xl border bg-stone-50 md:sticky md:top-[10vh]">
      <div className="flex items-center gap-2 bg-card p-3">
        <TableOfContents className="size-3 text-muted-foreground" />
        <span className="font-display text-muted-foreground text-subhead-base">On this page</span>
      </div>
      <nav className="p-3">
        <ul className="space-y-1">
          {/* Simulate 3-5 skeleton items with varying indentation */}
          <li>
            <Skeleton className="ml-3 h-6 w-full rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-3 h-6 w-4/5 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-6 h-6 w-3/4 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-6 h-6 w-3/5 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-3 h-6 w-5/6 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-3 h-6 w-2/3 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-3 h-6 w-2/3 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-6 h-6 w-3/4 rounded-md" />
          </li>
          <li>
            <Skeleton className="ml-3 h-6 w-2/3 rounded-md" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};
