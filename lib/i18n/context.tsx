"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import enDictionary from "./dictionaries/en.json"
import koDictionary from "./dictionaries/ko.json"

type Language = "ko" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  getTranslations: () => Record<string, any>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
const dictionaries = {
  en: enDictionary,
  ko: koDictionary,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko")
  const translations = dictionaries[language]

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage === "ko" || savedLanguage === "en") {
      setLanguageState(savedLanguage)
    }
  }, [])

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

    return typeof value === "string" ? value : key
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
