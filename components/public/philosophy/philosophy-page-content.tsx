"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

export function PhilosophyPageContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const coreValues = [
    {
      number: "01",
      title: t("philosophy.coreValues.1.title"),
      description: t("philosophy.coreValues.1.description"),
    },
    {
      number: "02",
      title: t("philosophy.coreValues.2.title"),
      description: t("philosophy.coreValues.2.description"),
    },
    {
      number: "03",
      title: t("philosophy.coreValues.3.title"),
      description: t("philosophy.coreValues.3.description"),
    },
  ]

  const techStacks = [
    {
      id: 1,
      title: t("philosophy.techStack.categories.frontend.title"),
      video: "/images/tech-frontend.mp4",
      items: Array.isArray(t("philosophy.techStack.categories.frontend.items"))
        ? t("philosophy.techStack.categories.frontend.items") as unknown as string[]
        : [],
    },
    {
      id: 2,
      title: t("philosophy.techStack.categories.backend.title"),
      video: "/images/tech-backend.mp4",
      items: Array.isArray(t("philosophy.techStack.categories.backend.items"))
        ? t("philosophy.techStack.categories.backend.items") as unknown as string[]
        : [],
    },
    {
      id: 3,
      title: t("philosophy.techStack.categories.web3.title"),
      video: "/images/tech-web3.mp4",
      items: Array.isArray(t("philosophy.techStack.categories.web3.items"))
        ? t("philosophy.techStack.categories.web3.items") as unknown as string[]
        : [],
    },
    {
      id: 4,
      title: t("philosophy.techStack.categories.ai.title"),
      video: "/images/tech-ai.mp4",
      items: Array.isArray(t("philosophy.techStack.categories.ai.items"))
        ? t("philosophy.techStack.categories.ai.items") as unknown as string[]
        : [],
    },
  ]

  const additionalExpertise = [
    {
      title: t("philosophy.techStack.additional.sdk.title"),
      items: Array.isArray(t("philosophy.techStack.additional.sdk.items")) 
        ? t("philosophy.techStack.additional.sdk.items") as unknown as string[]
        : [],
    },
    {
      title: t("philosophy.techStack.additional.devops.title"),
      items: Array.isArray(t("philosophy.techStack.additional.devops.items"))
        ? t("philosophy.techStack.additional.devops.items") as unknown as string[]
        : [],
    },
    {
      title: t("philosophy.techStack.additional.payment.title"),
      items: Array.isArray(t("philosophy.techStack.additional.payment.items"))
        ? t("philosophy.techStack.additional.payment.items") as unknown as string[]
        : [],
    },
    {
      title: t("philosophy.techStack.additional.security.title"),
      items: Array.isArray(t("philosophy.techStack.additional.security.items"))
        ? t("philosophy.techStack.additional.security.items") as unknown as string[]
        : [],
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-24 sm:space-y-32">
        {/* Philosophy Section */}
        <div className={cn("opacity-0", isVisible && "animate-fade-in-up")}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">{t("philosophy.tagline")}</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {t("philosophy.mainTitle")}
                </h1>
              </div>

              <blockquote className="relative border-l-2 border-primary pl-6 text-xl sm:text-2xl font-medium leading-relaxed text-foreground/90">
                "{t("philosophy.quote")}"
              </blockquote>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t("philosophy.intro")}
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3 hover-lift"
              >
                {t("philosophy.workTogether")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/20 glass">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/images/philosophy-poster.jpg"
              >
                <source src="/images/philosophy.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <div
                key={value.number}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card/40 glass p-8 transition-all hover:border-primary/50 hover-lift opacity-0",
                  isVisible && "animate-fade-in-up",
                )}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <span className="font-mono text-sm font-bold text-primary">{value.number}</span>
                </div>
                <div className="space-y-3 mt-4">
                  <h3 className="text-xl font-bold tracking-tight">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={cn("opacity-0", isVisible && "animate-fade-in-up stagger-4")}>
          <div className="text-center space-y-6 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary">{t("philosophy.techStack.badge")}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t("philosophy.techStack.title")}</h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("philosophy.techStack.description")}
              <br />{t("philosophy.techStack.description2")}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 glass px-6 py-3 text-sm font-semibold transition-all hover:border-primary/50 hover:bg-card/60 hover-lift"
            >
              {t("philosophy.techStack.consultation")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStacks.map((tech, index) => (
              <div
                key={tech.id}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card/40 glass overflow-hidden transition-all hover:border-primary/50 hover-lift opacity-0",
                  isVisible && "animate-scale-in",
                )}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-secondary/20">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  >
                    <source src={tech.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-lg transition-transform group-hover:translate-y-[-2px]">
                      {tech.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Expertise */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-2xl font-bold tracking-tight mb-8 text-center">{t("philosophy.techStack.additional.title")}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalExpertise.map((expertise, index) => (
                <div
                  key={expertise.title}
                  className={cn(
                    "rounded-xl border border-border bg-card/30 glass p-6 space-y-4 transition-all hover:border-primary/30 hover:bg-card/50 opacity-0",
                    isVisible && "animate-fade-in-up",
                  )}
                  style={{ animationDelay: `${index * 80 + 600}ms` }}
                >
                  <h4 className="font-mono text-sm font-bold text-primary uppercase tracking-wider">
                    {expertise.title}
                  </h4>
                  <ul className="space-y-2">
                    {expertise.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary/60 mt-1 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
