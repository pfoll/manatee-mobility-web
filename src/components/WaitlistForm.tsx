"use client";

import { useActionState } from "react";
import {
  joinWaitlist,
  type WaitlistState,
} from "@/app/actions/waitlist";
import type { UtmParams } from "@/lib/utm";

const initial: WaitlistState = { ok: false, message: "" };

type Props = {
  utms: UtmParams;
  id?: string;
};

export function WaitlistForm({ utms, id = "waitlist" }: Props) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);

  return (
    <form
      id={id}
      action={formAction}
      className="w-full space-y-4"
      noValidate
    >
      <input type="hidden" name="utm_source" value={utms.utm_source ?? ""} />
      <input type="hidden" name="utm_medium" value={utms.utm_medium ?? ""} />
      <input type="hidden" name="utm_campaign" value={utms.utm_campaign ?? ""} />

      {/* Honeypot */}
      <div className="sr-only-honeypot" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-email`}
            className="mb-1.5 block text-sm font-medium text-deep-ink/80"
          >
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-horizon-indigo/15 bg-soft-cloud px-4 py-3 text-base text-deep-ink outline-none transition placeholder:text-deep-ink/35 focus:border-gulf-teal focus:ring-2 focus:ring-gulf-teal/25"
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-name`}
            className="mb-1.5 block text-sm font-medium text-deep-ink/80"
          >
            Name <span className="font-normal text-deep-ink/45">(optional)</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="First name"
            className="w-full rounded-lg border border-horizon-indigo/15 bg-soft-cloud px-4 py-3 text-base text-deep-ink outline-none transition placeholder:text-deep-ink/35 focus:border-gulf-teal focus:ring-2 focus:ring-gulf-teal/25"
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-phone`}
            className="mb-1.5 block text-sm font-medium text-deep-ink/80"
          >
            Phone <span className="font-normal text-deep-ink/45">(optional)</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(239) 555-0100"
            className="w-full rounded-lg border border-horizon-indigo/15 bg-soft-cloud px-4 py-3 text-base text-deep-ink outline-none transition placeholder:text-deep-ink/35 focus:border-gulf-teal focus:ring-2 focus:ring-gulf-teal/25"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${id}-city`}
            className="mb-1.5 block text-sm font-medium text-deep-ink/80"
          >
            City
          </label>
          <input
            id={`${id}-city`}
            name="city"
            type="text"
            defaultValue="Naples"
            autoComplete="address-level2"
            className="w-full rounded-lg border border-horizon-indigo/15 bg-soft-cloud px-4 py-3 text-base text-deep-ink outline-none transition placeholder:text-deep-ink/35 focus:border-gulf-teal focus:ring-2 focus:ring-gulf-teal/25"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-gulf-teal px-6 py-3.5 text-base font-semibold text-soft-cloud transition hover:bg-gulf-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gulf-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Joining…" : "Join the waitlist"}
      </button>

      {state.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm leading-relaxed ${
            state.ok ? "text-gulf-teal" : "text-red-800/80"
          }`}
        >
          {state.message}
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-deep-ink/50">
          No spam. Just a quiet note when rides open in Naples.
        </p>
      )}
    </form>
  );
}
