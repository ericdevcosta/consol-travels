import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteData } from "@/data/site";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={siteData.about.image}
            alt="Planejamento de viagem"
            width={700}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <SectionTitle
            eyebrow={siteData.about.eyebrow}
            title={siteData.about.title}
            subtitle={siteData.about.description}
          />

          <div className="mt-10 space-y-5">
            {siteData.about.highlights.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2
                  className="shrink-0 text-blue-600"
                  size={24}
                />

                <span className="text-lg text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              href={`https://wa.me/${siteData.contact.whatsapp}`}
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}