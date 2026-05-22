import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const platformFeatures = [
  "Alert Centralization",
  "Risk Visibility",
  "Executive Reporting",
  "Analyst Workflows",
  "Cloud-ready Architecture",
  "Future Product Integrations",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

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

      <section id="mission" className="border-y border-white/10 bg-slate-900/40 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Making Security Operations more accessible, structured and actionable.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-300">
            We aim to build cloud-native cybersecurity platforms that help teams
            understand security events, prioritize risk and transform technical
            findings into clear operational and business-oriented reporting.
          </p>
        </div>
      </section>

      <section id="aegis" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Main Product
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white">
              AEGIS SOC Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              AEGIS SOC is being designed as an enterprise-oriented platform for
              alert triage, SOC visibility, analyst workflows and executive-level
              cyber risk communication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
              >
                <div className="mb-5 h-2 w-12 rounded-full bg-cyan-400" />
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Designed as part of a scalable cloud security operations
                  ecosystem developed by Pleiades Technologies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="bg-slate-900/40 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Future Vision
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold text-white md:text-5xl">
            Built to evolve into a full cybersecurity platform.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The current website is the first public layer of a broader ecosystem.
            Future releases may include customer login, cloud dashboards, product
            integrations, subscription plans, documentation, API access and
            dedicated areas for cybersecurity products developed by Pleiades
            Technologies.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            Interested in our vision?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We are currently developing the foundation of our cloud SOC ecosystem.
            For collaborations, feedback or early-stage partnership opportunities,
            contact the Pleiades Technologies team.
          </p>

          <div className="mt-10">
            <Button href={`mailto:${siteConfig.email}`}>
              Contact the Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}