"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContainer,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  IconCheckmark,
  IconCopy,
  IconEmail,
  IconLink,
  IconShare,
  IconSocialLinkedin,
  IconSocialX,
} from "@/assets/icons";
import { LogoIcon } from "@/assets/logo";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn, shareViaEmail } from "@/lib/utils";
import { CopyButton } from "@/modules/form/components/copy-button";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const description = `We're hiring! ${title} - Check out this opportunity:`;

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = title ? encodeURIComponent(title) : "";

  function handleLinkedInShare() {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  }

  const handleEmailShare = () => {
    shareViaEmail(title, `${description}\n\n${url}`);
  };

  function handleTwitterShare() {
    const shareText = encodedTitle ? encodeURIComponent(description) : "";
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}${shareText ? `&text=${shareText}` : ""}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  }

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <IconShare />
            <span className="hidden md:block">Share</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="top-2 bottom-auto overflow-hidden bg-background">
          <div className="rounded-b-xl border-b bg-card pb-6">
            <SheetHeader className="items-center">
              <div className="flex size-11 items-center justify-center rounded-lg border border-brand-400 bg-gradient-to-b from-brand-500 to-brand-600 shadow-brand-lg">
                <LogoIcon className="size-7 text-brand-50" />
              </div>
              <SheetTitle>Share {title}</SheetTitle>
              <SheetDescription className="sr-only">Professional IT Services</SheetDescription>
            </SheetHeader>
            <SheetContainer>
              <div>
                <h3 className="mb-1 font-medium text-muted-foreground text-sm">Share link</h3>
                <div className="relative">
                  <Input className="rounded-full pe-8" defaultValue={url} readOnly ref={inputRef} type="text" />
                  <CopyButton
                    className="absolute inset-y-0.5 end-1 border-none shadow-none"
                    Icon={IconLink}
                    size="icon"
                    text={url}
                    variant="outline"
                  />
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-medium text-muted-foreground text-sm">Share to</h4>
                <ul className="grid grid-cols-4 gap-2" role="list">
                  <li role="listitem">
                    <Button
                      aria-label="Share via email"
                      className="flex aspect-square size-full items-center justify-center rounded-lg bg-card text-gray-400 shadow-lg transition-[background-color_box-shadow_color] hover:text-gray-700 hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={handleEmailShare}
                      title="Share via email"
                      variant="ghost"
                    >
                      <IconEmail className="size-9" />
                    </Button>
                  </li>

                  <li role="listitem">
                    <Button
                      aria-label="Share on Twitter/X"
                      className="flex aspect-square size-full items-center justify-center rounded-lg bg-card text-gray-400 shadow-lg transition-[background-color_box-shadow_color] hover:text-gray-700 hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={handleTwitterShare}
                      title="Share on Twitter/X"
                      variant="ghost"
                    >
                      <IconSocialX className="size-9" />
                    </Button>
                  </li>

                  <li role="listitem">
                    <Button
                      aria-label="Share on Twitter/X"
                      className="flex aspect-square size-full items-center justify-center rounded-lg bg-card text-gray-400 shadow-lg transition-[background-color_box-shadow_color] hover:text-gray-700 hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={handleLinkedInShare}
                      title="Share on LinkedIn"
                      variant="ghost"
                    >
                      <IconSocialLinkedin className="size-9" />
                    </Button>
                  </li>
                </ul>
              </div>
            </SheetContainer>
          </div>
          <SheetFooter className="pt-0">
            <div className="flex items-center justify-between">
              <Button onClick={handleCopy}>
                <div className="relative">
                  <div className={cn("transition-all", copied ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
                    <IconCheckmark aria-hidden="true" className="stroke-emerald-600" />
                  </div>
                  <div
                    className={cn(
                      "absolute inset-0 transition-all",
                      copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    )}
                  >
                    <IconCopy aria-hidden="true" className="size-4" />
                  </div>
                </div>
                Copy Link
              </Button>
              <SheetClose asChild>
                <Button variant="outline">Done</Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="inline-flex gap-3">
      <CopyButton Icon={IconLink} size="icon" text={url} variant="outline" />
      <Button aria-label="Share on Twitter" onClick={handleTwitterShare} size="icon" type="button" variant="outline">
        <IconSocialX aria-hidden="true" />
      </Button>
      <Button aria-label="Share on LinkedIn" onClick={handleLinkedInShare} size="icon" type="button" variant="outline">
        <IconSocialLinkedin aria-hidden="true" />
      </Button>
    </div>
  );
}
