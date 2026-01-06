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
import Logo from "./logo"

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
    { code: "uz", name: "O'zbek" },
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
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
            className="text-xl md:text-2xl font-bold tracking-tighter text-primary"
          >
            {/* TaxOFF <span className="text-foreground/40 font-light">Partners</span> */}
            <Logo />
            {/* <img src={`/images/logo.jpg`} className="w-14 h-14 rounded-full" alt="" style={{mixBlendMode: "multiply"}} /> */}
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <NavLink href="/" label={t.home} />
            <NavLink href="/about" label={t.about} />
            <NavLink href="/services" label={t.services} />
            <NavLink href="/blogs" label={t.blogs} />
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
                  <span className="mr-2">
                    {lang.code === "uz" ? (
                      <img src={`/uzb.png`} alt="uzb flag" className="w-5 h-5 rounded-full" />
                    ) : lang.code === "ru" ? (
                      <img src={`/rus.png`} alt="russian flag" className="w-5 h-5 rounded-full" />
                    ) : (
                      <img src={`/eng.png`} alt="england flag" className="w-5 h-5 rounded-full" />
                    )}
                  </span>
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
                <SheetTitle className="text-xl md:text-2xl font-bold tracking-tighter text-primary">
                  TaxOFF<span className="text-foreground/40 font-light px-1">Partners</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-10">
                <MobileLink href="/" label={t.home} />
                <MobileLink href="/about" label={t.about} />
                <MobileLink href="/services" label={t.services} />
                <MobileLink href="/blogs" label={t.blogs} />
                <MobileLink href="/reviews" label={t.reviews} />
                <MobileLink href="/contact" label={t.contact} />

                <div className="h-px bg-border my-2" />
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
