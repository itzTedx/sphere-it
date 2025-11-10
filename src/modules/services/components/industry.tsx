import { IconBox } from "@/components/icon-box";

import { IconBank, IconBriefcase } from "@/assets/icons";
import { IconBuilding } from "@/assets/icons/building";
import { IconCoins } from "@/assets/icons/coins";
import { IconShield } from "@/assets/icons/shield";

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Retail Banking": IconBank,
  "Corp Banking": IconBriefcase,
  "Corporate Banking": IconBriefcase,
  "Wealth Management": IconCoins,
  Insurance: IconShield,
  Conglomerates: IconBuilding,
  "Government Entities": IconBank,
  Government: IconBank,
};

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node.trim();
  }
  if (typeof node === "number") {
    return String(node).trim();
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join(" ").trim();
  }
  if (node && typeof node === "object" && "props" in node) {
    const props = node.props as { children?: React.ReactNode };
    return extractText(props.children);
  }
  return "";
}

function getIndustryIcon(industryName: React.ReactNode): React.ComponentType<{ className?: string }> {
  const name = extractText(industryName);
  return industryIconMap[name] || IconBank;
}

export function Industry({ children }: { children: React.ReactNode }) {
  const Icon = getIndustryIcon(children);

  return (
    <div className="not-prose flex flex-col items-center justify-center gap-4">
      <IconBox>
        <Icon />
      </IconBox>
      <h4>{children}</h4>
    </div>
  );
}
