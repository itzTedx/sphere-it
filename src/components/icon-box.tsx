import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  state?: "active" | "ghost";
}

export const IconBox = ({ children, className, state = "ghost" }: Props) => {
  return (
    <div
      className={cn(
        "relative flex size-10 items-center justify-center rounded-full border p-1",
        state === "active" ? "bg-primary-100 text-primary-500" : "bg-card",
        className
      )}
    >
      <div className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-stone-100/20 [&>svg]:relative [&>svg]:z-10 [&>svg]:shrink-0">
        {children}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-1 h-1/2 bg-gradient-to-t to-transparent transition group-hover:from-primary-500/20",
            state === "active" ? "from-primary-500/20" : "from-background"
          )}
        />
        <div className="mask-radial-at-center mask-radial-from-20% mask-radial-to-0 absolute inset-0">
          <LineGrid className={cn("group-hover:text-primary-500", state === "active" && "text-primary-500")} />
        </div>
      </div>
    </div>
  );
};

function LineGrid(props: SVGProps) {
  return (
    <svg {...props} fill="none" height="93" viewBox="0 0 93 93" width="93" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M92.4286 18.8857V0.5H74.0429M92.4286 18.8857V37.2714M92.4286 18.8857H74.0429M74.0429 0.5V18.8857M74.0429 0.5H55.6571M92.4286 37.2714V55.6571M92.4286 37.2714H74.0429M74.0429 18.8857V37.2714M74.0429 18.8857H55.6571M92.4286 55.6571V74.0429M92.4286 55.6571H74.0429M74.0429 37.2714V55.6571M74.0429 37.2714H55.6571M92.4286 74.0429V92.4286H74.0429M92.4286 74.0429H74.0429M74.0429 55.6571V74.0429M74.0429 55.6571H55.6571M74.0429 92.4286V74.0429M74.0429 92.4286H55.6571M74.0429 74.0429H55.6571M55.6571 0.5V18.8857M55.6571 0.5H37.2714M55.6571 18.8857V37.2714M55.6571 18.8857H37.2714M55.6571 37.2714V55.6571M55.6571 37.2714H37.2714M55.6571 55.6571V74.0429M55.6571 55.6571H37.2714M55.6571 74.0429V92.4286M55.6571 74.0429H37.2714M55.6571 92.4286H37.2714M37.2714 0.5V18.8857M37.2714 0.5H18.8857M37.2714 18.8857V37.2714M37.2714 18.8857H18.8857M37.2714 37.2714V55.6571M37.2714 37.2714H18.8857M37.2714 55.6571V74.0429M37.2714 55.6571H18.8857M37.2714 74.0429V92.4286M37.2714 74.0429H18.8857M37.2714 92.4286H18.8857M18.8857 0.5V18.8857M18.8857 0.5H0.5V18.8857M18.8857 18.8857V37.2714M18.8857 18.8857H0.5M18.8857 37.2714V55.6571M18.8857 37.2714H0.5M18.8857 55.6571V74.0429M18.8857 55.6571H0.5M18.8857 74.0429V92.4286M18.8857 74.0429H0.5M18.8857 92.4286H0.5V74.0429M0.5 18.8857V37.2714M0.5 37.2714V55.6571M0.5 55.6571V74.0429"
        stroke="currentColor"
        strokeOpacity="0.18"
      />
    </svg>
  );
}
