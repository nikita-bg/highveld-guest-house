import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Waves,
  UtensilsCrossed,
  Wifi,
  Car,
  Flame,
  Coffee,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Amenities | Highveld Guest House",
  description:
    "Swimming pool, full breakfast, free WiFi, secure parking, braai area & guest lounge. Discover everything included at Highveld Guest House in Nigel, Gauteng.",
}

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description:
      "Take a refreshing dip in our sparkling swimming pool, set within manicured gardens. Whether you want to swim laps in the morning sun or simply lounge poolside with a cold drink in the afternoon, our pool area is the perfect place to unwind after a day of exploring the Highveld.",
    image: "/images/pool.png",
  },
  {
    icon: UtensilsCrossed,
    title: "Full Breakfast",
    description:
      "Start every morning with a hearty South African breakfast, included with your stay. Enjoy farm-fresh eggs, crispy bacon, boerewors, toast, fresh fruit, cereals, and freshly brewed coffee or tea. Vegetarian options and dietary accommodations are available on request.",
    image: null,
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description:
      "Stay connected throughout your visit with complimentary high-speed wireless internet available in all rooms and common areas. Whether you need to catch up on emails, stream your favourite shows, or share your holiday moments, our reliable WiFi has you covered.",
    image: null,
  },
  {
    icon: Car,
    title: "Secure Parking",
    description:
      "Rest easy knowing your vehicle is safe with our gated, off-street parking facility monitored around the clock. We have space for multiple vehicles per room, making us an ideal choice for self-drive guests and business travellers alike.",
    image: null,
  },
  {
    icon: Flame,
    title: "Braai Area",
    description:
      "Experience a quintessential South African tradition at our dedicated braai area. Gather around the fire under the Highveld stars, grill your favourite cuts of meat, and enjoy the warm camaraderie that only a braai can bring. Braai utensils and charcoal are provided.",
    image: "/images/braai.png",
  },
  {
    icon: Coffee,
    title: "Guest Lounge",
    description:
      "Settle into our comfortable guest lounge for a quiet read, a board game, or a cup of complimentary tea and coffee. Decorated with warm African touches and plush seating, the lounge is a welcoming communal space to relax and meet fellow travellers.",
    image: "/images/garden.png",
  },
]

export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-[#2A1A0E] pt-20">
        <Image
          src="/images/garden.png"
          alt=""
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
            What We Offer
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#FAF3EC] md:text-6xl text-balance">
            Guest Amenities
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            Everything you need for a comfortable and memorable stay, with
            genuine South African touches that make all the difference.
          </p>
        </div>
      </section>

      {/* Amenities Detail */}
      <section className="bg-[#FAF3EC]">
        {amenities.map((amenity, index) => (
          <div
            key={amenity.title}
            className={`border-b border-[#2A1A0E]/10 last:border-b-0 ${
              index % 2 === 1 ? "bg-[#FFFFFF]" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
              <div
                className={`grid items-center gap-12 ${
                  amenity.image ? "lg:grid-cols-2" : ""
                } lg:gap-16 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                {amenity.image && (
                  <div className="relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`lg:[direction:ltr] ${!amenity.image ? "mx-auto max-w-2xl text-center" : ""}`}>
                  <div className={`flex items-center gap-3 ${!amenity.image ? "justify-center" : ""}`}>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#C4622D]/30">
                      <amenity.icon className="h-5 w-5 text-[#C4622D]" />
                    </div>
                    <p className="font-body text-xs uppercase tracking-[0.4em] text-[#C4622D]">
                      Included
                    </p>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#2A1A0E] md:text-4xl">
                    {amenity.title}
                  </h2>
                  <p className="mt-6 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#2A1A0E] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h3 className="font-serif text-2xl font-light tracking-wide text-[#FAF3EC] md:text-3xl">
            Ready to Experience Highveld Hospitality?
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            All amenities are included with every room booking. Get in touch to
            reserve your stay.
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
