import Button from "@/components/ui/Button";
import { siteData } from "@/data/site";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center">
        <Image
            src="/images/logo/consol-travels-logo.jpeg"
            alt="Consol Travels"
            width={220}
            height={100}
            className="h-16 w-auto"
            priority
        />
        </a>

        <ul className="hidden gap-8 font-medium text-slate-600 md:flex">
          <li>
            <a href="#"
            className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700">Home</a>
          </li>

          <li>
            <a href="#servicos"
            className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700">Serviços</a>
          </li>

          <li>
            <a href="#destinos"
            className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700">Destinos</a>
          </li>

          <li>
            <a href="#sobre"
            className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700">Sobre</a>
          </li>

          <li>
            <a href="#contato"
            className="text-base font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700">Contato</a>
          </li>
        </ul>

        <div className="hidden md:block">
        <Button
            href={`https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`}
        >
            Solicitar orçamento
        </Button>
        </div>
      </nav>
    </header>
  );
}