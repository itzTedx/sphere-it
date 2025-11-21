import type { ComponentType, SVGProps } from "react";

import { IconSocialInstagram, IconSocialLinkedin, IconSocialWhatsapp } from "@/assets/icons/social";

interface SocialMediaItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  description: string;
}

const socialMedia: SocialMediaItem[] = [
  {
    icon: IconSocialLinkedin,
    title: "X",
    subtitle: "(Formerly Twitter)",
    description: "Stay updated with real-time updates, product launches, automation, and AI-driven transformation.",
  },
  {
    icon: IconSocialInstagram,
    title: "Instagram",
    description:
      "Connect with us on Instagram to explore our visual content, company updates, and behind-the-scenes insights.",
  },
  {
    icon: IconSocialWhatsapp,
    title: "WhatsApp",
    description: "Join our WhatsApp channel for instant updates, and announcements - delivered right to your chat.",
  },
];

export function SocialMediaSection() {
  return (
    <section className="container grid max-w-7xl gap-4 pb-16 sm:gap-6 sm:pb-24 md:grid-cols-2 lg:grid-cols-3">
      {socialMedia.map((item) => {
        const { icon: Icon, title, subtitle, description } = item;
        return (
          <article
            className={
              "card flex flex-col items-center justify-center gap-4 rounded-3xl bg-card px-4 py-8 shadow-md transition-all hover:shadow-lg sm:gap-6 sm:px-6 sm:py-10"
            }
            key={title}
          >
            <Icon className="size-12 text-stone-300 sm:size-14" />
            <div className="text-center">
              <h4 className="text-stone-700 text-subhead-lg">
                {title}
                {subtitle && <span className="font-normal text-sm text-stone-400 sm:text-base"> {subtitle}</span>}
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
