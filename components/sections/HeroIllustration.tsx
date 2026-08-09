import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src="/images/logo/consol-travels-logo-transparent.png"
        alt="Logo da Consol Travels"
        width={520}
        height={520}
        priority
        className="h-auto w-full max-w-[420px]"
      />
    </div>
  );
}