"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation, LocateFixed } from "lucide-react"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import Link from "next/link"

const OFFICE_COORDS: [number, number] = [41.270553, 69.193669]

export function ContactMap() {
  const { language } = useApp()
  const t = translations[language].contact

  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const placemarkRef = useRef<any>(null)
  const routeRef = useRef<any>(null)

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const lang =
      language === "uz" ? "uz_UZ" : language === "ru" ? "ru_RU" : "en_US"

    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return

      window.ymaps.ready(() => {
        mapInstance.current?.destroy()

        const map = new window.ymaps.Map(mapRef.current!, {
          center: OFFICE_COORDS,
          zoom: window.innerWidth < 640 ? 15 : 16,
          controls: ["zoomControl", "fullscreenControl", "geolocationControl"],
        })

        map.behaviors.disable("scrollZoom")

        mapInstance.current = map

        const placemark = new window.ymaps.Placemark(
          OFFICE_COORDS,
          {
            balloonContentHeader:
              "<strong style='font-size:16px'>SOLIQ.UZ</strong>",
            balloonContentBody: `
              <div style="padding:6px">
                ${t.addressValue}
              </div>
            `,
            hintContent: t.getDirections,
          },
          {
            preset: "islands#greenIcon",
            draggable: true,
            iconColor: "#10b981",
          }
        )

        placemarkRef.current = placemark
        map.geoObjects.add(placemark)
        placemark.balloon.open()

        // Click map → move marker
        map.events.add("click", (e: any) => {
          const coords = e.get("coords")
          placemark.geometry.setCoordinates(coords)
        })

        setReady(true)
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
      mapInstance.current?.destroy()
      mapInstance.current = null
    }
  }, [language, t.addressValue, t.getDirections])

  // 📍 Build route from user → office
  const buildRoute = () => {
    if (!window.ymaps || !mapInstance.current) return

    window.ymaps.geolocation.get({ provider: "browser" }).then((res: any) => {
      const userCoords = res.geoObjects.position

      routeRef.current && mapInstance.current.geoObjects.remove(routeRef.current)

      window.ymaps.route([userCoords, OFFICE_COORDS]).then((route: any) => {
        route.options.set({
          strokeColor: "#10b981",
          strokeWidth: 5,
          opacity: 0.9,
        })

        routeRef.current = route
        mapInstance.current.geoObjects.add(route)
        mapInstance.current.setBounds(route.getBounds(), { checkZoomRange: true })
      })
    })
  }

  // 🎯 Center on office
  const centerOffice = () => {
    mapInstance.current?.setCenter(OFFICE_COORDS, 16, { duration: 400 })
    placemarkRef.current?.balloon.open()
  }

  return (
    <div className="relative w-full h-[520px] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl">
      {/* Map */}
      <div ref={mapRef} className="absolute inset-0" />

      {/* Loading */}
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-3">
        <button
          onClick={centerOffice}
          className="flex items-center gap-2 rounded-xl bg-background/90 px-4 py-2 text-sm font-semibold shadow hover:scale-105 transition"
        >
          <LocateFixed size={16} />
          Office
        </button>

        <button
          className="flex items-center gap-2 rounded-xl bg-primary text-white px-4 py-2 text-sm font-semibold shadow hover:scale-105 transition"
        >
          <Link href={`https://yandex.uz/maps/-/CLXfbL2s`} className="flex items-center justify-center gap-5">

            <Navigation size={16} />
            {t.getDirections}
          </Link>
        </button>
      </div>

      {/* Info card */}
      <div className="absolute bottom-6 left-6 z-20 max-w-xs rounded-2xl bg-background/95 backdrop-blur-md p-4 shadow-xl">
        <p className="text-xs font-medium text-muted-foreground">
          📍 Tashkent, Chilonzor district
        </p>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    ymaps: any
  }
}
