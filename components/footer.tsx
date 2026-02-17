import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  {
    icon: Mail,
    href: "mailto:src16@illinois.edu",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sarthak-chandarana123",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/sarthakc123",
    label: "GitHub",
  },
]

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Sarthak Chandarana. All rights reserved."}
        </p>
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
