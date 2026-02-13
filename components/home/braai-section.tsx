import Image from "next/image"

export function BraaiSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px]">
          <Image
            src="/images/braai.svg"
            alt="Traditional South African braai area at Highveld Guest House"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center bg-[#2A1A0E] px-8 py-16 lg:px-16 lg:py-24">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#D4A574]">
            A South African Tradition
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#FAF3EC] md:text-5xl text-balance">
            The Braai
            <br />
            <span className="italic">Experience</span>
          </h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-[#FAF3EC]/60 md:text-base">
            No visit to South Africa is complete without a braai. Our
            purpose-built braai area is the heart of our guest house -
            a place where strangers become friends over
            boerewors, chops, and stories shared around the fire.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#FAF3EC]/60 md:text-base">
            We provide the charcoal, the grids, and the setting -
            you bring the appetite. Available to all guests in the
            evenings, our braai area offers communal tables, ambient
            lighting, and that unmistakable smoky aroma that defines
            South African gatherings.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-[#D4A574]/30 pl-4">
              <p className="font-serif text-2xl font-medium text-[#D4A574]">Every</p>
              <p className="font-body text-xs uppercase tracking-wider text-[#FAF3EC]/50">
                Evening Available
              </p>
            </div>
            <div className="border-l-2 border-[#D4A574]/30 pl-4">
              <p className="font-serif text-2xl font-medium text-[#D4A574]">Free</p>
              <p className="font-body text-xs uppercase tracking-wider text-[#FAF3EC]/50">
                Charcoal Provided
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
