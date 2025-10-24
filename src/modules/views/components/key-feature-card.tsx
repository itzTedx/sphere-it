import { IconBox } from "@/components/icon-box";

import { KeyFeature } from "@/app/(root)/services/data/services";

export const KeyFeatureCard = ({ data }: { data: KeyFeature }) => {
  return (
    <li
      className="card rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.5))] bg-stone-alpha-10 p-1.5 shadow-sm transition-all hover:shadow-md"
      key={data.id}
    >
      <div className="h-full rounded-xl bg-card p-6 shadow-sm">
        <IconBox state="active">
          <data.Icon />
        </IconBox>
        <div className="mt-6">
          <h2 className="mb-3 font-display text-primary-800 text-subhead-lg">{data.title}</h2>
          <p
            className="text-justify text-muted-foreground text-sm"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </li>
  );
};
