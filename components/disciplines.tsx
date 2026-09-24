import { Brain, Code2, Cog, Sigma } from "lucide-react"
import { disciplines, type Discipline } from "@/lib/profile"

const iconMap = {
  brain: Brain,
  sigma: Sigma,
  code: Code2,
  cog: Cog,
} as const

function DisciplineCard({ item }: { item: Discipline }) {
  const Icon = iconMap[item.icon]
  return (
    <div className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.blurb}
      </p>
    </div>
  )
}

export function Disciplines() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((item) => (
            <DisciplineCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
