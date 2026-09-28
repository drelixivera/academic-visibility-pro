import { useEffect } from "react";

export default function TestimonialModal({ testimonial, onClose }) {
  // Close on Escape, lock body scroll while open.
  // This effect only runs while the modal is mounted — thanks to
  // conditional mounting in Testimonials.jsx ({active && <Modal />}).
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const { name, role, country, full } = testimonial;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="testimonial-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white p-7 shadow-2xl sm:p-10">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close testimonial"
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy transition hover:bg-navy hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Stars */}
        <div className="mb-5 flex gap-0.5 text-gold">
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

        <p
          id="testimonial-modal-title"
          className="font-serif text-lg leading-relaxed text-navy sm:text-xl"
        >
          "{full}"
        </p>

        <div className="mt-8 border-t border-navy/5 pt-5">
          <p className="font-serif text-base text-navy">{name}</p>
          <p className="text-sm text-body">
            {role} · {country}
          </p>
        </div>
      </div>
    </div>
  );
}