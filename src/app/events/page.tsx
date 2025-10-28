"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

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

interface Event {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  time: string;
  location: string;
  capacity?: number;
  image: string;
  category: string;
  featured?: boolean;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Sri Rama Navami Celebration",
      description:
        "Grand celebration of Lord Rama's birth anniversary with special poojas and cultural programs",
      content: "Join us for a grand celebration of Sri Rama Navami...",
      date: "2025-04-06",
      time: "6:00 AM - 8:00 PM",
      location: "Sri Vaikuntta Sitarama Temple",
      capacity: 500,
      image: "/devalayamu/1.jpg",
      category: "Festival",
      featured: true,
    },
    {
      id: "2",
      title: "Sita Navami",
      description:
        "Celebrating the appearance day of Goddess Sita with special rituals and bhajans",
      content: "Sita Navami marks the auspicious appearance day...",
      date: "2025-05-14",
      time: "7:00 AM - 6:00 PM",
      location: "Sri Vaikuntta Sitarama Temple",
      capacity: 300,
      image: "/devalayamu/2.jpg",
      category: "Festival",
      featured: true,
    },
    {
      id: "3",
      title: "Weekly Bhajans",
      description:
        "Join us every Sunday for devotional singing and spiritual discourse",
      content: "Every Sunday, we gather for devotional bhajans...",
      date: "Every Sunday",
      time: "5:00 PM - 7:00 PM",
      location: "Sri Vaikuntta Sitarama Temple",
      image: "/devalayamu/3.jpg",
      category: "Regular",
    },
    {
      id: "4",
      title: "Hanuman Jayanti",
      description:
        "Special celebration honoring Lord Hanuman with parayanam and special offerings",
      content: "Celebrate Hanuman Jayanti with devotion and fervor...",
      date: "2025-04-13",
      time: "6:00 AM - 12:00 PM",
      location: "Sri Vaikuntta Sitarama Temple",
      capacity: 400,
      image: "/devalayamu/4.jpg",
      category: "Festival",
    },
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/devalayamu/1.jpg"
          alt="Temple Events"
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
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  Upcoming Events
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Temple Events
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed"
              >
                Join us for spiritual celebrations and community gatherings
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {events.map((event) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {event.featured && (
                    <div className="absolute top-3 left-3">
                      <div className="rounded-full bg-accent px-3 py-1">
                        <span className="text-xs font-semibold text-white">
                          Featured
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-accent/10 px-3 py-1">
                      <span className="text-xs font-semibold text-accent">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.capacity && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Max {event.capacity} attendees</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
