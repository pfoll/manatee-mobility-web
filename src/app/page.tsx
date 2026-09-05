import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WaitlistForm } from "@/components/WaitlistForm";
import { readUtmsFromSearchParams } from "@/lib/utm";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const utms = readUtmsFromSearchParams(params);

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero — metaphor before diagram; protected negative space */}
        <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,color-mix(in_srgb,var(--qh-warm-sand)_45%,transparent),transparent_55%),radial-gradient(ellipse_at_20%_100%,color-mix(in_srgb,var(--qh-horizon-indigo)_8%,transparent),transparent_50%)]"
          />
          <div className="relative mx-auto max-w-[1120px]">
            <div className="max-w-[720px] space-y-8">
              <p className="qh-fade text-sm font-medium tracking-[0.08em] text-horizon-indigo/70 uppercase">
                Naples, Florida
              </p>
              <h1 className="qh-fade qh-fade-delay-1 font-display text-[2.75rem] leading-[1.12] font-medium text-deep-ink sm:text-5xl md:text-6xl">
                Quiet rides for the Gulf coast.
              </h1>
              <p className="qh-fade qh-fade-delay-2 max-w-xl text-lg leading-relaxed text-deep-ink/70 sm:text-xl">
                Manatee Mobility is bringing autonomous Tesla Cybercab
                ride-hail to Naples — calm, local, and built for how this
                place actually moves.
              </p>
              <div className="qh-fade qh-fade-delay-3">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-lg bg-gulf-teal px-6 py-3.5 text-base font-semibold text-soft-cloud transition hover:bg-gulf-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gulf-teal focus-visible:ring-offset-2 focus-visible:ring-offset-soft-cloud"
                >
                  Join the waitlist
                </a>
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
                No hype. No dense app clutter. Just a clear path from waitlist
                to first ride when service opens in Naples.
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
                  title: "Join the list",
                  body: "Share your email. We’ll keep you informed as Naples service takes shape — nothing more.",
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
                  <h3 className="text-xl font-semibold text-deep-ink">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-deep-ink/65">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Naples focus — single Dawn Gold hairline accent */}
        <section
          id="naples"
          className="scroll-mt-20 px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[720px] text-center">
            <div
              className="mx-auto mb-8 h-px w-16 bg-dawn-gold"
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

        {/* Waitlist */}
        <section
          id="waitlist"
          className="scroll-mt-20 border-t border-horizon-indigo/8 bg-[color:var(--qh-surface-light-elevated)] px-6 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[560px]">
            <h2 className="font-display text-3xl font-medium text-deep-ink sm:text-4xl">
              Join the Naples waitlist
            </h2>
            <p className="mt-4 mb-10 text-lg leading-relaxed text-deep-ink/65">
              Be among the first to know when Cybercab rides open here.
            </p>
            <div className="rounded-2xl border border-horizon-indigo/10 bg-surface-elevated p-6 shadow-[0_1px_0_rgba(36,52,74,0.04)] sm:p-8">
              <WaitlistForm utms={utms} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
