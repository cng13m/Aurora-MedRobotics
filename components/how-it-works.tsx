"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ScanEye, BrainCircuit, BellRing, FileText } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const steps = [
  {
    icon: ScanEye,
    title: "Scan",
    description:
      "Continuous environmental scanning captures room conditions, patient positioning, and equipment status in real time.",
  },
  {
    icon: BrainCircuit,
    title: "Analyze",
    description:
      "AI models process incoming data streams to detect anomalies, flag risks, and identify patterns clinicians need to see.",
  },
  {
    icon: BellRing,
    title: "Alert",
    description:
      "Intelligent alerts reach the right care team member through preferred channels — before situations escalate.",
  },
  {
    icon: FileText,
    title: "Document",
    description:
      "Every observation is logged automatically, generating audit-ready records and shift summaries without manual entry.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          How It Works
        </h2>
        <p className="mt-4 text-muted-foreground">
          Four steps. Always watching. Always documenting.
        </p>
      </div>

      <div ref={ref} className="relative grid gap-6 md:grid-cols-4">
        {/* Connector line */}
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-border/50 md:block" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-border/60 bg-card glow-cyan">
              <step.icon className="h-10 w-10 text-primary" />
            </div>
            <span className="mb-1 text-xs font-mono text-primary/60">
              {"0" + (i + 1)}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
