import { steps } from "../data/steps";
import SectionHeading from "./ui/SectionHeading";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title="How we work"
          description="Three deliberate stages. No guesswork, no vague promises — just steady progress toward a profile that stands up to real scrutiny."
        />

        <ol className="relative mt-16 space-y-8 sm:space-y-12">
          {/* Vertical connector line (desktop only) */}
          <span
            aria-hidden="true"
            className="absolute left-8 top-4 bottom-4 hidden w-px bg-gradient-to-b from-navy/20 via-navy/10 to-transparent sm:block"
          />

          {steps.map((step, index) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10"
            >
              {/* Number bubble */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-cream font-serif text-2xl text-navy shadow-card">
                {step.number}
              </div>

              {/* Content */}
              <div className="card flex-1">
                <h3 className="text-xl sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}