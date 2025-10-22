"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

// Define types
interface Logo {
  id: number;
  name: string;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

// Main component
export function LogoCarousel({
  columns = 2,
  logos,
  className,
}: {
  columns?: number;
  logos: Logo[];
  className?: string;
}) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      // Ensure equal length columns
      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [columns]
  );

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex justify-center gap-2 py-2 md:gap-4 md:py-4", className)}>
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn columnIndex={index} currentTime={time} key={index} logos={columnLogos} />
      ))}
    </div>
  );
}

// Column component
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 3000;
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative aspect-16/6 w-32 overflow-hidden md:w-36"
      initial={{ opacity: 0, y: 20 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="absolute inset-0 flex items-center justify-center"
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
          initial={{ y: "10%", opacity: 0 }}
          key={`${currentLogo.id}-${currentIndex}`}
        >
          <Image
            alt={currentLogo.name}
            className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
            height={40}
            src={currentLogo.src}
            width={120}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
