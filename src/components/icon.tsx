import { JSX, SVGProps } from "react";

import * as Icons from "@/assets/icons";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
}

export function Icon({ name, ...props }: IconProps) {
  const Component = Icons[name] as (props: SVGProps<SVGSVGElement>) => JSX.Element;
  if (!Component) return null;
  return <Component {...props} />;
}
