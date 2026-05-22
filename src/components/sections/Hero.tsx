import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const heroMetrics = [
  { label: "Primary Product", value: "AEGIS SOC" },
  { label: "Architecture", value: "Cloud-ready" },
  { label: "Focus", value: "Security Operations" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
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

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Platform Preview</p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  AEGIS SOC Console
                </h2>
              </div>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                In Development
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-slate-950/80 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-4">
              <p className="text-sm font-medium text-cyan-300">
                Future Platform Layer
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Designed to evolve toward customer login, dashboards, product
                integrations, reporting workflows and cloud SOC capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}