"use client"

import { Button } from "./ui/button"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { useRouter } from "next/navigation"
import { Calculator, Coins, FileText, Percent, ShieldCheck } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

const backgroundImages = [
  "/images/bg.jpg",
  // "/images/bg2.jpg"
]

export function Hero() {
  const { language } = useApp()
  const router = useRouter()
  const t = translations[language].hero

  const cards = {
    uz: [
      {
        title: "Soliq maslahati",
        description: "Soliqlarni rejalashtirish va optimallashtirish bo'yicha strategiyalar ishlab chiqish",
        icon: <Coins className={`w-10 h-10 dark:text-primary text-white`} />
      },
      {
        title: "Buxgalteriya xizmatlari",
        description: "Buxgalteriya xizmatlarini yuritish, hujjatlarni tayyorlash va tiklash",
        icon: <Calculator className={`w-10 h-10 dark:text-primary text-white`} />
      },
      {
        title: "Yuridik yordam",
        description: "Kompaniyalarga huquqiy yordam berish",
        icon: <ShieldCheck className={`w-10 h-10 dark:text-primary text-white`} />
      }
    ],
    ru: [
      {
        title: "Налоговые консультации",
        description: "Разработка стратегий по планированию и оптимизации налогов",
        icon: <Coins className={`w-10 h-10 dark:text-primary text-white`} />
      },
      {
        title: "Бухгалтерские услуги",
        description: "Ведение бухгалтерии, подготовка и восстановление документов",
        icon: <Calculator className={`w-10 h-10 dark:text-primary text-white`} />
      },
      {
        title: "Юридическая помощь",
        description: "Предоставление юридической помощи компаниям",
        icon: <ShieldCheck className={`w-10 h-10 dark:text-primary text-white`} />
      }
    ],
    en: [
      {
        title: "Tax Consulting",
        description: "Developing strategies for tax planning and optimization",
        icon: <Coins className={`w-10 h-10 dark:text-primary text-white`} />
      },
      {
        title: "Accounting Services",
        description: "Managing accounting, preparing and restoring documents",
        icon: <Calculator className={`w-10 h-10 dark:text-primary text-white`} />
      },
      {
        title: "Legal Assistance",
        description: "Providing legal support for companies",
        icon: <ShieldCheck className={`w-10 h-10 dark:text-primary text-white`} />
      }
    ]
  }


  return (
    <section className="relative min-h-svh flex items-center overflow-hidden px-6">
      {/* 🔁 Background Swiper */}
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
              <img
                src={src}
                alt="Tax background"
                className="h-full w-full object-cover dark:opacity-50"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-background/70 to-background" />
      </div>

      {/* 🧱 Main content */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-700 lg:text-6xl font-bold leading-tight mb-6">
            {t.title} <br />
            <span className="dark:text-white text-black italic">{t.subtitle}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10">
            {t.description}
          </p>

          {/* Desktop buttons */}
          <div className="hidden lg:flex gap-4 justify-start">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              {t.cta}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 cursor-pointer"
              onClick={() => router.push("/about")}
            >
              {t.learnMore}
            </Button>
          </div>
        </div>

        {/* RIGHT — Tax visuals */}
        <div className="relative">
          {/* Desktop visuals */}
          <div className="hidden lg:block">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />

            <div className="grid gap-6 mt-10 md:mt-80">
              {cards[language].map((card, i) => (
                <div
                  key={i}
                  className={`bg-transparent backdrop-blur-xl border rounded-2xl p-6 shadow-lg hover:shadow-xl transition ${i === 1 ? "ml-10" : i === 2 ? "ml-20" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    {card.icon}
                    <div>
                      <h3 className="font-semibold text-lg">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile visuals + buttons */}
          <div className="lg:hidden mt-10 flex flex-col gap-4">
            {cards[language].map((card, i) => (
              <div
                key={i}
                className="bg-transparent backdrop-blur-xl border rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <div>
                    <h3 className="font-semibold text-base">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile buttons below cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                {t.cta}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 cursor-pointer"
                onClick={() => router.push("/about")}
              >
                {t.learnMore}
              </Button>
            </div>
          </div>
        </div>

        {/* END visuals */}
      </div>
    </section>
  )
}
