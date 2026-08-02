import { Plane } from "lucide-react";
import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src="/images/hero/travel-globe.svg"
        alt="Ilustração da Consol Travels"
        width={520}
        height={520}
        priority
      />
    </div>
  );
}