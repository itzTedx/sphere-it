import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "./ui/field";

const options = [
  {
    label: "Social Media",
    value: "social-media",
  },

  {
    label: "Search Engine",
    value: "search-engine",
  },
  {
    label: "Referral",
    value: "referral",
  },
  {
    label: "Other",
    value: "other",
  },
];

export function FieldHear() {
  return (
    <Card className="py-4 shadow-none">
      <CardContent className="px-4">
        <form>
          <FieldGroup>
            <FieldSet className="gap-4">
              <FieldLegend>How did you hear about us?</FieldLegend>
              <FieldDescription className="line-clamp-1">
                Select the option that best describes how you heard about us.
              </FieldDescription>
              <FieldGroup className="flex flex-row flex-wrap gap-2 [--radius:9999rem]">
                {options.map((option) => (
                  <FieldLabel className="!w-fit" htmlFor={option.value} key={option.value}>
                    <Field
                      className="!px-3 !py-1.5 group-has-data-[state=checked]/field-label:!px-2 gap-1.5 overflow-hidden transition-all duration-100 ease-linear"
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
                ))}
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
