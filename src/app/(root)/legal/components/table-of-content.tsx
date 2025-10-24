"use client";

import { useEffect, useRef, useState } from "react";
import type { Route } from "next";
import Link from "next/link";

import { TableOfContents } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { TableOfContentSkeleton } from "./table-of-content-skeleton";

interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

interface Props {
  className?: string;
}

export const TableOfContent = ({ className }: Props) => {
  const [headings, setHeadings] = useState<TableOfContentItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeItemPosition, setActiveItemPosition] = useState({ top: 0, height: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const OFFSET = 12;

  useEffect(() => {
    const updateActiveItemPosition = (id: string) => {
      if (!navRef.current) return;

      const activeElement = navRef.current.querySelector(`a[href="#${id}"]`);
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setActiveItemPosition({
          top: rect.top - navRect.top + OFFSET / 2,
          height: rect.height - OFFSET,
        });
      }
    };
    // Extract headings with IDs from the page, excluding footer headings
    const headingElements = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
    const filteredHeadings = Array.from(headingElements).filter(
      (heading) => !heading.closest("footer") && !heading.id.startsWith("footer-heading-")
    );
    const headingList: TableOfContentItem[] = filteredHeadings.map((heading) => ({
      id: heading.id,
      title: heading.textContent || "",
      level: Number.parseInt(heading.tagName.charAt(1), 10),
    }));

    setHeadings(headingList);
    setIsLoading(false);

    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            updateActiveItemPosition(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    filteredHeadings.forEach((heading) => observer.observe(heading));

    return () => {
      filteredHeadings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (isLoading) {
    return <TableOfContentSkeleton />;
  }

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside
      className={cn("mt-12 h-fit overflow-hidden rounded-xl border bg-stone-50 md:sticky md:top-[10vh]", className)}
    >
      <div className="flex items-center gap-2 bg-card p-3">
        <TableOfContents className="size-3 text-muted-foreground" />
        <span className="font-display text-muted-foreground text-subhead-sm">On this page</span>
      </div>
      <nav className="relative p-3" ref={navRef}>
        {/* Animated line indicator */}
        {activeId && (
          <motion.div
            animate={{
              top: activeItemPosition.top,
              height: activeItemPosition.height,
            }}
            className="absolute left-0 w-0.5 rounded-full bg-accent"
            initial={{
              height: 0,
            }}
            style={{
              left: "12px", // Position to align with the border
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <Link
                aria-label={`Jump to ${heading.title}`}
                className={cn(
                  "ml-px block border-stone-500/5 border-l-2 px-2 py-1 font-display text-sm transition-all hover:bg-stone-100",
                  activeId === heading.id ? "font-semibold text-stone-900" : "text-stone-600"
                )}
                href={`#${heading.id}` as Route}
                style={{ paddingLeft: `${(heading.level - 1) * 12 + 8}px` }}
                title={`Jump to ${heading.title}`}
              >
                {heading.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
