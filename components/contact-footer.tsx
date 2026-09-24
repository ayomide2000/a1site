import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import { profile } from "@/lib/profile"

const KaggleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

export function ContactFooter() {
  const socials = [
    { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
    { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
    { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
    { label: "Kaggle", href: profile.links.kaggle, Icon: KaggleIcon },
  ]

  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something worth measuring.
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Open to data science, ML, and mechanical engineering roles and
          collaborations. The fastest way to reach me is email.
        </p>

        <Link
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {profile.email}
          <ArrowUpRight className="size-4" />
        </Link>

        <div className="mt-10 flex flex-wrap gap-3">
          {socials.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; v0.
          </p>
          <p className="font-mono text-xs">{profile.role}</p>
        </div>
      </div>
    </footer>
  )
}
