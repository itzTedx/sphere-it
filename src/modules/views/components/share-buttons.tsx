"use client";

import { Button } from "@/components/ui/button";

import { IconLink, IconSocialLinkedin, IconSocialX } from "@/assets/icons";

import { CopyButton } from "@/modules/form/components/copy-button";

interface ShareButtonsProps {
  url: string;
  title?: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = title ? encodeURIComponent(title) : "";

  function handleLinkedInShare() {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  }

  function handleTwitterShare() {
    const shareText = encodedTitle ? encodeURIComponent(`We're hiring! ${title} - Check out this opportunity:`) : "";
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}${shareText ? `&text=${shareText}` : ""}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  }

  return (
    <div className="inline-flex gap-3">
      <CopyButton Icon={IconLink} size="icon" text={url} variant="outline" />
      <Button aria-label="Share on Twitter" onClick={handleTwitterShare} size="icon" type="button" variant="outline">
        <IconSocialX />
      </Button>
      <Button aria-label="Share on LinkedIn" onClick={handleLinkedInShare} size="icon" type="button" variant="outline">
        <IconSocialLinkedin />
      </Button>
    </div>
  );
}
