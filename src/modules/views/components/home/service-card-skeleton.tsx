import { Skeleton } from "@/components/ui/skeleton";

export const ServiceCardSkeleton = () => {
  return (
    <div className="space-y-3 border-primary-500 border-t-2 p-6">
      <div className="flex items-center gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton className="h-2 w-20 rounded-full bg-primary-300/30" key={index} />
        ))}
      </div>
      {Array.from({ length: 9 }).map((_, index) => (
        <div className="flex items-center gap-3" key={index}>
          <Skeleton className="size-4 rounded-sm bg-primary-300/20" />
          <Skeleton className="h-1.5 w-1/5 rounded-full bg-primary-300/20" />
          <Skeleton className="h-1.5 w-1/3 rounded-full bg-primary-300/20" />
          <Skeleton className="h-1.5 w-1/6 rounded-full bg-primary-300/20" />
        </div>
      ))}
    </div>
  );
};
