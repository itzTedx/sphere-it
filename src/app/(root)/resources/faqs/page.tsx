import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/radix/accordion";

import { IconSupport } from "@/assets/icons";

import { FAQS } from "@/data/faqs";

export default function FaqsPage() {
  return (
    <main>
      <section className="relative z-10 border-b bg-card py-6 sm:py-9 md:py-12 lg:py-16">
        <header className="container max-w-7xl space-y-3">
          <Badge showDashes>
            <IconSupport /> FAQs
          </Badge>
          <h1 className="text-primary-900 text-title-2">
            <span className="text-primary-600">Have Questions?</span>
            <br />
            Here's what we hear often
          </h1>
        </header>
      </section>
      <div className="mt-16 mb-32 space-y-12">
        {FAQS.map((faq) => (
          <section className="gap-6 border-y" key={faq.category}>
            <div className="container grid max-w-7xl grid-cols-2 py-6">
              <h2 className="text-primary-900 text-title-4">{faq.category}</h2>
              <Accordion type="multiple">
                {faq.faqs.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-lg">{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        ))}
      </div>

      <Cta
        badge="Contact Us"
        buttonText="Ask Question"
        description="Our team is here to help. Get in touch with us and we'll respond as soon as possible."
        showForm
        title="Couldn't find the answer you're looking for?"
      />
    </main>
  );
}
