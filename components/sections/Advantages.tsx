import SectionTitle from "@/components/ui/SectionTitle";
import AdvantageCard from "@/components/ui/AdvantageCard";
import { siteData } from "@/data/site";

import {
  Users,
  Globe2,
  ShieldCheck,
  Headset,
} from "lucide-react";

const icons = {
  Users,
  Globe2,
  ShieldCheck,
  Headset,
};

export default function Advantages() {
  return (
    <section className="bg-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Consol Travels"
          title="Por que escolher a Consol Travels?"
          subtitle="Compromisso, experiência e atendimento personalizado para que sua única preocupação seja aproveitar a viagem."
        />

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {siteData.advantages.map((advantage) => {
            const Icon =
              icons[advantage.icon as keyof typeof icons];

            return (
              <AdvantageCard
                key={advantage.title}
                icon={Icon}
                title={advantage.title}
                description={advantage.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}