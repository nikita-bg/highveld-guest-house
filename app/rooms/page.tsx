import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Wifi,
  AirVent,
  Tv,
  Coffee,
  Bath,
  Car,
  ShieldCheck,
  Phone,
  Users,
  BedDouble,
  Maximize,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Rooms | Highveld Guest House",
  description:
    "Browse our 3 room types: Standard, Deluxe, and Family Suite. From R650/night in Nigel, Gauteng.",
}

const rooms = [
  {
    name: "Standard Room",
    price: "R650",
    tagline: "Comfortable & Cozy",
    description:
      "Our Standard Room is a warm, inviting retreat designed for solo travellers or couples. Featuring African-inspired decor with earth tones, a comfortable queen bed dressed in crisp white linen, and a modern en-suite bathroom. Everything you need for a restful night in the Highveld.",
    image: "/images/room-standard.png",
    size: "22m\u00B2",
    guests: "2 Guests",
    bed: "Queen Bed",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: AirVent, label: "Air Conditioning" },
      { icon: Tv, label: "Flat-screen TV (DSTV)" },
      { icon: Coffee, label: "Tea & Coffee Station" },
      { icon: Bath, label: "En-suite Bathroom" },
      { icon: ShieldCheck, label: "Electronic Safe" },
      { icon: Car, label: "Secure Parking" },
    ],
  },
  {
    name: "Deluxe Room",
    price: "R950",
    tagline: "Elevated Luxury",
    description:
      "Step into elevated comfort with our Deluxe Room. Enjoy a spacious king-size bed, a private balcony overlooking our gardens, and premium amenities including a mini bar and Nespresso machine. Designed for guests who appreciate the finer details of hospitality.",
    image: "/images/room-deluxe.png",
    size: "32m\u00B2",
    guests: "2 Guests",
    bed: "King Bed",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: AirVent, label: "Air Conditioning" },
      { icon: Tv, label: "55\" Smart TV (DSTV)" },
      { icon: Coffee, label: "Nespresso Machine" },
      { icon: Bath, label: "Luxury Bathroom" },
      { icon: ShieldCheck, label: "Electronic Safe" },
      { icon: Car, label: "Secure Parking" },
    ],
  },
  {
    name: "Family Suite",
    price: "R1,400",
    tagline: "Space for Everyone",
    description:
      "Our Family Suite is your home away from home. With two separate bedrooms, a comfortable lounge area, and a kitchenette, it is ideal for families or groups needing extra space. African art adorns the walls while modern comforts ensure a restful stay for all.",
    image: "/images/room-family.png",
    size: "48m\u00B2",
    guests: "4 Guests",
    bed: "1 King + 2 Single Beds",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: AirVent, label: "Air Conditioning" },
      { icon: Tv, label: "2x Smart TVs (DSTV)" },
      { icon: Coffee, label: "Kitchenette" },
      { icon: Bath, label: "Full Bathroom + Shower" },
      { icon: ShieldCheck, label: "Electronic Safe" },
      { icon: Car, label: "Secure Parking (2 cars)" },
    ],
  },
]

export default function RoomsPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-[#2A1A0E] pt-20">
        <Image
          src="/images/room-deluxe.png"
          alt=""
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
            Accommodation
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#FAF3EC] md:text-6xl text-balance">
            Our Rooms
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/60">
            Three distinctive room types, each crafted with warm
            African-inspired design and modern comforts.
          </p>
          <p className="mt-4 font-body text-sm font-bold text-[#D4A574]">
            Only 6 rooms available - Book early
          </p>
        </div>
      </section>

      {/* Room Details */}
      <section className="bg-[#FAF3EC]">
        {rooms.map((room, index) => (
          <div
            key={room.name}
            className={`border-b border-[#2A1A0E]/10 last:border-b-0 ${
              index % 2 === 1 ? "bg-[#FFFFFF]" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#2A1A0E]/80 px-5 py-3 backdrop-blur-sm">
                    <span className="font-serif text-xl font-semibold text-[#D4A574]">
                      {room.price}
                    </span>
                    <span className="font-body text-xs text-[#FAF3EC]/70">
                      {" "}
                      / night
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <p className="font-body text-xs uppercase tracking-[0.4em] text-[#C4622D]">
                    {room.tagline}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-[#2A1A0E] md:text-4xl">
                    {room.name}
                  </h2>

                  {/* Quick Stats */}
                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5">
                      <Maximize className="h-4 w-4 text-[#C4622D]" />
                      <span className="font-body text-xs text-[#2A1A0E]/60">
                        {room.size}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-[#C4622D]" />
                      <span className="font-body text-xs text-[#2A1A0E]/60">
                        {room.guests}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-[#C4622D]" />
                      <span className="font-body text-xs text-[#2A1A0E]/60">
                        {room.bed}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity.label}
                        className="flex items-center gap-2"
                      >
                        <amenity.icon className="h-4 w-4 text-[#C4622D]" />
                        <span className="font-body text-xs text-[#2A1A0E]/70">
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Book CTA */}
                  <a
                    href={`https://wa.me/27600000000?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(room.name)}%20at%20Highveld%20Guest%20House`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 bg-[#C4622D] px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:bg-[#A85225]"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Includes Section */}
      <section className="bg-[#2A1A0E] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h3 className="font-serif text-2xl font-light tracking-wide text-[#FAF3EC]">
            All Rooms Include
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              "Full Breakfast",
              "Free WiFi",
              "Secure Parking",
              "Daily Housekeeping",
              "Braai Access",
              "Pool Access",
              "Welcome Drinks",
            ].map((item) => (
              <span
                key={item}
                className="border border-[#D4A574]/30 px-4 py-2 font-body text-xs uppercase tracking-wider text-[#D4A574]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
