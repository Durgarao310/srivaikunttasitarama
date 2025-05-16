import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://www.srivaikunttasitarama.com/wp-content/uploads/2021/10/External-View-2-scaled.jpg"
          alt="Sri Vaikuntta Sita Rama Devalayammu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Our Journey</h1>
          <p className="text-xl text-white/90">The story of devotion, community, and perseverance</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">JAI SHREE RAM</h2>
          <p className="text-lg text-gray-700">
            Welcome to Sri Vaikuntta Sita Rama Devalayammu, a temple born from the devotion and determination of the
            Telugu community in Malaysia. Our story spans generations, continents, and a steadfast faith in Lord Rama.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our History</h2>

        <div className="space-y-12">
          {/* Migration Period */}
          <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
            <div className="md:col-span-2 md:text-right">
              <h3 className="text-xl font-semibold text-orange-600">1870s - Early Migration</h3>
              <p className="text-gray-500">From Andhra Pradesh to Malaysian Peninsula</p>
            </div>
            <div className="absolute left-0 md:relative md:col-span-1 flex justify-center">
              <div className="h-full w-0.5 bg-orange-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
                About 150 years ago, there was a mass migration of people from Andhra Pradesh, India to the Malaysian
                Peninsula. The majority became laborers at rubber plantation estates, bringing with them their rich
                culture and devotion to Lord Rama. Soon, Ram Temples were established in almost all plantation estates
                with significant Telugu populations.
              </p>
            </div>
          </div>

          {/* Urban Migration */}
          <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
            <div className="md:col-span-2 md:text-right">
              <h3 className="text-xl font-semibold text-orange-600">1980s - Urban Migration</h3>
              <p className="text-gray-500">Moving to cities for better opportunities</p>
            </div>
            <div className="absolute left-0 md:relative md:col-span-1 flex justify-center">
              <div className="h-full w-0.5 bg-orange-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
               {`From the early 1980s, people began moving from plantation estates to cities and industrial areas for
                better opportunities. Many families migrated to Shah Alam for its prospering industrial developments.
                Despite this transition, their devotion to Lord Rama remained strong, with weekly Ram Mantra chanting
                and Ram Bhajan sessions held in devotees' homes on a rotating basis.`}
              </p>
            </div>
          </div>

          {/* Community Growth */}
          <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
            <div className="md:col-span-2 md:text-right">
              <h3 className="text-xl font-semibold text-orange-600">1990s - Community Growth</h3>
              <p className="text-gray-500">Expanding beyond homes</p>
            </div>
            <div className="absolute left-0 md:relative md:col-span-1 flex justify-center">
              <div className="h-full w-0.5 bg-orange-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
                By the 1990s, the number of devotees gathering weekly had grown so large that homes could no longer
                accommodate them. The community began renting shop lots in Taman Sri Muda, Shah Alam for their
                activities. The center became very active with teaching of Ramayana, Hinduism classes, Daatubhajana, and
                celebrations of all events and festivals related to Lord Rama.
              </p>
            </div>
          </div>

          {/* Official Registration */}
          <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
            <div className="md:col-span-2 md:text-right">
              <h3 className="text-xl font-semibold text-orange-600">2019 - Official Registration</h3>
              <p className="text-gray-500">Formal establishment of the association</p>
            </div>
            <div className="absolute left-0 md:relative md:col-span-1 flex justify-center">
              <div className="h-full w-0.5 bg-orange-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
                On September 11, 2019, PERSATUAN PENGANUT HINDU DEWA SITA RAMA SHAH ALAM (SHAH ALAM LORD RAMA HINDU
                DEVOTEES ASSOCIATION) was formally registered with the Registry of Societies, Malaysia. With this
                official registration, the society established a working committee and formal membership registration.
              </p>
            </div>
          </div>

          {/* Land Grant */}
          <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
            <div className="md:col-span-2 md:text-right">
              <h3 className="text-xl font-semibold text-orange-600">2017-2019 - Land Grant</h3>
              <p className="text-gray-500">A place to call our own</p>
            </div>
            <div className="absolute left-0 md:relative md:col-span-1 flex justify-center">
              <div className="h-full w-0.5 bg-orange-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
                In 2017, with growing followers and increasing demand for religious and cultural activities, the
                association applied for land with the State Government to build their own temple. With the blessings of
                Mother Sitama and Lord Rama, and the help of YB Ganabatirau Veeraman, the Selangor State Government
                granted 10,000 square feet of land in Section 18, Shah Alam. The Bhoomi Pooja (ground-breaking ceremony)
                was successfully held on October 10, 2019.
              </p>
            </div>
          </div>

          {/* Temple Construction */}
          <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start">
            <div className="md:col-span-2 md:text-right">
              <h3 className="text-xl font-semibold text-orange-600">2022-2024 - Temple Construction</h3>
              <p className="text-gray-500">Building our sacred space</p>
            </div>
            <div className="absolute left-0 md:relative md:col-span-1 flex justify-center">
              <div className="h-full w-0.5 bg-orange-200"></div>
              <div className="absolute w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700">
               {`After delays due to the COVID-19 pandemic, construction work was planned to begin in the first quarter
                of 2022. Due to the community's strong devotion and affiliation to Bhadrachalam SREE SEETHA RAMACHANDRA
                SWAMY VAARI DEVASTHANAM, the temple was named after the unique appearance of Lord Vishnu as VAIKUNTTA
                RAMA. The target is to complete the construction of SRI VAIKUNTTA SITA RAMA DEVALAYAMMU before Sri Rama
                Navami in 2024.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Association Activities */}
      <div className="container mx-auto mb-16 bg-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Activities</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-orange-500 mr-2" />
              <h3 className="text-xl font-semibold">Annual Celebrations</h3>
            </div>
            <p className="text-gray-700">
              Our highlight is the Sita Rama Kalyanam Mahotsavam, the grand celestial wedding conducted annually as part
              of the Sri Rama Navami celebration. This event gathers approximately 2,000 devotees each year.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-orange-500 mr-2" />
              <h3 className="text-xl font-semibold">Community Programs</h3>
            </div>
            <p className="text-gray-700">
              We conduct various knowledge and cultural initiatives that not only bring together worshippers of Lord
              Rama but also help cultivate human values such as righteousness, justice, and integrity—key principles
              espoused by Lord Rama and his teachings.
            </p>
          </div>
        </div>
      </div>

      {/* Temple Location */}
      <div className="container mx-auto mb-16">
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-6 w-6 text-orange-500 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.159090538865!2d101.51091057426947!3d3.052046053743346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc534b6af6abe9%3A0x5cbf9a12cb72ca6c!2sSRI%20VAIKUNTTA%20SITARAMA%20DEVALAYAM%20SHAH%20ALAM!5e0!3m2!1sen!2sin!4v1747403727501!5m2!1sen!2sin" className="w-full h-full"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-700">Section 18, Shah Alam, Selangor, Malaysia</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-8">
          Be part of our growing family of devotees and help us continue this beautiful journey of faith and tradition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/donate"
            className="bg-white border-2 border-orange-600 hover:bg-orange-50 text-orange-600 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Support the Temple
          </Link>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-2xl font-bold text-orange-600">JAI SHREE RAM</p>
      </div>
    </div>
  )
}
