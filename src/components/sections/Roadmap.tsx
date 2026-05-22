const roadmapItems = [
  {
    phase: "Phase 01",
    title: "Public Foundation",
    description:
      "Launch the official Pleiades Technologies website as the public entry point for the cloud cybersecurity ecosystem.",
  },
  {
    phase: "Phase 02",
    title: "AEGIS SOC Product Page",
    description:
      "Create a dedicated product area for AEGIS SOC with features, screenshots, roadmap and technical positioning.",
  },
  {
    phase: "Phase 03",
    title: "Cloud Platform Layer",
    description:
      "Introduce authentication, customer areas, protected dashboards and product-specific cloud interfaces.",
  },
  {
    phase: "Phase 04",
    title: "Commercial Ecosystem",
    description:
      "Prepare future subscription plans, product integrations, documentation, API access and service-oriented offerings.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Roadmap
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            A foundation designed for future expansion.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Pleiades Technologies starts with a focused public landing page, but
            the architecture is planned to support future product pages, cloud
            dashboards, customer authentication and commercial services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {roadmapItems.map((item) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
            >
              <p className="text-sm font-semibold text-cyan-300">
                {item.phase}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}