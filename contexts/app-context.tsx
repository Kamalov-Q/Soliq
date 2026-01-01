"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "uz" | "ru" | "en"
type Theme = "light" | "dark"

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedLang = localStorage.getItem("lang") as Language | null

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }

    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  // Sync theme with document attributes for CSS variables
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
