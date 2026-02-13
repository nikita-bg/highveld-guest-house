"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    location: "Johannesburg, SA",
    rating: 5,
    text: "What a wonderful find! The rooms are spotless, the breakfast is incredible, and the owners really make you feel at home. The braai area was a highlight - we had a lovely evening under the stars.",
    date: "December 2025",
  },
  {
    name: "David & Karen W.",
    location: "Pretoria, SA",
    rating: 5,
    text: "Stayed for a weekend getaway and were blown away by the hospitality. The pool area is beautiful and the Deluxe Room exceeded our expectations. Will definitely be back!",
    date: "January 2026",
  },
  {
    name: "Michael T.",
    location: "Cape Town, SA",
    rating: 5,
    text: "Needed accommodation near Johannesburg for a business trip. Found this gem and I'm so glad I did. Secure parking, fast WiFi, and the most comfortable bed I've slept in at a guest house. Top class.",
    date: "November 2025",
  },
  {
    name: "Lindiwe N.",
    location: "Durban, SA",
    rating: 5,
    text: "The Family Suite was perfect for us and our two kids. Plenty of space, a lovely garden for the children to play in, and the breakfast kept us full until dinner. A true South African hospitality experience.",
    date: "February 2026",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-[#D4A574] text-[#D4A574]" : "text-[#2A1A0E]/20"
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="bg-[#F5EDE4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-[#C4622D]">
            Guest Reviews
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-[#2A1A0E] md:text-5xl text-balance">
            What Our Guests Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span className="font-body text-sm text-[#2A1A0E]/60">
              4.9/5 based on guest reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col bg-[#FFFFFF] p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-[#2A1A0E]/70 italic">
                {`"${review.text}"`}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#2A1A0E]/10 pt-4">
                <div>
                  <p className="font-serif text-base font-medium text-[#2A1A0E]">
                    {review.name}
                  </p>
                  <p className="font-body text-xs text-[#2A1A0E]/50">
                    {review.location}
                  </p>
                </div>
                <p className="font-body text-xs text-[#2A1A0E]/40">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
