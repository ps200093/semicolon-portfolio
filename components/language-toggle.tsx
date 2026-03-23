"use client"

import { useLanguage } from "@/lib/i18n/context"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setLanguage(language === "en" ? "ko" : "en")
      }}
      className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10 touch-manipulation"
      aria-label="Toggle language"
    >
      <span className="font-mono text-xs font-bold transition-transform duration-300 group-hover:scale-110">
        {language === "en" ? "KO" : "EN"}
      </span>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-bottom-9 pointer-events-none shadow-lg">
        {language === "en" ? "한국어" : "English"}
      </span>
    </button>
  )
}
