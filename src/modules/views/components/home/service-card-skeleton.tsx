import { AnimatedGroup } from "@/components/ui/animated-group";
import { Skeleton } from "@/components/ui/skeleton";

export const ServiceCardSkeleton = () => {
  return (
    <div className="space-y-3 border-primary-500 border-t-2 p-6">
      <AnimatedGroup
        className="flex items-center gap-3"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delay: 0.2,
              },
            },
          },
          item: {
            hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.3,
              },
            },
          },
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton className="h-2 w-20 rounded-full bg-primary-300/30" key={index} />
        ))}
      </AnimatedGroup>

      <AnimatedGroup
        className="space-y-3"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delay: 0.4,
              },
            },
          },
          item: {
            hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.3,
              },
            },
          },
        }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div className="flex items-center gap-3" key={index}>
            <Skeleton className="size-4 rounded-sm bg-primary-300/20" />
            <Skeleton className="h-1.5 w-1/5 rounded-full bg-primary-300/20" />
            <Skeleton className="h-1.5 w-1/3 rounded-full bg-primary-300/20" />
            <Skeleton className="h-1.5 w-1/6 rounded-full bg-primary-300/20" />
          </div>
        ))}
      </AnimatedGroup>
    </div>
  );
};
