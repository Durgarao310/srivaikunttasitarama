"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react"

export default function Home() {
  // Images for the carousel
  const carouselImages = [
    {
      src: "/devalayamu/1.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Front View",
      title: "SRI VAIKUNTTA SITARAMA DEVALAYAM",
      subtitle: "A sacred space dedicated to Lord Rama, Mother Sitama, and Lord Laxmana in Shah Alam, Malaysia.",
    },
    {
      src: "/devalayamu/2.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Interior",
      title: "DIVINE ARCHITECTURE",
      subtitle: "Experience the beauty and serenity of our temple designed in traditional South Indian style.",
    },
    {
      src: "/devalayamu/3.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Ceremony",
      title: "SACRED CEREMONIES",
      subtitle: "Join us for regular pujas, festivals, and special ceremonies throughout the year.",
    },
    {
      src: "/devalayamu/4.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Cultural Center",
      title: "CULTURAL CENTER",
      subtitle: "A hub for cultural, religious, and educational activities for the community.",
    },
    {
      src: "/devalayamu/5.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Community Gathering",
      title: "COMMUNITY GATHERINGS",
      subtitle: "A place for devotees to come together, share knowledge, and celebrate our traditions.",
    },
    {
      src: "/devalayamu/6.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Idols",
      title: "DIVINE IDOLS",
      subtitle: "The sacred idols of Lord Rama, Mother Sitama, and Lord Laxmana, crafted with devotion.",
    },
    {
      src: "/devalayamu/7.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Exterior",
      title: "EXTERIOR BEAUTY",
      subtitle: "The temple's stunning exterior, blending traditional architecture with modern design.",  
    },
    {
      src: "/devalayamu/8.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Evening View",
      title: "EVENING SERENITY",
      subtitle: "Experience the tranquility of the temple during evening prayers and rituals.",
    },
    {
      src: "/devalayamu/9.jpg",
      alt: "Sri Vaikuntta Sitarama Temple - Festival Celebration",
      title: "FESTIVAL CELEBRATIONS",
      subtitle: "Join us for vibrant festivals celebrating our rich cultural heritage.",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <main className="flex-1">
      {/* Hero Section with Carousel - Images Only */}
      <section className="relative h-screen">
        {/* Carousel Images */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#ffa500] w-6" : "bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/80" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-5">
              <div className="inline-block rounded-lg bg-[#0c1e35]/10 px-3 py-1 text-sm text-[#0c1e35] font-medium">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0c1e35]">
                Establishing a Sacred Space
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With the blessings of Mother Sitama and Lord Rama, we have now started the journey to establish our
                  very temple of Lord Rama. With the inspiration of the Deciples Bhakta Ramadasu to build Bhadrachalam
                  Sitarama Devalayamu, the devotees here choose to name the temple as Sri Vaikuntta Sita Rama
                  Devalayamu.
                </p>
                <p>
                  The temple is designed to be not just a place of worship but also a center for religious, cultural,
                  language and art teaching, preserving and promoting our rich heritage.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-[#0c1e35] font-medium hover:text-[#ffa500] transition-colors"
                >
                  Read Our Full Story
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image src="/devalayamu/4.jpg" alt="Temple Architectural Model" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Temple Structure Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#0c1e35]/10 px-3 py-1 text-sm text-[#0c1e35] font-medium">
              Temple Architecture
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0c1e35]">Temple Structure</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              The temple is designed with traditional architecture while providing modern amenities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-[#0c1e35]/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src="/devalayamu/5.jpg" alt="Temple Top Floor" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0c1e35]">Top Floor - Main Temple</h3>
                <p className="text-gray-600">
                  The top floor will be constructed as a temple with 3 gopuram garbagudi. Devotees will be welcomed with
                  a view of an open green lawn to give a feel of peaceful ambiance and surroundings.
                </p>
                <p className="text-gray-600">
                  Even though the temple is situated on the top floor, the design maintains the feel and look of a
                  normal ground-level temple with a green lawn surrounding the main temple.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#0c1e35]/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src="/devalayamu/6.jpg" alt="Temple Ground Floor" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0c1e35]">Ground Floor - Multi-purpose Hall</h3>
                <p className="text-gray-600">
                  The ground floor is made of a 500 pax capacity multi-purpose hall for events like weddings, cultural
                  programs, and religious festivals.
                </p>
                <p className="text-gray-600">
                  An internal mezzanine floor is built which will have classrooms, office rooms, AV room, and Viewing
                  gallery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#0c1e35]/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src="/devalayamu/7.jpg" alt="Temple Accessibility" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0c1e35]">Accessibility Features</h3>
                <p className="text-gray-600">
                  There will be a staircase on the left and the right and lift services for devotees to walk into to the
                  temple, ensuring accessibility for all visitors.
                </p>
                <p className="text-gray-600">
                  The design incorporates modern amenities while preserving traditional architectural elements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Temple Idols Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#0c1e35]/10 px-3 py-1 text-sm text-[#0c1e35] font-medium">
              Divine Presence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0c1e35]">Temple Idols</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              The sacred idols that will grace our temple
            </p>
          </div>

          {/* Moolah Stalam */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image src="/devalayamu/8.jpg" alt="Lord Rama, Sita and Laxmana" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0c1e35]">Moolah Stalam</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  The main idols in the temple area, in the center (Moolah Stalam) will be Lord Vaikuntta Rama, Mother
                  Sitama sitting on his lap, and Lord Laxmana standing on his left.
                </p>
                <p>
                  These idols will be the exact replica in shape and size of the Main Idols at Bhadrachala Sri Sita
                  Ramachandra Swamy vaari Devasthanam.
                </p>
                <p>The idols will be carved from specially selected white marble by a sculptor from Gujarat.</p>
              </div>
            </div>
          </div>

          {/* Right Altar */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg md:order-last">
              <Image src="/devalayamu/9.jpg" alt="Maha Laxmi and Lord Vishnu" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0c1e35]">Right Altar</h3>
              <div className="space-y-4 text-gray-600">
                <p>On the right of the main altar will be the Idols of Maha Laxmi and Lord Vishnu.</p>
                <p>
                  These idols will be made of high quality white marble in Gujarat, crafted with precision and devotion.
                </p>
                <p>The design follows traditional Vaishnavite temple architecture principles.</p>
              </div>
            </div>
          </div>

          {/* Left Altar */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image src="/devalayamu/10.jpg" alt="Radha and Krishna" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0c1e35]">Left Altar</h3>
              <div className="space-y-4 text-gray-600">
                <p>On the left altar will be Goddess Radha and Lord Krishna.</p>
                <p>Like the other idols, these will also be made of high quality white marble in Gujarat.</p>
                <p>The craftsmanship will ensure the idols capture the grace and beauty of these beloved deities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Center Section */}
      <section className="py-16 md:py-24 bg-[#0c1e35] text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-5">
              <div className="inline-block rounded-lg bg-[#ffa500]/20 px-3 py-1 text-sm text-[#ffa500] font-medium">
                More Than A Temple
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Center for Culture & Learning</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In keeping our mission to build the Temple not only to serve as a place for prayers but creating a
                  center for religious, cultural, language and art teaching, the designing of the ground floor was made
                  by incorporating the purpose and needs.
                </p>
                <p>
                  The multi-purpose hall can host up to 500 people for events like weddings, cultural programs, and
                  religious festivals. The internal mezzanine floor provides space for classrooms, offices, and more.
                </p>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/events">
                  <Button className="bg-[#ffa500] hover:bg-[#e69500] text-[#0c1e35] font-medium">
                    Upcoming Events
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" className="border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500]/20">
                    Cultural Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <Image src="/devalayamu/11.jpg" alt="Cultural Performance" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl mt-8">
                <Image src="/devalayamu/12.jpg" alt="Temple Classroom" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devalayam Images Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#0c1e35]/10 px-3 py-1 text-sm text-[#0c1e35] font-medium">
              Temple Gallery
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0c1e35]">
              Sri Vaikuntta Sitarama Devalayam
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              Explore the divine architecture and sacred spaces of our temple
            </p>
          </div>

          {/* Featured Images - 2 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[13, 14].map((imageIndex) => (
              <div key={imageIndex} className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={`/devalayamu/${imageIndex}.jpg`}
                  alt={`Sri Vaikuntta Sitarama Devalayam - Image ${imageIndex}`}
                  width={800}
                  height={600}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* More Images - 3 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[15, 16, 1, 2].map((imageIndex) => (
              <div key={imageIndex} className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={`/devalayamu/${imageIndex}.jpg`}
                  alt={`Sri Vaikuntta Sitarama Devalayam - Image ${imageIndex}`}
                  width={600}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/devalayam">
              <Button className="bg-[#0c1e35] hover:bg-[#0c1e35]/80 text-white">View All Temple Images</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-[#0c1e35]/10 px-3 py-1 text-sm text-[#0c1e35] font-medium">
              Join Our Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0c1e35]">
              Be Part of This Sacred Endeavor
            </h2>
            <p className="text-gray-600 md:text-lg">
              Your support and contributions will help us build this beautiful temple and cultural center. Join us in
              creating a spiritual home for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/donate">
                <Button className="bg-[#ffa500] hover:bg-[#e69500] text-[#0c1e35] font-medium px-8 py-6 text-lg">
                  Donate Now
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button
                  variant="outline"
                  className="border-[#0c1e35] text-[#0c1e35] hover:bg-[#0c1e35]/10 px-8 py-6 text-lg"
                >
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
