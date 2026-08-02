export default function Waves() {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-none pointer-events-none">
      <svg
        viewBox="0 0 1440 220"
        className="block h-40 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C180,140 360,20 540,80 C720,140 900,20 1080,80 C1260,140 1440,20 1440,20 L1440,220 L0,220 Z"
          fill="#FCFAF6"
        />

        <path
          d="M0,120 C180,180 360,60 540,120 C720,180 900,60 1080,120 C1260,180 1440,60 1440,60 L1440,220 L0,220 Z"
          fill="#F8F3EA"
          opacity="0.9"
        />

        <path
          d="M0,165 C180,205 360,120 540,165 C720,205 900,120 1080,165 C1260,205 1440,120 1440,120 L1440,220 L0,220 Z"
          fill="#EDF8FC"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}