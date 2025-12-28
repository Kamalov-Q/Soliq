"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"

export function ContactSection() {
  const { language } = useApp()
  const t = translations[language].contact

  return (
    <section id="contact" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">{t.title}</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{t.subtitle}</h2>
            <p className="text-background/60 text-lg mb-12 max-w-md">{translations[language].footer.description}</p>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-primary uppercase tracking-widest font-bold mb-1">{t.address}</p>
                <p>{t.addressValue}</p>
              </div>
              <div>
                <p className="text-primary uppercase tracking-widest font-bold mb-1">{t.phone2}</p>
                <p>{t.emailValue}</p>
                <p>{t.phoneValue}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">{t.name}</label>
                <Input className="bg-transparent border-b border-t-0 border-x-0 border-background/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">{t.email}</label>
                <Input className="bg-transparent border-b border-t-0 border-x-0 border-background/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">{t.phone}</label>
              <Input className="bg-transparent border-b border-t-0 border-x-0 border-background/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">{t.message}</label>
              <Textarea className="bg-transparent border-b border-t-0 border-x-0 border-background/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors min-h-[100px] resize-none" />
            </div>
            <Button size="lg" className="w-full rounded-full bg-primary text-white hover:bg-primary/90">
              {t.send}
            </Button>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[150px] md:text-[250px] font-bold leading-none tracking-tighter opacity-10 select-none">
            SOLIQ
          </div>
        </div>
      </div>
    </section>
  )
}
