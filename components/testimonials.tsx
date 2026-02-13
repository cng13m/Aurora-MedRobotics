"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"

const testimonials = [
  {
    quote:
      "Aurora's room scanning technology has fundamentally changed how we monitor patient safety. Our team gets notified about risks we never would have caught on our own.",
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    org: "Pacific Health Network",
  },
  {
    quote:
      "The integration with our existing EHR was seamless. Within weeks, our nurses were spending less time on manual documentation and more time with patients.",
    name: "Mark Rodriguez",
    role: "VP of Clinical Operations",
    org: "Unity Health System",
  },
  {
    quote:
      "We evaluated several monitoring platforms, and Aurora was the only one that met our security requirements while actually being intuitive for clinical staff.",
    name: "Jennifer Park",
    role: "Director of IT Security",
    org: "CarePoint Medical Center",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper className="border-b border-border/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          What Healthcare Leaders Say
        </h2>
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass flex flex-col justify-between rounded-xl p-6"
          >
            <blockquote className="mb-6 text-sm leading-relaxed text-foreground/90">
              {`"${t.quote}"`}
            </blockquote>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
              <p className="text-xs text-primary/70">{t.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
