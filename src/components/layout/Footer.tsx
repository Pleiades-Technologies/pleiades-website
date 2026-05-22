import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="text-sm text-slate-400">
            Building cloud-based cybersecurity platforms.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-slate-400">
          <Link href={siteConfig.github} className="hover:text-cyan-300">
            GitHub
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-cyan-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}