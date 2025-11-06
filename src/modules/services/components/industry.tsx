import { IconBox } from "@/components/icon-box";

import { IconPuzzle } from "@/assets/icons";

export function Industry({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose flex flex-col items-center justify-center gap-4">
      <IconBox>
        <IconPuzzle />
      </IconBox>
      <h4>{children}</h4>
    </div>
  );
}
