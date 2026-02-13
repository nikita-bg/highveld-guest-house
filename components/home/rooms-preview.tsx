import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const rooms = [
  {
    name: "Standard Room",
    price: "R650",
    description:
      "A comfortable retreat with warm African-inspired decor, perfect for solo travellers or couples seeking a restful stay.",
    image: "/images/room-standard.png",
    features: ["Queen Bed", "En-suite Bathroom", "Free WiFi"],
  },
  {
    name: "Deluxe Room",
    price: "R950",
    description:
      "Spacious luxury with a private balcony overlooking our gardens. Elevated comfort with premium amenities for a memorable stay.",
    image: "/images/room-deluxe.png",
    features: ["King Bed", "Private Balcony", "Mini Bar"],
  },
  {
    name: "Family Suite",
    price: "R1,400",
    description:
      "Generous living space with separate sleeping areas, ideal for families. Your home away from home in the heart of the Highveld.",
    image: "/images/room-family.png",
    features: ["2 Bedrooms", "Lounge Area", "Kitchenette"],
  },
]

export function RoomsPreview() {
  return (
    <section className="bg-[#FAF3EC] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#C4622D]">
            Accommodation
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#2A1A0E] md:text-5xl text-balance">
            Our Rooms
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-[#2A1A0E]/60">
            Each room is thoughtfully designed with African-inspired touches,
            offering a unique blend of comfort and cultural elegance.
          </p>
        </div>

        {/* Room Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group flex flex-col overflow-hidden bg-[#FFFFFF] transition-shadow duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#2A1A0E]/80 px-4 py-2 backdrop-blur-sm">
                  <span className="font-serif text-lg font-semibold text-[#D4A574]">
                    {room.price}
                  </span>
                  <span className="font-body text-[10px] text-[#FAF3EC]/70"> / night</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-medium tracking-wide text-[#2A1A0E]">
                  {room.name}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[#2A1A0E]/60">
                  {room.description}
                </p>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-[#C4622D]/20 px-3 py-1 font-body text-[10px] uppercase tracking-wider text-[#C4622D]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency + CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-body text-sm font-bold text-[#C4622D]">
            Only 6 rooms available - Book early to avoid disappointment
          </p>
          <Link
            href="/rooms"
            className="flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-[#2A1A0E] transition-colors hover:text-[#C4622D]"
          >
            View All Rooms
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
