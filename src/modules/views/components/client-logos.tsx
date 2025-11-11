"use client";

import { useMemo } from "react";

import { LogoCarousel } from "@/components/ui/logo-carousel";

import { CLIENTS } from "@/data/constants";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface Props {
  columns?: number;
  containerClassName?: string;
}

// Fisher-Yates shuffle algorithm for proper randomization
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const ClientLogos = ({ columns = 2, containerClassName }: Props) => {
  const isMobile = useIsMobile();

  // Memoize shuffled logos to prevent re-shuffling on every render
  const shuffledLogos = useMemo(() => shuffleArray(CLIENTS), []);

  return Array.from({ length: columns }, (_, i) => (
    <LogoCarousel
      className="transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs"
      columns={isMobile ? 3 : 4}
      containerClassName={containerClassName}
      key={i}
      logos={shuffledLogos}
    />
  ));
};
