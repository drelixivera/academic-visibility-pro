import { whatsappLink } from "../utils/whatsapp";

export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      {/* ---------- Decorative composition ---------- */}
      <div className="relative aspect-square w-full">
        {/* Soft gold blob (top-right) */}
        <div className="hero-blob absolute right-[8%] top-[6%] h-40 w-40 rounded-full bg-gold/40 blur-3xl sm:h-56 sm:w-56" />

        {/* Soft navy blob (bottom-left) */}
        <div className="absolute bottom-[8%] left-[6%] h-32 w-32 rounded-full bg-navy/10 blur-3xl sm:h-48 sm:w-48" />

        {/* Concentric rings (SVG) */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full"
          fill="none"
          stroke="currentColor"
        >
          <g className="text-navy/15">
            <circle cx="200" cy="200" r="180" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" strokeWidth="1" />
          </g>
          <g className="text-gold/40">
            <circle cx="200" cy="200" r="60" strokeWidth="1.5" />
          </g>
          {/* Small accent arc */}
          <path
            d="M 200 20 A 180 180 0 0 1 380 200"
            className="text-gold"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Dot grid (SVG) — reads as data points / citations */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dotGrid"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="#C89B3C" opacity="0.35" />
            </pattern>
          </defs>
          {/* Dot region — upper-left quadrant, masked so it fades */}
          <rect
            x="30"
            y="30"
            width="180"
            height="180"
            fill="url(#dotGrid)"
            style={{
              maskImage:
                "radial-gradient(circle at 30% 30%, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at 30% 30%, black 30%, transparent 75%)",
            }}
          />
        </svg>

        {/* ---------- Floating trust card ---------- */}
        <div className="absolute bottom-[4%] left-1/2 w-[78%] max-w-xs -translate-x-1/2">
          <div className="rounded-2xl border border-navy/5 bg-white p-5 shadow-[0_20px_60px_-20px_rgba(11,31,58,0.25)]">
            {/* Stat rows */}
            <div className="space-y-4">
              <StatRow label="Profiles Built" value="110+" />
              <StatRow label="Countries Served" value="10+" />
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-navy/5" />

            {/* Mini CTA */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-sm font-semibold text-navy transition hover:text-gold-hover"
            >
              <span>Start a conversation</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition group-hover:bg-gold-hover">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
        {label}
      </span>
      <span className="font-serif text-2xl text-navy">{value}</span>
    </div>
  );
}