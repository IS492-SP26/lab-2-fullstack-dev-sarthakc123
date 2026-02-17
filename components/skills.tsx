import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const skillCategories = [
  {
    name: "Languages",
    color: "bg-primary/10 text-primary border-primary/20",
    skills: ["Python", "SQL", "R", "Bash"],
  },
  {
    name: "GenAI",
    color: "bg-accent/10 text-accent border-accent/20",
    skills: [
      "RAG",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "Pinecone",
      "Chroma",
      "Guardrails",
      "Evaluation",
    ],
  },
  {
    name: "MLOps",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    skills: ["Docker", "K8s", "CI/CD", "GitHub Actions", "MLflow", "W&B"],
  },
  {
    name: "Cloud & Data",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    skills: [
      "GCP",
      "Vertex AI",
      "BigQuery",
      "AWS",
      "Azure AI Foundry",
      "Databricks",
      "Snowflake",
    ],
  },
  {
    name: "Analytics",
    color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    skills: ["Tableau", "PowerBI", "Looker"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {"Skills & Stack"}
        </h2>
        <Separator className="my-6" />

        <div className="flex flex-col gap-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-transform hover:scale-105 ${category.color}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
