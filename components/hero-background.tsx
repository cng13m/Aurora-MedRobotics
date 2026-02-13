"use client"

import { useEffect, useRef } from "react"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particles = []
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    let time = 0

    const draw = () => {
      time += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gradient orb
      const cx = canvas.width * 0.5 + Math.sin(time * 0.5) * 100
      const cy = canvas.height * 0.4 + Math.cos(time * 0.3) * 60
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 350)
      gradient.addColorStop(0, "hsla(185, 80%, 55%, 0.08)")
      gradient.addColorStop(0.5, "hsla(185, 80%, 55%, 0.03)")
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Second orb
      const cx2 = canvas.width * 0.7 + Math.cos(time * 0.4) * 80
      const cy2 = canvas.height * 0.6 + Math.sin(time * 0.6) * 50
      const gradient2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, 250)
      gradient2.addColorStop(0, "hsla(200, 70%, 50%, 0.06)")
      gradient2.addColorStop(0.5, "hsla(200, 70%, 50%, 0.02)")
      gradient2.addColorStop(1, "transparent")
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(185, 80%, 70%, ${p.opacity})`
        ctx.fill()
      }

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(185, 80%, 60%, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Grid lines
      ctx.strokeStyle = "hsla(185, 60%, 50%, 0.03)"
      ctx.lineWidth = 0.5
      const gridSize = 60
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    resize()
    initParticles()

    if (!prefersReducedMotion) {
      draw()
    } else {
      // Draw once
      time = 0
      const cx = canvas.width * 0.5
      const cy = canvas.height * 0.4
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 350)
      gradient.addColorStop(0, "hsla(185, 80%, 55%, 0.08)")
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener("resize", () => {
      resize()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
