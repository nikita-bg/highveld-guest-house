import Image from "next/image"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <Image
        src="/images/pool.svg"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#2A1A0E]/75" />

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
          Your Stay Awaits
        </p>
        <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#FAF3EC] md:text-5xl text-balance">
          Ready to Experience
          <br />
          <span className="italic">South African Warmth?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-relaxed text-[#FAF3EC]/70 md:text-base">
          Book your stay at Highveld Guest House directly via WhatsApp for
          instant confirmation and the best rates. We look forward to
          welcoming you.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/27600000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20room%20at%20Highveld%20Guest%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C4622D] px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:bg-[#A85225]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
          <a
            href="tel:+27110000000"
            className="border border-[#FAF3EC]/30 px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:border-[#FAF3EC] hover:bg-[#FAF3EC]/10"
          >
            Call Us Directly
          </a>
        </div>

        <p className="mt-6 font-body text-xs text-[#FAF3EC]/40">
          Rates from R650/night. Direct bookings receive complimentary welcome drinks.
        </p>
      </div>
    </section>
  )
}
