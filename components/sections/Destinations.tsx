"use client";

import { useEffect, useRef, useState } from "react";

import SectionTitle from "@/components/ui/SectionTitle";

import DestinationCard from "@/components/ui/DestinationCard";

import { siteData } from "@/data/site";

export default function Destinations() {
  const mobileCarouselRef =
    useRef<HTMLDivElement>(null);

  const desktopCarouselRef =
    useRef<HTMLDivElement>(null);

  const [mobileActiveIndex, setMobileActiveIndex] =
    useState(0);

  const [desktopActiveIndex, setDesktopActiveIndex] =
    useState(0);

  const [isDesktopHovered, setIsDesktopHovered] =
    useState(false);

  useEffect(() => {
    const container = mobileCarouselRef.current;

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
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleCards.length === 0) return;

        const activeCard =
          visibleCards[0].target as HTMLElement;

        const index = cards.indexOf(activeCard);

        if (index !== -1) {
          setMobileActiveIndex(index);
        }
      },
      {
        root: container,
        threshold: [0.5, 0.75, 0.9],
      }
    );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = mobileCarouselRef.current;

    if (!container) return;

    const interval = window.setInterval(() => {
      const cards = Array.from(
        container.children
      ) as HTMLElement[];

      if (cards.length === 0) return;

      setMobileActiveIndex((currentIndex) => {
        const nextIndex =
          currentIndex >= cards.length - 1
            ? 0
            : currentIndex + 1;

        container.scrollTo({
          left: cards[nextIndex].offsetLeft,
          behavior: "smooth",
        });

        return nextIndex;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const updateDesktopIndex = () => {
    const carousel =
      desktopCarouselRef.current;

    if (!carousel) return;

    const cards = Array.from(
      carousel.children
    ) as HTMLElement[];

    if (!cards.length) return;

    const scrollPosition = carousel.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - scrollPosition
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setDesktopActiveIndex(
      Math.min(
        closestIndex,
        siteData.destinations.length - 1
      )
    );
  };

  useEffect(() => {
    const carousel =
      desktopCarouselRef.current;

    if (!carousel) return;

    const interval = window.setInterval(() => {
      if (isDesktopHovered) return;

      const cards = Array.from(
        carousel.children
      ) as HTMLElement[];

      if (!cards.length) return;

      const currentIndex =
        desktopActiveIndex;

      const nextIndex =
        currentIndex >= cards.length - 1
          ? 0
          : currentIndex + 1;

      carousel.scrollTo({
        left: cards[nextIndex].offsetLeft,
        behavior: "smooth",
      });

      setDesktopActiveIndex(nextIndex);
    }, 4500);

    return () =>
      window.clearInterval(interval);
  }, [
    desktopActiveIndex,
    isDesktopHovered,
  ]);

  const scrollToDesktop = (
    index: number
  ) => {
    const carousel =
      desktopCarouselRef.current;

    if (!carousel) return;

    const card = carousel.children[
      index
    ] as HTMLElement | undefined;

    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setDesktopActiveIndex(index);
  };

  return (
    <section
      id="destinos"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Consol Travels"
          title="Destinos em Destaque"
          subtitle="Conheça alguns dos lugares mais procurados pelos nossos clientes."
        />

        {/* Mobile: carrossel */}
        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {siteData.destinations.map(
              (destination) => (
                <div
                  key={destination.country}
                  className="w-[85vw] shrink-0 snap-center"
                >
                  <DestinationCard
                    country={destination.country}
                    city={destination.city}
                    image={destination.image}
                    description={
                      destination.description
                    }
                    highlights={
                      destination.highlights
                    }
                    whatsapp={
                      siteData.contact.whatsapp
                    }
                  />
                </div>
              )
            )}
          </div>

          {/* Indicadores mobile */}
          <div className="flex justify-center gap-2 pt-2">
            {siteData.destinations.map(
              (destination, index) => (
                <span
                  key={destination.country}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === mobileActiveIndex
                      ? "w-5 bg-blue-700"
                      : "w-2 bg-slate-300"
                  }`}
                />
              )
            )}
          </div>
        </div>

        {/* Desktop: carrossel */}
        <div
          className="hidden md:block"
          onMouseEnter={() =>
            setIsDesktopHovered(true)
          }
          onMouseLeave={() =>
            setIsDesktopHovered(false)
          }
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
            {siteData.destinations.map(
              (destination) => (
                <div
                  key={destination.country}
                  className="w-[calc((100%-4rem)/3)] shrink-0 snap-start"
                >
                  <DestinationCard
                    country={destination.country}
                    city={destination.city}
                    image={destination.image}
                    description={
                      destination.description
                    }
                    highlights={
                      destination.highlights
                    }
                    whatsapp={
                      siteData.contact.whatsapp
                    }
                  />
                </div>
              )
            )}
          </div>

          {/* Indicadores desktop */}
          <div className="mt-5 flex justify-center gap-2">
            {siteData.destinations.map(
              (destination, index) => (
                <button
                  key={destination.country}
                  type="button"
                  aria-label={`Ir para o destino ${
                    index + 1
                  }: ${destination.city}`}
                  onClick={() =>
                    scrollToDesktop(index)
                  }
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === desktopActiveIndex
                      ? "w-6 bg-blue-700"
                      : "w-2 bg-slate-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}