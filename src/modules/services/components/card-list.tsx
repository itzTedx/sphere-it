import { Children, cloneElement, isValidElement } from "react";

import { IconBox } from "@/components/icon-box";
import { Card as CardContainer } from "@/components/ui/card";

import { IconCheckmark } from "@/assets/icons";

import { cn } from "@/lib/utils";

export const CardGroup = ({ className, cols = 2, ...props }: React.ComponentProps<"div"> & { cols?: 2 | 3 }) => {
  return (
    <div
      className={cn(
        "not-prose grid",
        cols === 2 ? "gap-6 sm:grid-cols-2" : "gap-4 sm:grid-cols-2 md:grid-cols-3",
        className
      )}
      {...props}
    />
  );
};

export function Card({
  className,
  variant = "card",
  ...props
}: React.ComponentProps<typeof CardContainer> & { variant?: "outlined" | "card" }) {
  if (variant === "outlined")
    return (
      <div
        className={cn(
          "card rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.5))] bg-stone-alpha-10 p-1.5 shadow-sm transition-all hover:shadow-md",
          className
        )}
      >
        <div className="h-full space-y-3 rounded-xl bg-card p-4 shadow-sm sm:p-6" {...props} />
      </div>
    );

  return <CardContainer className={cn("space-y-6 rounded-3xl p-6 shadow-md", className)} {...props} />;
}

export function CardIcon({ icon }: { icon: React.ReactNode }) {
  return <IconBox state="active">{icon}</IconBox>;
}

interface CardContentProps {
  title?: string;
  description?: string;
}

export function CardContent({ title, description }: CardContentProps) {
  return (
    <div>
      {title && <h3 className="text-primary-900 text-title-5">{title}</h3>}
      {description && <p className="text-base text-stone-800 tracking-tight sm:text-lg">{description}</p>}
    </div>
  );
}

export function ListCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="card h-fit overflow-hidden rounded-xl border-t-2 border-t-accent bg-card shadow-sm transition-[scale_shadow] hover:shadow-md">
      {children}
    </div>
  );
}

export function ListCardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 border-b p-3 text-center md:p-6 [&>h3]:text-title-5">
      {children}
    </div>
  );
}

export function ListCardContent({ children }: { children: React.ReactNode }) {
  // Check if children contains a list (ul element)
  const hasList = Children.toArray(children).some((child) => isValidElement(child) && child.type === "ul");

  // Transform children to add checkmarks to list items
  const transformedChildren = hasList
    ? Children.map(children, (child) => {
        if (isValidElement<React.HTMLProps<HTMLUListElement>>(child) && child.type === "ul") {
          // Clone the ul and transform its li children
          const ulProps = child.props as React.HTMLProps<HTMLUListElement>;
          return cloneElement<React.HTMLProps<HTMLUListElement>>(child, {
            className: cn("not-prose space-y-2", ulProps.className),
            children: Children.map(ulProps.children, (li) => {
              if (isValidElement<React.HTMLProps<HTMLLIElement>>(li) && li.type === "li") {
                const liProps = li.props as React.HTMLProps<HTMLLIElement>;
                return cloneElement<React.HTMLProps<HTMLLIElement>>(li, {
                  className: cn("flex items-start gap-3", liProps.className),
                  children: (
                    <>
                      <IconCheckmark aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-primary-600" />
                      <span className="leading-relaxed">{liProps.children}</span>
                    </>
                  ),
                });
              }
              return li;
            }),
          });
        }
        return child;
      })
    : children;

  return <div className="bg-muted/50 p-3 md:p-6">{transformedChildren}</div>;
}
