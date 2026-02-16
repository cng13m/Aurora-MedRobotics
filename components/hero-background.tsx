"use client"

import LiquidEther from "@/components/liquid-ether"

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <LiquidEther
        className="h-full w-full pointer-events-none"
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={19}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  )
}
