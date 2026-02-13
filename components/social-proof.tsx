"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const kpis = [
  { value: "87%", label: "Reduce unobserved events" },
  { value: "3.2x", label: "Faster response times" },
  { value: "41%", label: "Better room utilization" },
]

const logos = [
  "MedCenter Health",
  "Pacific Hospitals",
  "CarePoint Network",
  "Unity Health",
  "NovaCare Systems",
  "Atlas Medical",
]

export function SocialProof() {
  return (
    <SectionWrapper id="social-proof" className="border-b border-border/30">
      {/* Logos */}
      <div className="mb-12">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by leading healthcare organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-10 items-center rounded-md px-4 text-sm font-medium text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="glass flex flex-col items-center gap-2 rounded-xl px-6 py-8 text-center glow-cyan"
          >
            <span className="text-4xl font-bold text-primary text-glow">
              {kpi.value}
            </span>
            <span className="text-sm text-muted-foreground">{kpi.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
