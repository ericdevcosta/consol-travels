import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function AdvantageCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
        <Icon size={36} className="text-blue-700" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-blue-950">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}