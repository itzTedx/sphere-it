import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "card flex flex-col overflow-hidden rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*2))] border bg-card p-2 text-card-foreground shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:shadow-md",
        className
      )}
      data-slot="card"
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-2",
        className
      )}
      data-slot="card-header"
      {...props}
    />
  );
}

function CardMedia({ className, ...props }: React.ComponentProps<typeof Image> & { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <Image {...props} className="object-cover" fill />
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-title-6", className)} data-slot="card-title" {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-muted-foreground text-sm", className)} data-slot="card-description" {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      data-slot="card-action"
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-4", className)} data-slot="card-content" {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center px-2 [.border-t]:pt-2", className)} data-slot="card-footer" {...props} />
  );
}

export { Card, CardHeader, CardFooter, CardMedia, CardTitle, CardAction, CardDescription, CardContent };
