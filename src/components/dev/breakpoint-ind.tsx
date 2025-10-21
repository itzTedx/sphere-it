import { cn } from "@/lib/utils";

const BreakpointIndicator = ({ className }: { className?: string }) => {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <div
      className={cn(
        "fixed right-1 bottom-1 z-50 flex size-7 items-center justify-center rounded-full border bg-stone-500/15 p-1",
        className
      )}
    >
      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-card font-bold font-mono text-[10px] text-primary-800 uppercase shadow-sm">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    </div>
  );
};
export { BreakpointIndicator };
