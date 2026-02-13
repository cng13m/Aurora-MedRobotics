"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ScanEye,
  HeartPulse,
  ClipboardList,
  Bot,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTASection } from "@/components/cta-section"

const products = [
  {
    id: "roomscan",
    icon: ScanEye,
    name: "RoomScan AI",
    tagline: "Ambient room intelligence that never blinks.",
    description:
      "RoomScan AI uses advanced sensor arrays and computer vision to continuously monitor patient rooms. It maps the environment, identifies potential hazards, tracks movement patterns, and flags risks before they become incidents.",
    features: [
      "360-degree environmental scanning",
      "Hazard identification and flagging",
      "Patient movement pattern analysis",
      "Fall risk assessment support",
      "Automated room status reporting",
      "Integration with nurse call systems",
    ],
  },
  {
    id: "vitalsguard",
    icon: HeartPulse,
    name: "VitalsGuard",
    tagline: "Non-contact vital signs monitoring.",
    description:
      "VitalsGuard leverages contactless sensor technology to continuously track key vital indicators without disturbing patient rest. Designed to augment existing monitoring equipment, it provides an additional layer of observation.",
    features: [
      "Non-contact monitoring approach",
      "Continuous observation cycles",
      "Configurable alert thresholds",
      "Trend analysis and anomaly detection",
      "Seamless integration with existing monitors",
      "Night-mode operation for patient comfort",
    ],
  },
  {
    id: "smartrounds",
    icon: ClipboardList,
    name: "Smart Rounds",
    tagline: "Automated summaries that save hours per shift.",
    description:
      "Smart Rounds automatically generates shift summaries, highlights anomalies, and structures round documentation. Clinicians spend less time charting and more time on direct patient care.",
    features: [
      "Automated shift summary generation",
      "Anomaly highlighting and prioritization",
      "Structured documentation templates",
      "Historical trend comparison",
      "Configurable reporting intervals",
      "Export to EHR-compatible formats",
    ],
  },
  {
    id: "assistbot",
    icon: Bot,
    name: "AssistBot",
    tagline: "Your autonomous clinical assistant.",
    description:
      "AssistBot is an autonomous robot platform designed for hospital environments. It handles deliveries, scheduled check-ins, and telepresence sessions — reducing hallway miles for clinical staff while maintaining patient engagement.",
    features: [
      "Autonomous navigation in hospital environments",
      "Supply and medication delivery support",
      "Telepresence capabilities for remote consults",
      "Scheduled patient check-in rounds",
      "Integration with hospital logistics systems",
      "Emergency yield and safety protocols",
    ],
  },
]

function ProductDetail({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <SectionWrapper
      id={product.id}
      className={index < products.length - 1 ? "border-b border-border/30" : ""}
    >
      <div
        ref={ref}
        className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -30 : 30 }
          }
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="glass flex aspect-square max-h-[400px] items-center justify-center rounded-2xl glow-cyan">
            <product.icon className="h-24 w-24 text-primary/60" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 30 : -30 }
          }
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex-1"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <product.icon className="h-3.5 w-3.5" />
            {product.name}
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {product.tagline}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <ul className="mb-8 grid gap-2 sm:grid-cols-2">
            {product.features.map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {feat}
              </li>
            ))}
          </ul>
          <Button size="sm" asChild>
            <Link href="/demo">Request Demo</Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export function ProductsContent() {
  return (
    <>
      <PageHeader
        badge="Products"
        title="Purpose-Built for Hospital Environments"
        description="From ambient room intelligence to autonomous delivery, Aurora's product suite supports clinical teams around the clock."
      />
      {products.map((product, i) => (
        <ProductDetail key={product.id} product={product} index={i} />
      ))}
      <CTASection />
    </>
  )
}
