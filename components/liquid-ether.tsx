"use client"

import { useEffect, useRef } from "react"
import "./liquid-ether.css"

type LiquidEtherProps = {
  colors?: string[]
  mouseForce?: number
  cursorSize?: number
  isViscous?: boolean
  viscous?: number
  iterationsViscous?: number
  iterationsPoisson?: number
  resolution?: number
  isBounce?: boolean
  autoDemo?: boolean
  autoSpeed?: number
  autoIntensity?: number
  takeoverDuration?: number
  autoResumeDelay?: number
  autoRampDuration?: number
  className?: string
  style?: React.CSSProperties
}

type Blob = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function LiquidEther({
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  mouseForce = 19,
  resolution = 0.5,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  autoResumeDelay = 3000,
  className = "",
  style,
}: LiquidEtherProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false, lastMove: performance.now() })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let t = 0
    const blobs: Blob[] = new Array(12).fill(0).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
      r: 0.12 + Math.random() * 0.22,
    }))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr * Math.max(0.35, Math.min(1, resolution)))
      canvas.height = Math.floor(height * dpr * Math.max(0.35, Math.min(1, resolution)))
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      ctx.setTransform(canvas.width, 0, 0, canvas.height, 0, 0)
      ctx.globalCompositeOperation = "source-over"
    }

    const onMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = (clientX - rect.left) / Math.max(1, rect.width)
      mouseRef.current.y = (clientY - rect.top) / Math.max(1, rect.height)
      mouseRef.current.active = true
      mouseRef.current.lastMove = performance.now()
    }

    const onMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })

    const render = () => {
      t += 0.008
      const now = performance.now()
      const idle = now - mouseRef.current.lastMove > autoResumeDelay

      ctx.clearRect(0, 0, 1, 1)

      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i]
        const waveX = Math.sin(t * (0.7 + i * 0.06) + i) * 0.0008 * autoSpeed
        const waveY = Math.cos(t * (0.55 + i * 0.07) - i) * 0.0007 * autoSpeed

        b.vx += waveX
        b.vy += waveY

        if (mouseRef.current.active && !idle) {
          const dx = mouseRef.current.x - b.x
          const dy = mouseRef.current.y - b.y
          const d2 = Math.max(0.01, dx * dx + dy * dy)
          const pull = (mouseForce / 100000) * autoIntensity
          b.vx += (dx / d2) * pull
          b.vy += (dy / d2) * pull
        } else if (autoDemo) {
          const autoX = 0.5 + Math.sin(t * autoSpeed) * 0.24
          const autoY = 0.5 + Math.cos(t * autoSpeed * 0.8) * 0.18
          const dx = autoX - b.x
          const dy = autoY - b.y
          b.vx += dx * 0.00012
          b.vy += dy * 0.00012
        }

        b.vx *= 0.985
        b.vy *= 0.985
        b.x += b.vx
        b.y += b.vy

        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1
      }

      const grd = ctx.createLinearGradient(0, 0, 1, 1)
      grd.addColorStop(0, colors[0] || "#5227FF")
      grd.addColorStop(0.5, colors[1] || colors[0] || "#FF9FFC")
      grd.addColorStop(1, colors[2] || colors[1] || "#B19EEF")
      ctx.fillStyle = "rgba(5,10,25,0.06)"
      ctx.fillRect(0, 0, 1, 1)

      ctx.globalCompositeOperation = "lighter"
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, "rgba(255,255,255,0.22)")
        g.addColorStop(0.18, "rgba(255,255,255,0.14)")
        g.addColorStop(0.7, "rgba(255,255,255,0.05)")
        g.addColorStop(1, "rgba(255,255,255,0)")
        ctx.fillStyle = g
        ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2)
      }

      ctx.globalCompositeOperation = "source-atop"
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, 1, 1)

      ctx.globalCompositeOperation = "source-over"
      const scan = ctx.createLinearGradient(0, 0, 1, 0)
      scan.addColorStop(0, "rgba(255,255,255,0)")
      scan.addColorStop(0.5 + Math.sin(t) * 0.2, "rgba(255,255,255,0.05)")
      scan.addColorStop(1, "rgba(255,255,255,0)")
      ctx.fillStyle = scan
      ctx.fillRect(0, 0, 1, 1)

      raf = requestAnimationFrame(render)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    render()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [autoDemo, autoIntensity, autoResumeDelay, autoSpeed, colors, mouseForce, resolution])

  return <canvas ref={canvasRef} className={`liquid-ether-container ${className}`} style={style} aria-hidden="true" />
}
