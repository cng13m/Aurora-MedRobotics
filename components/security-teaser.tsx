"use client"

import Link from "next/link"
import { Shield, Lock, Key, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"

const features = [
  {
    icon: Shield,
    label: "Designed to support HIPAA compliance programs",
  },
  {
    icon: Lock,
    label: "Encryption at rest and in transit",
  },
  {
    icon: Key,
    label: "Role-based access control (RBAC)",
  },
  {
    icon: Server,
    label: "On-prem / VPC deployment options",
  },
]

export function SecurityTeaser() {
  return (
    <SectionWrapper>
      <div className="glass rounded-2xl p-8 glow-cyan md:p-12">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Security + Compliance
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Aurora is built from the ground up with healthcare security
              requirements in mind. Our platform is designed to support your
              organization{"'"}s HIPAA compliance programs and data governance
              policies.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <feat.icon className="h-4 w-4 shrink-0 text-primary" />
                  {feat.label}
                </div>
              ))}
            </div>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link href="/security">View Security Details</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
