"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lock, Zap, Plug, ClipboardCheck } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const pillars = [
  {
    icon: Lock,
    title: "Privacy-First",
    description:
      "All data handling is designed with privacy at the core. Role-based access ensures only authorized personnel see patient information.",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description:
      "Intelligent alerting reaches the right clinician at the right time. Configurable thresholds prevent alert fatigue.",
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Designed to work with existing hospital systems including EHR platforms, HL7, and FHIR-compatible interfaces.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Trails",
    description:
      "Every action, observation, and alert is logged with timestamps for compliance reporting and clinical review.",
  },
]

export function TrustPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper className="border-b border-border/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Why Hospitals Choose Aurora
        </h2>
        <p className="mt-4 text-muted-foreground">
          Designed to earn the trust of healthcare leaders.
        </p>
      </div>

      <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary glow-cyan">
              <pillar.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
