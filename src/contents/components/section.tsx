import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => {
  return <section className={cn("container max-w-7xl", className)}>{children}</section>;
};
