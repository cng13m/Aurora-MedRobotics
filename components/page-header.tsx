"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  badge?: string
  title: string
  description: string
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/30 px-6 pb-16 pt-32">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-3xl font-bold text-foreground md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
