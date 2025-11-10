import { Badge } from "@/components/ui/badge";

import { EnquiryForm } from "@/modules/form/enquiry-form";

export function ContactFormSection() {
  return (
    <section className="container grid max-w-7xl gap-8 pb-16 sm:gap-12 sm:pb-24 lg:grid-cols-2" id="main-content">
      <div className="space-y-3 lg:sticky lg:top-[11vh] lg:h-fit">
        <h2 className="text-primary-900 text-title-2">Accelerate Your Growth with Sphere IT Global Solutions</h2>
        <p className="text-base text-stone-600 sm:text-lg">
          Whether it's IT consulting, project management, or custom solutions, our specialists are here to guide you
          every step of the way.
        </p>
      </div>
      <div className="rounded-2xl bg-card p-6 sm:p-10">
        <div className="mb-6">
          <Badge variant="ghost">General Inquiries</Badge>
          <h3 className="text-primary-800 text-title-3">Shall we talk</h3>
          <p className="text-base text-stone-500 sm:text-lg">
            Fill in your details our team will contact you to understand your needs and present Sphere solutions
          </p>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
