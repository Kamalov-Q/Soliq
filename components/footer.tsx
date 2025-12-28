"use client"

import Link from "next/link"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { language } = useApp()
  const t = translations[language]

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-primary inline-block">
              SOLIQ<span className="text-foreground/40 font-light">.UZ</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.reviews}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">{t.footer.services}</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.taxConsulting}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.accounting}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.legal}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.audit}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">{t.nav.contact}</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                <span className="leading-relaxed">
                  {t.contact.addressShort}, {t.contact.city}
                </span>
              </li>
              <li className="flex gap-3 items-center text-sm text-muted-foreground">
                <Phone size={16} className="shrink-0 text-primary" />
                <span>{t.contact.phoneValue}</span>
              </li>
              <li className="flex gap-3 items-center text-sm text-muted-foreground">
                <Mail size={16} className="shrink-0 text-primary" />
                <span>{t.contact.emailValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© 2025 SOLIQ.UZ. {t.footer.rights}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest font-bold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest font-bold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
