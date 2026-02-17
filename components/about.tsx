import {
  GraduationCap,
  MapPin,
  Zap,
  Music,
  Trophy,
  Flame,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const facts = [
  { icon: GraduationCap, text: "UIUC MSIM — May 2026" },
  { icon: MapPin, text: "Champaign, IL" },
  { icon: Trophy, text: "Formula 1 enthusiast" },
  { icon: Flame, text: "Cricket & Pickleball" },
  { icon: Music, text: "Music lover" },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About
        </h2>
        <Separator className="my-6" />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              {"I'm a Software & AI Engineer currently building at the intersection of applied AI, cloud infrastructure, and lab automation at the University of Illinois Urbana-Champaign. My work centers on translating complex ML research into production-grade systems that drive real-world outcomes."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Before UIUC, I spent three years at Quantiphi building enterprise AI solutions on Google Cloud — from virtual agents that saved $100M annually to contact center platforms that cut operational costs in half.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I thrive in environments where rigorous engineering meets cutting-edge AI: designing multi-agent architectures, building agentic workflows, and deploying ML pipelines at scale.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Facts
              </h3>
              <div className="flex flex-col gap-3">
                {facts.map((fact) => (
                  <div
                    key={fact.text}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <fact.icon className="h-4 w-4 shrink-0 text-primary" />
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-3 pt-0">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {"What I'm working on"}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Building multi-agent retrieval systems for chemical inventory management and optimizing lab automation workflows at the Molecule Maker Lab.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
