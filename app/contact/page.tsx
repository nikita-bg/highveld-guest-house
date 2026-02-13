import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/contact/booking-form"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact & Reservations | Highveld Guest House",
  description:
    "Get in touch with Highveld Guest House. Book your stay via WhatsApp, email, or phone. Located in Nigel, Gauteng – 30 minutes from Johannesburg.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-[#2A1A0E] pt-20">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
            Get in Touch
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#FAF3EC] md:text-6xl text-balance">
            Contact & Reservations
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            We look forward to welcoming you. Our team is here to help with
            bookings, questions, and special requests.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#C4622D] py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF3EC]/20">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-[#FAF3EC]"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <h2 className="mt-6 font-serif text-2xl font-light text-[#FAF3EC] md:text-3xl">
            Prefer to Chat?
          </h2>
          <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-[#FAF3EC]/70">
            Our team is available on WhatsApp for instant assistance with
            bookings, availability, and any questions you may have.
          </p>
          <a
            href="https://wa.me/27600000000?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20reservation%20at%20Highveld%20Guest%20House."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 border border-[#FAF3EC] bg-[#FAF3EC]/10 px-10 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:bg-[#FAF3EC] hover:text-[#2A1A0E]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <p className="mt-4 font-body text-xs text-[#FAF3EC]/50">
            Typically replies within 15 minutes during reception hours
          </p>
        </div>
      </section>

      {/* Booking Form + Sidebar */}
      <section className="bg-[#FAF3EC] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-[#C4622D]">
                Reservations
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#2A1A0E] md:text-4xl">
                Book Your Stay
              </h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                Complete the form below and our team will confirm availability
                within 24 hours, or chat with us directly on WhatsApp for
                immediate assistance.
              </p>

              <BookingForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-[#FFFFFF] p-8 lg:p-10">
                <h3 className="font-serif text-xl font-light text-[#2A1A0E]">
                  Contact Information
                </h3>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C4622D]" />
                    <div>
                      <h4 className="font-body text-sm font-bold text-[#2A1A0E]">
                        Location
                      </h4>
                      <p className="mt-1 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                        12 Hendrik Verwoerd Street,
                        <br />
                        Nigel, Gauteng 1490
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C4622D]" />
                    <div>
                      <h4 className="font-body text-sm font-bold text-[#2A1A0E]">
                        Telephone
                      </h4>
                      <a
                        href="tel:+27110000000"
                        className="mt-1 block font-body text-sm text-[#2A1A0E]/60 transition-colors hover:text-[#C4622D]"
                      >
                        +27 11 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C4622D]" />
                    <div>
                      <h4 className="font-body text-sm font-bold text-[#2A1A0E]">
                        Email
                      </h4>
                      <a
                        href="mailto:info@highveldguesthouse.co.za"
                        className="mt-1 block font-body text-sm text-[#2A1A0E]/60 transition-colors hover:text-[#C4622D]"
                      >
                        info@highveldguesthouse.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C4622D]" />
                    <div>
                      <h4 className="font-body text-sm font-bold text-[#2A1A0E]">
                        Reception Hours
                      </h4>
                      <p className="mt-1 font-body text-sm text-[#2A1A0E]/60">
                        07:00 - 22:00
                      </p>
                      <p className="mt-1 font-body text-xs text-[#2A1A0E]/50">
                        Check-in: 14:00 &middot; Check-out: 10:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 border-t border-[#2A1A0E]/10 pt-8">
                  <a
                    href="https://wa.me/27600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#C4622D] py-3 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:bg-[#A85225]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us Directly
                  </a>
                </div>
              </div>

              {/* Getting Here */}
              <div className="mt-6 bg-[#FFFFFF] p-8 lg:p-10">
                <h3 className="font-serif text-xl font-light text-[#2A1A0E]">
                  Getting Here
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                  Highveld Guest House is located in the heart of Nigel,
                  Gauteng, approximately 30 minutes from OR Tambo International
                  Airport and 45 minutes from central Johannesburg via the N17.
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                  Ample secure parking is available on-site. Please contact us
                  if you need directions or assistance with transport
                  arrangements.
                </p>
                <Link
                  href="https://maps.google.com/?q=Nigel+Gauteng+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-body text-xs text-[#C4622D] transition-colors hover:text-[#2A1A0E]"
                >
                  View on Google Maps
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
