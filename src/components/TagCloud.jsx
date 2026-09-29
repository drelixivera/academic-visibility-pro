import Reveal from "./ui/Reveal";

const tags = [
  "EB1A",
  "O1",
  "NIW",
  "Researchers",
  "Engineers",
  "Physicians",
  "Executives",
  "Scholars",
  "Professionals",
];

export default function TagCloud() {
  return (
    <section className="py-14 sm:py-16 bg-cream">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/50">
            Built for professionals pursuing
          </p>
        </Reveal>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag, index) => (
            <Reveal key={tag} delay={index % 3}>
              <li className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-card">
                {tag}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}