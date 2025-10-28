"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Calendar } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const galleryEvents = [
  {
    id: "kalyana-2023",
    title: "Sri Vaikunta Sitarama Kalyana Mahotsvam",
    date: "1st April 2023",
    year: 2023,
    category: "Ceremony",
    description:
      "Annual celestial wedding ceremony of Lord Rama and Goddess Sita",
    image: "/placeholder.svg?key=kalyana-2023-1",
    count: 4,
  },
  {
    id: "bgm-2023",
    title: "6th BGM",
    date: "4th May 2023",
    year: 2023,
    category: "Meeting",
    description: "6th Annual General Meeting of the temple association",
    image: "/placeholder.svg?key=bgm-2023-1",
    count: 3,
  },
  {
    id: "construction-phase1",
    title: "First Phase of Construction",
    date: "2023",
    year: 2023,
    category: "Construction",
    description: "Beginning of the temple construction project",
    image: "/placeholder.svg?key=construction-1",
    count: 4,
  },
  {
    id: "kalyana-2022-aug",
    title: "Sri Vaikuntta Sitarama Kalyana Mahotsvam",
    date: "13th August 2022",
    year: 2022,
    category: "Ceremony",
    description: "Special celestial wedding ceremony",
    image: "/placeholder.svg?key=kalyana-2022-aug-1",
    count: 3,
  },
  {
    id: "model-launch-2022",
    title: "Sri Vaikunta Sitarama Building Model Launching",
    date: "21st May 2022",
    year: 2022,
    category: "Event",
    description: "Launch of the temple building model",
    image: "/placeholder.svg?key=model-launch-1",
    count: 3,
  },
  {
    id: "covid-aid",
    title: "Humanitarian Aid During COVID Lockdown",
    date: "2020-2021",
    year: 2020,
    category: "Community",
    description: "Providing aid to the community during COVID-19 lockdown",
    image: "/placeholder.svg?key=covid-aid-1",
    count: 3,
  },
  {
    id: "kalyana-2019",
    title: "Sri Sitarama Kalyana Mahotsvam",
    date: "2019",
    year: 2019,
    category: "Ceremony",
    description: "Annual celestial wedding ceremony",
    image: "/placeholder.svg?key=kalyana-2019-1",
    count: 3,
  },
  {
    id: "bhajan-competition-2019",
    title: "National Bhajan Competition",
    date: "2019",
    year: 2019,
    category: "Event",
    description: "National level bhajan competition",
    image: "/placeholder.svg?key=bhajan-2019-1",
    count: 3,
  },
  {
    id: "bgm-2019",
    title: "Association 4th BGM",
    date: "2019",
    year: 2019,
    category: "Meeting",
    description: "4th Annual General Meeting of the temple association",
    image: "/placeholder.svg?key=bgm-2019-1",
    count: 2,
  },
  {
    id: "site-visit",
    title: "Site Visit by Bhadrachalam Pradana Archakulu",
    date: "2018-2019",
    year: 2018,
    category: "Event",
    description: "Visit by the head priest from Bhadrachalam temple",
    image: "/placeholder.svg?key=site-visit-1",
    count: 3,
  },
  {
    id: "boomi-pooja",
    title: "Boomi Pooja",
    date: "2018",
    year: 2018,
    category: "Ceremony",
    description: "Ground-breaking ceremony for the temple construction",
    image: "/placeholder.svg?key=boomi-pooja-1",
    count: 4,
  },
  {
    id: "sita-navami-2018",
    title: "Sita Navami",
    date: "2018",
    year: 2018,
    category: "Ceremony",
    description: "Celebration of Sita Navami",
    image: "/placeholder.svg?key=sita-navami-2018-1",
    count: 2,
  },
  {
    id: "kalyana-2018",
    title: "Bhadrachala Sri Sitarama Kalyana Mahotsvam",
    date: "2018",
    year: 2018,
    category: "Ceremony",
    description: "Special Bhadrachala style celestial wedding ceremony",
    image: "/placeholder.svg?key=kalyana-2018-1",
    count: 3,
  },
  {
    id: "kalyana-2017",
    title: "Sri Sitarama Kalyana Mahotsvam",
    date: "2017",
    year: 2017,
    category: "Ceremony",
    description: "Annual celestial wedding ceremony",
    image: "/placeholder.svg?key=kalyana-2017-1",
    count: 2,
  },
  {
    id: "kalyana-2016",
    title: "Sri Sitarama Kalyana Mahotsvam",
    date: "2016",
    year: 2016,
    category: "Ceremony",
    description: "Annual celestial wedding ceremony",
    image: "/placeholder.svg?key=kalyana-2016-1",
    count: 2,
  },
  {
    id: "kalyana-2015",
    title: "Sri Sitarama Kalyana Mahotsvam",
    date: "2015",
    year: 2015,
    category: "Ceremony",
    description: "Annual celestial wedding ceremony",
    image: "/placeholder.svg?key=kalyana-2015-1",
    count: 2,
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://www.srivaikunttasitarama.com/wp-content/uploads/2021/10/External-View-2-scaled.jpg"
          alt="Sri Vaikuntta Sita Rama Devalayammu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-20 w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl space-y-4"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full bg-accent/10 backdrop-blur-sm px-4 py-1.5 border border-accent/20"
              >
                <Camera className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">Memories</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Photo Gallery
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed"
              >
                Capturing our temple&apos;s sacred journey
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-3 right-3">
                    <div className="rounded-xl bg-background/90 backdrop-blur-sm px-3 py-1.5 border border-border/50">
                      <span className="text-xs font-medium">
                        {event.count} photos
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-accent/10 px-3 py-1">
                      <span className="text-xs font-semibold text-accent">
                        {event.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="text-xs">{event.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors pt-2">
                    View Album
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center p-8 rounded-2xl bg-background border border-border/50"
          >
            <Camera className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              More Memories Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We&apos;re continuously updating our gallery with photos from
              various events and ceremonies. Check back regularly for new
              additions.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
