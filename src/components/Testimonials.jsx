import { useRef, useState } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import TestimonialModal from "./TestimonialModal";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(null);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            description="Trusted by professionals in research, engineering, medicine, and academia worldwide."
          />

          {/* Arrow controls (desktop only) */}
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition hover:border-navy hover:bg-navy hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition hover:border-navy hover:bg-navy hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-[85%] flex-shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
              >
                <TestimonialCard testimonial={t} onOpen={setActive} />
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-body/70 sm:hidden">
            Swipe to browse →
          </p>
        </div>
      </div>

      {/* Modal — conditionally mounted. Only exists when a testimonial is active. */}
      {active && (
        <TestimonialModal
          testimonial={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}