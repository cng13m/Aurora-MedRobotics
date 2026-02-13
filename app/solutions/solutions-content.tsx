"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ShieldAlert,
  Activity,
  Stethoscope,
  ShieldCheck,
  BedDouble,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTASection } from "@/components/cta-section"

const solutions = [
  {
    id: "fall-prevention",
    icon: ShieldAlert,
    title: "Fall Prevention",
    subtitle: "Detect risk before it becomes an incident.",
    description:
      "Aurora's ambient sensors track patient movement patterns, bed position, and environmental conditions to identify fall risk factors. When risk is elevated, the system alerts nearby staff through configured channels.",
    stats: [
      { value: "87%", label: "Reduction in unobserved falls" },
      { value: "<30s", label: "Average alert time" },
    ],
    products: ["RoomScan AI", "Smart Rounds"],
  },
  {
    id: "post-op",
    icon: Activity,
    title: "Post-Op Monitoring",
    subtitle: "Continuous observation after procedures.",
    description:
      "After surgery, patients need close monitoring as they recover. Aurora provides continuous ambient observation that flags unexpected changes in mobility, breathing patterns, or environmental conditions — supporting timely clinical follow-up.",
    stats: [
      { value: "24/7", label: "Continuous monitoring" },
      { value: "3.2x", label: "Faster anomaly detection" },
    ],
    products: ["VitalsGuard", "Smart Rounds"],
  },
  {
    id: "icu",
    icon: Stethoscope,
    title: "ICU Support",
    subtitle: "Augment existing ICU workflows with ambient intelligence.",
    description:
      "ICU environments are data-rich but attention-scarce. Aurora augments existing monitoring by tracking behavioral and environmental cues that traditional bedside monitors may not capture — providing an additional safety layer.",
    stats: [
      { value: "360°", label: "Environmental awareness" },
      { value: "41%", label: "Less documentation time" },
    ],
    products: ["RoomScan AI", "VitalsGuard", "Smart Rounds"],
  },
  {
    id: "infection",
    icon: ShieldCheck,
    title: "Infection Control",
    subtitle: "Support hygiene compliance and environmental safety.",
    description:
      "Aurora tracks hand hygiene compliance, environmental cleaning schedules, and room conditions. Automated reporting supports infection prevention teams with actionable data rather than manual audits.",
    stats: [
      { value: "95%", label: "Compliance tracking accuracy" },
      { value: "Auto", label: "Reporting and documentation" },
    ],
    products: ["RoomScan AI", "AssistBot"],
  },
  {
    id: "bed-turnover",
    icon: BedDouble,
    title: "Bed Turnover Optimization",
    subtitle: "Reduce downtime between patients.",
    description:
      "Automated room status tracking detects when rooms are vacated, cleaned, and ready for the next patient. Real-time updates flow to bed management systems, reducing turnaround time and improving throughput.",
    stats: [
      { value: "34%", label: "Faster bed turnover" },
      { value: "Real-time", label: "Status updates" },
    ],
    products: ["RoomScan AI", "AssistBot"],
  },
]

function SolutionDetail({
  solution,
  index,
}: {
  solution: (typeof solutions)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id={solution.id}
      className={index < solutions.length - 1 ? "border-b border-border/30" : ""}
    >
      <div ref={ref} className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="mb-3 flex items-center gap-2">
            <solution.icon className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {solution.title}
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {solution.subtitle}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {solution.description}
          </p>

          <div className="mb-6 flex gap-6">
            {solution.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary text-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <span className="mb-2 block text-xs font-medium text-muted-foreground">
              Powered by:
            </span>
            <div className="flex flex-wrap gap-2">
              {solution.products.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <Button variant="outline" size="sm" asChild>
            <Link href="/demo" className="gap-2">
              See it in action <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </motion.div>

        {/* Visual placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1"
        >
          <div className="glass flex aspect-video items-center justify-center rounded-2xl glow-cyan">
            <solution.icon className="h-16 w-16 text-primary/40" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export function SolutionsContent() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Built for Real Hospital Workflows"
        description="Aurora solutions address the most pressing challenges in patient safety, operational efficiency, and clinical documentation."
      />
      {solutions.map((solution, i) => (
        <SolutionDetail key={solution.id} solution={solution} index={i} />
      ))}
      <CTASection />
    </>
  )
}
