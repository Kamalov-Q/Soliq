"use client"

import Link from "next/link"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { Facebook, Instagram, Linkedin, Send, Mail, Phone, MapPin } from "lucide-react"
import Logo from "./logo"

export function Footer() {
  const { language } = useApp()
  const t = translations[language]

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-primary inline-block">
              {/* TaxOFF<span className="text-foreground/40 font-light ml-1">Partners</span> */}
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Bffkt9siW/?mibextid=wwXIfr"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/soliq_taxoff_partners/"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/saidumar-azimov-phd-tax-control-7b583529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://t.me/taxoff_group"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Send size={18} />
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
                <Link href="/blogs" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.blogs}
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
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.services.serv1}
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.services.serv2}
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.services.serv3}
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.services.serv4}
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.services.serv5}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">{t.nav.contact}</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                <span className="leading-relaxed">
                  <Link href={`https://yandex.uz/maps/-/CLXfbL2s`}>{t.contact.addressShort}, {t.contact.city}</Link>
                </span>
              </li>
              <li className="flex gap-3 items-center text-sm text-muted-foreground">
                <Phone size={16} className="shrink-0 text-primary" />
                {/* <span>{t.contact.phoneValue}</span> */}
                <span><Link href={`tel:998947540070`}>+99894 754-00-70</Link></span>
              </li>
              <li className="flex gap-3 items-center text-sm text-muted-foreground">
                <Mail size={16} className="shrink-0 text-primary" />
                <span><Link href={`mailto:azimovsaidumar@gmail.com`}>{t.contact.emailValue}</Link></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© 2025 TaxOFF Partners {t.footer.rights}</div>
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
