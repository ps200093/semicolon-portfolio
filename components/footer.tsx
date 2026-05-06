"use client"

import { BadgeCheck, Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t, getTranslations } = useLanguage()
  
  const translations = getTranslations()
  const strengths = (translations?.footer?.strengths?.items || []) as string[]
  const projectCategories = (translations?.footer?.projectCategories?.items || []) as string[]
  
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column - Connect */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                {t("footer.connect")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {t("footer.buildTogether")}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  {t("footer.together")}
                </span>
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl whitespace-pre-line">
              {t("footer.description")}
            </p>

            <div className="pt-2">
              <a
                href="mailto:contact@semicolon.it.kr"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3 hover-lift"
              >
                <Mail className="h-4 w-4" />
                contact@semicolon.it.kr
              </a>
            </div>
          </div>

          {/* Right column - Strengths & Categories */}
          <div className="space-y-8 animate-fade-in-up stagger-2 lg:justify-self-end lg:max-w-xl">
            {/* Strengths */}
            <div className="space-y-4">
              <h4 className="font-mono text-sm font-bold text-primary uppercase tracking-wider">
                {t("footer.strengths.title")}
              </h4>
              <ul className="space-y-3">
                {strengths && Array.isArray(strengths) && strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5 stroke-[1.8]" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Categories */}
            <div className="space-y-4">
              <h4 className="font-mono text-sm font-bold text-primary uppercase tracking-wider">
                {t("footer.projectCategories.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {projectCategories && Array.isArray(projectCategories) && projectCategories.map((category, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-border/50 bg-card/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card/80"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex items-center justify-center border-t border-border/30 pt-8 sm:pt-10 animate-fade-in stagger-4">
          <p className="font-mono text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} SEMICOLON;DEV - {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
