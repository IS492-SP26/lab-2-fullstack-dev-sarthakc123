import { ExternalLink, Github, FlaskConical, Bot, Brain, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const projects = [
  {
    icon: FlaskConical,
    title: "Lab Automation Workflow",
    description:
      "End-to-end modular automation pipeline for liquid-handling experiments, delivering $80K/week in savings with real-time logging and monitoring.",
    tech: ["Python", "FluentControl v3.4", "AWS", "CloudWatch"],
  },
  {
    icon: Bot,
    title: "Inventory Agent System",
    description:
      "Multi-agent retrieval architecture managing 500+ chemical compounds, cutting inventory lookup time by 75% with semantic search.",
    tech: ["LangChain", "FAISS", "Python", "RAG"],
  },
  {
    icon: Brain,
    title: "Reaction Conditions ML",
    description:
      "Machine learning model trained on 100,000+ historical reactions to predict optimal conditions, significantly reducing experimental iteration cycles.",
    tech: ["scikit-learn", "Pandas", "XGBoost", "Python"],
  },
  {
    icon: BarChart3,
    title: "Student Employment Dashboard",
    description:
      "Interactive Tableau dashboard with 18 KPIs tracking employment outcomes for 500+ graduates, enabling data-driven program improvements.",
    tech: ["Tableau", "SQL", "Python", "Data Viz"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Selected Work
        </h2>
        <Separator className="my-6" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <project.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="rounded-full text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Case Study
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 rounded-lg">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
