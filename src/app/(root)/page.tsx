import { Cta } from "@/components/layout/cta";

import { About, Clients, Hero, Services, WhyUs } from "@/modules/home/components/";
import { Resources } from "@/modules/home/components/resources";
import { Testimonials } from "@/modules/home/components/testimonials";

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
