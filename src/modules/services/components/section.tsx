import { cn } from "@/lib/utils";

export const Section = ({ children, className }: React.ComponentProps<"section">) => {
  return <section className={cn("container max-w-7xl py-12", className)}>{children}</section>;
};
