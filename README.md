# Pleiades Technologies Website

Public website for **Pleiades Technologies**, a cybersecurity-focused project
team building cloud-oriented products for modern Security Operations.

The website is live at
[pleiades-technologies-website.vercel.app](https://pleiades-technologies-website.vercel.app/).

It introduces the company vision and presents **AEGIS SOC**, the first product
currently in development: an enterprise-style Security Operations Center
platform designed around alert triage, asset visibility, vulnerability context,
incident response workflows, MITRE ATT&CK mapping, auditability and
business-oriented security reporting.

![Pleiades Technologies homepage](public/readme/homepage-hero.png)

## Purpose

This repository contains the **public-facing presentation layer** for Pleiades
Technologies. It is not the operational AEGIS SOC application itself. The full
product work lives in a separate repository where the backend, PostgreSQL data
model, FastAPI services, authentication, RBAC, seed data and database analytics
are being developed.

This site gives that product work a clear public identity. It exists to:

- Present Pleiades Technologies as a cloud security operations initiative.
- Explain what AEGIS SOC is becoming without overstating unfinished features.
- Provide a polished entry point for demos, team presentations and early access.
- Make the product direction understandable to both technical and non-technical
  audiences.
- Prepare the foundation for future product pages, documentation, customer
  areas and commercial workflows.

## Website Experience

The current website is intentionally compact, but it is structured as the first
layer of a broader cybersecurity product ecosystem.

| Route | Experience | Status |
| --- | --- | --- |
| `/` | Company landing page with AEGIS SOC positioning, mission, roadmap and contact CTA | Live |
| `/demo` | Interactive project demo for explaining architecture, team ownership and SOC workflow | Live |

The homepage focuses on the public story: who Pleiades Technologies is, what
AEGIS SOC is, why security operations need clearer workflows, and how the site
can evolve into a product platform over time.

The demo page is more presentation-oriented. It helps the team explain the
project during reviews, walkthroughs and product discussions.

![AEGIS SOC demo overview](public/readme/demo-overview.png)

## AEGIS SOC Context

AEGIS SOC is being designed as an enterprise-oriented SOC platform. The product
vision is to connect the operational work of a modern security team:

- Asset inventory and exposed service visibility.
- Vulnerability tracking and prioritization.
- Security alert centralization and triage.
- MITRE ATT&CK enrichment for detection context.
- Incident creation, assignment and investigation timeline.
- Audit logging for accountability and governance.
- Risk scoring and reporting for analysts, managers and executives.

The current product foundation is strongest on the backend and database side.
The PostgreSQL schema, tenant-aware data model, authentication model, service
layer and seed scenario provide the base for future operator-facing screens.

This website translates that technical foundation into a public product
narrative: what the platform is for, where it is going, and how the team can
present it clearly.

## Demo Experience

The interactive demo is a guided presentation surface. It is not a fake claim
of production readiness; it is a structured way to explain the project, the
team's ownership areas and the SOC workflow that AEGIS is being built around.

![AEGIS SOC team contribution screen](public/readme/demo-team.png)

The demo includes:

- Team contribution cards for database, backend, authorization, cybersecurity
  and frontend work.
- Architecture and responsibility breakdown.
- A SOC storyline from detection to incident response.
- Simulated workflow states for alert enrichment, triage, timeline updates and
  reporting.
- Talking points that help each team member present their part of the project.

![AEGIS SOC live walkthrough screen](public/readme/demo-walkthrough.png)

## Technical Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Deployment | Vercel |

The project uses the Next.js App Router and keeps the interface componentized
around landing sections, layout elements, reusable UI primitives and the
interactive demo experience.

## Project Structure

```text
.
|-- public/
|   `-- readme/              # README screenshots
|-- src/
|   |-- app/                 # App Router pages and metadata
|   |-- components/
|   |   |-- demo/            # Interactive demo experience
|   |   |-- effects/         # Intro and visual effects
|   |   |-- layout/          # Navbar and footer
|   |   |-- sections/        # Homepage sections
|   |   `-- ui/              # Shared UI primitives
|   `-- data/                # Site configuration and public links
|-- package.json
|-- next.config.ts
|-- tsconfig.json
`-- README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
http://localhost:3000/demo
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Development Principles

- Keep this repository focused on the public website and presentation layer.
- Keep product claims aligned with the real AEGIS implementation status.
- Do not move backend, database or API responsibilities into this website repo.
- Use real screenshots from the live site or actual product interfaces.
- Preserve a clear distinction between the marketing website, the interactive
  project demo and the future operational SOC product.
- Before changing Next.js behavior, read the local Next.js 16 documentation in
  `node_modules/next/dist/docs/`, because this version may differ from older
  Next.js APIs and conventions.

## Roadmap

1. Expand the AEGIS SOC product narrative with more dedicated feature sections.
2. Add a stronger early-access or contact workflow.
3. Introduce real product screenshots as the operational dashboard matures.
4. Prepare future pages for documentation, product modules and cloud platform
   access.
5. Keep the public website aligned with the actual state of the AEGIS product.

