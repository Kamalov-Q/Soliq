"use client"

import { Button } from "./ui/button"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"

export function Hero() {
  const { language } = useApp()
  const t = translations[language].hero

  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/uzbekistan-landscape-professional.jpg"
          alt="Professional background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {t.title} <br />
          <span className="text-primary italic">{t.subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white h-12">
            {t.cta}
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 h-12">
            {t.learnMore}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 w-full flex justify-center animate-bounce opacity-50">
        <div className="w-px h-12 bg-foreground" />
      </div>
    </section>
  )
}
