"use client";

import { useEffect, useRef, useState } from "react";

import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

export function Counter({ children, metric }: { children: React.ReactNode; metric: string }) {
  const [number, setNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  const numericPart = metric.match(/^[\d.,]+/)?.[0] ?? "";
  const value = Number(numericPart.replace(/,/g, ""));
  const suffix = metric.replace(/^[\d.,]+/, "");

  useEffect(() => {
    if (isInView) {
      setNumber(value);
    }
  }, [isInView, value]);

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-6 font-display text-primary-600 text-xl" ref={ref}>
      <NumberFlow
        className="text-stone-700 text-title-2"
        spinTiming={{ duration: 1000, easing: "ease-in-out" }}
        suffix={suffix}
        value={number}
      />
      {children}
    </div>
  );
}
