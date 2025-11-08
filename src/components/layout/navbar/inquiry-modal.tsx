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
        <Button>Get in touch</Button>
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
