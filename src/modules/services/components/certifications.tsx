import Image from "next/image";

import { IconCheckmark } from "@/assets/icons";

interface Props {
  icon: string;
  title: string;
}
export function Certificate({ icon, title }: Props) {
  const isIcon = icon.startsWith("/svg");
  return (
    <div>
      <div className="flex aspect-square items-center justify-center rounded-3xl bg-background">
        {isIcon ? (
          <div className="relative size-20">
            <Image alt="Certificate" className="object-contain" fill src={icon} />
          </div>
        ) : (
          <span className="flex size-20 items-center justify-center text-center font-display font-medium text-sm leading-tight">
            {icon}
          </span>
        )}
      </div>
      <CertificateTitle title={title} />
    </div>
  );
}

export function CertificateTitle({ title }: { title: string }) {
  return (
    <div className="flex gap-2 px-1 py-2">
      <IconCheckmark className="size-3.5 shrink-0" />
      <h4 className="text-balance text-xs">{title}</h4>
    </div>
  );
}
