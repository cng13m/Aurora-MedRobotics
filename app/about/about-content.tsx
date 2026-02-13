"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Heart, Lightbulb, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTASection } from "@/components/cta-section"

const values = [
  {
    icon: Heart,
    title: "Patient Safety First",
    description:
      "Every feature, every algorithm, every alert is designed with one goal: supporting better patient outcomes through technology that clinicians trust.",
  },
  {
    icon: Target,
    title: "Clinical Precision",
    description:
      "We obsess over accuracy, reliability, and relevance. Our systems are designed to surface what matters and filter out what doesn't.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Healthcare doesn't stand still, and neither do we. Our R&D team constantly pushes the boundaries of what ambient intelligence can achieve.",
  },
  {
    icon: Users,
    title: "Partnership-Driven",
    description:
      "We build alongside our hospital partners, not in isolation. Every deployment teaches us something new that feeds back into the platform.",
  },
]

const team = [
  {
    name: "Dr. Elena Vasquez",
    role: "CEO & Co-Founder",
    bio: "Former Chief of Clinical Innovation at Pacific Health. 20+ years in healthcare technology.",
  },
  {
    name: "James Kim",
    role: "CTO & Co-Founder",
    bio: "Previously led AI/ML engineering at a leading robotics company. PhD in Computer Science from Stanford.",
  },
  {
    name: "Dr. Michael Torres",
    role: "Chief Medical Officer",
    bio: "Board-certified in Hospital Medicine. Advisor to three health systems on clinical technology adoption.",
  },
  {
    name: "Samira Okafor",
    role: "VP of Engineering",
    bio: "Former Director of Engineering at a healthcare analytics company. Expert in scalable distributed systems.",
  },
  {
    name: "David Chen",
    role: "VP of Product",
    bio: "Previously at a leading health-tech startup. Passionate about building products that clinicians actually want to use.",
  },
  {
    name: "Rachel Novak",
    role: "Head of Security",
    bio: "CISSP, HCISPP certified. Previously led security at a major healthcare SaaS platform.",
  },
]

const milestones = [
  { year: "2021", event: "Founded in San Francisco" },
  { year: "2022", event: "First pilot deployment at Pacific Health Network" },
  { year: "2023", event: "Series A funding, expanded to 5 health systems" },
  { year: "2024", event: "Launched VitalsGuard and Smart Rounds" },
  { year: "2025", event: "AssistBot platform GA, 50+ hospital deployments" },
]

export function AboutContent() {
  const valRef = useRef(null)
  const valInView = useInView(valRef, { once: true, margin: "-100px" })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHeader
        badge="About Us"
        title="Technology That Watches Over Every Room"
        description="Aurora MedRobotics was founded on a simple belief: hospitals deserve intelligent systems that work as hard as their clinical teams."
      />

      {/* Mission */}
      <SectionWrapper className="border-b border-border/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We believe that technology should augment — not replace — the
            expertise of healthcare professionals. Aurora builds intelligent
            monitoring and automation tools designed to give clinicians more
            time, better data, and greater confidence in the care they deliver.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            What We Stand For
          </h2>
        </div>
        <div ref={valRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                valInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <val.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {val.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="border-t border-b border-border/30">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Our Journey
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="relative border-l border-border/50 pl-8">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative pb-8 ${i === milestones.length - 1 ? "pb-0" : ""}`}>
                <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="mb-1 block text-xs font-mono text-primary">
                  {m.year}
                </span>
                <span className="text-sm text-foreground">{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Leadership Team
          </h2>
          <p className="mt-3 text-muted-foreground">
            Healthcare veterans and technology builders working together.
          </p>
        </div>
        <div ref={teamRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mb-2 text-xs text-primary">{member.role}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  )
}
