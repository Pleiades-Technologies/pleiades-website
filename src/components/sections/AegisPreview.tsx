const platformFeatures = [
  "Alert Centralization",
  "Risk Visibility",
  "Executive Reporting",
  "Analyst Workflows",
  "Cloud-ready Architecture",
  "Future Product Integrations",
];

export function AegisPreview() {
  return (
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
  );
}