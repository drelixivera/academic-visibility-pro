const icons = {
  pen: (
    <path
      d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  book: (
    <path
      d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5zM4 19.5V22M8 7h8M8 11h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  journal: (
    <path
      d="M6 2h9l5 5v15H6zM15 2v5h5M9 13h6M9 17h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  award: (
    <path
      d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 13.5L7 22l5-3 5 3-1.5-8.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  badge: (
    <path
      d="M12 2l2.4 2.1 3.1-.5.6 3.1 2.5 1.9-1.7 2.7.9 3-2.9 1.2-.7 3.1-3.1-.5L12 22l-1.1-2.9-3.1.5-.7-3.1-2.9-1.2.9-3L3.4 9.6l2.5-1.9.6-3.1 3.1.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  letter: (
    <path
      d="M3 6l9 6 9-6M3 6v12h18V6M3 6l9 6 9-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chart: (
    <path
      d="M3 21h18M6 17l4-6 3 3 5-8M14 6h4v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  trophy: (
    <path
      d="M8 21h8M12 17v4M6 4h12v5a6 6 0 0 1-12 0V4zM6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  megaphone: (
    <path
      d="M3 11v3a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1zM14 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  search: (
    <path
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  users: (
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

export default function ServiceCard({ service }) {
  const { title, description, icon, featured } = service;

  return (
    <article className="card flex flex-col">
      {/* Icon badge */}
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-navy">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {icons[icon]}
        </svg>
      </div>

      {featured && (
        <span className="mb-3 inline-flex w-fit rounded-full border border-navy/10 bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">
          Start Here
        </span>
      )}

      <h3 className="text-lg leading-snug">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-body">
        {description}
      </p>
    </article>
  );
}