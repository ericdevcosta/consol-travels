import BrandBackground from "@/components/ui/BrandBackground";
import Waves from "@/components/ui/Waves";
import HeroIllustration from "./HeroIllustration";
import Button from "@/components/ui/Button";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

    <BrandBackground />

    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Coluna da esquerda */}
        <div className="max-w-xl space-y-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Consol Travels
          </p>

          <h1 className="text-5xl font-bold leading-tight text-blue-950">
            {siteData.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {siteData.hero.subtitle}
          </p>

          <div className="mt-10">
            <Button
              href={`https://wa.me/${siteData.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para uma viagem.`}
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>

        {/* Coluna da direita */}
        <HeroIllustration />
      </div>
      <Waves />
    </section>
  );
}