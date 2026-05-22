"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const teamAreas = [
  {
    id: "database",
    label: "Database",
    owner: "Christian Koscielniak Pinto",
    subtitle: "Persistenza, modello dati e scalabilità futura",
    description:
      "Questa area rappresenta la base persistente di AEGIS SOC: dati, relazioni, storico operativo e strutture necessarie per supportare alert, incidenti, utenti, ruoli e report.",
    stack: ["PostgreSQL 16", "UUID", "JSONB", "Indici", "Viste SQL"],
    details: [
      "Organizzazione dei dati relativi ad alert, incidenti, asset, utenti e report.",
      "Struttura pensata per scenari enterprise-style e futura persistenza cloud.",
      "Supporto logico a risk engine, KPI dashboard e reportistica.",
      "Base dati progettata per rendere la demo riproducibile tramite seed controllato.",
    ],
    presenterNote:
      "Il database è la base del progetto: senza una struttura dati chiara, alert, incidenti, ruoli, report e rischio resterebbero scollegati.",
  },
  {
    id: "backend",
    label: "Backend API",
    owner: "Christopher Cherubini",
    subtitle: "API, endpoint e logica applicativa",
    description:
      "Il backend collega frontend, database e logica operativa della piattaforma. È il layer che espone endpoint, gestisce richieste e rende disponibili i dati necessari alla dashboard.",
    stack: ["FastAPI", "REST API", "Pydantic", "Endpoint design", "Service logic"],
    details: [
      "Progettazione degli endpoint principali per alert, incidenti, vulnerabilità e report.",
      "Gestione request/response tra frontend e backend.",
      "Separazione tra logica applicativa, validazione dati e accesso al database.",
      "Base per future integrazioni cloud e moduli prodotto.",
    ],
    presenterNote:
      "Il backend è il motore applicativo: espone dati, gestisce logica, valida le richieste e permette al frontend di diventare una vera piattaforma.",
  },
  {
    id: "authorization",
    label: "Autorizzazione & Sicurezza",
    owner: "Giammarco De Vitalini",
    subtitle: "Controllo accessi e protezione backend",
    description:
      "Questa area si concentra sulla protezione delle operazioni backend: ruoli, permessi, autenticazione, azioni protette e principi di governance.",
    stack: ["JWT", "Argon2", "RBAC", "Tenant context", "Audit log"],
    details: [
      "Gestione logica di autorizzazione lato backend.",
      "Controllo accessi per ruoli come Admin, SOC Analyst, Manager e Read Only.",
      "Protezione delle azioni sensibili come update, conversione alert-incidente e modifiche operative.",
      "Base per auditabilità, accountability e futura area clienti protetta.",
    ],
    presenterNote:
      "La sicurezza backend garantisce che ogni ruolo abbia accesso solo alle azioni corrette, rendendo AEGIS più vicino a un prodotto enterprise.",
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    owner: "Antonio Ruocco, Michele Lombardi",
    subtitle: "SOC workflow, rischio e logica security",
    description:
      "La parte cybersecurity definisce il valore del prodotto: detection, triage, MITRE enrichment, incident response, risk visibility e reporting tecnico/executive.",
    stack: [
      "Detection Center",
      "MITRE ATT&CK",
      "Incident Response",
      "Risk scoring",
      "Executive reporting",
    ],
    details: [
      "Definizione del flusso SOC: alert, triage, conversione in incidente, timeline e audit trail.",
      "Interpretazione del rischio tramite asset, vulnerabilità, exposure e alert attivi.",
      "Allineamento tra esigenze tecniche SOC e comunicazione manageriale.",
      "Storytelling di prodotto: trasformare eventi tecnici in decisioni operative.",
    ],
    presenterNote:
      "La parte cybersecurity dà senso alla piattaforma: AEGIS non deve solo mostrare alert, ma trasformarli in incidenti, rischio e report.",
  },
  {
    id: "frontend",
    label: "Frontend",
    owner: "Lorenzo Petrucci, Francesca Kropp",
    subtitle: "Interfaccia, dashboard e user experience",
    description:
      "Il frontend rende navigabile e comprensibile la piattaforma. Trasforma dati tecnici e flussi SOC in un’esperienza chiara per analisti, manager e stakeholder.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Component UI"],
    details: [
      "Struttura visuale della piattaforma e organizzazione delle schermate.",
      "Componenti riutilizzabili per card, dashboard, tabelle e sezioni informative.",
      "Esperienza utente orientata alla presentazione del dato security.",
      "Base responsive e scalabile per future pagine prodotto, login e area clienti.",
    ],
    presenterNote:
      "Il frontend rende il progetto comprensibile: trasforma logica tecnica e dati SOC in una esperienza presentabile e navigabile.",
  },
] as const;

