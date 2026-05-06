"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useLanguage()
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    t("hero.roles.0"),
    t("hero.roles.1"),
    t("hero.roles.2"),
    t("hero.roles.3"),
    t("hero.roles.4"),
  ]

  useEffect(() => {
    const targetText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="min-w-0 space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.16em] sm:tracking-[0.35em] text-primary">
                {t("hero.tagline")}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                {t("hero.title")}
                <br />
                <span
                  className="break-all bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent typing-cursor [overflow-wrap:anywhere]"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <div className="max-w-[22rem] break-words text-base leading-relaxed text-muted-foreground animate-fade-in-up stagger-2 [overflow-wrap:anywhere] sm:max-w-lg sm:text-lg">
              <p>{t("hero.description")}</p>
              <p className="mt-4 whitespace-pre-line">{t("hero.description2")}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-in-up stagger-3">
              <Link
                href="/projects"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-primary/10 px-5 py-3 font-mono text-xs text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98] sm:flex-1 sm:gap-3 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <span className="relative z-10">{t("hero.explore")}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98] sm:flex-1 sm:gap-3 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <span>{t("hero.introduction")}</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right column - ASCII Art / Visual */}
          <div className="relative min-w-0 animate-scale-in stagger-4">
            <div className="relative rounded-xl border border-border bg-card/60 glass p-3 sm:p-6 hover-lift">
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary" />
              </div>
              <div className="absolute left-1/2 top-3.5 -translate-x-1/2 rounded-md bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                terminal://semicolon
              </div>

              <pre className="mb-8 mt-6 overflow-visible text-[11px] leading-[1.35] text-primary/80 sm:text-[13px] sm:leading-[1.35]" style={{
                fontFamily: '"Courier New", Courier, monospace',
                whiteSpace: "pre",
                tabSize: 8,
                letterSpacing: "0.05em",
                fontVariantLigatures: "none",
                fontFeatureSettings: '"liga" 0',
                textRendering: "geometricPrecision",
                WebkitFontSmoothing: "none",
                MozOsxFontSmoothing: "grayscale",
              }}>
                <span className="block sm:hidden">{`┌────────────────────────────────────────┐
│                                        │
│  ██████████   ██████████ █████   █████ │
│ ░░███░░░░███ ░░███░░░░░█░░███   ░░███  │
│  ░███   ░░███ ░███  █ ░  ░███    ░███  │
│  ░███    ░███ ░██████    ░███    ░███  │
│  ░███    ░███ ░███░░█    ░░███   ███   │
│  ░███    ███  ░███ ░   █  ░░░█████░    │
│  ██████████   ██████████    ░░███      │
│ ░░░░░░░░░░   ░░░░░░░░░░      ░░░       │
│                                        │ 
│  > experiments: 12                     │
│  > status: forging                     │
└────────────────────────────────────────┘`}</span>
                <span className="hidden sm:block">{`┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   █████████  ██████████ ██████   ██████ █████                  │
│  ███░░░░░███░░███░░░░░█░░██████ ██████ ░░███                   │
│ ░███    ░░░  ░███  █ ░  ░███░█████░███  ░███                   │
│ ░░█████████  ░██████    ░███░░███ ░███  ░███                   │
│  ░░░░░░░░███ ░███░░█    ░███ ░░░  ░███  ░███   ██              │
│  ███    ░███ ░███ ░   █ ░███      ░███  ░███  ░░               │
│ ░░█████████  ██████████ █████     █████ █████  ██              │
│  ░░░░░░░░░  ░░░░░░░░░░ ░░░░░     ░░░░░ ░░░░░  ██               │
│                                              ░░                │
│    █████████     ███████    ████     ███████    ██████   █████ │
│   ███░░░░░███  ███░░░░░███ ░░███   ███░░░░░███ ░░██████ ░░███  │
│  ███     ░░░  ███     ░░███ ░███  ███     ░░███ ░███░███ ░███  │
│ ░███         ░███      ░███ ░███ ░███      ░███ ░███░░███░███  │
│ ░███         ░███      ░███ ░███ ░███      ░███ ░███ ░░██████  │
│ ░░███     ███░░███     ███  ░███ ░░███     ███  ░███  ░░█████  │
│  ░░█████████  ░░░███████░   █████ ░░░███████░   █████  ░░█████ │
│   ░░░░░░░░░     ░░░░░░░    ░░░░░    ░░░░░░░    ░░░░░    ░░░░░  │
│                                                                │
│                        SEMICOLON; DEV                          │
│                                                                │
│   > experiments loaded: 12                                     │
│   > status: forging                                            │
│   > last spark: today                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘`}</span>
              </pre>
            </div>

            <div className="absolute -right-2 -top-2 rounded-lg border border-primary/40 bg-primary/15 glass px-3 py-1.5 font-mono text-[11px] text-primary animate-float sm:-right-6 sm:-top-6 sm:px-4 sm:text-xs">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                v1.2.7
              </span>
            </div>
            <div
              className="absolute -bottom-3 -left-2 rounded-lg border border-border bg-card glass px-3 py-1.5 font-mono text-[11px] text-muted-foreground animate-float sm:-bottom-6 sm:-left-6 sm:px-4 sm:text-xs"
              style={{ animationDelay: "1s" }}
            >
              May. 2026
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
        <span className="font-mono text-xs text-muted-foreground">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
