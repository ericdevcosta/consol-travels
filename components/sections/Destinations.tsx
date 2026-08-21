"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import DestinationCard from "@/components/ui/DestinationCard";
import { siteData } from "@/data/site";

export default function Destinations() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = Array.from(
      container.children
    ) as HTMLElement[];

    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleCards.length === 0) return;

        const activeCard = visibleCards[0].target as HTMLElement;
        const index = cards.indexOf(activeCard);

        if (index !== -1) {
          setActiveIndex(index);
        }
      },
      {
        root: container,
        threshold: [0.5, 0.75, 0.9],
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
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
            {siteData.destinations.map(
              (destination, index) => (
                <span
                  key={destination.country}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-5 bg-blue-700"
                      : "w-2 bg-slate-300"
                  }`}
                />
              )
            )}
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