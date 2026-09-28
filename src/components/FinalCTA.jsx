import { whatsappLink } from "../utils/whatsapp";

export default function FinalCTA() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative gold glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Free Consultation
            </span>

            <h2 className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build a profile that opens doors?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Tell us where you are and where you want to be. We'll give you an
              honest assessment of what's strong, what needs work, and the
              fastest path forward — no pressure, no commitment.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink(
                  "Hi Academic Visibility Pro, I'd like a free assessment of my academic profile."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="btn inline-flex border border-white/20 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy"
              >
                Review Services
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Typical response time: within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}