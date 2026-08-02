type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </a>
  );
}