"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "lucide-react"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"

const MAP_COORDS: [number, number] = [41.271631, 69.196723]

export function ContactMap() {
  const { language } = useApp()
  const t = translations[language].contact

  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  const [isMapReady, setIsMapReady] = useState(false)

  useEffect(() => {
    const lang =
      language === "uz" ? "uz_UZ" : language === "ru" ? "ru_RU" : "en_US"

    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return

      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current!, {
          center: MAP_COORDS,
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        })

        mapInstanceRef.current = map

        const placemark = new window.ymaps.Placemark(
          MAP_COORDS,
          {
            balloonContentHeader:
              "<strong style='font-size:16px'>SOLIQ.UZ</strong>",
            balloonContentBody: `
              <div style="padding:6px;font-size:14px">
                ${t.addressValue}
              </div>
            `,
            balloonContentFooter: `
              <div style="padding:6px">
                <a
                  href="https://yandex.uz/maps/?pt=${MAP_COORDS[1]},${MAP_COORDS[0]}&z=16&l=map"
                  target="_blank"
                  style="color:#10b981;font-weight:600"
                >
                  ${t.getDirections}
                </a>
              </div>
            `,
          },
          {
            preset: "islands#greenDotIconWithCaption",
            iconColor: "#10b981",
          }
        )

        map.geoObjects.add(placemark)
        placemark.balloon.open()

        setIsMapReady(true) // ✅ triggers re-render
      })
    }

    if (!window.ymaps) {
      const script = document.createElement("script")
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=&lang=${lang}`
      script.async = true
      script.onload = initMap
      document.body.appendChild(script)
    } else {
      initMap()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [language, t.addressValue, t.getDirections])

  return (
    <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden border border-border/50 bg-muted/30 shadow-2xl shadow-primary/5">
      {/* Map */}
      <div ref={mapRef} className="absolute inset-0 w-full h-full" />

      {/* Loading */}
      {!isMapReady && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-muted-foreground">
              Loading map...
            </p>
          </div>
        </div>
      )}

      {/* Info card */}
      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
        <div className="pointer-events-auto max-w-xs rounded-2xl border border-border/50 bg-background/95 backdrop-blur-md p-4 shadow-xl">
          <div className="mb-2 flex items-center gap-3 text-primary">
            <Navigation size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              {t.getDirections}
            </span>
          </div>
          <p className="text-xs font-medium text-muted-foreground">
            Tashkent, Chilonzor district
          </p>
        </div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    ymaps: any
  }
}
