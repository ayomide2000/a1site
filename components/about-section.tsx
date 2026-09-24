import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading eyebrow="About" title="Where engineering meets data" />
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a mechanical engineer turned data practitioner. My thesis on
              3D-printed irrigation taught me to design, prototype, and validate
              physical systems under real-world constraints — and that same
              rigor now drives how I approach data problems.
            </p>
            <p>
              On the data side, I work in Python across the full workflow:
              cleaning and exploring datasets, engineering features, and training
              and evaluating machine learning models. I care about reproducible,
              well-documented work — the kind you can hand off and trust.
            </p>
            <p>
              Whether the deliverable is a printed prototype or a predictive
              model, I like building things that are practical, measurable, and
              genuinely useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
