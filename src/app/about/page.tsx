"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Heart } from "lucide-react";

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

const timeline = [
  {
    period: "1870s",
    title: "Early Migration",
    subtitle: "From Andhra Pradesh to Malaysian Peninsula",
    description:
      "About 150 years ago, there was a mass migration of people from Andhra Pradesh, India to the Malaysian Peninsula. The majority became laborers at rubber plantation estates, bringing with them their rich culture and devotion to Lord Rama.",
  },
  {
    period: "1980s",
    title: "Urban Migration",
    subtitle: "Moving to cities for better opportunities",
    description:
      "From the early 1980s, people began moving from plantation estates to cities and industrial areas. Many families migrated to Shah Alam, where weekly Ram Mantra chanting and Ram Bhajan sessions were held in devotees homes.",
  },
  {
    period: "1990s",
    title: "Community Growth",
    subtitle: "Expanding beyond homes",
    description:
      "By the 1990s, the number of devotees had grown so large that homes could no longer accommodate them. The community began renting shop lots in Taman Sri Muda, Shah Alam for teachings, celebrations, and festivals.",
  },
  {
    period: "2019",
    title: "Official Registration",
    subtitle: "Formal establishment of the association",
    description:
      "On September 11, 2019, PERSATUAN PENGANUT HINDU DEWA SITA RAMA SHAH ALAM was formally registered with the Registry of Societies, Malaysia, establishing a working committee and formal membership.",
  },
  {
    period: "2017-2019",
    title: "Land Grant",
    subtitle: "A place to call our own",
    description:
      "With the blessings of Mother Sita and Lord Rama, the Selangor State Government granted 10,000 square feet of land in Section 18, Shah Alam. The Bhoomi Pooja ceremony was held on October 10, 2019.",
  },
  {
    period: "2022-2024",
    title: "Temple Construction",
    subtitle: "Building our sacred space",
    description:
      "After delays due to COVID-19, construction began in 2022. The temple was named SRI VAIKUNTTA SITA RAMA DEVALAYAMMU, inspired by our strong devotion to Bhadrachalam temple.",
  },
];

export default function AboutPage() {
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
                <Heart className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  Our Story
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Our Journey
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed"
              >
                A story of devotion, community, and perseverance
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
              className="text-3xl md:text-4xl font-bold text-accent"
            >
              JAI SHREE RAM
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Welcome to Sri Vaikuntta Sita Rama Devalayammu, a temple born from
              the devotion and determination of the Telugu community in
              Malaysia. Our story spans generations, continents, and a steadfast
              faith in Lord Rama.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center"
            >
              Our History
            </motion.h2>

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="inline-flex items-center gap-2 rounded-2xl bg-accent/10 px-4 py-2 border border-accent/20">
                        <span className="text-sm font-semibold text-accent">
                          {event.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold"
              >
                Our Activities
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground"
              >
                Bringing the community together through faith and culture
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-secondary/30 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Annual Celebrations</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our highlight is the Sita Rama Kalyanam Mahotsavam, the grand
                  celestial wedding conducted annually as part of the Sri Rama
                  Navami celebration. This event gathers approximately 2,000
                  devotees each year.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-secondary/30 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Programs</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct various knowledge and cultural initiatives that not
                  only bring together worshippers of Lord Rama but also help
                  cultivate human values such as righteousness, justice, and
                  integrity.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">
                  Find Us
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold"
              >
                Our Location
              </motion.h2>
            </div>

            <motion.div
              variants={fadeInUp}
              className="aspect-video rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.159090538865!2d101.51091057426947!3d3.052046053743346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc534b6af6abe9%3A0x5cbf9a12cb72ca6c!2sSRI%20VAIKUNTTA%20SITARAMA%20DEVALAYAM%20SHAH%20ALAM!5e0!3m2!1sen!2sin!4v1747403727501!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-muted-foreground">
                Section 18, Shah Alam, Selangor, Malaysia
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Join Our Community
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Be part of our growing family of devotees and help us continue
              this beautiful journey of faith and tradition.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/donation">
                <Button size="lg" variant="outline">
                  Support the Temple
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
