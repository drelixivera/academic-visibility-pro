import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Real feedback from professionals we've worked with — full transparency, no filters."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}