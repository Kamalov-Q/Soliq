"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { Moon, Sun, Globe, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { useEffect, useState } from "react"

export function Navbar() {
  const { language, setLanguage, theme, toggleTheme } = useApp()
  const t = translations[language].nav
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const languages = [
    { code: "uz", name: "O'zbek", flag: "🇺🇿" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "en", name: "English", flag: "🇬🇧" },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        h-[72px]
        transition-colors duration-300
        ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-primary"
          >
            SOLIQ<span className="text-foreground/40 font-light">.UZ</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/" label={t.home} />
            <NavLink href="/about" label={t.about} />
            <NavLink href="/news" label={t.news} />
            <NavLink href="/reviews" label={t.reviews} />
            <NavLink href="/contact" label={t.contact} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
                <Globe size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl p-1">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`rounded-lg cursor-pointer ${language === lang.code
                      ? "bg-primary/10 text-primary font-bold"
                      : ""
                    }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          <div className="hidden sm:flex h-8 w-px bg-border mx-2" />

          {/* CTA */}
          <Link href="/contact" className="hidden sm:block">
            <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20">
              {t.getStarted}
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full w-10 h-10"
              >
                <Menu size={18} />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold tracking-tighter text-primary">
                  SOLIQ<span className="text-foreground/40 font-light">.UZ</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-10">
                <MobileLink href="/" label={t.home} />
                <MobileLink href="/about" label={t.about} />
                <MobileLink href="/news" label={t.news} />
                <MobileLink href="/reviews" label={t.reviews} />
                <MobileLink href="/contact" label={t.contact} />

                <div className="h-px bg-border my-2" />

                <Link href="/contact">
                  <Button className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest">
                    {t.getStarted}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

/* ---------- helpers ---------- */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
    >
      {label}
    </Link>
  )
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-lg text-center font-bold uppercase tracking-widest hover:text-primary transition-colors"
    >
      {label}
    </Link>
  )
}
