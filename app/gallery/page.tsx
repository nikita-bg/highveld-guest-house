import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery | Highveld Guest House",
  description:
    "Browse photos of Highveld Guest House – our rooms, swimming pool, braai area, and lush gardens in Nigel, Gauteng.",
}

const images = [
  {
    src: "/images/hero.png",
    alt: "Highveld Guest House exterior",
    label: "Welcome to Highveld",
    span: "md:col-span-2",
  },
  {
    src: "/images/room-deluxe.png",
    alt: "Deluxe Room interior",
    label: "Deluxe Room",
    span: "",
  },
  {
    src: "/images/pool.png",
    alt: "Swimming pool and garden",
    label: "Swimming Pool",
    span: "",
  },
  {
    src: "/images/room-standard.png",
    alt: "Standard Room interior",
    label: "Standard Room",
    span: "",
  },
  {
    src: "/images/braai.png",
    alt: "Braai area",
    label: "Braai Area",
    span: "",
  },
  {
    src: "/images/garden.png",
    alt: "Guest house gardens",
    label: "Gardens & Grounds",
    span: "md:col-span-2",
  },
  {
    src: "/images/room-family.png",
    alt: "Family Suite interior",
    label: "Family Suite",
    span: "",
  },
]

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-[#2A1A0E] pt-20">
        <Image
          src="/images/pool.png"
          alt=""
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
            Our Space
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#FAF3EC] md:text-6xl text-balance">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            A glimpse into the warmth, comfort, and beauty of Highveld Guest
            House.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="bg-[#FAF3EC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.src}
                className={`group relative aspect-[4/3] overflow-hidden ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A0E]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-lg font-light tracking-wide text-[#FAF3EC]">
                    {image.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2A1A0E] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h3 className="font-serif text-2xl font-light tracking-wide text-[#FAF3EC] md:text-3xl">
            See It For Yourself
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            Photos capture only so much. Book your stay and experience the
            warmth of Highveld Guest House in person.
          </p>
          <a
            href="https://wa.me/27600000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20room%20at%20Highveld%20Guest%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#C4622D] px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:bg-[#A85225]"
          >
            <Phone className="h-3.5 w-3.5" />
            Book via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
