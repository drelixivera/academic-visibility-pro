import teamPhoto from "../assets/team.jpg";
import Reveal from "./ui/Reveal";

export default function TrustImage() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            {/* Image */}
            <img
              src={teamPhoto}
              alt="Research team collaborating on a project"
              width="1200"
              height="800"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />

            {/* Disclaimer badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
              <div className="flex items-start gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-card backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm font-medium leading-snug text-navy">
                  Profile-building support, not immigration legal advice.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}