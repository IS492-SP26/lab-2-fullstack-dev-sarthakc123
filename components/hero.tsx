import Image from "next/image"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const metrics = [
  { value: "$80K+", label: "Weekly savings" },
  { value: "500+", label: "Compounds managed" },
  { value: "75%", label: "Time reduction" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.06,transparent_70%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col gap-6">
          <Badge variant="secondary" className="w-fit gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to full-time opportunities
          </Badge>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {"Hi, I'm Sarthak."}
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            I build applied AI systems — from agentic workflows to lab automation.
          </p>

          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Specializing in turning complex AI/ML research into production systems that drive measurable impact: $80K/week saved, $15M in secured funding, and 75% faster compound retrieval.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="gap-2 rounded-lg">
              <a href="#projects">
                <ArrowDown className="h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 rounded-lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 rounded-lg">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative overflow-hidden rounded-2xl border bg-card shadow-lg">
            <Image
              src="/images/sarthak-lab.jpg"
              alt="Sarthak Chandarana working at a computer station in the Molecule Maker Lab with automation equipment"
              width={400}
              height={300}
              className="h-auto w-72 object-cover md:w-80 lg:w-96"
              priority
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center gap-0.5 rounded-xl border bg-card px-5 py-3 shadow-sm"
              >
                <span className="text-lg font-bold text-primary">
                  {metric.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
