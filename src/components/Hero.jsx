import { whatsappLink } from "../utils/whatsapp";

const stats = [
  { label: "Profile Services", value: "11" },
  { label: "Profiles Built", value: "110+" },
  { label: "Countries Served", value: "10+" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,31,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at top, black 40%, transparent 75%)",
        }}
      />

      <div className="container-x">
        <span className="eyebrow">EB1A · O1 · NIW Profile Building</span>

        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          Build the academic profile that gets recognized.
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-body">
          We help researchers, engineers, physicians, and executives strengthen
          their academic impact, professional recognition, and global visibility —
          so their EB1A, O1, or NIW petition is strong before they ever file.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a Free Consultation
          </a>
          <a href="#services" className="btn btn-outline">
            Explore Services
          </a>
        </div>

        {/* Stats strip */}
        <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-navy/10 pt-8 sm:grid-cols-3 sm:gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
                {s.label}
              </dt>
              <dd className="mt-2 font-serif text-3xl text-navy">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}