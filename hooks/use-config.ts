import { create } from "zustand"
import { persist } from "zustand/middleware"

type Language = "uz" | "ru" | "en"
type Theme = "light" | "dark"

interface ConfigState {
  lang: Language
  theme: Theme
  setLang: (lang: Language) => void
  setTheme: (theme: Theme) => void
}

export const useConfig = create<ConfigState>()(
  persist(
    (set) => ({
      lang: "uz",
      theme: "light",
      setLang: (lang) => set({ lang }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "soliq-config",
    },
  ),
)
