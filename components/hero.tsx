"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"

const hudLabels = [
  { text: "Vitals", x: "left-[8%]", y: "top-[25%]", delay: 0.8 },
  { text: "Room Scan", x: "right-[10%]", y: "top-[30%]", delay: 1.0 },
  { text: "Alerting", x: "left-[12%]", y: "bottom-[30%]", delay: 1.2 },
  { text: "Nurse Workflow", x: "right-[8%]", y: "bottom-[25%]", delay: 1.4 },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* HUD floating labels */}
      {hudLabels.map((label) => (
        <motion.div
          key={label.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: label.delay, duration: 0.6 }}
          className={`absolute ${label.x} ${label.y} hidden lg:block`}
        >
          <div className="glass rounded-md px-3 py-1.5 text-xs font-mono text-primary/80 animate-float glow-cyan">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            {label.text}
          </div>
        </motion.div>
      ))}

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl px-8 py-12 glow-cyan md:px-16 md:py-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            Next-Generation Hospital Technology
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Hospital Robots + AI That{" "}
            <span className="text-primary text-glow">Never Miss a Detail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Room scanning, vital monitoring, fall-risk alerts, and workflow
            automation — built for clinical reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="glow-cyan-strong text-base" asChild>
              <Link href="/demo">Request a Demo</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <Link href="/solutions">See How It Works</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <button
          onClick={() =>
            document
              .getElementById("social-proof")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to explore"
        >
          <span className="text-xs font-medium">Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}
