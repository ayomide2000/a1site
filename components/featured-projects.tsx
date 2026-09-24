import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { projects, type Project } from "@/lib/profile"
import { SectionHeading } from "@/components/section-heading"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1
  return (
    <article className="grid items-center gap-8 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:grid-cols-2 lg:gap-12">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted ${
          reversed ? "lg:order-last" : ""
        }`}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="px-2 pb-2 sm:px-0">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">{project.kind}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-3 text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {link.label}
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)
  return (
    <section id="work" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that span data and hardware"
          description="A selection of work across my mechanical engineering thesis and data science practice."
        />
        <div className="mt-12 space-y-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
