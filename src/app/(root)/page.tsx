import { Cta } from "@/components/layout/cta";

import { About, Clients, Hero, Services, WhyUs } from "@/modules/home/components/";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <About />
      <WhyUs />
      <Cta />
    </main>
  );
}
