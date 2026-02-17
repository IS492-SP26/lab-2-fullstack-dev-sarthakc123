import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const experiences = [
  {
    title: "Software & AI Engineer",
    company: "Molecule Maker Lab, UIUC",
    period: "May 2025 — Present",
    highlights: [
      "Saved $80,000/week by engineering a modular automation workflow using Python, FluentControl v3.4, and AWS — directly contributing to the lab securing $15M in funding.",
      "Built a multi-agent architecture to retrieve and manage 500+ chemical compounds, reducing inventory retrieval time by 75%.",
      "Designed real-time logging and monitoring pipelines for automated liquid-handling experiments.",
    ],
    metrics: ["$80K/week saved", "$15M funding secured", "-75% retrieval time"],
  },
  {
    title: "Sr. Solutions Engineer, Applied AI",
    company: "Quantiphi",
    period: "Jul 2023 — Jul 2024",
    highlights: [
      "Drove $1M+ revenue growth through AI-powered contact center solutions, achieving 91% client retention across enterprise accounts.",
      "Reduced contact center operational costs by 50% and increased call deflection by 25% via intelligent virtual agent deployments.",
      "Led cross-functional teams on GCP to design and deploy scalable conversational AI systems for Fortune 500 clients.",
    ],
    metrics: ["$1M revenue growth", "91% retention", "-50% ops cost"],
  },
  {
    title: "Solutions Engineer, Applied AI",
    company: "Quantiphi",
    period: "Jul 2021 — Jul 2023",
    highlights: [
      "Saved $100M annually for the Illinois Department of Employment Security through data visualization dashboards and virtual agent deployments.",
      "Developed and deployed NLP-powered virtual agents across Google CCAI, reducing average handle time and improving citizen service delivery.",
      "Built end-to-end data pipelines and analytics dashboards using BigQuery, Looker, and Tableau for state-level workforce programs.",
    ],
    metrics: ["$100M annual savings", "Multi-state deployment", "NLP + Data Viz"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Experience
        </h2>
        <Separator className="my-6" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-8">
                <div className="hidden flex-col items-center md:flex">
                  <div className="relative z-10 mt-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                </div>

                <div className="flex flex-1 flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.metrics.map((metric) => (
                      <Badge
                        key={metric}
                        variant="secondary"
                        className="rounded-full text-xs font-medium"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
