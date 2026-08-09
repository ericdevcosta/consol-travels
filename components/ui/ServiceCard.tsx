import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group flex h-full min-h-[300px] flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-600">
        <Icon
          size={30}
          className="text-blue-700 transition-colors group-hover:text-white"
        />
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