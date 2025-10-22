import { useEffect, useState } from "react";

interface UseScrollOptions {
  scrollDirThreshold?: number; // px to detect direction change
  scrollBgThreshold?: number; // px from top to trigger background
}

export function useScroll({ scrollDirThreshold = 10, scrollBgThreshold = 50 }: UseScrollOptions = {}) {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.pageYOffset;

      // 👉 Trigger background after a certain scroll distance
      setIsScrolled(scrollY > scrollBgThreshold);

      const diff = scrollY - lastScrollY;

      // 👉 Only update direction if passed direction threshold
      if (Math.abs(diff) >= scrollDirThreshold) {
        setScrollDir(diff > 0 ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirThreshold, scrollBgThreshold]);

  return { scrollDir, isScrolled };
}
