import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Gallery data structure
const galleryEvents = [
  {
    id: "kalyana-2023",
    title: "SRI VAIKUNTA SITARAMA KALYANA MAHOTSVAM",
    date: "1st April 2023",
    year: 2023,
    category: "ceremony",
    description: "Annual celestial wedding ceremony of Lord Rama and Goddess Sita",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2023-1",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam 2023 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2023-2",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam 2023 - Devotees",
      },
      {
        src: "/placeholder.svg?key=kalyana-2023-3",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam 2023 - Decorations",
      },
      {
        src: "/placeholder.svg?key=kalyana-2023-4",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam 2023 - Procession",
      },
    ],
  },
  {
    id: "bgm-2023",
    title: "6TH BGM",
    date: "4th May 2023",
    year: 2023,
    category: "meeting",
    description: "6th Annual General Meeting of the temple association",
    images: [
      {
        src: "/placeholder.svg?key=bgm-2023-1",
        alt: "6th BGM - Meeting",
      },
      {
        src: "/placeholder.svg?key=bgm-2023-2",
        alt: "6th BGM - Attendees",
      },
      {
        src: "/placeholder.svg?key=bgm-2023-3",
        alt: "6th BGM - Discussions",
      },
    ],
  },
  {
    id: "construction-phase1",
    title: "FIRST PHASE OF CONSTRUCTION",
    date: "2023",
    year: 2023,
    category: "construction",
    description: "Beginning of the temple construction project",
    images: [
      {
        src: "/placeholder.svg?key=construction-1",
        alt: "First Phase of Construction - Foundation Work",
      },
      {
        src: "/placeholder.svg?key=construction-2",
        alt: "First Phase of Construction - Site Overview",
      },
      {
        src: "/placeholder.svg?key=construction-3",
        alt: "First Phase of Construction - Workers",
      },
      {
        src: "/placeholder.svg?key=construction-4",
        alt: "First Phase of Construction - Progress",
      },
    ],
  },
  {
    id: "kalyana-2022-aug",
    title: "SRI VAIKUNTTA SITARAMA KALYANA MAHOTSVAM",
    date: "13th August 2022",
    year: 2022,
    category: "ceremony",
    description: "Special celestial wedding ceremony",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2022-aug-1",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam Aug 2022 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2022-aug-2",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam Aug 2022 - Devotees",
      },
      {
        src: "/placeholder.svg?key=kalyana-2022-aug-3",
        alt: "Sri Vaikuntta Sitarama Kalyana Mahotsvam Aug 2022 - Decorations",
      },
    ],
  },
  {
    id: "model-launch-2022",
    title: "SRI VAIKUNTA SITARAMA BUILDING MODEL LAUNCHING",
    date: "21st May 2022",
    year: 2022,
    category: "event",
    description: "Launch of the temple building model",
    images: [
      {
        src: "/placeholder.svg?key=model-launch-1",
        alt: "Building Model Launch - Model Display",
      },
      {
        src: "/placeholder.svg?key=model-launch-2",
        alt: "Building Model Launch - Ceremony",
      },
      {
        src: "/placeholder.svg?key=model-launch-3",
        alt: "Building Model Launch - Attendees",
      },
    ],
  },
  {
    id: "covid-aid",
    title: "HUMANITARIAN AID DURING COVID LOCKDOWN",
    date: "2020-2021",
    year: 2020,
    category: "community",
    description: "Providing aid to the community during COVID-19 lockdown",
    images: [
      {
        src: "/placeholder.svg?key=covid-aid-1",
        alt: "COVID Aid - Food Distribution",
      },
      {
        src: "/placeholder.svg?key=covid-aid-2",
        alt: "COVID Aid - Essential Supplies",
      },
      {
        src: "/placeholder.svg?key=covid-aid-3",
        alt: "COVID Aid - Volunteers",
      },
    ],
  },
  {
    id: "kalyana-2019",
    title: "SRI SITARAMA KALYANA MAHOTSVAM",
    date: "2019",
    year: 2019,
    category: "ceremony",
    description: "Annual celestial wedding ceremony",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2019-1",
        alt: "Sri Sitarama Kalyana Mahotsvam 2019 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2019-2",
        alt: "Sri Sitarama Kalyana Mahotsvam 2019 - Devotees",
      },
      {
        src: "/placeholder.svg?key=kalyana-2019-3",
        alt: "Sri Sitarama Kalyana Mahotsvam 2019 - Decorations",
      },
    ],
  },
  {
    id: "bhajan-competition-2019",
    title: "NATIONAL BHAJAN COMPETITION",
    date: "2019",
    year: 2019,
    category: "event",
    description: "National level bhajan competition",
    images: [
      {
        src: "/placeholder.svg?key=bhajan-2019-1",
        alt: "National Bhajan Competition 2019 - Performances",
      },
      {
        src: "/placeholder.svg?key=bhajan-2019-2",
        alt: "National Bhajan Competition 2019 - Participants",
      },
      {
        src: "/placeholder.svg?key=bhajan-2019-3",
        alt: "National Bhajan Competition 2019 - Winners",
      },
    ],
  },
  {
    id: "bgm-2019",
    title: "ASSOCIATION 4TH BGM",
    date: "2019",
    year: 2019,
    category: "meeting",
    description: "4th Annual General Meeting of the temple association",
    images: [
      {
        src: "/placeholder.svg?key=bgm-2019-1",
        alt: "4th BGM - Meeting",
      },
      {
        src: "/placeholder.svg?key=bgm-2019-2",
        alt: "4th BGM - Attendees",
      },
    ],
  },
  {
    id: "site-visit",
    title: "SITE VISIT BY BHADRACHALAM PRADANA ARCHAKULU",
    date: "2018-2019",
    year: 2018,
    category: "event",
    description: "Visit by the head priest from Bhadrachalam temple",
    images: [
      {
        src: "/placeholder.svg?key=site-visit-1",
        alt: "Site Visit - Bhadrachalam Priests",
      },
      {
        src: "/placeholder.svg?key=site-visit-2",
        alt: "Site Visit - Ceremony",
      },
      {
        src: "/placeholder.svg?key=site-visit-3",
        alt: "Site Visit - Blessings",
      },
    ],
  },
  {
    id: "boomi-pooja",
    title: "BOOMI POOJA",
    date: "2018",
    year: 2018,
    category: "ceremony",
    description: "Ground-breaking ceremony for the temple construction",
    images: [
      {
        src: "/placeholder.svg?key=boomi-pooja-1",
        alt: "Boomi Pooja - Ceremony",
      },
      {
        src: "/placeholder.svg?key=boomi-pooja-2",
        alt: "Boomi Pooja - Rituals",
      },
      {
        src: "/placeholder.svg?key=boomi-pooja-3",
        alt: "Boomi Pooja - Attendees",
      },
      {
        src: "/placeholder.svg?key=boomi-pooja-4",
        alt: "Boomi Pooja - Site",
      },
    ],
  },
  {
    id: "sita-navami-2018",
    title: "SITA NAVAMI",
    date: "2018",
    year: 2018,
    category: "ceremony",
    description: "Celebration of Sita Navami",
    images: [
      {
        src: "/placeholder.svg?key=sita-navami-2018-1",
        alt: "Sita Navami 2018 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=sita-navami-2018-2",
        alt: "Sita Navami 2018 - Devotees",
      },
    ],
  },
  {
    id: "kalyana-2018",
    title: "BHADRACHALA SRI SITARAMA KALYANA MAHOTSVAM",
    date: "2018",
    year: 2018,
    category: "ceremony",
    description: "Special Bhadrachala style celestial wedding ceremony",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2018-1",
        alt: "Bhadrachala Sri Sitarama Kalyana Mahotsvam 2018 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2018-2",
        alt: "Bhadrachala Sri Sitarama Kalyana Mahotsvam 2018 - Devotees",
      },
      {
        src: "/placeholder.svg?key=kalyana-2018-3",
        alt: "Bhadrachala Sri Sitarama Kalyana Mahotsvam 2018 - Decorations",
      },
    ],
  },
  {
    id: "kalyana-2017",
    title: "SRI SITARAMA KALYANA MAHOTSVAM",
    date: "2017",
    year: 2017,
    category: "ceremony",
    description: "Annual celestial wedding ceremony",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2017-1",
        alt: "Sri Sitarama Kalyana Mahotsvam 2017 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2017-2",
        alt: "Sri Sitarama Kalyana Mahotsvam 2017 - Devotees",
      },
    ],
  },
  {
    id: "kalyana-2016",
    title: "SRI SITARAMA KALYANA MAHOTSVAM",
    date: "2016",
    year: 2016,
    category: "ceremony",
    description: "Annual celestial wedding ceremony",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2016-1",
        alt: "Sri Sitarama Kalyana Mahotsvam 2016 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2016-2",
        alt: "Sri Sitarama Kalyana Mahotsvam 2016 - Devotees",
      },
    ],
  },
  {
    id: "kalyana-2015",
    title: "SRI SITARAMA KALYANA MAHOTSVAM",
    date: "2015",
    year: 2015,
    category: "ceremony",
    description: "Annual celestial wedding ceremony",
    images: [
      {
        src: "/placeholder.svg?key=kalyana-2015-1",
        alt: "Sri Sitarama Kalyana Mahotsvam 2015 - Ceremony",
      },
      {
        src: "/placeholder.svg?key=kalyana-2015-2",
        alt: "Sri Sitarama Kalyana Mahotsvam 2015 - Devotees",
      },
    ],
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[300px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?key=gallery-hero"
          alt="Sri Vaikuntta Sita Rama Devalayammu Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Photo Gallery</h1>
          <p className="text-xl text-white/90">{`Memories of our temple's journey`}</p>
        </div>
      </div>



      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={event.images[0].src || "/placeholder.svg"}
                  alt={event.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-sm text-gray-700">{event.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    {event.images.length} photos
                  </span>
                  <a
                    href={`/gallery/${event.id}`}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    View Album
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
