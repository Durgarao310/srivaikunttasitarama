"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, ExternalLink, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ContactPage() {
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
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-accent/10 backdrop-blur-sm px-4 py-1.5 border border-accent/20">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">Get in Touch</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Contact Us
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-white/90 leading-relaxed">
                We&apos;d love to hear from you
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-2">Connect With Us</h2>
                <p className="text-muted-foreground">
                  Reach out for inquiries, ceremonies, or just to say hello
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Address */}
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      SRI VAIKUNTTA SITARAMA DEVALAYAM SHAH ALAM
                      <br />
                      Jln 18/49, 40200 Shah Alam, Selangor.
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+60147172779"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +60 14-717 2779
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:srivaikunttasitarama@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      srivaikunttasitarama@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                    <Facebook className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                    <a
                      href="https://www.facebook.com/srivaikunttasitarama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
                    >
                      Follow us on Facebook
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Visiting Hours */}
                <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Temple Visiting Hours</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The temple is open daily from <strong>7:00 AM to 8:00 PM</strong>.
                    <br />
                    Special ceremonies and events may have different timings.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we&apos;ll get back to you soon
                </p>
              </motion.div>

              <motion.form variants={fadeInUp} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Send Message
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Find Us</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
                Our Location
              </motion.h2>
            </div>

            <motion.div variants={fadeInUp} className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.159090538865!2d101.51091057426947!3d3.052046053743346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc534b6af6abe9%3A0x5cbf9a12cb72ca6c!2sSRI%20VAIKUNTTA%20SITARAMA%20DEVALAYAM%20SHAH%20ALAM!5e0!3m2!1sen!2sin!4v1747403727501!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <a
                href="https://maps.app.goo.gl/Ld5Yd9Yd5Yd9Yd5Yd9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Get Directions
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
