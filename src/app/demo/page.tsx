import { DemoExperience } from "@/components/demo/DemoExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEGIS SOC Demo | Pleiades Technologies",
  description:
    "Demo interattiva del progetto AEGIS SOC: contributi del team, architettura, stack tecnologico e visione futura.",
};

export default function DemoPage() {
  return <DemoExperience />;
}