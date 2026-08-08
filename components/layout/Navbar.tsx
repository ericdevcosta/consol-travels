"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { siteData } from "@/data/site";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo/consol-travels-logo.jpeg"
            alt="Consol Travels"
            width={220}
            height={100}
            className="h-16 w-auto"
            priority
          />
        </a>

        {/* Menu desktop */}
        <ul className="hidden gap-8 font-medium text-slate-600 md:flex">
          <li>
            <a
              href="#"
              className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#servicos"
              className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700"
            >
              Serviços
            </a>
          </li>

          <li>
            <a
              href="#destinos"
              className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700"
            >
              Destinos
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Botão orçamento - desktop */}
        <div className="hidden md:block">
          <Button
            href={`https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`}
          >
            Solicitar orçamento
          </Button>
        </div>

        {/* Botão menu - mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-blue-950 transition hover:bg-blue-50 md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <span className="text-3xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#servicos"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Serviços
              </a>
            </li>

            <li>
              <a
                href="#destinos"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Destinos
              </a>
            </li>

            <li>
              <a
                href="#sobre"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#contato"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Contato
              </a>
            </li>

            <li className="pt-3">
              <Button
                href={`https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`}
              >
                Solicitar orçamento
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}