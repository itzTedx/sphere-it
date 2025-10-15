import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main>
      <header className="container bg-card">
        <section className="container max-w-7xl border-x pt-28 pb-9 text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-primary-900">
              Delivering <span className="text-primary-700">Accuracy.</span> Driving Outcomes.
            </h1>
            <p className="text-2xl">
              Empowering forward-looking organizations with talent and technology that deliver measurable outcomes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button>Explore Services</Button>
              <Button variant="ghost">Contact us</Button>
            </div>
          </div>
          <div className="flex items-center gap-6 py-12">
            <div className="flex flex-1 items-center">
              <div className="h-0.5 w-full bg-gradient-to-l from-primary-700 to-stone-100" />
              <div className="size-1.5 shrink-0 rounded-full bg-primary-700" />
            </div>
            <p className="font-mono">We can help you Manage</p>
            <div className="flex flex-1 items-center">
              <div className="size-1.5 shrink-0 rounded-full bg-primary-700" />
              <div className="h-0.5 w-full bg-gradient-to-r from-primary-700 to-stone-100" />
            </div>
          </div>
        </section>
      </header>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50">
        <div className="container max-w-7xl border-x">
          <Tabs className="container max-w-6xl space-y-6" defaultValue="elevate">
            <div className="relative mx-auto inline-flex">
              <svg fill="none" height="64" viewBox="0 0 86 64" width="86" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50.5 45C57.8095 56.6952 71.7084 63.9997 85.5 64V0H0.5C14.2915 0 27.1905 7.30481 34.5 19L50.5 45Z"
                  fill="white"
                />
              </svg>

              <TabsList className="flex h-full items-center justify-center rounded-none bg-card">
                <TabsTrigger value="elevate">Elevate</TabsTrigger>
                <TabsTrigger value="automate">Automate</TabsTrigger>
                <TabsTrigger value="evaluate">Evaluate</TabsTrigger>
                <TabsTrigger value="assure">Assure</TabsTrigger>
                <TabsTrigger value="augment">Augment</TabsTrigger>
              </TabsList>

              <svg fill="none" height="64" viewBox="0 0 86 64" width="86" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M35.5 45C28.1905 56.6952 14.2916 63.9997 0.5 64V0H85.5C71.7085 0 58.8095 7.30481 51.5 19L35.5 45Z"
                  fill="white"
                />
              </svg>
            </div>
            <TabsContent value="elevate">
              <div className="bg-card p-12">
                <Badge>AI-Powered Excellence</Badge>
                <h2>Unlock the Power of AI Solutions</h2>
                <p>Unlock the power of AI with compliant, ready-to-use solutions that deliver results faster.</p>
                <Button>Learn more</Button>
              </div>
            </TabsContent>
            <TabsContent value="automate">
              <div className="bg-card p-12">
                <Badge>AI-Powered Excellence</Badge>
                <h2>Unlock the Power of AI Solutions</h2>
                <p>Unlock the power of AI with compliant, ready-to-use solutions that deliver results faster.</p>
                <Button>Learn more</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="border-y">
        <div className="mx-auto max-w-7xl border-x">
          <div className="rounded-3xl bg-card p-9">
            <h3 className="text-center">
              Trusted by <span className="text-primary">500+ Leading</span> Organizations
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
