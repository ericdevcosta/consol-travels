"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

type DestinationCardProps = {
  country: string;
  city: string;
  image: string;
  description: string;
  highlights: string[];
  whatsapp: string;
};

export default function DestinationCard({
  country,
  city,
  image,
  description,
  highlights,
  whatsapp,
}: DestinationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={`${country} - ${city}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-bold">{country}</h3>

            <p className="mt-1 text-lg opacity-90">
              Explore {city}
            </p>
          </div>
        </div>

        <div className="p-6">
          <p className="mb-6 leading-relaxed text-slate-600">
            {description}
          </p>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Conhecer destino
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Fechar"
            >
              ×
            </button>

            <h2 className="pr-12 text-2xl font-bold text-blue-950 sm:text-3xl">
              {city}, {country}
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              {description}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-blue-950">
                Destaques
              </h3>

              <ul className="mt-4 space-y-3">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button
                href={`https://wa.me/${whatsapp}?text=Olá! Gostaria de saber mais sobre ${city}, ${country}.`}
              >
                Quero conhecer este destino
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
