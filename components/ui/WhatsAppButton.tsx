"use client";

import { MessageCircle } from "lucide-react";
import { siteData } from "@/data/site";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Consol Travels."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}