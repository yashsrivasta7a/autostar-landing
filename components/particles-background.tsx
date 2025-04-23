"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  decreasing: boolean
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000) // Adjust density

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 0.2 - 0.1
        const speedY = Math.random() * 0.2 - 0.1

        // Purple color variations
        const colors = [
          "rgba(139, 92, 246, ", // Purple-500
          "rgba(124, 58, 237, ", // Violet-600
          "rgba(167, 139, 250, ", // Purple-400
          "rgba(109, 40, 217, ", // Violet-700
        ]

        const color = colors[Math.floor(Math.random() * colors.length)]
        const alpha = Math.random() * 0.5 + 0.1

        particles.current.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          alpha,
          decreasing: Math.random() > 0.5,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulsating alpha
        if (particle.decreasing) {
          particle.alpha -= 0.005
          if (particle.alpha <= 0.1) {
            particle.decreasing = false
          }
        } else {
          particle.alpha += 0.005
          if (particle.alpha >= 0.5) {
            particle.decreasing = true
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${particle.alpha})`
        ctx.fill()

        // Connect nearby particles
        connectParticles(particle, index)
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    const connectParticles = (particle: Particle, index: number) => {
      for (let i = index + 1; i < particles.current.length; i++) {
        const dx = particle.x - particles.current[i].x
        const dy = particle.y - particles.current[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const opacity = 1 - distance / 100
          ctx.beginPath()
          ctx.strokeStyle = `${particle.color}${opacity * 0.2})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particles.current[i].x, particles.current[i].y)
          ctx.stroke()
        }
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
