"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const rooms = [
  {
    id: "ICU-201",
    patient: "Patient A",
    status: "Stable",
    vitals: [72, 74, 71, 73, 75, 74, 72, 73],
  },
  {
    id: "ICU-202",
    patient: "Patient B",
    status: "Needs Attention",
    vitals: [88, 91, 94, 89, 92, 95, 93, 97],
  },
  {
    id: "MED-105",
    patient: "Patient C",
    status: "Stable",
    vitals: [68, 67, 69, 70, 68, 67, 69, 68],
  },
  {
    id: "MED-108",
    patient: "Patient D",
    status: "Stable",
    vitals: [76, 75, 77, 76, 74, 75, 76, 77],
  },
  {
    id: "SURG-301",
    patient: "Patient E",
    status: "Needs Attention",
    vitals: [82, 85, 88, 91, 87, 90, 93, 89],
  },
]

function MiniSparkline({ data }: { data: number[] }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const width = 80
  const height = 24
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((v - min) / range) * height
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg width={width} height={height} className="text-primary">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DashboardPreview() {
  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Live Dashboard Preview
        </h2>
        <p className="mt-4 text-muted-foreground">
          A glimpse into the Aurora monitoring interface.
        </p>
      </div>

      <div className="glass overflow-hidden rounded-2xl glow-cyan">
        {/* Dashboard header */}
        <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-sm font-medium text-foreground">
              Aurora Dashboard
            </span>
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-mono text-primary">
              LIVE
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            Floor 2 - ICU + Med/Surg
          </span>
        </div>

        {/* Room list */}
        <div className="divide-y divide-border/30">
          <div className="grid grid-cols-5 gap-4 px-6 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span>Room</span>
            <span>Patient</span>
            <span>Status</span>
            <span>HR Trend</span>
            <span className="text-right">BPM</span>
          </div>
          {rooms.map((room) => (
            <div
              key={room.id}
              className="grid grid-cols-5 items-center gap-4 px-6 py-3 transition-colors hover:bg-primary/[0.02]"
            >
              <span className="text-sm font-mono text-foreground">
                {room.id}
              </span>
              <span className="text-sm text-muted-foreground">
                {room.patient}
              </span>
              <span>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    room.status === "Stable"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {room.status}
                </span>
              </span>
              <span>
                <MiniSparkline data={room.vitals} />
              </span>
              <span className="text-right text-sm font-mono text-foreground">
                {room.vitals[room.vitals.length - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
