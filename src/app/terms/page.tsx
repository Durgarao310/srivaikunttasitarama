"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  Scale,
  Ban,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our website or services",
        "We reserve the right to modify these terms at any time",
        "Your continued use of the website constitutes acceptance of any changes",
      ],
    },
    {
      icon: AlertCircle,
      title: "Use of Website",
      content: [
        "You must be at least 13 years old to use our services",
        "You agree to use the website only for lawful purposes",
        "You will not engage in any activity that disrupts or interferes with our services",
        "You are responsible for maintaining the confidentiality of any account information",
      ],
    },
    {
      icon: Scale,
      title: "Donations and Payments",
      content: [
        "All donations are voluntary and made at your own discretion",
        "Donations are non-refundable except as required by law",
        "Payment information is processed securely through our banking partners",
        "You agree to provide accurate payment and contact information",
        "Tax receipts will be provided for eligible donations as per local regulations",
      ],
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: [
        "Using the website for any unlawful purpose or to solicit others to perform unlawful acts",
        "Attempting to bypass any security measures or access restricted areas",
        "Uploading viruses, malware, or any harmful code",
        "Harassing, threatening, or defaming temple members or other users",
        "Collecting personal information of others without consent",
      ],
    },
    {
      icon: ExternalLink,
      title: "Intellectual Property",
      content: [
        "All content on this website is owned by Sri Vaikuntta Sitarama Temple or licensed to us",
        "You may not reproduce, distribute, or create derivative works without permission",
        "Temple images, logos, and trademarks are protected by copyright and trademark laws",
        "You may share content for personal, non-commercial purposes with proper attribution",
      ],
    },
    {
      icon: RefreshCw,
      title: "Limitation of Liability",
      content: [
        "The website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis",
        "We do not guarantee uninterrupted or error-free service",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount of your donation, if any",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/devalayamu/1.jpg"
          alt="Terms of Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-16 w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2 text-white/80"
              >
                <FileText className="h-5 w-5" />
                <span className="text-sm">Legal Information</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Terms of Service
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed max-w-2xl"
              >
                Last updated: October 28, 2025
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Sri Vaikuntta Sitarama Temple. These Terms of Service
              (&quot;Terms&quot;) govern your use of our website and services.
              Please read these Terms carefully before using our website.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By accessing or using our website, you agree to be bound by these
              Terms and our Privacy Policy. If you disagree with any part of
              these terms, you may not access our website or services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-0 gap-0 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-accent/10">
                        <section.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h2 className="text-xl font-bold">{section.title}</h2>
                    </div>
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-accent mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
              Refund and Cancellation Policy
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All donations made to Sri Vaikuntta Sitarama Temple are
                considered final and non-refundable. As a religious and
                charitable organization, we rely on donations to support our
                operations, temple construction, and community services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In exceptional circumstances, such as duplicate transactions or
                processing errors, refunds may be considered on a case-by-case
                basis. Please contact us within 7 days of the transaction with
                supporting documentation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For seva package bookings, cancellations must be made at least
                48 hours in advance. No refunds will be provided for
                cancellations made within 48 hours of the scheduled seva.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
              Disclaimer
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is for general information
                purposes only. While we strive to keep the information up to
                date and correct, we make no representations or warranties of
                any kind about the completeness, accuracy, reliability, or
                availability of the website or the information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any reliance you place on such information is strictly at your
                own risk. We will not be liable for any loss or damage arising
                from your use of this website or reliance on information
                provided.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Links to Other Websites */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
              Links to Other Websites
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites or
                services that are not owned or controlled by Sri Vaikuntta
                Sitarama Temple. We have no control over, and assume no
                responsibility for, the content, privacy policies, or practices
                of any third-party websites or services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party websites or services that
                you visit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
              Governing Law
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with
                the laws of Malaysia, without regard to its conflict of law
                provisions. Any disputes arising from these Terms or your use of
                our services shall be subject to the exclusive jurisdiction of
                the courts of Malaysia.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
              Changes to These Terms
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any
                time at our sole discretion. If a revision is material, we will
                provide notice on our website. What constitutes a material
                change will be determined at our discretion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to access or use our website after any revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, you must stop using the
                website.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-accent/5">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
              Questions About These Terms?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground leading-relaxed"
            >
              If you have any questions about these Terms of Service, please
              contact us:
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-semibold">Sri Vaikuntta Sitarama Temple</p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:sitaramamalaysia@gmail.com"
                  className="text-accent hover:underline"
                >
                  sitaramamalaysia@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Phone:{" "}
                <a
                  href="tel:+60122872381"
                  className="text-accent hover:underline"
                >
                  +60 12-287 2381
                </a>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="pt-6">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
