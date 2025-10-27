"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Gift,
  Church,
  Heart,
  Calendar,
  Percent,
  Info,
  Phone,
  Mail,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const packages = [
  {
    name: "వైకుంఠ సేవ",
    nameEn: "Vaikuntta Seva",
    amount: "1,000,116.00",
    description: "Main Hall Naming rights",
    quantity: "1",
    freeWedding: "4",
    kalyanam: "3",
    hallUsage: "5",
    darshan: "10",
    discount: "20%",
    featured: true,
  },
  {
    name: "అయోధ్య సేవ",
    nameEn: "Ayodhya Seva",
    amount: "500,116.00",
    description: "All Gopurams",
    quantity: "3",
    freeWedding: "2",
    kalyanam: "5",
    hallUsage: "5",
    darshan: "10",
    discount: "20%",
    featured: true,
  },
  {
    name: "రామాయణ సేవ",
    nameEn: "Ramayana Seva",
    amount: "200,116.00",
    description: "Garbhagudi, LaxmiNarayana Sannidhi, RadhaKrishna Sannidhi",
    quantity: "3",
    freeWedding: "2",
    kalyanam: "2",
    hallUsage: "3",
    darshan: "7",
    discount: "15%",
  },
  {
    name: "సీతమ్మ సేవ",
    nameEn: "Sitamma Seva",
    amount: "100,116.00",
    description: "Main arch, Lawn & Landscape, Class rooms",
    quantity: "4",
    freeWedding: "2",
    kalyanam: "1",
    hallUsage: "2",
    darshan: "7",
    discount: "10%",
  },
  {
    name: "లక్ష్మణ సేవ",
    nameEn: "Laxmana Seva",
    amount: "25,116.00",
    description:
      "Dwajasthambam, MahaLaxmi Pond, Hanuman Sannidhi, Garudan Sannidhi",
    quantity: "8",
    freeWedding: "1",
    kalyanam: "1",
    hallUsage: "5",
    darshan: "5",
    discount: "10%",
  },
  {
    name: "హనుమాన్ సేవ",
    nameEn: "Hanuman Seva",
    amount: "15,116.00",
    description: "Ram Bhanam & Hanuman Gada",
    quantity: "2",
    freeWedding: "1",
    kalyanam: "1",
    hallUsage: "4",
    darshan: "5",
    discount: "10%",
  },
  {
    name: "భద్రాచలం సేవ",
    nameEn: "Bhadrachalam Seva",
    amount: "10,116.00",
    description: "Dashavatara Sthambam Kalyana Seva",
    quantity: "10",
    freeWedding: "1",
    kalyanam: "1",
    hallUsage: "3",
    darshan: "5",
    discount: "5%",
  },
  {
    name: "లైఫ్ టైమ్ అర్చన సేవ",
    nameEn: "Life Time Archana Seva",
    amount: "1,116.00",
    description: "Lifetime Archana",
    quantity: "Unlimited",
    freeWedding: "-",
    kalyanam: "-",
    hallUsage: "-",
    darshan: "1",
    discount: "-",
  },
  {
    name: "శబరి సేవ",
    nameEn: "Sabari Seva",
    amount: "400.00",
    description:
      "Donation for piling – each pile will be written 'Jai Sree Ram' and donor's name",
    quantity: "770",
    freeWedding: "-",
    kalyanam: "-",
    hallUsage: "-",
    darshan: "-",
    discount: "-",
  },
  {
    name: "ఉద్యమ సేవ",
    nameEn: "Udyama Seva",
    amount: "200 per sq ft",
    description: "Can donate for any multiple of sq feet",
    quantity: "13,000",
    freeWedding: "-",
    kalyanam: "-",
    hallUsage: "-",
    darshan: "-",
    discount: "-",
  },
];

const benefits = [
  {
    icon: Gift,
    title: "Free Wedding",
    description: "Temple, main hall with standard logistics & Priest service",
  },
  {
    icon: Heart,
    title: "Sitaramula Kalyanam",
    description: "Nitya Kalyanam on preferred dates subject to availability",
  },
  {
    icon: Church,
    title: "Free Hall Usage",
    description: "For personal use with standard packaged logistics",
  },
  {
    icon: Calendar,
    title: "Lifetime Darshan",
    description: "Temple conducts archana on your preferred date every year",
  },
  {
    icon: Percent,
    title: "Lifetime Discounts",
    description: "On all temple facilities and services",
  },
];

