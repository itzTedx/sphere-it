"use client";

import { useEffect, useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { IconCheckmark, IconCopy } from "@/assets/icons";

import { cn } from "@/lib/utils";

interface Props {
  text: string;
  Icon?: React.ComponentType<SVGProps>;
}

export const CopyButton = ({
  text,
  className,
  Icon = IconCopy,
  ...props
}: React.ComponentProps<typeof Button> & Props) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  async function handleCopy() {
    try {
      if (!copied) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success("Copied to clipboard", {
          description: "The text has been copied successfully.",
          position: "bottom-center",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy", {
        description: "Unable to copy text to clipboard. Please try again.",
      });
    }
  }

  return (
    <Button
      aria-label={copied ? "Copied to clipboard" : "Copy link to clipboard"}
      className={cn("group relative inline-block transition-colors", copied && "bg-emerald-100", className)}
      onClick={handleCopy}
      type="button"
      {...props}
    >
      <Icon
        aria-hidden="true"
        className={cn(
          "m-auto text-stone-400 transition-all duration-300 group-hover:text-stone-100",
          copied ? "slide-out-to-top fade-out-0 animate-out opacity-0" : "slide-in-from-bottom fade-in-0 animate-in"
        )}
      />
      <IconCheckmark
        aria-hidden="true"
        className={cn(
          "absolute inset-0 m-auto text-green-600 transition-all duration-300",
          copied
            ? "slide-in-from-bottom fade-in-0 animate-in"
            : "fade-out-0 slide-out-to-top pointer-events-none animate-out opacity-0"
        )}
      />
    </Button>
  );
};
