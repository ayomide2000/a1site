import Link from "next/link"
import { profile } from "@/lib/profile"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="font-mono text-sm font-medium tracking-tight">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          GitHub
        </Link>
      </div>
    </header>
  )
}
