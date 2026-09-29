import { services } from "../data/services";
import ServiceCard from "./ServiceCard";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { whatsappLink } from "../utils/whatsapp";

export default function Services() {
  return (
    <section id="services" className="section bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="How we help you build a stronger profile"
          description="Every service is aimed at one outcome: a profile that reflects genuine academic achievement, professional recognition, and global visibility — the evidence that matters for EB1A, O1, and NIW pathways."
        />

        {/* Services grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index % 3}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Mid-section CTA */}
        <Reveal>
          <div className="mt-16 rounded-2xl border border-navy/5 bg-white p-8 sm:p-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between shadow-card">
            <div>
              <h3 className="text-xl sm:text-2xl">
                Not sure which service you need?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-body">
                Tell us about your goals and we'll recommend the right path.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Hi Academic Visibility Pro, I'm not sure which service fits me. Can you help me decide?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Book a Free Assessment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}