import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
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
          <Button href={`mailto:${siteConfig.email}`}>Contact the Team</Button>
        </div>
      </div>
    </section>
  );
}