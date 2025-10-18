import { Badge } from "@/components/ui/badge";

export const WhyUs = () => {
  return (
    <section>
      <div className="container">
        <div className="container h-24 max-w-7xl border-x" />
      </div>
      <div className="mx-3 rounded-3xl bg-card p-20">
        <div className="mx-auto max-w-7xl">
          <Badge variant="secondary">Why sphere it</Badge>
          <h2 className="text-primary-900 text-title-2">
            What sets <span className="text-primary-600">Sphere IT apart</span>
          </h2>
          <p className="max-w-3xl text-balance">
            We believe technology should be both precisely engineered and practically applied. That’s why
            forward-looking organizations across the GCC trust us to deliver AI-driven platforms, intelligent
            automation, resilient infrastructure, and on-demand expertise that create measurable outcomes.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="container h-24 max-w-7xl border-x" />
      </div>
    </section>
  );
};
