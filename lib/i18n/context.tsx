"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "ko" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  getTranslations: () => Record<string, any>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko")
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true)
      try {
        const module = await import(`./dictionaries/${language}.json`)
        setTranslations(module.default)
      } catch (error) {
        console.error("Failed to load translations:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadTranslations()
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }

    return value || key
  }

  const getTranslations = () => translations

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
