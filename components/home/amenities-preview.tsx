import Image from "next/image"
import Link from "next/link"
import { Wifi, Car, UtensilsCrossed, Waves, Flame, Coffee, ArrowRight } from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Relax by our sparkling pool surrounded by lush gardens.",
  },
  {
    icon: UtensilsCrossed,
    title: "Full Breakfast",
    description: "Start your day with a hearty South African breakfast.",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with high-speed wireless throughout.",
  },
  {
    icon: Car,
    title: "Secure Parking",
    description: "Gated off-street parking with 24-hour security.",
  },
  {
    icon: Flame,
    title: "Braai Area",
    description: "Enjoy a traditional South African braai under the stars.",
  },
  {
    icon: Coffee,
    title: "Guest Lounge",
    description: "Unwind in our comfortable lounge with complimentary tea and coffee.",
  },
]

export function AmenitiesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#2A1A0E] py-24 lg:py-32">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/garden.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
            What We Offer
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#FAF3EC] md:text-5xl text-balance">
            Guest Amenities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            Everything you need for a comfortable and memorable stay,
            with genuine South African touches that make all the difference.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group flex items-start gap-5 border border-[#FAF3EC]/10 p-6 transition-all duration-500 hover:border-[#D4A574]/30 hover:bg-[#FAF3EC]/5"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#D4A574]/30">
                <amenity.icon className="h-5 w-5 text-[#D4A574]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium tracking-wide text-[#FAF3EC]">
                  {amenity.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-[#FAF3EC]/50">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/amenities"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-[#D4A574] transition-colors hover:text-[#FAF3EC]"
          >
            Explore All Amenities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
