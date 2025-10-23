import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight, IconChevronDown } from "@/assets/icons";
import { IconCopy } from "@/assets/icons/copy";
import { IconSocialInstagram, IconSocialWhatsapp, IconSocialX } from "@/assets/icons/social";

import { EnquiryForm } from "@/modules/form/enquiry-form";

export default function ContactPage() {
  return (
    <main>
      <header className="container max-w-7xl py-28">
        <Badge showDashes>Contact us</Badge>
        <h1 className="text-primary-900 text-title-1">Here to help</h1>
        <section className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg bg-card px-10 py-12 shadow-md">
            <h2 className="text-stone-800 text-title-4">Support</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Whether you have questions about Sphere IT's offerings, partnerships, or just want to say hello!
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center justify-between rounded-xl bg-stone-alpha-10 p-3">
                <div>
                  <label className="font-mono text-badge text-muted-background uppercase" htmlFor="email">
                    Email
                  </label>
                  <p className="text-lg" id="email">
                    info@sphereitglobal.com
                  </p>
                </div>
                <button>
                  <IconCopy className="text-stone-400" />
                </button>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-stone-alpha-10 p-3">
                <div>
                  <label className="font-mono text-badge text-muted-background uppercase" htmlFor="email">
                    Form
                  </label>
                  <p className="text-lg" id="email">
                    Submit an inquiry
                  </p>
                </div>
                <button>
                  <IconArrowRight className="text-stone-400" />
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-stone-alpha-10 px-10 py-12">
            <div>
              <h2 className="text-stone-800 text-title-4">Sales</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Connect with our sales team to talk about pricing or to request a demo.
              </p>
            </div>
            <Button className="w-fit">Contact now</Button>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-stone-alpha-10 px-10 py-12">
            <div>
              <h2 className="text-stone-800 text-title-4">Careers</h2>
              <p className="mt-3 text-lg text-muted-foreground">View opportunities to join our amazing team.</p>
            </div>
            <Button asChild className="w-fit" variant="ghost">
              <Link aria-label="Read client testimonials and feedback" href="/resources/testimonials">
                Explore Open Opportunities
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
                  <IconChevronDown aria-hidden="true" className="text-stone-500" />
                </span>
              </Link>
            </Button>
          </div>
        </section>
      </header>
      <section className="container grid max-w-7xl grid-cols-2 gap-12 pb-24">
        <div className="sticky top-[11vh] h-fit space-y-3">
          <h2 className="text-primary-900 text-title-2">Accelerate Your Growth with Sphere IT Global Solutions</h2>
          <p className="text-lg text-stone-600">
            Whether it’s IT consulting, project management, or custom solutions, our specialists are here to guide you
            every step of the way.
          </p>
        </div>
        <div className="rounded-2xl bg-card p-10">
          <div className="mb-6">
            <Badge variant="ghost">General Inquiries</Badge>
            <h3 className="text-primary-800 text-title-3">Shall we talk</h3>
            <p className="text-lg text-stone-500">
              Fill in your details our team will contact you to understand your needs and present Sphere solutions
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
      <section className="container grid max-w-7xl grid-cols-3 gap-6 pb-24">
        <div className="card flex flex-col items-center justify-center gap-6 rounded-3xl bg-card px-6 py-10 shadow-md transition-all hover:shadow-lg">
          <IconSocialX className="size-14 text-stone-300" />
          <div className="text-center">
            <h4 className="text-stone-700 text-subhead-lg">
              X <span className="font-normal text-base text-stone-400">(Formerly Twitter)</span>
            </h4>
            <p className="text-muted-foreground text-sm">
              Stay updated with real-time updates, product launches, automation, and AI-driven transformation.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center justify-center gap-6 rounded-3xl bg-card px-6 py-10 shadow-md transition-all hover:shadow-lg">
          <IconSocialInstagram className="size-14 text-stone-300" />
          <div className="text-center">
            <h4 className="text-stone-700 text-subhead-lg">Instagram</h4>
            <p className="text-muted-foreground text-sm">
              Connect with us on LinkedIn to explore thought leadership, company updates, and industry insights.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center justify-center gap-6 rounded-3xl bg-card px-6 py-10 shadow-md transition-all hover:shadow-lg">
          <IconSocialWhatsapp className="size-14 text-stone-300" />
          <div className="text-center">
            <h4 className="text-stone-700 text-subhead-lg">Instagram</h4>
            <p className="text-muted-foreground text-sm">
              Join our WhatsApp channel for instant updates, and announcements - delivered right to your chat.
            </p>
          </div>
        </div>
      </section>
      <section className="container grid max-w-7xl grid-cols-2 gap-6 pb-24">
        <div className="card rounded-xl border px-6 py-10 text-center transition-all hover:border-0 hover:bg-card hover:shadow-md">
          <div className="mb-6">
            <h5 className="text-stone-700 text-title-4">FAQs</h5>
            <p className="text-lg text-muted-foreground">View all frequently asked questions in the community.</p>
          </div>
          <Button variant="secondary">Read our FAQs</Button>
        </div>
        <div className="card rounded-xl border px-6 py-10 text-center transition-all hover:border-0 hover:bg-card hover:shadow-md">
          <div className="mb-6">
            <h5 className="text-stone-700 text-title-4">Client Stories</h5>
            <p className="text-lg text-muted-foreground">View all frequently asked questions in the community.</p>
          </div>
          <Button variant="secondary">Read our Client Stories</Button>
        </div>
      </section>
    </main>
  );
}
