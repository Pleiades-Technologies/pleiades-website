import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AegisPreview } from "@/components/sections/AegisPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FutureVision } from "@/components/sections/FutureVision";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Mission />
      <AegisPreview />
      <FutureVision />
      <ContactCTA />
      <Footer />
    </main>
  );
}