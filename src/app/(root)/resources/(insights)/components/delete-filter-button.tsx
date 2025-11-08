import { AnimateIcon } from "@/components/ui/base/icon";
import { Button } from "@/components/ui/button";

import { IconTrash } from "@/assets/icons/trash";

export const ClearFilterButton = ({ ...props }: React.ComponentProps<typeof Button>) => {
  return (
    <AnimateIcon animateOnHover>
      <Button className="hover:text-accent" size="sm" variant="ghost" {...props}>
        <IconTrash /> Clear Filters
      </Button>
    </AnimateIcon>
  );
};
