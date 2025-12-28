"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"

export function Services() {
  const { language } = useApp()
  const t = translations[language].services

  const serviceItems = [
    { title: t.taxConsulting, content: t.taxConsultingDesc },
    { title: t.accounting, content: t.accountingDesc },
    { title: t.legal, content: t.legalDesc },
    { title: t.audit, content: t.auditDesc },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">{t.title}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t.subtitle}</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {translations[language].about.description}
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {serviceItems.map((service, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-foreground/10 px-0">
                <AccordionTrigger className="text-xl font-medium py-6 hover:no-underline hover:text-primary transition-colors uppercase tracking-tight">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {service.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
