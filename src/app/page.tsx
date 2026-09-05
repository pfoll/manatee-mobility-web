import Image from "next/image";
import { ComingSoonNote } from "@/components/ComingSoonNote";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero — protected left type; Cybercab optically small right/lower */}
        <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          {/* Quiet Horizon Cybercab — optically small right/lower; Soft Cloud left mask */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-[68%] min-w-[280px] sm:w-[58%] lg:w-[54%]">
              <Image
                src="/brand/quiet-horizon-hero-cybercab-small.png"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 75vw, 54vw"
                className="object-cover object-[78%_72%] opacity-[0.78] sm:opacity-[0.92]"
              />
              {/* Soft Cloud mask — left dissolve for type; keep cab visible lower-right */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--qh-soft-cloud)_0%,color-mix(in_srgb,var(--qh-soft-cloud)_55%,transparent)_38%,transparent_62%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-soft-cloud/35" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-soft-cloud/55 to-transparent" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_85%,color-mix(in_srgb,var(--qh-warm-sand)_22%,transparent),transparent_45%)]" />
          </div>

          <div className="relative mx-auto max-w-[1120px]">
            <div className="max-w-[560px] space-y-8 lg:max-w-[620px]">
              <p className="qh-fade text-sm font-medium tracking-[0.08em] text-horizon-indigo/70 uppercase">
                Naples, Florida
              </p>
              <h1 className="qh-fade qh-fade-delay-1 font-display text-[2.75rem] leading-[1.12] font-medium text-deep-ink sm:text-5xl md:text-6xl">
                Rides that feel like Naples
              </h1>
              <p className="qh-fade qh-fade-delay-2 max-w-xl text-lg leading-relaxed text-deep-ink/70 sm:text-xl">
                Local Cybercab. Door to door. Never rushed, never loud.
              </p>
              {/* Sole Dawn Gold on the page — status hairline, not a CTA */}
              <div className="qh-fade qh-fade-delay-3 space-y-3">
                <div className="h-px w-12 bg-dawn-gold" aria-hidden />
                <p className="text-sm font-medium tracking-[0.14em] text-dawn-gold uppercase">
                  Coming soon
                </p>
              </div>
            </div>

            {/* Trust strip */}
            <p className="qh-fade qh-fade-delay-3 mt-16 text-sm tracking-wide text-deep-ink/45">
              Naples · Marco Island · Bonita Springs
            </p>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-20 border-t border-horizon-indigo/8 px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-medium text-deep-ink sm:text-4xl">
                Built for Naples, not a pitch deck.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-deep-ink/70 lg:col-span-7">
              <p>
                We are a local mobility company preparing autonomous Cybercab
                service for Southwest Florida. The goal is simple: a ride that
                feels considered — on time, easy to request, and respectful of
                the pace of this coast.
              </p>
              <p>
                No hype. No dense app clutter. Just a clear path to first ride
                when service opens in Naples.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-20 bg-warm-sand/35 px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1120px]">
            <h2 className="max-w-xl font-display text-3xl font-medium text-deep-ink sm:text-4xl">
              How it works
            </h2>
            <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {[
                {
                  step: "01",
                  title: "Stay tuned",
                  body: "We’re getting Naples service ready. Interest signup will open here when the time is right.",
                },
                {
                  step: "02",
                  title: "We’ll reach out",
                  body: "When rides open in your area, you’ll hear from us with clear next steps. No spam.",
                },
                {
                  step: "03",
                  title: "Ride when ready",
                  body: "Request a Cybercab when you need it — airport runs, evenings out, quiet trips across town.",
                },
              ].map((item) => (
                <li key={item.step} className="space-y-3">
                  <span className="font-display text-sm tracking-[0.12em] text-horizon-indigo/50">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-medium text-deep-ink">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-deep-ink/65">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Naples focus — muted hairline (Dawn Gold reserved for hero status) */}
        <section
          id="naples"
          className="scroll-mt-20 px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[720px] text-center">
            <div
              className="mx-auto mb-8 h-px w-16 bg-horizon-indigo/8"
              aria-hidden
            />
            <h2 className="font-display text-3xl font-medium text-deep-ink sm:text-4xl">
              Naples first.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-ink/70">
              We’re starting where we live — Naples and nearby Gulf communities.
              Coverage will grow carefully, neighborhood by neighborhood, so the
              service stays reliable from day one.
            </p>
          </div>
        </section>

        {/* Coming soon — informational; no waitlist DB */}
        <section
          id="coming-soon"
          className="scroll-mt-20 border-t border-horizon-indigo/8 bg-[color:var(--qh-surface-light-elevated)] px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[560px]">
            <h2 className="font-display text-3xl font-medium text-deep-ink sm:text-4xl">
              On the horizon
            </h2>
            <p className="mt-4 mb-10 text-lg leading-relaxed text-deep-ink/65">
              Cybercab rides for Naples are coming. Interest signup isn’t open
              yet.
            </p>
            <div className="rounded-2xl border border-horizon-indigo/8 bg-surface-elevated p-6 shadow-[0_1px_0_rgba(36,52,74,0.04)] sm:p-8">
              <ComingSoonNote />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
