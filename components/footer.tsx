import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2A1A0E] text-[#FAF3EC]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col items-start">
              <span className="font-serif text-3xl font-semibold tracking-wider text-[#FAF3EC]">
                Highveld
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4A574] font-body">
                Guest House
              </span>
            </Link>
            <p className="mt-5 font-body text-sm leading-relaxed text-[#FAF3EC]/60">
              A boutique sanctuary in the heart of Nigel, Gauteng.
              Experience genuine South African warmth and hospitality,
              just 30 minutes from Johannesburg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium tracking-wider text-[#D4A574]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/rooms", label: "Our Rooms" },
                { href: "/amenities", label: "Amenities" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#FAF3EC]/60 transition-colors hover:text-[#D4A574]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium tracking-wider text-[#D4A574]">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                <span className="font-body text-sm text-[#FAF3EC]/60">
                  12 Hendrik Verwoerd Street,
                  <br />
                  Nigel, Gauteng 1490
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                <a
                  href="tel:+27110000000"
                  className="font-body text-sm text-[#FAF3EC]/60 transition-colors hover:text-[#D4A574]"
                >
                  +27 11 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                <a
                  href="mailto:info@highveldguesthouse.co.za"
                  className="font-body text-sm text-[#FAF3EC]/60 transition-colors hover:text-[#D4A574]"
                >
                  info@highveldguesthouse.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-medium tracking-wider text-[#D4A574]">
              Reception Hours
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                <div className="font-body text-sm text-[#FAF3EC]/60">
                  <p>Check-in: 14:00</p>
                  <p>Check-out: 10:00</p>
                  <p className="mt-2">Reception: 07:00 - 22:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAF3EC]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row lg:px-8">
          <p className="font-body text-xs text-[#FAF3EC]/40">
            &copy; {new Date().getFullYear()} Highveld Guest House. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#FAF3EC]/40">
            Nigel, Gauteng, South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
