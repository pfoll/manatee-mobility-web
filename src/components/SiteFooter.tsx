import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-horizon-indigo/10 bg-soft-cloud">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="space-y-3">
          <Image
            src="/brand/manatee-mobility-logo-horizontal.png"
            alt="Manatee Mobility"
            width={160}
            height={107}
            className="h-7 w-auto opacity-90"
          />
          <p className="max-w-xs text-sm leading-relaxed text-deep-ink/55">
            Autonomous Tesla Cybercab ride-hail for Naples and Southwest
            Florida.
          </p>
        </div>
        <div className="space-y-2 text-sm text-deep-ink/50">
          <p>Naples, Florida</p>
          <p className="pt-2 text-xs text-deep-ink/40">
            © {new Date().getFullYear()} Manatee Mobility. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
