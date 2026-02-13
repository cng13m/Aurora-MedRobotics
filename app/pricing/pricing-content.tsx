"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SectionWrapper } from "@/components/section-wrapper"

const plans = [
  {
    name: "Starter",
    description: "For pilot programs and single-unit deployments.",
    price: "Custom",
    features: [
      "Up to 10 rooms monitored",
      "RoomScan AI included",
      "Basic alerting",
      "Email support",
      "Standard reporting",
      "Cloud deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For multi-unit deployments with full product access.",
    price: "Custom",
    features: [
      "Up to 100 rooms monitored",
      "All products included",
      "Advanced alerting with escalation",
      "Priority support",
      "Custom integrations (EHR/HL7/FHIR)",
      "Cloud or VPC deployment",
      "Dedicated onboarding",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For hospital networks and health systems.",
    price: "Custom",
    features: [
      "Unlimited rooms",
      "All products included",
      "Enterprise alerting + workflows",
      "24/7 dedicated support",
      "Full integration suite",
      "On-prem / VPC / Cloud",
      "White-glove onboarding",
      "Custom SLAs",
      "Executive sponsorship",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

const faqs = [
  {
    q: "How is pricing determined?",
    a: "Pricing is based on the number of rooms monitored, products selected, and deployment model. Contact our team for a tailored quote.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "We offer flexible contract terms starting from 12 months. Pilot programs with shorter terms are available for evaluation.",
  },
  {
    q: "What's included in onboarding?",
    a: "All plans include initial setup and training. Professional and Enterprise plans include dedicated onboarding managers and custom workflow configuration.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. Plans can be upgraded at any time. We'll help you scale as your deployment grows across units and facilities.",
  },
]

export function PricingContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHeader
        badge="Pricing"
        title="Flexible Plans for Every Hospital"
        description="From pilot programs to enterprise-wide rollouts, Aurora scales with your organization."
      />

      <SectionWrapper>
        <div ref={ref} className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`glass flex flex-col rounded-xl p-8 ${
                plan.highlighted
                  ? "border-primary/30 glow-cyan-strong"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 mb-6 border-b border-border/40 pb-6">
                <span className="text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
              </div>
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className={plan.highlighted ? "glow-cyan" : ""}
                asChild
              >
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-border/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div ref={faqRef} className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
