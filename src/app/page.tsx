"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, ArrowRight, Sparkles } from "lucide-react";

const carouselImages = [
  {
    src: "/devalayamu/1.jpg",
    alt: "Sri Vaikuntta Sitarama Temple - Front View",
    title: "SRI VAIKUNTTA SITARAMA DEVALAYAM",
    subtitle:
      "A sacred space dedicated to Lord Rama, Mother Sita, and Lord Laxmana",
  },
  {
    src: "/devalayamu/2.jpg",
    alt: "Divine Architecture",
    title: "DIVINE ARCHITECTURE",
    subtitle: "Traditional South Indian design meets modern craftsmanship",
  },
  {
    src: "/devalayamu/3.jpg",
    alt: "Sacred Ceremonies",
    title: "SACRED CEREMONIES",
    subtitle: "Join us for regular pujas, festivals, and special events",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden bg-zinc-900">
        {/* Render all images, only show current one */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-32 w-full">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 backdrop-blur-sm px-4 py-2 border border-accent/20">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  Shah Alam, Malaysia
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight transition-opacity duration-500">
                  {carouselImages[currentSlide].title}
                </h1>

                <p className="text-xl text-white/90 leading-relaxed transition-opacity duration-500">
                  {carouselImages[currentSlide].subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="backdrop-blur-md border-white/20 text-white hover:bg-white/10"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/donation">
                  <Button
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-md border-white/20 text-white hover:bg-white/10"
                  >
                    Support Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-accent" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5">
                  <span className="text-sm font-medium text-muted-foreground">
                    Our Journey
                  </span>
                </div>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Establishing a Sacred Space
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <p>
                  With the blessings of Mother Sita and Lord Rama, we have begun
                  our journey to establish a temple that serves as more than
                  just a place of worship.
                </p>
                <p>
                  Inspired by the devotion of Bhakta Ramadasu who built the
                  Bhadrachalam Sitarama Devalayam, our community has named this
                  sacred space Sri Vaikuntta Sitarama Devalayam.
                </p>
                <p>
                  Our vision extends beyond spiritual gatherings—we are creating
                  a center for cultural preservation, language education, and
                  artistic expression for generations to come.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/devalayamu/4.jpg"
                alt="Temple Architecture"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Temple Structure Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5">
                  <span className="text-sm font-medium text-muted-foreground">
                    Architecture
                  </span>
                </div>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold"
              >
                Temple Structure
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground"
              >
                Blending traditional architecture with modern amenities
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  img: "/devalayamu/5.jpg",
                  title: "Top Floor - Main Temple",
                  desc: "The top floor features a temple with 3 gopuram garbagudi, surrounded by an open green lawn creating a peaceful ambiance.",
                },
                {
                  img: "/devalayamu/6.jpg",
                  title: "Ground Floor - Multi-purpose Hall",
                  desc: "A 500-capacity hall for weddings, cultural programs, and religious festivals, with classrooms and offices on the mezzanine.",
                },
                {
                  img: "/devalayamu/7.jpg",
                  title: "Accessibility Features",
                  desc: "Dual staircases and lift services ensure accessibility for all devotees while preserving traditional architecture.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden group cursor-pointer h-full border-border p-0 gap-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/devalayamu/8.jpg"
                alt="Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
            </div>

            <div className="relative px-12 py-20 md:py-32">
              <div className="max-w-2xl space-y-6">
                <motion.div variants={fadeInUp} className="inline-block">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 border border-accent/20">
                    <span className="text-sm font-medium text-accent-foreground">
                      Join Our Journey
                    </span>
                  </div>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold leading-tight"
                >
                  Be Part of This Sacred Endeavor
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Your support helps us build this beautiful temple and cultural
                  center. Join us in creating a spiritual home for generations
                  to come.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Link href="/donation">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Get in Touch
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
