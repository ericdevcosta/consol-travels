import {
  Mail,
  MessageCircle,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { siteData } from "@/data/site";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`;
  const emailUrl = `mailto:${siteData.contact.email}`;

  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-blue-50 to-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionTitle
          eyebrow={siteData.contactSection.eyebrow}
          title="Vamos planejar sua próxima viagem?"
          subtitle="Conte para nós o que você está planejando e ajudaremos a transformar sua ideia em uma experiência inesquecível."
        />

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col items-center rounded-2xl p-6 transition hover:bg-white hover:shadow-md"
          >
            <MessageCircle
              className="mx-auto mb-4 text-blue-600 transition-transform group-hover:scale-110"
              size={40}
            />

            <h3 className="font-semibold text-blue-950">
              Falar pelo WhatsApp
            </h3>

            <p className="mt-2 text-slate-600">
              Atendimento rápido e personalizado para planejar sua viagem.
            </p>

            <span className="mt-auto pt-5">
              <span className="inline-flex rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                Solicitar orçamento
              </span>
            </span>
          </a>

          {/* E-mail */}
          <a
            href={emailUrl}
            className="group flex h-full flex-col items-center rounded-2xl p-6 transition hover:bg-white hover:shadow-md"
          >
            <Mail
              className="mx-auto mb-4 text-blue-600 transition-transform group-hover:scale-110"
              size={40}
            />

            <h3 className="font-semibold text-blue-950">
              Falar por e-mail
            </h3>

            <p className="mt-2 text-slate-600">
              {siteData.contact.email}
            </p>

            <span className="mt-auto pt-5">
              <span className="inline-flex rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
                Enviar e-mail
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}