const architectureNodes = [
  {
    id: "frontend",
    title: "Frontend",
    owner: "Lorenzo Petrucci, Francesca Kropp",
    description:
      "Mostra dashboard, contributi del team, flussi SOC e viste operative in modo chiaro e navigabile.",
  },
  {
    id: "api",
    title: "Backend API",
    owner: "Christopher Cherubini",
    description:
      "Espone endpoint REST, valida i dati e collega l’interfaccia alla logica applicativa.",
  },
  {
    id: "security",
    title: "Autorizzazione",
    owner: "Giammarco De Vitalini",
    description:
      "Applica RBAC, tenant context, protezione delle azioni e auditabilità operativa.",
  },
  {
    id: "database",
    title: "Database",
    owner: "Christian Koscielniak Pinto",
    description:
      "Conserva dati strutturati su asset, alert, incidenti, vulnerabilità, utenti e report.",
  },
  {
    id: "soc",
    title: "SOC Workflow",
    owner: "Antonio Ruocco, Michele Lombardi",
    description:
      "Gestisce detection, triage, MITRE enrichment, incident response e timeline investigativa.",
  },
  {
    id: "reporting",
    title: "Risk & Report",
    owner: "Team AEGIS",
    description:
      "Trasforma eventi tecnici in risk score, KPI, report executive e report tecnici.",
  },
] as const;

const demoSteps = [
  {
    title: "Dashboard e KPI",
    text: "La demo parte da una vista manageriale con KPI, asset critici e postura generale.",
  },
  {
    title: "Detection Center",
    text: "L’analista apre gli alert e valuta severità, sorgente, asset coinvolto e tecnica MITRE.",
  },
  {
    title: "Alert Detail",
    text: "L’alert viene analizzato con contesto tecnico, raw event formattato ed evidenze utili.",
  },
  {
    title: "Conversione in incidente",
    text: "Un alert rilevante viene convertito in incidente per avviare il workflow di risposta.",
  },
  {
    title: "Timeline investigativa",
    text: "L’incidente viene tracciato tramite note, stati, attività e aggiornamenti auditabili.",
  },
  {
    title: "Risk & Reporting",
    text: "Gli eventi alimentano rischio, KPI e report executive/technical per comunicare le azioni.",
  },
] as const;

const simulationSteps = [
  {
    label: "Alert rilevato",
    status: "Detection Center",
    description:
      "Un evento sospetto viene acquisito e classificato come alert operativo.",
    output: "Alert aperto",
    artifact: "Security event normalizzato",
    log: "Nuovo alert importato nel Detection Center.",
  },
  {
    label: "MITRE enrichment",
    status: "Contesto tecnico",
    description:
      "L’alert viene arricchito con tecnica, tattica e descrizione MITRE leggibile.",
    output: "T1059 - Command and Scripting Interpreter",
    artifact: "MITRE mapping collegato",
    log: "Tecnica MITRE associata all’alert.",
  },
  {
    label: "Triage analyst",
    status: "Valutazione SOC",
    description:
      "L’analista valuta asset, severità, sorgente, raw event ed evidenze.",
    output: "Priorità alta",
    artifact: "Triage decision",
    log: "L’alert viene classificato come rilevante.",
  },
  {
    label: "Incidente creato",
    status: "Incident Response",
    description:
      "L’alert viene convertito in incidente e collegato a un workflow investigativo.",
    output: "INC-2026-014",
    artifact: "Incident record",
    log: "Conversione alert → incidente completata.",
  },
  {
    label: "Timeline aggiornata",
    status: "Accountability",
    description:
      "Le azioni vengono registrate con stato, nota investigativa e audit trail.",
    output: "Stato: Contained",
    artifact: "Timeline + audit trail",
    log: "Nota investigativa aggiunta alla timeline.",
  },
  {
    label: "Report generato",
    status: "Risk & Reporting",
    description:
      "Il rischio viene comunicato tramite KPI, report executive e report tecnico.",
    output: "Executive report pronto",
    artifact: "Executive / Technical report",
    log: "Report generato per stakeholder tecnici e manageriali.",
  },
] as const;

