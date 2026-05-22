export function Mission() {
  return (
    <section
      id="mission"
      className="border-y border-white/10 bg-slate-900/40 px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Mission
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Making Security Operations more accessible, structured and
            actionable.
          </h2>
        </div>

        <p className="text-lg leading-8 text-slate-300">
          We aim to build cloud-native cybersecurity platforms that help teams
          understand security events, prioritize risk and transform technical
          findings into clear operational and business-oriented reporting.
        </p>
      </div>
    </section>
  );
}