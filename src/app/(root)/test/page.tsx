import { FieldHear } from "@/components/field-hear";
import { Button } from "@/components/ui/button";
import { DashedSeparator, Separator } from "@/components/ui/separator";

export default function TestPage() {
  return (
    <div className="space-y-12 p-8 pb-20 sm:p-20">
      <Button variant="secondary">Button</Button>

      <DashedSeparator />
      <FieldHear />
      <div className="flex items-center gap-8">
        <div className="size-20 rounded-xl bg-card shadow-sm" />
        <div className="card size-20 rounded-xl bg-card shadow-md transition-transform hover:shadow-lg" />
        <div className="size-20 rounded-xl bg-card shadow-lg" />
      </div>
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
