import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { EnquiryForm } from "@/modules/form/enquiry-form";

export const InquiryModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="group relative overflow-hidden">
          Get in touch
          <div className="-translate-x-20 absolute z-50 h-[150%] w-9 rotate-12 bg-gradient-to-r from-transparent via-primary-300/20 to-transparent mix-blend-plus-lighter transition-transform duration-300 ease-out group-hover:translate-x-20" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <span className="font-mono text-accent text-badge uppercase">General Inquiries</span>
          <DialogTitle>Shall we talk</DialogTitle>
          <DialogDescription>
            Fill in your details our team will contact you to understand your needs and present Sphere solutions
          </DialogDescription>
        </DialogHeader>

        <div>
          <EnquiryForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
