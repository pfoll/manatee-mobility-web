/**
 * Informational go-live placeholder — no form, no DATABASE_URL at runtime.
 * Waitlist form/action/schema remain in repo for a later release.
 */
export function ComingSoonNote() {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium tracking-[0.08em] text-horizon-indigo/60 uppercase">
        Coming soon
      </p>
      <p className="text-lg leading-relaxed text-deep-ink/75">
        We’re preparing quiet Cybercab rides for Naples. Interest signup will
        open here shortly — check back, or follow along as we get ready.
      </p>
      <p className="text-sm leading-relaxed text-deep-ink/50">
        No waitlist yet. Just a calm note that service is on the horizon.
      </p>
    </div>
  );
}
