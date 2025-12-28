"use client"

import { useEffect, useRef, useState } from "react"

type CounterProps = {
    value: number
    duration?: number
    suffix?: string
}

export function Counter({
    value,
    duration = 1500,
    suffix = "",
}: CounterProps) {
    const spanRef = useRef<HTMLSpanElement>(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const el = spanRef.current
        if (!el) return

        let startTime: number | null = null
        let frameId: number

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return

                startTime = null
                setCount(0)

                const animate = (time: number) => {
                    if (!startTime) startTime = time
                    const progress = Math.min((time - startTime) / duration, 1)

                    setCount(Math.floor(progress * value))

                    if (progress < 1) {
                        frameId = requestAnimationFrame(animate)
                    }
                }

                frameId = requestAnimationFrame(animate)
            },
            { threshold: 0.6 }
        )

        observer.observe(el)

        return () => {
            observer.disconnect()
            cancelAnimationFrame(frameId)
        }
    }, [value, duration])

    return (
        <span ref={spanRef}>
            {count}
            {suffix}
        </span>
    )
}
