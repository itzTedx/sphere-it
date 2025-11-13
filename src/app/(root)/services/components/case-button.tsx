"use client";

import { Route } from "next";
import { useRouter } from "next/navigation";

import { parseAsBoolean, useQueryState } from "nuqs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { IconArrowRight } from "@/assets/icons";

import { submitDeckDownload } from "@/modules/form/actions/submit-deck-download";
import { DeckForm } from "@/modules/form/deck-form";
import { DeckType } from "@/modules/form/validators/deck-schema";

export const CaseButton = ({ children, href, ...props }: React.ComponentProps<typeof Button> & { href: Route }) => {
  const [form, setForm] = useQueryState("case-studies", parseAsBoolean.withDefault(false));
  const router = useRouter();

  async function handleSubmit(data: DeckType) {
    const result = await submitDeckDownload(data);
    if (result.success) {
      setForm(false);

      router.push(href);
    }

    return result;
  }
  return (
    <>
      <Button {...props} className="not-prose group" onClick={() => setForm(true)}>
        {children} <IconArrowRight className="transition-transform group-hover:translate-x-1" />
      </Button>
      <Dialog onOpenChange={setForm} open={form}>
        <DialogContent>
          <DialogHeader className="gap-0">
            <DialogTitle>
              <Badge variant="ghost">Case Studies</Badge>
            </DialogTitle>
            <DialogDescription>
              Discover how Sphere IT Global can help your business with our case studies.
            </DialogDescription>
          </DialogHeader>

          <div>
            <DeckForm buttonText="View Case Studies" onSubmit={handleSubmit} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
