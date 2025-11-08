import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Field, FieldLabel, FieldTitle } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Switch, SwitchThumb } from "@/components/ui/switch";

import { IconChevronDown } from "@/assets/icons";
import { IconSearch } from "@/assets/icons/search";

import { ClearFilterButton } from "../components/delete-filter-button";

const options = [
  {
    label: "Announcement",
    value: "social-media",
    length: 102,
  },

  {
    label: "HR & People",
    value: "search-engine",
    length: 32,
  },
  {
    label: "Product Updates",
    value: "referral",
    length: 8,
  },
  {
    label: "Technology & Business",
    value: "other",
    length: 28,
  },
];

export const BlogsSidebar = () => {
  return (
    <aside className="sticky top-16 max-h-fit space-y-4 py-6">
      <InputGroup>
        <InputGroupInput placeholder="Search" />
        <InputGroupAddon align="inline-end">
          <IconSearch />
        </InputGroupAddon>
      </InputGroup>
      <div className="dashed-stroke" />
      <Collapsible className="overflow-hidden rounded-lg border bg-card/30" defaultOpen={true}>
        <CollapsibleTrigger className="[&[data-state=open]>svg]:-rotate-180 group flex w-full cursor-pointer items-center justify-between bg-card p-3 text-label text-stone-400">
          Categories
          <IconChevronDown className="size-3 transition-transform group-hover:scale-120 group-hover:text-stone-600" />
        </CollapsibleTrigger>
        <CollapsibleContent defaultOpen keepRendered>
          <div className="space-y-2 p-3 text-muted-foreground text-sm">
            {options.map((option) => (
              <div className="flex items-center justify-between" key={option.value}>
                <FieldLabel
                  className="!rounded-full !w-fit cursor-pointer overflow-hidden transition-colors hover:bg-muted"
                  htmlFor={option.value}
                >
                  <Field
                    className="!px-3 !py-1.5 group-has-data-[state=checked]/field-label:!px-2 gap-1.5 overflow-hidden transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:bg-card"
                    orientation="horizontal"
                  >
                    <Checkbox
                      className="-ml-6 -translate-x-1 rounded-full transition-all duration-100 ease-linear data-[state=checked]:ml-0 data-[state=checked]:translate-x-0"
                      defaultChecked={option.value === "social-media"}
                      id={option.value}
                      value={option.value}
                    />
                    <FieldTitle>{option.label}</FieldTitle>
                  </Field>
                </FieldLabel>
                <span className="font-mono text-badge text-muted-background">{option.length}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Label className="flex cursor-pointer items-center justify-between rounded-lg border bg-card p-3">
        <div className="flex items-center gap-x-2 font-display text-label text-stone-500">
          <Switch>
            <SwitchThumb />
          </Switch>
          Featured
        </div>
        <span className="font-mono text-badge text-muted-background">23</span>
      </Label>
      <div className="dashed-stroke" />
      <div className="flex items-center justify-between">
        <p className="text-stone-500 text-subhead-xs">192 out of 198 Results</p>
        <ClearFilterButton />
      </div>
    </aside>
  );
};
