import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { profile } from "@/lib/profile"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* blueprint grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        {profile.available && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>
        )}

        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-primary sm:text-base">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View featured work
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Get in touch
          </Link>
          <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  )
}