const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST API", "Pydantic", "Service Layer"],
  },
  {
    title: "Database",
    items: ["PostgreSQL 16", "UUID", "JSONB", "SQL Views"],
  },
  {
    title: "Security",
    items: ["JWT", "Argon2", "RBAC", "Tenant Context", "Audit Log"],
  },
  {
    title: "Cybersecurity",
    items: ["Detection Center", "MITRE", "Incident Response", "Risk Score"],
  },
  {
    title: "Roadmap",
    items: ["Cloud Platform", "Login", "Area Clienti", "Pagamenti", "Prodotti"],
  },
] as const;

const presentationSections = [
  { id: "contributi", label: "Team" },
  { id: "architettura", label: "Architettura" },
  { id: "simulazione-soc", label: "Demo SOC" },
  { id: "flusso-soc", label: "Storyline" },
  { id: "stack", label: "Stack" },
  { id: "roadmap-demo", label: "Futuro" },
] as const;

type TeamAreaId = (typeof teamAreas)[number]["id"];
type ArchitectureNodeId = (typeof architectureNodes)[number]["id"];

export function DemoExperience() {
  const [activeTeamId, setActiveTeamId] = useState<TeamAreaId>("database");
  const [activeNodeId, setActiveNodeId] =
    useState<ArchitectureNodeId>("frontend");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [simulationStep, setSimulationStep] = useState(0);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const simulationTimerRef = useRef<number | null>(null);

  const activeTeam =
    teamAreas.find((area) => area.id === activeTeamId) ?? teamAreas[0];

  const activeNode =
    architectureNodes.find((node) => node.id === activeNodeId) ??
    architectureNodes[0];

  const activeStep = demoSteps[activeStepIndex];
  const activeSimulationStep = simulationSteps[simulationStep];

  const simulationProgress = Math.round(
    ((simulationStep + 1) / simulationSteps.length) * 100,
  );

  const completedSteps = simulationStep;
  const liveRiskScore = 62 + simulationStep * 4;
  const openIncidentCount = simulationStep >= 3 ? 1 : 0;

  useEffect(() => {
    return () => {
      if (simulationTimerRef.current !== null) {
        window.clearInterval(simulationTimerRef.current);
      }
    };
  }, []);

  function scrollToSection(sectionId: string) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function startSocSimulation(shouldScroll = false) {
    if (shouldScroll) {
      scrollToSection("simulazione-soc");
    }

    if (simulationTimerRef.current !== null) {
      window.clearInterval(simulationTimerRef.current);
    }

    setSimulationStep(0);
    setIsSimulationRunning(true);

    let currentStep = 0;

    simulationTimerRef.current = window.setInterval(() => {
      currentStep += 1;

      if (currentStep >= simulationSteps.length) {
        if (simulationTimerRef.current !== null) {
          window.clearInterval(simulationTimerRef.current);
        }

        setIsSimulationRunning(false);
        return;
      }

      setSimulationStep(currentStep);
    }, 1100);
  }

  function resetSocSimulation() {
    if (simulationTimerRef.current !== null) {
      window.clearInterval(simulationTimerRef.current);
    }

    setSimulationStep(0);
    setIsSimulationRunning(false);
  }

  function selectSimulationStep(index: number) {
    if (simulationTimerRef.current !== null) {
      window.clearInterval(simulationTimerRef.current);
    }

    setSimulationStep(index);
    setIsSimulationRunning(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-10 md:py-14">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
                Pleiades Technologies
              </p>

              <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                AEGIS SOC — Demo Interattiva del Progetto
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                Una presentazione guidata dell’architettura, dei contributi del
                team e della visione futura di AEGIS SOC come piattaforma SOC
                enterprise-style.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Demo di Presentazione",
                  "Dati Simulati",
                  "Enterprise-style",
                  "Progetto in Evoluzione",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => startSocSimulation(true)}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  {isSimulationRunning
                    ? "Demo SOC in esecuzione..."
                    : "Avvia Demo SOC"}
                </button>

                <button
                  type="button"
                  onClick={resetSocSimulation}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Reset Demo
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("contributi")}
                  className="inline-flex items-center justify-center rounded-full border border-violet-400/40 bg-violet-400/10 px-6 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-400/20"
                >
                  Inizia presentazione
                </button>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex rounded-full border border-cyan-400/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Torna al sito
            </Link>
          </header>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Nota di contesto
              </p>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Questa pagina è una demo di presentazione. Serve a spiegare il
                progetto, il contributo del team e la roadmap tecnica. Non
                dichiara funzionalità production-grade non ancora implementate:
                mostra una visione enterprise-style coerente con l’evoluzione
                futura della piattaforma.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-6 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Control Room Preview
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-400">Risk score</p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {liveRiskScore}/100
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-400">Incidenti aperti</p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {openIncidentCount}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs text-slate-400">Workflow</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-300">
                    {simulationProgress}%
                  </p>
                </div>
              </div>

              <div className="mt-5 h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${simulationProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-40 border-y border-white/10 bg-slate-950/85 px-6 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {presentationSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="whitespace-nowrap rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {String(index + 1).padStart(2, "0")} · {section.label}
            </button>
          ))}
        </div>
      </nav>

      <section id="contributi" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Contributi del Team
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Ogni area contribuisce a trasformare AEGIS in una piattaforma.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              La demo permette a ogni membro del gruppo di presentare la propria
              parte: database, backend, autorizzazione, cybersecurity e frontend.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {teamAreas.map((area) => {
              const isActive = area.id === activeTeamId;

              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveTeamId(area.id)}
                  className={`group rounded-2xl border p-5 text-left transition ${
                    isActive
                      ? "border-cyan-400/60 bg-cyan-400/10 shadow-xl shadow-cyan-950/40"
                      : "border-white/10 bg-slate-900/60 hover:border-cyan-400/30 hover:bg-slate-900"
                  }`}
                >
                  <p className="text-sm font-semibold text-cyan-300">
                    {area.label}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {area.owner}
                  </p>

                  <div className="mt-5 h-1 rounded-full bg-slate-800">
                    <div
                      className={`h-1 rounded-full transition-all ${
                        isActive
                          ? "w-full bg-cyan-400"
                          : "w-0 bg-cyan-400 group-hover:w-1/2"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Area selezionata
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                {activeTeam.label}
              </h3>

              <p className="mt-3 text-cyan-300">{activeTeam.owner}</p>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {activeTeam.subtitle}
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {activeTeam.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {activeTeam.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-sm font-semibold text-cyan-300">
                  Script rapido per la presentazione
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  “{activeTeam.presenterNote}”
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Cosa presentare
              </p>

              <div className="mt-6 space-y-4">
                {activeTeam.details.map((detail, index) => (
                  <div
                    key={detail}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                  >
                    <p className="text-sm font-semibold text-cyan-300">
                      Punto {index + 1}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="architettura" className="bg-slate-900/40 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Architettura Interattiva
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Dal frontend al report executive.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              AEGIS SOC collega interfaccia, API, sicurezza, database e logica
              cybersecurity in un flusso unico: detection, incident response,
              rischio, KPI e report.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {architectureNodes.map((node, index) => {
                  const isActive = node.id === activeNodeId;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      className={`rounded-2xl border p-5 text-left transition ${
                        isActive
                          ? "border-cyan-400/60 bg-cyan-400/10"
                          : "border-white/10 bg-slate-900/70 hover:border-cyan-400/30"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Layer {index + 1}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {node.title}
                      </h3>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-7 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Nodo selezionato
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                {activeNode.title}
              </h3>

              <p className="mt-3 text-sm text-cyan-300">
                Owner: {activeNode.owner}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                {activeNode.description}
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm font-semibold text-cyan-300">
                  Flusso logico
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Frontend → Backend API → Autorizzazione → Database → SOC
                  Workflow → Risk & Report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="simulazione-soc" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Simulazione SOC
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Avvia una mini-demo animata del workflow AEGIS.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Questa sezione rende la presentazione più dinamica: ogni step si
              illumina in sequenza per mostrare come un evento tecnico diventa
              incidente, rischio e report.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
              <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                    Live Walkthrough
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Detection → Incident → Risk → Report
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => startSocSimulation()}
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {isSimulationRunning ? "In esecuzione..." : "Avvia sequenza"}
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {simulationSteps.map((step, index) => {
                  const isActive = index === simulationStep;
                  const isCompleted = index < simulationStep;

                  return (
                    <button
                      key={step.label}
                      type="button"
                      onClick={() => selectSimulationStep(index)}
                      className={`relative overflow-hidden rounded-2xl border p-5 text-left transition duration-300 ${
                        isActive
                          ? "border-cyan-400/70 bg-cyan-400/10 shadow-2xl shadow-cyan-500/20"
                          : isCompleted
                            ? "border-emerald-400/40 bg-emerald-400/10"
                            : "border-white/10 bg-slate-950/70 hover:border-cyan-400/30"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-x-0 top-0 h-1 bg-cyan-400" />
                      )}

                      <p
                        className={`text-xs font-semibold uppercase tracking-widest ${
                          isCompleted
                            ? "text-emerald-300"
                            : isActive
                              ? "text-cyan-300"
                              : "text-slate-500"
                        }`}
                      >
                        Step {index + 1}
                      </p>

                      <h4 className="mt-3 text-lg font-semibold text-white">
                        {step.label}
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {step.status}
                      </p>

                      <div className="mt-5 h-2 rounded-full bg-slate-800">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            isCompleted || isActive
                              ? "w-full bg-cyan-400"
                              : "w-0"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-8 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Stato corrente
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                {activeSimulationStep.label}
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                {activeSimulationStep.description}
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Output simulato</p>

                  <p className="mt-2 text-xl font-bold text-cyan-300">
                    {activeSimulationStep.output}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Artefatto prodotto</p>

                  <p className="mt-2 text-xl font-bold text-white">
                    {activeSimulationStep.artifact}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5 font-mono">
                <p className="text-xs uppercase tracking-widest text-cyan-300">
                  Mission log
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  &gt; {activeSimulationStep.log}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  &gt; Progress: {simulationProgress}% · Completed steps:{" "}
                  {completedSteps}/{simulationSteps.length - 1}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm font-semibold text-white">
                  Script di presentazione
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  “Qui mostriamo come AEGIS segue il ciclo SOC: rilevazione,
                  contestualizzazione, triage, incident response, accountability
                  e comunicazione del rischio.”
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => startSocSimulation()}
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Replay
                </button>

                <button
                  type="button"
                  onClick={resetSocSimulation}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  Reset
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="flusso-soc" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Flusso SOC Enterprise
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Dall’alert al report finale.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Questa sezione mostra la storia che il team può raccontare durante
              la presentazione: un evento tecnico diventa triage, incidente,
              rischio, KPI e comunicazione manageriale.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              {demoSteps.map((step, index) => {
                const isActive = index === activeStepIndex;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStepIndex(index)}
                    className={`w-full rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-cyan-400/60 bg-cyan-400/10"
                        : "border-white/10 bg-slate-900/70 hover:border-cyan-400/30"
                    }`}
                  >
                    <p className="text-sm font-semibold text-cyan-300">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Step selezionato
              </p>

              <h3 className="mt-4 text-4xl font-bold text-white">
                {activeStep.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {activeStep.text}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Output</p>

                  <p className="mt-2 font-semibold text-white">
                    Valore operativo
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Target</p>

                  <p className="mt-2 font-semibold text-white">
                    SOC / Manager
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Status</p>

                  <p className="mt-2 font-semibold text-cyan-300">
                    Demo-ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="bg-slate-900/40 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Stack Tecnologico
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Tecnologie e principi architetturali.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20"
              >
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap-demo" className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Visione Futura
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold text-white md:text-5xl">
            Da progetto enterprise-style a piattaforma cloud.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Il sito attuale è il primo livello pubblico. In futuro potrà
            evolvere con login, area clienti, dashboard protette, prodotti
            cybersecurity, pagamenti, documentazione tecnica e integrazioni SOC.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Sito pubblico e demo interattiva",
              "Pagina prodotto AEGIS SOC",
              "Login e area protetta",
              "Dashboard cloud",
              "Prodotti e servizi",
              "Evoluzione commerciale",
            ].map((phase, index) => (
              <div
                key={phase}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  Fase {index + 1}
                </p>

                <p className="mt-3 text-sm font-medium text-white">{phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Messaggio finale
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            AEGIS SOC non mostra solo dati: racconta un flusso SOC governato.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300">
            Gli alert entrano nel Detection Center, vengono arricchiti con
            MITRE, convertiti in incidenti, tracciati in timeline, trasformati
            in rischio e infine comunicati tramite dashboard e report
            executive/technical.
          </p>
        </div>
      </section>
    </main>
  );
}