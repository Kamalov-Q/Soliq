"use client"

import { Button } from "./ui/button"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { useRouter } from "next/navigation";

export function Hero() {
  const { language } = useApp();
  const router = useRouter();
  const t = translations[language].hero

  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-bold mb-6">
          {t.title} <br />
          <span className="text-primary italic">{t.subtitle}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 h-12 cursor-pointer" onClick={() => router.push('/contact')}>
            {t.cta}
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 cursor-pointer" onClick={() => router.push('/about')}>
            {t.learnMore}
          </Button>
        </div>
      </div>
    </section>
  )
}
