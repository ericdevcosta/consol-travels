export default function BrandBackground() {
  return (
    <>
      {/* Luz azul */}
      <div className="absolute right-[-120px] top-16 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl" />

      {/* Luz areia */}
      <div className="absolute left-[-160px] bottom-20 h-72 w-72 rounded-full bg-amber-50 blur-3xl" />

      {/* Linha superior */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 250 C300 120 700 380 1100 220 C1400 100 1700 250 1800 180"
          stroke="#2E8BC0"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M-100 310 C280 180 680 440 1080 300 C1380 180 1700 330 1800 260"
          stroke="#7BC4A4"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M-100 700 C250 640 620 760 1000 690 C1300 640 1700 760 1800 700"
          stroke="#E8D8BF"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </>
);
}