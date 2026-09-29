function StarRow({ count, total = 5, size = "sm" }) {
  const sizeClass = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  return (
    <div className="flex gap-0.5" aria-label={`${count} out of ${total} stars`}>
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < count;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`${sizeClass} ${filled ? "text-gold" : "text-navy/15"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}

export default function TestimonialCard({ testimonial }) {
  const { name, role, country, rating, message, breakdown } = testimonial;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/5 bg-white p-7 shadow-card">
      {/* Header: avatar + name + rating */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-lg text-gold">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">
          <p className="font-serif text-lg text-navy truncate">{name}</p>
          {(role || country) && (
            <p className="text-xs text-body truncate">
              {[role, country].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        <div className="ml-auto">
          <StarRow count={rating} size="lg" />
        </div>
      </div>

      {/* Message */}
      <p className="mt-6 flex-1 text-base leading-relaxed text-body">
        "{message}"
      </p>

      {/* Breakdown */}
      <div className="mt-6 space-y-3 border-t border-navy/5 pt-5">
        {breakdown.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-sm font-medium text-navy">
              {item.label}
            </span>
            <div className="flex items-center gap-3">
              <StarRow count={item.score} />
              <span className="w-3 text-right text-xs font-semibold text-body">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}