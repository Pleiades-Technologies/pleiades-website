import Link from "next/link";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "AEGIS SOC", href: "#aegis" },
  { label: "Vision", href: "#vision" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-sm font-bold text-cyan-300">
            PT
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p className="text-xs text-slate-400">Cloud Security Operations</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10 md:inline-flex"
        >
          Early Access
        </Link>
      </nav>
    </header>
  );
}