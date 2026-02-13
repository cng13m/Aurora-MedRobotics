import type { Metadata } from "next"
import { PricingContent } from "./pricing-content"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible pricing plans for hospitals of all sizes. From starter deployments to enterprise-wide rollouts.",
}

export default function PricingPage() {
  return <PricingContent />
}
