export default function TestimonialCard({ testimonial, onOpen }) {
  const { name, role, country, short } = testimonial;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/5 bg-white p-6 shadow-card transition hover:shadow-card-hover">
      {/* Stars */}
      <div className="mb-4 flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote snippet */}
      <p className="line-clamp-2 text-sm leading-relaxed text-body">
        "{short}"
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-navy/5 pt-4">
        <div>
          <p className="font-serif text-base text-navy">{name}</p>
          <p className="text-xs text-body">
            {role} · {country}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpen(testimonial)}
          aria-label={`Read full testimonial from ${name}`}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white transition hover:bg-navy-light"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}