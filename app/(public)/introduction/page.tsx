"use client"

import { Code2, Rocket, Target, Zap, TrendingUp, Users } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function IntroductionPage() {
  const { t, getTranslations } = useLanguage()
  
  const translations = getTranslations()
  const strengthsItems = (translations?.introduction?.strengths?.items || []) as Array<{
    title: string
    description: string
  }>

  const icons = [Rocket, Target, Code2, Zap, TrendingUp, Users]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                {t("introduction.hero.welcome")}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                {t("introduction.hero.title")}{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  {t("introduction.hero.titleHighlight")}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl whitespace-pre-line">
              {t("introduction.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                {t("introduction.about.badge")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("introduction.about.title")}
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p className="whitespace-pre-line">
                {t("introduction.about.paragraph1")}
              </p>

              <p className="whitespace-pre-line">
                {t("introduction.about.paragraph2")}
              </p>

              <p className="whitespace-pre-line">
                {t("introduction.about.paragraph3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              {t("introduction.strengths.badge")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("introduction.strengths.title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengthsItems && Array.isArray(strengthsItems) && strengthsItems.map((feature, index) => {
              const IconComponent = icons[index]
              return (
                <div
                  key={index}
                  className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
