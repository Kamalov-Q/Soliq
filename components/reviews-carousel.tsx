"use client"

import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "./ui/button"

export function ReviewsCarousel() {
  const { language } = useApp()
  const t = translations[language].reviews
  const [index, setIndex] = useState(0)

  const reviews = [
    { text: t.review1, author: t.review1Author, pos: t.review1Position },
    { text: t.review2, author: t.review2Author, pos: t.review2Position },
    { text: t.review3, author: t.review3Author, pos: t.review3Position },
  ]

  const next = () => setIndex((prev) => (prev + 1) % reviews.length)
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12 overflow-hidden py-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 text-primary mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed italic mb-10 max-w-4xl mx-auto">
            "{reviews[index].text}"
          </blockquote>
          <div className="space-y-1">
            <cite className="not-italic font-bold text-xl block">{reviews[index].author}</cite>
            <span className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
              {reviews[index].pos}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="pointer-events-auto rounded-full w-12 h-12 bg-background/50 backdrop-blur hover:bg-primary hover:text-white transition-all shadow-lg"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="pointer-events-auto rounded-full w-12 h-12 bg-background/50 backdrop-blur hover:bg-primary hover:text-white transition-all shadow-lg"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all rounded-full ${i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
