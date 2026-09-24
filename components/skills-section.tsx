import { skills } from "@/lib/profile"
import { SectionHeading } from "@/components/section-heading"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & tools"
          description="The stack I reach for across analysis, modeling, and mechanical design."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
