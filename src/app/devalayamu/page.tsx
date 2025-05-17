import Image from "next/image"
import { Building } from 'lucide-react'

export default function Devalayam() {
  // Array of image paths from 1.jpg to 16.jpg
  const images = Array.from({ length: 16 }, (_, i) => ({
    src: `/devalayamu/${i + 1}.jpg`,
    alt: `Sri Vaikuntta Sitarama Devalayam - Image ${i + 1}`,
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sri Vaikuntta Sitarama Devalayam</h1>
        <div className="flex items-center justify-center mb-4">
          <div className="bg-orange-100 p-2 rounded-full mr-3">
            <Building className="h-5 w-5 text-orange-600" />
          </div>
          <h2 className="text-xl font-semibold text-orange-600">Our Temple Architecture</h2>
        </div>
        <p className="max-w-3xl mx-auto text-gray-700">
         {`Explore the divine architecture and sacred spaces of Sri Vaikuntta Sitarama Devalayam. These images showcase
          the temple's beautiful design, inspired by traditional South Indian temple architecture and the unique
          appearance of Vaikuntta Rama.`}
        </p>
      </div>

      {/* Image Grid - Full Size Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Visit Information */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Visit Our Temple</h3>
        <p className="text-gray-700 mb-6">
          We welcome you to visit Sri Vaikuntta Sitarama Devalayam and experience the divine presence and architectural
          beauty in person.
        </p>
        <div className="inline-flex gap-4">
          <a
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/about"
            className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
