// components/FeedbackSection.tsx
"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type FeedbackRow = {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

function Stars({ rating }: { rating: number }) {
  return (
    <span>
      {"★".repeat(rating)}
      <span className="opacity-30">
        {"★".repeat(5 - rating)}
      </span>
    </span>
  )
}

export default function FeedbackSection() {
  const [items, setItems] = useState<FeedbackRow[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(5)

  // Fetch existing feedback on load
  useEffect(() => {
    supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setItems((data || []) as FeedbackRow[])
      })
  }, [])

  // Listen for realtime inserts
  useEffect(() => {
    const channel = supabase
      .channel("feedback-inserts")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback" },
        (payload) => {
          const row = payload.new as FeedbackRow
          setItems((prev) => (prev.some((p) => p.id === row.id) ? prev : [row, ...prev]))
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedMessage) {
      return
    }

    const { data, error } = await supabase
      .from("feedback")
      .insert({ name: trimmedName, message: trimmedMessage, rating })
      .select()
      .single()

    if (!error) {
      setItems((prev) => [data as FeedbackRow, ...prev])
      setName("")
      setMessage("")
      setRating(5)
    }
  }

  return (
    <section id="feedback" className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-2xl font-bold">Feedback</h3>
        <p className="text-sm text-muted-foreground">
          Leave a note — it shows up instantly below.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Textarea
            placeholder="Feedback message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          />
          <div className="flex items-center gap-3">
            <label className="text-sm">Rating</label>
            <Input
              type="number"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-16"
            />
            <Stars rating={rating} />
          </div>
          <Button type="submit">Submit</Button>
        </form>

        <div className="mt-8 grid gap-4">
          {items.map((f) => (
            <div key={f.id} className="rounded-lg border p-4">
              <div className="flex justify-between">
                <span className="font-medium">{f.name}</span>
                <Stars rating={f.rating} />
              </div>
              <p className="mt-2 text-sm">{f.message}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {new Date(f.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}