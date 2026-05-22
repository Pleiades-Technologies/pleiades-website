import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEGIS SOC Demo | Pleiades Technologies",
  description:
    "Temporary presentation demo page for the AEGIS SOC platform concept.",
};

const metrics = [
  { label: "Active Alerts", value: "128", detail: "+14 in the last 24h" },
  { label: "Critical Incidents", value: "7", detail: "3 require escalation" },
  { label: "Risk Score", value: "82/100", detail: "High operational exposure" },
  { label: "Reports Generated", value: "24", detail: "Technical + executive" },
];

const alerts = [
  {
    severity: "Critical",
    title: "Suspicious PowerShell activity detected",
    asset: "WIN-CLIENT-01",
    status: "Escalated",
  },
  {
    severity: "High",
    title: "Multiple failed authentication attempts",
    asset: "DC-ARES-01",
    status: "Under Review",
  },
  {
    severity: "Medium",
    title: "Unusual outbound connection pattern",
    asset: "LINUX-WEB-01",
    status: "Investigating",
  },
];

const workflowSteps = [
  "Alert ingestion",
  "Risk enrichment",
  "Analyst triage",
  "Incident escalation",
  "Executive reporting",
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Pleiades Technologies
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              AEGIS SOC Demo
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Temporary presentation environment showing the future direction of
              AEGIS SOC: alert centralization, risk visibility, analyst workflow
              and executive-level reporting.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex rounded-full border border-cyan-400/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Back to Home
          </Link>
        </header>

        <section className="grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
            >
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-3 text-4xl font-bold text-white">
                {metric.value}
              </p>
              <p className="mt-3 text-sm text-cyan-300">{metric.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Alert Queue
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Prioritized security events
                </h2>
              </div>

              <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                Demo Mode
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-semibold text-red-300">
                        {alert.severity}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {alert.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Asset: {alert.asset}
                      </p>
                    </div>

                    <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                      {alert.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Executive Summary
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white">
              Business-oriented cyber risk view
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              AEGIS SOC is designed to transform technical alert data into clear
              risk communication for analysts, managers and decision makers.
            </p>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-sm font-semibold text-cyan-300">
                Current posture
              </p>
              <p className="mt-3 text-3xl font-bold text-white">Elevated Risk</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Multiple high-priority events require analyst validation and
                executive awareness.
              </p>
            </div>
          </aside>
        </section>

        <section className="py-10">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Analyst Workflow
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white">
              From alert to report
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <p className="text-sm font-semibold text-cyan-300">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-sm font-medium text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Presentation Note
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">
              This page is a temporary product vision demo.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-slate-300">
              It is not the final production dashboard. It is designed to show
              the intended direction of AEGIS SOC during academic and project
              presentations.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}