"use client";

import type { RefObject } from "react";
import * as React from "react";

import NumberFlow from "@number-flow/react";
import { motion, type SpringOptions, useScroll, useSpring, useTransform } from "motion/react";

import { useMotionValueState } from "@/hooks/use-motion-value-state";
import { getStrictContext } from "@/lib/get-strict-context";
import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type ScrollProgressContextType = {
  progress: ReturnType<typeof useSpring>;
  progressValue: number;
  progressPercentage: number;
};

const [ScrollProgressProvider, useScrollProgress] =
  getStrictContext<ScrollProgressContextType>("ScrollProgressContext");

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export type ScrollProgressRootProps = {
  children: React.ReactNode;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLElement | null>;
};

export function ScrollProgressRoot({ children, springOptions, containerRef }: ScrollProgressRootProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  const progressValue = useMotionValueState(progress);
  const progressPercentage = Math.round(progressValue * 100);

  return (
    <ScrollProgressProvider value={{ progress, progressValue, progressPercentage }}>{children}</ScrollProgressProvider>
  );
}

export type ScrollProgressProps = {
  className?: string;
};

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { progress, progressPercentage } = useScrollProgress();

  const width = useTransform(progress, (value) => `${value * 100}%`);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className={cn("inset-x-0 top-0 h-1.5", className)}
          style={{
            width,
          }}
        />
      </TooltipTrigger>
      <TooltipContent>{progressPercentage}% Completed</TooltipContent>
    </Tooltip>
  );
}

type ScrollProgressIndicatorProps = {
  className?: string;
};

export function ScrollProgressIndicator({ className }: ScrollProgressIndicatorProps) {
  const { progressPercentage } = useScrollProgress();

  return (
    <NumberFlow
      className={cn("w-7 font-mono text-muted-background text-xs uppercase", className)}
      suffix="%"
      value={progressPercentage}
    />
  );
}

export { useScrollProgress, type ScrollProgressContextType };
