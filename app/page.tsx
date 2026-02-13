import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { RoomsPreview } from "@/components/home/rooms-preview"
import { AmenitiesPreview } from "@/components/home/amenities-preview"
import { LocationHighlight } from "@/components/home/location-highlight"
import { BraaiSection } from "@/components/home/braai-section"
import { Reviews } from "@/components/home/reviews"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RoomsPreview />
      <BraaiSection />
      <AmenitiesPreview />
      <LocationHighlight />
      <Reviews />
      <CTASection />
      <Footer />
    </main>
  )
}
