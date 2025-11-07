"use client";

import { useEffect, useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { IconCheckmark, IconCopy } from "@/assets/icons";

import { cn } from "@/lib/utils";

export const CopyButton = ({ text, className, ...props }: React.ComponentProps<typeof Button> & { text: string }) => {
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
      onClick={handleCopy}
      type="button"
      {...props}
      className={cn(
        "relative inline-block transition-colors",
        copied ? "bg-emerald-100" : "bg-stone-alpha-10",
        className
      )}
    >
      <IconCopy
        className={cn(
          "m-auto text-stone-400 transition-all duration-300",
          copied ? "slide-out-to-top fade-out-0 animate-out opacity-0" : "slide-in-from-bottom fade-in-0 animate-in"
        )}
      />
      <IconCheckmark
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
