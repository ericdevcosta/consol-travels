"use client";

import { useEffect, useRef, useState } from "react";

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
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);

  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);

  const updateMobileIndex = () => {
    const carousel = mobileCarouselRef.current;

    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];

    if (!cards.length) return;

    const scrollPosition = carousel.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollPosition);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setMobileActiveIndex(
      Math.min(closestIndex, siteData.services.length - 1)
    );
  };

  const updateDesktopIndex = () => {
    const carousel = desktopCarouselRef.current;

    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];

    if (!cards.length) return;

    const scrollPosition = carousel.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollPosition);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setDesktopActiveIndex(
      Math.min(closestIndex, siteData.services.length - 1)
    );
  };

  useEffect(() => {
    const carousel = desktopCarouselRef.current;

    if (!carousel) return;

    const interval = window.setInterval(() => {
      if (isDesktopHovered) return;

      const cards = Array.from(carousel.children) as HTMLElement[];

      if (!cards.length) return;

      const currentIndex = desktopActiveIndex;
      const nextIndex =
        currentIndex >= cards.length - 1 ? 0 : currentIndex + 1;

      carousel.scrollTo({
        left: cards[nextIndex].offsetLeft,
        behavior: "smooth",
      });

      setDesktopActiveIndex(nextIndex);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [desktopActiveIndex, isDesktopHovered]);

  useEffect(() => {
    const carousel = mobileCarouselRef.current;

    if (!carousel) return;

    const interval = window.setInterval(() => {
      const cards = Array.from(carousel.children) as HTMLElement[];

      if (!cards.length) return;

      const currentIndex = mobileActiveIndex;
      const nextIndex =
        currentIndex >= cards.length - 1 ? 0 : currentIndex + 1;

      carousel.scrollTo({
        left: cards[nextIndex].offsetLeft,
        behavior: "smooth",
      });

      setMobileActiveIndex(nextIndex);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [mobileActiveIndex]);

  const scrollToMobile = (index: number) => {
    const carousel = mobileCarouselRef.current;

    if (!carousel) return;

    const card = carousel.children[index] as HTMLElement | undefined;

    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setMobileActiveIndex(index);
  };

  const scrollToDesktop = (index: number) => {
    const carousel = desktopCarouselRef.current;

    if (!carousel) return;

    const card = carousel.children[index] as HTMLElement | undefined;

    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setDesktopActiveIndex(index);
  };

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
            ref={mobileCarouselRef}
            onScroll={updateMobileIndex}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
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

          {/* Indicadores mobile */}
          <div className="mt-5 flex justify-center gap-2">
            {siteData.services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                aria-label={`Ir para o serviço ${index + 1}: ${service.title}`}
                onClick={() => scrollToMobile(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === mobileActiveIndex
                    ? "w-6 bg-blue-700"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div
          className="hidden md:block"
          onMouseEnter={() => setIsDesktopHovered(true)}
          onMouseLeave={() => setIsDesktopHovered(false)}
        >
          <div
            ref={desktopCarouselRef}
            onScroll={updateDesktopIndex}
            className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory"
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
                  className="w-[calc((100%-4rem)/3)] shrink-0 snap-start"
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

          {/* Indicadores desktop */}
          <div className="mt-5 flex justify-center gap-2">
            {siteData.services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                aria-label={`Ir para o serviço ${index + 1}: ${service.title}`}
                onClick={() => scrollToDesktop(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === desktopActiveIndex
                    ? "w-6 bg-blue-700"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}