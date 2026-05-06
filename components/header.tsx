"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { ThemeChanger } from "./theme-changer"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/lib/i18n/context"
import Link from "next/link"

const navItems = [
  { labelKey: "nav.introduction", fallback: "About", href: "/about" },
  { labelKey: "nav.product", fallback: "Product", href: "/product" },
  { labelKey: "nav.projects", fallback: "Projects", href: "/projects" },
  { labelKey: "nav.team", fallback: "Team", href: "/team" },
  // { label: "Notes", href: "/notes" },
  { labelKey: "nav.philosophy", fallback: "Philosophy", href: "/philosophy" },
  // { label: "Blog", href: "/blog" },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isScrolledRef = useRef(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const getNavLabel = (item: (typeof navItems)[number]) => {
    const label = t(item.labelKey)
    return label === item.labelKey ? item.fallback : label
  }
  const statusLabel = t("status.building")
  const displayStatus = statusLabel === "status.building" ? "status: building" : statusLabel

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 20

      if (isScrolledRef.current !== nextIsScrolled) {
        isScrolledRef.current = nextIsScrolled
        setIsScrolled(nextIsScrolled)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement
        const header = document.querySelector('header')
        if (header && !header.contains(target)) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "border-b border-border/50 bg-background/85 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex shrink-0 items-center" aria-label="Go to home">
            <span
              className="brand-logo-mask block h-12 w-[172px] shrink-0 bg-primary transition-all duration-300 group-hover:bg-foreground"
              aria-hidden="true"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-lg",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  hoveredIndex === index && !isActive(item.href) && "text-foreground",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={cn(
                    "absolute left-1.5 text-primary transition-all duration-200",
                    isActive(item.href)
                      ? "opacity-100 translate-x-0"
                      : hoveredIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2",
                  )}
                >
                  {">"}
                </span>
                <span
                  className={cn(
                    "transition-transform duration-200",
                    (hoveredIndex === index || isActive(item.href)) && "translate-x-2",
                  )}
                >
                  {getNavLabel(item)}
                </span>
                <span
                  className={cn(
                    "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                    isActive(item.href) ? "w-6" : hoveredIndex === index ? "w-6" : "w-0",
                  )}
                />
              </Link>
            ))}
            <div className="ml-2 flex items-center gap-1">
              <LanguageToggle />
              <ThemeChanger />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2.5 font-mono text-xs text-muted-foreground sm:flex px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>{displayStatus}</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60 text-primary transition-colors hover:border-primary/35 hover:bg-primary/10 lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d={isMobileMenuOpen ? "M8 8L24 24" : "M6 8H26"}
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                <path
                  d="M6 16H26"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className={cn("transition-opacity duration-300 ease-out", isMobileMenuOpen && "opacity-0")}
                />
                <path
                  d={isMobileMenuOpen ? "M24 8L8 24" : "M6 24H26"}
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "transition-all duration-400 lg:hidden bg-background",
            isMobileMenuOpen ? "max-h-[600px] opacity-100 pt-4 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none overflow-hidden",
          )}
        >
          <div className="flex flex-col gap-1 border-t border-border/50 pt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3.5 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all duration-200 active:bg-secondary hover:text-foreground hover:bg-secondary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary">{">"}</span>
                {getNavLabel(item)}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-4 px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/50">
                <LanguageToggle />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/50">
                <ThemeChanger />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/50">
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2.5 px-4 py-3 font-mono text-xs text-muted-foreground bg-secondary/30 rounded-lg mx-4 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>{displayStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
