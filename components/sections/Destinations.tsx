"use client";

import { useRef, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import DestinationCard from "@/components/ui/DestinationCard";
import { siteData } from "@/data/site";

export default function Destinations() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const cardWidth = carousel.clientWidth * 0.85 + 24;

    const index = Math.round(scrollLeft / cardWidth);

    setActiveIndex(
      Math.min(index, siteData.destinations.length - 1)
    );
  };

  return (
    <section id="destinos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Consol Travels"
          title="Destinos em Destaque"
          subtitle="Conheça alguns dos lugares mais procurados pelos nossos clientes."
        />

        {/* Mobile: carrossel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
          >
            {siteData.destinations.map((destination) => (
              <div
                key={destination.country}
                className="w-[85vw] shrink-0 snap-center"
              >
                <DestinationCard
                  country={destination.country}
                  city={destination.city}
                  image={destination.image}
                  description={destination.description}
                  highlights={destination.highlights}
                  whatsapp={siteData.contact.whatsapp}
                />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 pt-2">
            {siteData.destinations.map((destination, index) => (
              <span
                key={destination.country}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-5 bg-blue-700"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
          {siteData.destinations.map((destination) => (
            <DestinationCard
              key={destination.country}
              country={destination.country}
              city={destination.city}
              image={destination.image}
              description={destination.description}
              highlights={destination.highlights}
              whatsapp={siteData.contact.whatsapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}