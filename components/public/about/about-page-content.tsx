"use client"

import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardCheck,
  Gauge,
  Layers3,
  Workflow,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import enDictionary from "@/lib/i18n/dictionaries/en.json"
import koDictionary from "@/lib/i18n/dictionaries/ko.json"

const fallbackIntroductionCopy = {
  en: enDictionary.introduction,
  ko: koDictionary.introduction,
}

export function AboutPageContent() {
  const { language, getTranslations } = useLanguage()
  const translations = getTranslations()
  const copy = (translations?.introduction || fallbackIntroductionCopy[language]) as typeof koDictionary.introduction
  const strengthsItems = (copy.strengths?.items || []) as Array<{
    title: string
    description: string
  }>

  const icons = [Workflow, BriefcaseBusiness, Layers3, Gauge, ChartNoAxesCombined, ClipboardCheck]

  return (
    <div className="relative">
      <section className="px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary sm:tracking-[0.35em]">
                {copy.hero.welcome}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {copy.hero.title}{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent">
                  {copy.hero.titleHighlight}
                </span>
              </h1>
            </div>

            <p className="max-w-3xl whitespace-pre-line text-base leading-relaxed text-muted-foreground sm:text-lg">
              {copy.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8 rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm sm:p-10">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary sm:tracking-[0.3em]">
                {copy.about.badge}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.about.title}
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="whitespace-pre-line">{copy.about.paragraph1}</p>
              <p className="whitespace-pre-line">{copy.about.paragraph2}</p>
              <p className="whitespace-pre-line">{copy.about.paragraph3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary sm:tracking-[0.3em]">
              {copy.strengths.badge}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.strengths.title}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengthsItems.map((feature, index) => {
              const IconComponent = icons[index]

              return (
                <div
                  key={feature.title}
                  className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:bg-primary/12 group-hover:ring-primary/25">
                    <IconComponent className="h-5 w-5 stroke-[1.7]" />
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
