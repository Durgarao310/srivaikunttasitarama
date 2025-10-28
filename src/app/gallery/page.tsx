"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: string;
  featured?: boolean;
}

export default function GalleryPage() {
  const [galleryEvents, setGalleryEvents] = useState<GalleryEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryEvents = async () => {
      try {
        const response = await fetch("/api/gallery");
        const result = await response.json();

        if (result.success) {
          setGalleryEvents(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch gallery events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryEvents();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/devalayamu/1.jpg"
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
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-secondary/30 border border-border/50 animate-pulse"
                >
                  <div className="h-64 bg-secondary rounded-t-2xl" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-secondary rounded w-3/4" />
                    <div className="h-4 bg-secondary rounded w-full" />
                    <div className="h-4 bg-secondary rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryEvents.map((event) => (
                <Link key={event.id} href={`/gallery/${event.id}`}>
                  <motion.div
                    variants={fadeInUp}
                    className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-lg transition-all cursor-pointer"
                  >
                    {/* Main Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-3 right-3">
                        <div className="rounded-xl bg-background/90 backdrop-blur-sm px-3 py-1.5 border border-border/50">
                          <span className="text-xs font-medium">
                            {event.images.length} photos
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Image Grid Preview */}
                    <div className="grid grid-cols-4 gap-1 p-3">
                      {event.images.slice(0, 4).map((img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square overflow-hidden rounded-lg"
                        >
                          <Image
                            src={img}
                            alt={`${event.title} - ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
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

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors pt-2">
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
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
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
