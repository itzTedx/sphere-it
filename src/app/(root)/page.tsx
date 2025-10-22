import { Cta } from "@/components/layout/cta";

import { About, Clients, Hero, Resources, Services, Testimonials, WhyUs } from "@/modules/views";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <About />
      <WhyUs />
      <Resources />
      <Testimonials />
      <Cta />
    </main>
  );
}
