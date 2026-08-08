import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Image
        src="/images/hero/travel-globe.svg"
        alt="Ilustração da Consol Travels"
        width={520}
        height={520}
        priority
        className="h-auto w-full max-w-[520px]"
      />
    </div>
  );
}