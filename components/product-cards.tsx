"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ScanEye, HeartPulse, ClipboardList, Bot } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"

const products = [
  {
    icon: ScanEye,
    name: "RoomScan AI",
    description:
      "Maps rooms, identifies environmental hazards, and tracks patient movement patterns to flag risks before they escalate.",
    href: "/products#roomscan",
  },
  {
    icon: HeartPulse,
    name: "VitalsGuard",
    description:
      "Non-contact vital signs monitoring that continuously tracks key indicators and alerts staff to potential anomalies.",
    href: "/products#vitalsguard",
  },
  {
    icon: ClipboardList,
    name: "Smart Rounds",
    description:
      "Automated round summaries and anomaly detection that help clinicians focus on what matters during every shift.",
    href: "/products#smartrounds",
  },
  {
    icon: Bot,
    name: "AssistBot",
    description:
      "Autonomous robot platform for deliveries, check-ins, and telepresence — reducing hallway miles for your clinical staff.",
    href: "/products#assistbot",
  },
]

export function ProductCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper className="border-b border-border/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Our Products
        </h2>
        <p className="mt-4 text-muted-foreground">
          Purpose-built tools that support clinical teams around the clock.
        </p>
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link href={product.href} className="group block h-full">
              <div className="glass h-full rounded-xl p-8 transition-all hover:border-primary/30 hover:glow-cyan-strong">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <product.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {"Learn more ->"}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
