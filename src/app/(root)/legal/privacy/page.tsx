import type { Route } from "next";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IconMenu } from "@/assets/icons";
import { IconLink } from "@/assets/icons/copy";

import { Header } from "../components/header";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Header title="Privacy Policy" />
      <section className="container grid max-w-7xl grid-cols-4 gap-12">
        <aside className="mt-12 h-fit overflow-hidden rounded-xl border bg-stone-50 md:sticky md:top-[12vh]">
          <div className="flex items-center gap-2 bg-card p-3">
            <IconMenu className="size-4 text-muted-foreground" />
            <span className="font-display text-muted-foreground text-subhead-base">On this page</span>
          </div>
          <ul className="p-3">
            <li>
              <Link href={"#definitions" as Route}>Definitions</Link>
            </li>
          </ul>
        </aside>
        <article className="prose col-span-3 border-l px-12 py-12">
          <div>
            <p>Welcome to Sphere IT Global ("Sphere IT", "we", "our", or "us").</p>
            <p>
              Sphere IT provides technology, consulting, automation, and integration solutions to enterprises worldwide
              (the "Services").
            </p>
            <p>
              We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how
              we collect, use, and protect information when you visit our website, communicate with us, or use our
              Services.
            </p>
            <p>
              By using our website or submitting your information through our contact forms, you agree to the practices
              described in this Privacy Policy.
            </p>
          </div>
          <div className="-mb-4 relative pt-4">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300" />
              <div className="not-prose">
                <a className="group relative flex items-center gap-4 py-0" href="#definitions">
                  <div className="flex size-8 flex-none items-center justify-center rounded-full border border-gray-200 bg-white">
                    <p className="font-bold font-display text-stone-700 group-hover:hidden">1</p>
                    <IconLink
                      aria-hidden="true"
                      aria-label="Link to section"
                      className="hidden size-4 text-gray-600 group-hover:block"
                    />
                  </div>
                  <h2 className="!m-0 scroll-mt-20 font-display font-medium text-neutral-800 text-xl" id="definitions">
                    Definitions
                  </h2>
                </a>
              </div>
              <div className="ml-12 pb-4">
                <p>Below is a list of definitions for the terms used in this Privacy Policy:</p>
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
