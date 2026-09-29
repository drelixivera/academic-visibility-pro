import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Us"
              title="A profile that reflects real recognition."
            />
          </div>

          {/* Right: body — Reveal IS the grid child, so col-span goes on it */}
          <Reveal delay={1} className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-body sm:text-lg">
              <p>
                Academic Visibility Pro helps researchers, engineers,
                physicians, and executives strategically build strong academic
                profiles for career advancement, professional recognition, and
                immigration pathways such as EB1A and EB2 NIW.
              </p>
              <p>
                We focus on strengthening academic impact, professional
                recognition, and global visibility — so our clients meet the
                criteria that matter before they ever submit a petition.
              </p>
              <p>
                Our approach centers on genuine, well-documented achievement.
                We do not just assist with applications — we help you build a
                profile that reflects real recognition in your field.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}