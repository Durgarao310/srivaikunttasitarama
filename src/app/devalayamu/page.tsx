"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function Devalayam() {
  const images = Array.from({ length: 16 }, (_, i) => ({
    src: `/devalayamu/${i + 1}.jpg`,
    alt: `Sri Vaikuntta Sitarama Devalayam - Image ${i + 1}`,
  }));

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
                <Building className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  Architecture
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Devalayam
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed"
              >
                Explore our divine temple architecture
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Sri Vaikuntta Sitarama Devalayam
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Explore the divine architecture and sacred spaces of our temple.
              These images showcase the beautiful design, inspired by
              traditional South Indian temple architecture and the unique
              appearance of Vaikuntta Rama.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-6 p-12 rounded-2xl bg-secondary/30 border border-border/50"
          >
            <motion.div variants={fadeInUp}>
              <Building className="h-12 w-12 text-accent mx-auto mb-4" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold"
            >
              Visit Our Temple
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground leading-relaxed"
            >
              We welcome you to visit Sri Vaikuntta Sitarama Devalayam and
              experience the divine presence and architectural beauty in person.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
