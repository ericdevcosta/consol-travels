import SectionTitle from "@/components/ui/SectionTitle";
import DestinationCard from "@/components/ui/DestinationCard";
import { siteData } from "@/data/site";

export default function Destinations() {
  return (
    <section id="destinos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Consol Travels"
          title="Destinos em Destaque"
          subtitle="Conheça alguns dos lugares mais procurados pelos nossos clientes."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {siteData.destinations.map((destination) => (
            <DestinationCard
              key={destination.country}
              country={destination.country}
              city={destination.city}
              image={destination.image}
              whatsapp={siteData.contact.whatsapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}