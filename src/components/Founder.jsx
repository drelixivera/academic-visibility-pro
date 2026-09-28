import founderPhoto from "../assets/founder.jpg";
import { site } from "../data/site";
import { whatsappLink } from "../utils/whatsapp";

export default function Founder() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src={founderPhoto}
                  alt="Adeyemi Sodiq, Founder of Academic Visibility Pro"
                  width="600"
                  height="600"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Decorative gold ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-gold-soft"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Meet the Founder</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Adeyemi Sodiq
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              Adeyemi Sodiq is the founder of Academic Visibility Pro, where he
              focuses on strategic profile building for researchers, academics,
              engineers, executives, and global professionals pursuing EB1A,
              O1, and EB2 NIW pathways.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
              His work is built on a simple principle: recognition should be
              earned, well-documented, and strategic — never manufactured.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(
                  "Hi Adeyemi, I'd like to discuss building my academic profile."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Talk to Adeyemi
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}