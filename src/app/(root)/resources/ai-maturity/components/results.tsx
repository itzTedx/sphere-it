"use client";

import { CheckCircle2, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import type { MaturityResult } from "@/modules/form/validators/ai-maturity-schema";

interface ResultsProps {
  result: MaturityResult;
  userName?: string;
  className?: string;
}

const MATURITY_COLORS = {
  Foundation: {
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    ring: "ring-amber-500/20",
    text: "text-amber-700",
  },
  Developing: {
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    ring: "ring-blue-500/20",
    text: "text-blue-700",
  },
  Progressive: {
    badge: "bg-purple-100 text-purple-700 border-purple-200",
    ring: "ring-purple-500/20",
    text: "text-purple-700",
  },
  Advanced: {
    badge: "bg-green-100 text-green-700 border-green-200",
    ring: "ring-green-500/20",
    text: "text-green-700",
  },
} as const;

export function Results({ result, userName, className }: ResultsProps) {
  const colors = MATURITY_COLORS[result.level];

  return (
    <Card className={cn("border-stone-200", colors.ring, "ring-4", className)}>
      <CardHeader className="p-6 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary-50">
          <TrendingUp className={cn("size-8", colors.text)} />
        </div>
        {userName && (
          <CardTitle className="text-base text-title-5 md:text-title-4 xl:text-title-3">
            Thank you, <span className="text-primary-700">{userName}!</span>
          </CardTitle>
        )}
        <div className="space-y-2">
          <CardDescription className="text-2xl text-primary-900 md:text-3xl xl:text-2xl">
            Your AI Maturity Assessment
          </CardDescription>
          <div className="flex items-center justify-center gap-3">
            <Badge className={cn("text-sm", colors.badge)} variant="secondary">
              {result.level}
            </Badge>
            <span className="font-semibold text-lg text-stone-600">{result.percentage}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border bg-stone-50 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary-600" />
              <h3 className="font-semibold text-lg text-stone-900">Assessment Summary</h3>
            </div>
            <p className="text-stone-700 leading-relaxed">{result.description}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-card p-4">
            <div className="text-muted-foreground text-sm">Total Score</div>
            <div className="font-bold text-2xl text-primary-900">{result.totalScore}</div>
            <div className="text-muted-foreground text-xs">out of 75</div>
          </div>
          <div className="rounded-lg border border-stone-200 bg-card p-4">
            <div className="text-muted-foreground text-sm">Readiness Percentage</div>
            <div className="font-bold text-2xl text-primary-900">{result.percentage}%</div>
            <div className="text-muted-foreground text-xs">
              {result.percentage <= 30
                ? "Early stage"
                : result.percentage <= 50
                  ? "Some progress"
                  : result.percentage <= 75
                    ? "On the right path"
                    : "Well embedded"}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-primary-200 bg-primary-50 p-4">
          <p className="text-primary-900 text-sm leading-relaxed">
            <strong>Note:</strong> Lower scores indicate higher maturity. Your score of {result.totalScore} (
            {result.percentage}%) places you in the <strong>{result.level}</strong> category.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
