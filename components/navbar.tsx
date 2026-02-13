"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#2A1A0E]/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="font-serif text-2xl font-semibold tracking-wider text-[#FAF3EC] lg:text-3xl">
            Highveld
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4A574] font-body">
            Guest House
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm uppercase tracking-[0.2em] transition-colors duration-300",
                pathname === link.href
                  ? "text-[#D4A574]"
                  : "text-[#FAF3EC]/80 hover:text-[#D4A574]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/27600000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20room%20at%20Highveld%20Guest%20House"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 border border-[#D4A574] px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-[#D4A574] transition-all duration-300 hover:bg-[#D4A574] hover:text-[#2A1A0E] lg:flex"
        >
          <Phone className="h-3.5 w-3.5" />
          Book Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#FAF3EC] lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[#2A1A0E]/95 backdrop-blur-sm px-6 pb-8 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-3 font-body text-sm uppercase tracking-[0.2em] transition-colors duration-300 border-b border-[#FAF3EC]/10",
                pathname === link.href
                  ? "text-[#D4A574]"
                  : "text-[#FAF3EC]/80 hover:text-[#D4A574]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/27600000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20room%20at%20Highveld%20Guest%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 border border-[#D4A574] px-5 py-3 font-body text-xs uppercase tracking-[0.2em] text-[#D4A574] transition-all duration-300 hover:bg-[#D4A574] hover:text-[#2A1A0E]"
          >
            <Phone className="h-3.5 w-3.5" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
