import LogoLoop from "@/components/ui/base/logo-carousel";

import { IconBank, IconBriefcase } from "@/assets/icons";
import { IconBuilding } from "@/assets/icons/building";
import { IconCoins } from "@/assets/icons/coins";
import { IconShield } from "@/assets/icons/shield";

const techLogos = [
  { node: <IconBank className="size-5" />, title: "Retail Banking" },
  { node: <IconBriefcase className="size-5" />, title: "Corporate Banking" },
  { node: <IconCoins className="size-5" />, title: "Wealth Management" },
  { node: <IconShield className="size-5" />, title: "Insurance" },
  { node: <IconBuilding className="size-5" />, title: "Conglomerates" },
  { node: <IconBank className="size-5" />, title: "Government" },
];

export const Industries = () => {
  return (
    <section className="container max-w-7xl space-y-7 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <h2 className="text-primary-900 text-title-4">Industries we Support</h2>
        <p className="text-balance text-base text-muted-foreground">
          We deliver technology and digital transformation solutions across sectors where precision, compliance, and
          reliability define success.
        </p>
      </div>
      <div className="relative">
        <LogoLoop
          ariaLabel="Technology partners"
          direction="left"
          fadeOut
          fadeOutColor="#FCFAF7"
          gap={24}
          logoHeight={48}
          logos={techLogos}
          pauseOnHover
          scaleOnHover
          speed={60}
        />
      </div>
    </section>
  );
};
