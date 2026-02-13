"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Shield,
  Lock,
  Key,
  Server,
  Eye,
  FileCheck,
  Database,
  Network,
  CheckCircle2,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTASection } from "@/components/cta-section"

const pillars = [
  {
    icon: Shield,
    title: "HIPAA-Ready Architecture",
    description:
      "Aurora is designed from the ground up to support your organization's HIPAA compliance programs. Our architecture follows healthcare security best practices for data handling and access control.",
  },
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description:
      "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed through hardware security modules (HSMs) with automatic rotation.",
  },
  {
    icon: Key,
    title: "Role-Based Access Control",
    description:
      "Granular RBAC ensures that every user sees only what they need to. Configurable roles map to your organization's existing access policies and clinical hierarchies.",
  },
  {
    icon: Server,
    title: "Flexible Deployment",
    description:
      "Choose the deployment model that fits your organization: on-premises, private cloud (VPC), or managed cloud. All models maintain the same security posture.",
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description:
      "Data minimization, purpose limitation, and consent management are built into the core platform. Patient data handling follows strict need-to-know principles.",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Audit Trails",
    description:
      "Every access, modification, and system event is logged with timestamps and user attribution. Audit logs are immutable and exportable for compliance reporting.",
  },
  {
    icon: Database,
    title: "Data Residency Controls",
    description:
      "Choose where your data lives. Aurora supports configurable data residency to meet regional requirements and organizational data governance policies.",
  },
  {
    icon: Network,
    title: "Network Security",
    description:
      "Network segmentation, intrusion detection, and DDoS mitigation protect the platform at every layer. Regular penetration testing validates our defenses.",
  },
]

const certifications = [
  "SOC 2 Type II (In Progress)",
  "HITRUST CSF Readiness",
  "ISO 27001 Alignment",
  "Regular Third-Party Audits",
  "Annual Penetration Testing",
  "Vulnerability Disclosure Program",
]

export function SecurityContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const certRef = useRef(null)
  const certInView = useInView(certRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHeader
        badge="Security & Compliance"
        title="Healthcare-Grade Security"
        description="Built to earn trust. Aurora's security architecture is designed to support the most rigorous healthcare compliance programs."
      />

      <SectionWrapper>
        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <pillar.icon className="h-5 w-5" />
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

      <SectionWrapper className="border-t border-border/30">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div ref={certRef} className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Certifications & Compliance
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Aurora maintains a rigorous security and compliance program,
              validated by independent third-party assessments.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    certInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="glass rounded-2xl p-8 glow-cyan">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Security Whitepaper
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Download our comprehensive security whitepaper for a detailed
                look at Aurora{"'"}s architecture, data handling practices, and
                compliance posture.
              </p>
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 glow-cyan">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  )
}
