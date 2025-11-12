"use client";

import { parseAsBoolean, useQueryState } from "nuqs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { IconPdf } from "@/assets/icons";

import { DeckForm } from "@/modules/form/deck-form";

export const DownloadDeck = () => {
  const [form, setForm] = useQueryState("download", parseAsBoolean.withDefault(false));

  return (
    <>
      <Button className="bg-stone-200/30 text-stone-700" onClick={() => setForm(true)} variant="ghost">
        View Our Intro Deck
        <span
          aria-hidden="true"
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50"
        >
          <IconPdf aria-hidden="true" className="text-accent" />
        </span>
      </Button>
      <Dialog onOpenChange={setForm} open={form}>
        <DialogContent>
          <DialogHeader>
            <Badge variant="ghost">Intro Deck</Badge>

            <DialogTitle>Download Our Intro Deck</DialogTitle>
            <DialogDescription>
              Enter your details to download our intro deck and discover how Sphere IT Global can help your business.
            </DialogDescription>
          </DialogHeader>

          <div>
            <DeckForm onSuccess={() => setForm(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
