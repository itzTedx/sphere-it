import { FieldHear } from "@/components/field-hear";
import { Button } from "@/components/ui/button";
import { DashedSeparator, Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="space-y-12 p-8 pb-20 sm:p-20">
      <Button variant="secondary">Button</Button>
      {/* <Button className="group relative mb-10 inline-flex h-10 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-primary-900/40 border-b-2 bg-gradient-to-t from-primary-600 to-primary-500 px-6 py-2 font-bold text-card text-sm shadow-md shadow-primary-900/20 ring-1 ring-card/25 ring-inset ring-offset-background transition-[filter] duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:brightness-90 disabled:pointer-events-none disabled:opacity-50 sm:px-8 sm:py-2.5 sm:text-base md:px-10 md:py-3 md:text-lg dark:shadow-[inset_0_1px_3px_0_rgba(255,255,255,0.1)]">
        Button
      </Button> */}
      <DashedSeparator />
      <FieldHear />
      <h1>
        Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </h1>
      <h2>
        Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </h2>
      <h3>
        Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </h3>
      <h4>
        Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </h4>
      <h5>
        Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </h5>
      <h6>
        Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </h6>
      <Separator />
      <p className="text-4xl">
        4xl Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-3xl">
        3xl Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-2xl">
        2xl Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-xl">
        xl Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-lg">
        lg Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-base">
        base Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy
        dog.
      </p>
      <p className="text-sm">
        sm Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-xs">
        xs Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy dog.
      </p>
      <p className="font-display text-lead">
        lead Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy
        dog.
      </p>
      <p className="font-display text-label">
        label Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams The quick brown fox jumps over the lazy
        dog.
      </p>
    </div>
  );
}
