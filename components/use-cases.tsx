"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ShieldAlert,
  Activity,
  Stethoscope,
  ShieldCheck,
  BedDouble,
} from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const useCases = [
  {
    icon: ShieldAlert,
    title: "Fall Prevention",
    description:
      "Detect at-risk movement patterns and alert staff before a fall occurs, supporting safer patient environments.",
  },
  {
    icon: Activity,
    title: "Post-Op Monitoring",
    description:
      "Continuous observation after procedures helps flag unexpected changes and supports timely clinical follow-up.",
  },
  {
    icon: Stethoscope,
    title: "ICU Support",
    description:
      "Augment existing ICU monitoring with ambient intelligence that tracks environmental and behavioral cues.",
  },
  {
    icon: ShieldCheck,
    title: "Infection Control",
    description:
      "Track hygiene compliance and environmental conditions to support infection prevention programs.",
  },
  {
    icon: BedDouble,
    title: "Bed Turnover Optimization",
    description:
      "Automated room status tracking helps reduce downtime between patients and improve throughput.",
  },
]

export function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Built for Real Hospital Workflows
        </h2>
        <p className="mt-4 text-muted-foreground">
          From the ICU to discharge, Aurora supports every step.
        </p>
      </div>

      <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, i) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="glass rounded-xl p-6 transition-all hover:border-primary/20"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <useCase.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">
              {useCase.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {useCase.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
