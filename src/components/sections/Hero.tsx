import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Introducing {siteConfig.product}
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#aegis">Explore AEGIS SOC</Button>
            <Button href={siteConfig.github} variant="secondary">
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}