export default function SevaPackagesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/devalayamu/1.jpg"
          alt="Sri Vaikuntta Sitarama Temple"
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
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  Support the Temple
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                సేవా ప్యాకేజ్
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed"
              >
                Seva Packages - Contribute to Building a Sacred Space
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
              Join Us in Building the Temple
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Your contribution through our Seva Packages helps build and
              maintain this sacred space while blessing you with lifetime
              benefits and divine grace.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-0 gap-0 h-full text-center border-accent/20">
                  <CardContent className="p-6 space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seva Packages */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Available Seva Packages
              </h2>
              <p className="text-muted-foreground">
                Choose a package that resonates with your devotion
              </p>
            </motion.div>

            <div className="grid gap-6">
              {packages.map((pkg, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    className={`p-0 gap-0 ${
                      pkg.featured
                        ? "border-accent/50 shadow-lg"
                        : "border-border"
                    }`}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
                        {/* Package Info */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl font-bold">{pkg.name}</h3>
                              {pkg.featured && (
                                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-lg text-muted-foreground">
                              {pkg.nameEn}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {pkg.description}
                            </p>
                          </div>

                          {/* Benefits Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-border/50">
                            {pkg.freeWedding !== "-" && (
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Free Weddings
                                </p>
                                <p className="text-lg font-semibold text-accent">
                                  {pkg.freeWedding}
                                </p>
                              </div>
                            )}
                            {pkg.kalyanam !== "-" && (
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Kalyanam
                                </p>
                                <p className="text-lg font-semibold text-accent">
                                  {pkg.kalyanam}
                                </p>
                              </div>
                            )}
                            {pkg.hallUsage !== "-" && (
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Hall Usage
                                </p>
                                <p className="text-lg font-semibold text-accent">
                                  {pkg.hallUsage}
                                </p>
                              </div>
                            )}
                            {pkg.darshan !== "-" && (
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Darshan/Year
                                </p>
                                <p className="text-lg font-semibold text-accent">
                                  {pkg.darshan}
                                </p>
                              </div>
                            )}
                            {pkg.discount !== "-" && (
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Discount
                                </p>
                                <p className="text-lg font-semibold text-accent">
                                  {pkg.discount}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Amount & Quantity */}
                        <div className="text-right space-y-2 md:border-l md:pl-8 border-border/50">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                              Amount
                            </p>
                            <p className="text-3xl font-bold text-accent">
                              RM {pkg.amount}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-border/50">
                            <p className="text-xs text-muted-foreground">
                              Quantity Available
                            </p>
                            <p className="text-lg font-semibold">
                              {pkg.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Info className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Important Notes
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 p-8 rounded-2xl bg-background"
            >
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Free Wedding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Donor can use the facilities for personal use or for anyone
                  else provided the bookings are done by the donor. The free
                  wedding package comes with usage of Temple, main hall with
                  standard packaged logistics & Priest service.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Sitaramula Kalyanam</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nitya Kalyanam which can be conducted on any days preferred by
                  donor subject to availability. The Nitya kalyanam can be
                  performed by either a single person or couple or family.
                  Family members and public can be invited.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Free Hall Usage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Donor can use the facilities for personal use or for anyone
                  else provided the bookings are done by the donor. Free hall
                  usage with standard packaged logistics.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Lifetime Darshan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Temple will conduct archana on the given date every year and
                  post the prasadam to the last known address. Donors are
                  encouraged to come to temple on the given date with family
                  members to get the blessings of Sri Vaikuntta Sitarama Swamy.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Lifetime Discounts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Applicable for all facilities and services provided in the
                  temple except for Daily archanas, special auspicious
                  occasions, Sri Rama Navami, Sri Krishna Jayanti, Sri Hanuman
                  Jayanti.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pledge Form QR Code */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accent">
                Pledge Form
              </h2>
              <p className="text-lg text-muted-foreground">
                Scan the QR code or click the button below to fill out the
                pledge form
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-0 gap-0 border-accent/20 inline-block">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden bg-white p-4">
                      <Image
                        src="https://www.srivaikunttasitarama.com/wp-content/uploads/2021/10/QR-Code.jpeg"
                        alt="Pledge Form QR Code"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center space-y-4">
                      <p className="font-semibold text-lg">
                        Scan to View Pledge Form
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Use your phone camera to scan this QR code
                      </p>
                      <div className="pt-2">
                        <Link
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdoyDP6nIOTRd6Bp7NNBrlmbr4WP05SVEGRkikCTCofsi4Smg/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                          >
                            Open Pledge Form
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bank Details & Contact */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Bank Details */}
            <motion.div variants={fadeInUp}>
              <Card className="p-0 gap-0 border-accent/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-accent">
                      Bank Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Bank Name
                          </p>
                          <p className="font-semibold">
                            MALAYAN BANKING BERHAD (MBB)
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">
                            Account Name
                          </p>
                          <p className="font-semibold">
                            PERSATUAN PENGANUT HINDU DEWA SITARAMA SHAH ALAM
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Account Number
                          </p>
                          <p className="text-2xl font-bold text-accent">
                            512277611763
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <Card className="p-0 gap-0 border-accent/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-accent">
                      Contact Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Phone
                            </p>
                            <p className="font-semibold">+6 014 7172 779</p>
                            <p className="text-sm text-muted-foreground">
                              Sri Subbarao Nokaraju
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Email
                            </p>
                            <a
                              href="mailto:srivaikunttasitarama@gmail.com"
                              className="font-semibold hover:text-accent transition-colors"
                            >
                              srivaikunttasitarama@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Facebook className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Facebook
                            </p>
                            <a
                              href="https://facebook.com/sitaramamalaysia"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-accent transition-colors"
                            >
                              sitaramamalaysia
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20 space-y-4"
            >
              <Sparkles className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold">Join Our Sacred Journey</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your contribution helps preserve our culture, traditions, and
                provides a spiritual home for future generations. Contact us
                today to discuss your preferred Seva Package.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
