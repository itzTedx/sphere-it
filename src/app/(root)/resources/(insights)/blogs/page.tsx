import Image from "next/image";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { TabsContent } from "@/components/ui/tabs";

import { IconChevronDown, IconChevronRight } from "@/assets/icons";
import { IconSearch } from "@/assets/icons/search";

import { cn } from "@/lib/utils";

export default function BlogsPage() {
  return (
    <TabsContent value="/resources/blogs">
      <div className="container grid max-w-7xl grid-cols-4 gap-8">
        <aside className="sticky top-16 max-h-fit py-6">
          <InputGroup>
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon align="inline-end">
              <IconSearch />
            </InputGroupAddon>
          </InputGroup>
        </aside>
        <main className="col-span-3 mb-12">
          <article className="grid grid-cols-3 gap-4 py-6">
            <BlogCard className="col-span-full" />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </article>
          <div className="flex items-center justify-center">
            <Button variant="ghost">
              Load More{" "}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
                <IconChevronDown className="text-stone-500" />
              </span>
            </Button>
          </div>
        </main>
      </div>
      <Cta />
    </TabsContent>
  );
}

export function BlogCard({ className, ...props }: React.ComponentProps<typeof Card>) {
  return (
    <div className={cn("@container", className)} {...props}>
      <Card className={cn("card grid @sm:grid-cols-2")}>
        <CardContent className="@sm:order-1 order-2 flex flex-col justify-between gap-2 @sm:p-6 p-3">
          <div className="@sm:order-1 order-2 space-y-2.5">
            <CardTitle className="font-semibold @sm:text-title-5 text-primary-900 @sm:xl:text-title-4">
              Digital Transformation at Mashreq Bank, UAE
            </CardTitle>
            <CardDescription className="@max-sm:hidden @sm:xl:text-lg">
              Stay ahead with fresh perspectives, expert insights, and stories that inspire.
            </CardDescription>
            <Button className="group/link @max-sm:hidden text-accent" size="sm" variant="link">
              Read More{" "}
              <IconChevronRight className="size-3 translate-y-1 text-accent opacity-0 transition-all duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100 motion-reduce:transition-none" />
            </Button>
          </div>
          <div className="@sm:order-2 order-1 flex items-center justify-between">
            <Badge variant="secondary">Consultancy</Badge>
            <Badge className="@max-sm:hidden bg-muted text-muted-foreground shadow-none">Sep 12, 2025</Badge>
          </div>
        </CardContent>
        <div className="relative @sm:order-2 order-1 flex aspect-4/3 items-end justify-end overflow-hidden rounded-xl p-4 @sm:shadow-md">
          <Image alt="" className="object-cover" fill src="/images/blogs/banking.jpg" />
          <Badge className="z-10 @sm:hidden bg-stone-700/80 px-2 text-muted shadow-none backdrop-blur-lg">
            Sep 12, 2025
          </Badge>
        </div>
      </Card>
    </div>
  );
}
