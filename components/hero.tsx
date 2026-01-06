"use client";

import { Button } from "./ui/button"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { useRouter } from "next/navigation"
import { Calculator, Coins, FileText, Percent, ShieldCheck } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import { useTheme } from "next-themes"

const backgroundImages = ["/images/bg.jpg"]

export function Hero() {
  const { language } = useApp()
  const router = useRouter()
  const { theme } = useTheme();
  const t = translations[language].hero

  const cards = {
    uz: [
      { title: "Soliq maslahati", description: "Soliqlarni rejalashtirish va optimallashtirish bo'yicha strategiyalar ishlab chiqish", icon: <Coins className={`w-10 h-10 dark:text-primary text-white`} /> },
      { title: "Buxgalteriya xizmatlari", description: "Buxgalteriya xizmatlarini yuritish, hujjatlarni tayyorlash va tiklash", icon: <Calculator className={`w-10 h-10 dark:text-primary text-white`} /> },
      { title: "Yuridik yordam", description: "Kompaniyalarga huquqiy yordam berish", icon: <ShieldCheck className={`w-10 h-10 dark:text-primary text-white`} /> },
    ],
    ru: [
      { title: "НДС и Налоги", description: "Точные расчеты 12% НДС и льготы", icon: <Percent className={`w-10 h-10 dark:text-primary text-white`} /> },
      { title: "Отчеты", description: "Ежемесячные и годовые налоговые отчеты", icon: <FileText className={`w-10 h-10 dark:text-primary text-white`} /> },
      { title: "Юридическое Соответствие", description: "Полностью соответствует налоговым законам Узбекистана", icon: <ShieldCheck className={`w-10 h-10 dark:text-primary text-white`} /> },
    ],
    en: [
      { title: "VAT & Taxes", description: "Accurate 12% VAT calculations & exemptions", icon: <Percent className={`w-10 h-10 dark:text-primary text-white`} /> },
      { title: "Reports", description: "Monthly & yearly tax-ready reports", icon: <FileText className={`w-10 h-10 dark:text-primary text-white`} /> },
      { title: "Legal Compliance", description: "Fully aligned with Uzbekistan tax rules", icon: <ShieldCheck className={`w-10 h-10 dark:text-primary text-white`} /> },
    ]
  }

  return (
    <section className="relative min-h-svh flex flex-col justify-between overflow-hidden px-4 sm:px-6">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {backgroundImages.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="Tax background" className="h-full w-full object-cover opacity-90" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-background/70 to-background" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {/* LEFT — Text */}
        <div className="text-center lg:text-left mt-10 lg:mt-[250px] ml-0 xl:ml-[-70px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-700 lg:text-6xl font-bold leading-tight mb-6">
            {t.title} <br />
            <span className={`${theme === "dark" ? "text-white" : "text-black"} italic`}>
              {t.subtitle}
            </span>
          </h1>

          {/* Desktop / tablet buttons */}
          <div className="hidden lg:flex flex-row gap-4 justify-start">
            <Button size="lg" className="rounded-full px-8 h-12" onClick={() => router.push("/contact")}>{t.cta}</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12" onClick={() => router.push("/about")}>{t.learnMore}</Button>
          </div>
        </div>

        {/* RIGHT — Tax visuals */}
        <div className="relative mt-10 lg:mt-[350px] lg:ml-10">
          {/* Desktop only */}
          <div className="hidden lg:block">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />

            <div className="grid gap-6 lg:relative top-40">
              {cards[language].map((card, i) => (
                <div key={i} className={`bg-transparent backdrop-blur-xl border rounded-2xl p-6 shadow-lg hover:shadow-xl transition ${i === 1 ? "ml-10" : i === 2 ? "ml-20" : ""}`}>
                  <div className="flex items-center gap-4">
                    {card.icon}
                    <div>
                      <h3 className="font-semibold text-lg dark:text-muted-foreground text-white">{card.title}</h3>
                      <p className="text-sm dark:text-muted-foreground text-white">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden grid gap-4 mt-6">
            {cards[language].map((card, i) => (
              <div key={i} className="bg-transparent backdrop-blur-xl border rounded-2xl p-4 shadow-lg flex items-center gap-3">
                {card.icon}
                <div>
                  <h3 className="font-semibold text-base dark:text-muted-foreground text-white">{card.title}</h3>
                  <p className="text-sm dark:text-muted-foreground text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile buttons at bottom */}
        <div className="flex flex-col gap-4 mt-8 lg:hidden justify-center items-center">
          <Button size="lg" className="rounded-full px-8 h-12 w-full max-w-xs" onClick={() => router.push("/contact")}>{t.cta}</Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 w-full max-w-xs" onClick={() => router.push("/about")}>{t.learnMore}</Button>
        </div>
      </div>
    </section>
  )
}
