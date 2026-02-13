import type { Metadata } from "next"
import { SecurityContent } from "./security-content"

export const metadata: Metadata = {
  title: "Security",
  description:
    "Aurora MedRobotics is designed to support HIPAA compliance programs with encryption, RBAC, audit trails, and flexible deployment options.",
}

export default function SecurityPage() {
  return <SecurityContent />
}
