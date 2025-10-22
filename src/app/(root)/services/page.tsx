import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  return (
    <main>
      <header className="bg-card py-28">
        <div className="container max-w-7xl">
          <Badge>Services</Badge>
          <div className="mt-4 max-w-4xl space-y-6">
            <h1 className="text-primary-900 text-title-1">
              Powering Business from <span className="text-primary-600">Automation to Augmentation</span>
            </h1>
            <p className="text-balance text-lead text-stone-700">
              We helps organizations simplify complexity and accelerate results - delivering solutions that are precise,
              pragmatic, and outcome-driven.
            </p>
          </div>
        </div>
      </header>
      <section>
        <p className="container max-w-7xl py-12">
          Sphere IT helps organizations simplify complexity and accelerate results through five integrated service lines
          - each designed to deliver measurable outcomes with precision and pragmatism.
        </p>
      </section>
      <section className="relative z-50 mx-6 rounded-4xl bg-card p-16">
        <ul>
          <li>Elevate - Artificial Intelligence</li>
        </ul>
      </section>
    </main>
  );
}
