import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Plane, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "Nigel, Gauteng",
  },
  {
    icon: Clock,
    label: "From Johannesburg",
    value: "30 min drive",
  },
  {
    icon: Plane,
    label: "From OR Tambo Airport",
    value: "25 min drive",
  },
]

export function LocationHighlight() {
  return (
    <section className="bg-[#FAF3EC] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
            <Image
              src="/images/garden.svg"
              alt="Lush gardens at Highveld Guest House"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A0E]/40 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-[#C4622D]">
              Our Location
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#2A1A0E] md:text-5xl text-balance">
              Gateway to
              <br />
              <span className="italic">Johannesburg</span>
            </h2>
            <p className="mt-6 font-body text-sm leading-relaxed text-[#2A1A0E]/60 md:text-base">
              Nestled in the charming town of Nigel on the East Rand,
              Highveld Guest House offers the perfect balance of
              tranquillity and convenience. Enjoy the peace of small-town
              South Africa while being just a short drive from the bustle
              of Johannesburg, Boksburg, and OR Tambo International Airport.
            </p>

            {/* Distance highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-[#C4622D]/30 pl-4"
                >
                  <item.icon className="mb-2 h-4 w-4 text-[#C4622D]" />
                  <p className="font-body text-[10px] uppercase tracking-wider text-[#2A1A0E]/50">
                    {item.label}
                  </p>
                  <p className="mt-1 font-serif text-lg font-medium text-[#2A1A0E]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-[#C4622D] transition-colors hover:text-[#2A1A0E]"
            >
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
