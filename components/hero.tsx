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
      <div className="mx-auto text-center max-w-7xl flex flex-col items-center justify-center gap-10 mt-60">
        {/* LEFT — Text */}
        <div className="text-center flex flex-col items-center justify-center gap-5 md:ml-40">
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-gray-400 lg:text-5xl font-bold leading-tight mb-6">
            {t.title} <br />
            <span className="dark:text-gray-400 text-gray-400">{t.subtitle}</span>
          </h1>

          {/* Desktop buttons */}
          <div className="flex gap-4 flex-col md:flex-row justify-start">
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
    </section>
  )
}
