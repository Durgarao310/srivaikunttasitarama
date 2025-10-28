"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react";
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

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information such as name, email address, phone number, and physical address when you make donations or contact us",
        "Payment information processed securely through our banking partners",
        "Information about your interactions with our website and services",
        "Cookies and similar tracking technologies to enhance your experience",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Process donations and seva package registrations",
        "Send receipts, confirmations, and updates about temple events",
        "Respond to your inquiries and provide customer support",
        "Improve our website and services",
        "Comply with legal obligations and prevent fraud",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information",
        "Payment information is processed through secure banking channels and never stored on our servers",
        "Access to personal data is restricted to authorized personnel only",
        "Regular security assessments and updates to protect against unauthorized access",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and review your personal information we hold",
        "Request correction of inaccurate or incomplete data",
        "Request deletion of your personal information, subject to legal requirements",
        "Opt-out of marketing communications at any time",
        "Object to processing of your personal data in certain circumstances",
      ],
    },
    {
      icon: Mail,
      title: "Third-Party Sharing",
      content: [
        "We do not sell or rent your personal information to third parties",
        "We may share information with service providers who assist in our operations (payment processors, email services)",
        "All third-party service providers are required to maintain confidentiality",
        "We may disclose information when required by law or to protect our rights",
      ],
    },
    {
      icon: Shield,
      title: "Data Retention",
      content: [
        "We retain personal information for as long as necessary to fulfill the purposes outlined in this policy",
        "Donation records are kept for tax and accounting purposes as required by law",
        "You may request deletion of your data, subject to our legal obligations",
        "Inactive accounts may be deleted after a reasonable period of inactivity",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/devalayamu/1.jpg"
          alt="Privacy Policy"
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
                <Shield className="h-5 w-5" />
                <span className="text-sm">Your Privacy Matters</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Privacy Policy
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
              Sri Vaikuntta Sitarama Temple (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, make
              donations, or interact with our services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By using our website and services, you agree to the collection and
              use of information in accordance with this policy. If you do not
              agree with our policies and practices, please do not use our
              services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Cookies Policy */}
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
              Cookies and Tracking Technologies
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track
                activity on our website and store certain information. Cookies
                are files with a small amount of data that may include an
                anonymous unique identifier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                website.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy */}
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
              Children&apos;s Privacy
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under the age of 13.
                We do not knowingly collect personally identifiable information
                from children under 13. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact us so we can take necessary action.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Policy */}
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
              Changes to This Privacy Policy
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date at the
                top of this policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
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
              Contact Us About Privacy
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground leading-relaxed"
            >
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
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
