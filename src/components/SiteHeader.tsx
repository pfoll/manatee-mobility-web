import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/brand/manatee-mobility-logo-stacked.png"
            alt="Manatee Mobility"
            width={160}
            height={160}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-deep-ink/70 sm:flex">
          <a href="#about" className="transition hover:text-deep-ink">
            About
          </a>
          <a href="#how-it-works" className="transition hover:text-deep-ink">
            How it works
          </a>
          <a href="#naples" className="transition hover:text-deep-ink">
            Naples
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-gulf-teal px-4 py-2 font-medium text-soft-cloud transition hover:bg-gulf-teal/90"
          >
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
