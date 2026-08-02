import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { siteData } from "@/data/site";

import {
  Plane,
  Hotel,
  MapPinned,
  Car,
  ShieldCheck,
  Ship,
} from "lucide-react";

const icons = {
  Plane,
  Hotel,
  MapPinned,
  Car,
  ShieldCheck,
  Ship,
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Consol Travels"
          title="Nossos Serviços"
          subtitle="Cuidamos de cada etapa da sua viagem para que você aproveite apenas o melhor do destino."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {siteData.services.map((service) => {
            const Icon =
              icons[service.icon as keyof typeof icons];

            return (
              <ServiceCard
                key={service.title}
                icon={Icon}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}