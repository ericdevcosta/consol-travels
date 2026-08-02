import Image from "next/image";
import Button from "./Button";

type DestinationCardProps = {
  country: string;
  city: string;
  image: string;
  whatsapp: string;
};

export default function DestinationCard({
  country,
  city,
  image,
  whatsapp,
}: DestinationCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={country}
          fill
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
        <Button
          href={`https://wa.me/${whatsapp}?text=Olá! Gostaria de um orçamento para ${country}.`}
        >
          Solicitar orçamento
        </Button>
      </div>
    </div>
  );
}