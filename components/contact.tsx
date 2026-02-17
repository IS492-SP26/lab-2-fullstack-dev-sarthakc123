"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { supabase } from "@/lib/supabaseClient";


const socials = [
  { icon: Mail, label: "Email", href: "mailto:src16@illinois.edu", display: "src16@illinois.edu" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sarthak-chandarana123", display: "sarthak-chandarana123" },
  { icon: Github, label: "GitHub", href: "https://github.com/sarthakc123", display: "sarthakc123" },
]

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(5) // add rating state (1‑5)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Trim values and require name/message/rating
  if (!name.trim() || !message.trim()) return;

  const { data, error } = await supabase
    .from("feedback")
    .insert({
      name: name.trim(),
      message: message.trim(),
      rating,
      // created_at will be set by the database default if you've defined it
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error.message);
    return;
  }

  // Optionally reset form fields
  setName("");
  setEmail("");
  setMessage("");
  setRating(5);
};

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {"Contact / Feedback"}
        </h2>
        <Separator className="my-6" />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              {"I'm always open to discussing new opportunities, interesting projects, or just having a chat about AI and technology. Feel free to reach out!"}
            </p>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <social.icon className="h-4 w-4 text-primary" />
                  <span>{social.display}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
              <Input
                id="contact-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <Textarea
                id="contact-message"
                placeholder="Your message..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-lg"
                required
              />
            </div>
            {/* NEW: rating input */}
            <div>
              <label htmlFor="contact-rating" className="mb-1.5 block text-sm font-medium text-foreground">
                Rating (1–5)
              </label>
              <Input
                id="contact-rating"
                type="number"
                min={1}
                max={5}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="rounded-lg"
                required
              />
            </div>
            <Button type="submit" className="gap-2 self-start rounded-lg">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
