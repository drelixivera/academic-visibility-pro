import { useEffect, useState } from "react";
import { site } from "../data/site";
import { whatsappLink } from "../utils/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add a subtle shadow when the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open + close on ESC
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e) => e.key === "Escape" && setOpen(false);
      document.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(11,31,58,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-4">
          {/* Left cluster: hamburger (mobile) + brand mark */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger — left of logo */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white"
            >
              <div className="flex flex-col gap-1">
                <span className="h-0.5 w-5 bg-navy" />
                <span className="h-0.5 w-5 bg-navy" />
                <span className="h-0.5 w-5 bg-navy" />
              </div>
            </button>

            {/* Brand */}
            <a href="#top" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-gold font-serif text-lg">
                A
              </span>
              {/* Brand text — hidden on mobile, visible from md+ */}
              <span className="hidden font-serif text-lg text-navy tracking-tight md:inline">
                Academic Visibility Pro
              </span>
            </a>
          </div>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-navy/80 transition hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA cluster: mobile short label + desktop full label */}
          <div className="flex items-center gap-2">
            {/* Mobile CTA — short label */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-4 !py-2 !text-xs md:hidden"
            >
              Free Consultation
            </a>

            {/* Desktop CTA — full label */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden md:inline-flex"
            >
              Book a Free Consultation
            </a>
          </div>
        </nav>
      </header>

      {/* ---------- Mobile Drawer ---------- */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[55] bg-navy/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 left-0 z-[56] w-[82%] max-w-sm bg-cream shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between border-b border-navy/5 px-5 py-4">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold font-serif text-base">
                A
              </span>
              <span className="font-serif text-sm text-navy">
                Academic Visibility Pro
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition hover:bg-navy hover:text-white"
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
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-navy transition hover:bg-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer inside drawer */}
          <div className="border-t border-navy/5 px-5 py-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Book a Free Consultation
            </a>

            {/* Socials */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition hover:bg-navy hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition hover:bg-navy hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}