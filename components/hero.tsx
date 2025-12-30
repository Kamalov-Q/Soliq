"use client"

import { Button } from "./ui/button"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"

export function Hero() {
  const { language } = useApp()
  const t = translations[language].hero

  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/uzbekistan-landscape-professional.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
          {t.title} <br />
          <span className="text-primary italic">{t.subtitle}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 h-12">
            {t.cta}
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 h-12">
            {t.learnMore}
          </Button>
        </div>
      </div>
    </section>
  )
}
