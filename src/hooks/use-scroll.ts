import { useEffect, useState } from "react";

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollTop) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollTop) {
        setScrollDirection("up");
      }
      setLastScrollTop(currentScrollY <= 0 ? 0 : currentScrollY); // Ensure lastScrollTop is never negative
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]); // Re-run effect when lastScrollTop changes to update direction

  return { scrollY, scrollDirection };
}
