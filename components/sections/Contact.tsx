import {
  Mail,
  MessageCircle,
  AtSign,
} from "lucide-react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteData } from "@/data/site";

export default function Contact() {
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
          <div>
            <MessageCircle
              className="mx-auto mb-4 text-blue-600"
              size={36}
            />

            <h3 className="font-semibold text-blue-950">
              WhatsApp
            </h3>

            <p className="mt-2 text-slate-600">
              Atendimento rápido e personalizado.
            </p>
          </div>

          <div>
            <Mail
              className="mx-auto mb-4 text-blue-600"
              size={36}
            />

            <h3 className="font-semibold text-blue-950">
              E-mail
            </h3>

            <p className="mt-2 text-slate-600">
              {siteData.contact.email}
            </p>
          </div>

          <div>
            <AtSign
                className="mx-auto mb-4 text-blue-600"
                size={36}
            />

            <h3 className="font-semibold text-blue-950">
              Instagram
            </h3>

            <p className="mt-2 text-slate-600">
              {siteData.contact.instagram}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Button
            href={`https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`}
          >
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}