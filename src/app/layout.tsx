import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manatee Mobility — Autonomous rides in Naples, Florida",
  description:
    "Quiet, local Cybercab ride-hail for Naples and Southwest Florida. Coming soon.",
  metadataBase: new URL("https://manateemobility.com"),
  openGraph: {
    title: "Manatee Mobility",
    description:
      "Autonomous Tesla Cybercab ride-hail — calm, local, Naples-first.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="min-h-dvh bg-soft-cloud text-deep-ink antialiased">
        {children}
      </body>
    </html>
  );
}
