"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const setVisible = (visible: boolean) => {
      if (glowRef.current) glowRef.current.style.opacity = visible ? "1" : "0"
      if (dotRef.current) dotRef.current.style.opacity = visible ? "0.15" : "0"
    }

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      setVisible(true)

      if (frameRef.current !== null) return
      frameRef.current = requestAnimationFrame(() => {
        const { x, y } = positionRef.current

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }

        frameRef.current = null
      })
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select')

      if (glowRef.current) {
        glowRef.current.style.width = isInteractive ? "500px" : "400px"
        glowRef.current.style.height = isInteractive ? "500px" : "400px"
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className="cursor-glow hidden lg:block pointer-events-none"
        style={{
          left: 0,
          top: 0,
          opacity: 0,
          width: "400px",
          height: "400px",
          transform: "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
          transition: "opacity 0.4s ease, width 0.3s ease, height 0.3s ease",
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot hidden lg:block pointer-events-none fixed w-8 h-8 rounded-full mix-blend-screen"
        style={{
          left: 0,
          top: 0,
          transform: "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          opacity: 0,
          transition: "opacity 0.2s ease",
          filter: "blur(4px)",
        }}
      />
    </>
  )
}
