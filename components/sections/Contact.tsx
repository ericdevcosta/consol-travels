import {
  Mail,
  MessageCircle,
  AtSign,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { siteData } from "@/data/site";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`;

  const emailUrl = `mailto:${siteData.contact.email}`;

  const instagramUrl =
    siteData.contact.instagramUrl ||
    "https://www.instagram.com/consoltravels/";

  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-blue-50 to-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionTitle
          eyebrow={siteData.contactSection.eyebrow}
          title={siteData.contactSection.title}
          subtitle={siteData.contactSection.description}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-4 transition hover:bg-white hover:shadow-md"
          >
            <MessageCircle
              className="mx-auto mb-4 text-blue-600 transition-transform group-hover:scale-110"
              size={36}
            />

            <h3 className="font-semibold text-blue-950">
              WhatsApp
            </h3>

            <p className="mt-2 text-slate-600">
              Atendimento rápido e personalizado.
            </p>
          </a>

          {/* E-mail */}
          <a
            href={emailUrl}
            className="group rounded-2xl p-4 transition hover:bg-white hover:shadow-md"
          >
            <Mail
              className="mx-auto mb-4 text-blue-600 transition-transform group-hover:scale-110"
              size={36}
            />

            <h3 className="font-semibold text-blue-950">
              E-mail
            </h3>

            <p className="mt-2 text-slate-600">
              {siteData.contact.email}
            </p>
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-4 transition hover:bg-white hover:shadow-md"
          >
            <AtSign
              className="mx-auto mb-4 text-blue-600 transition-transform group-hover:scale-110"
              size={36}
            />

            <h3 className="font-semibold text-blue-950">
              Instagram
            </h3>

            <p className="mt-2 text-slate-600">
              {siteData.contact.instagram}
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}