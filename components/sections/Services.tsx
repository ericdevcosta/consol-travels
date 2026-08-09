"use client";

import { useState } from "react";
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
  Ticket,
} from "lucide-react";

const icons = {
  Plane,
  Hotel,
  MapPinned,
  Car,
  ShieldCheck,
  Ship,
  Ticket,
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="servicos"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Consol Travels"
          title="Nossos Serviços"
          subtitle="Soluções para diferentes momentos da sua viagem, do planejamento à experiência no destino."
        />

        {/* MOBILE */}
        <div className="md:hidden">
          <div
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            onScroll={(event) => {
              const container = event.currentTarget;
              const scrollPosition = container.scrollLeft;
              const cardWidth =
                container.clientWidth * 0.88 + 20;

              const index = Math.round(
                scrollPosition / cardWidth
              );

              setActiveIndex(
                Math.min(
                  index,
                  siteData.services.length - 1
                )
              );
            }}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {siteData.services.map((service) => {
              const Icon =
                icons[service.icon as keyof typeof icons];

              return (
                <div
                  key={service.title}
                  className="w-[88%] shrink-0 snap-center"
                >
                  <ServiceCard
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              );
            })}
          </div>

          {/* Indicador do carrossel */}
          <div className="mt-5 flex justify-center gap-2">
            {siteData.services.map((service, index) => (
              <span
                key={service.title}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-blue-700"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-6">
          {siteData.services.map((service, index) => {
            const Icon =
              icons[service.icon as keyof typeof icons];

            const isLast =
              index === siteData.services.length - 1;

            return (
              <div
                key={service.title}
                className={
                  isLast
                    ? "xl:col-span-2 xl:col-start-3"
                    : "xl:col-span-2"
                }
              >
                <ServiceCard
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}