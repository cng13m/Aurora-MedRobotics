"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"

export function CTASection() {
  return (
    <SectionWrapper>
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 text-center glow-cyan-strong md:p-16">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl text-balance">
          Ready to Transform Patient Monitoring?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          See how Aurora can support your clinical team with an interactive
          demonstration tailored to your hospital{"'"}s workflows.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="glow-cyan-strong text-base" asChild>
            <Link href="/demo">Request a Demo</Link>
          </Button>
          <Button variant="outline" size="lg" className="text-base" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
