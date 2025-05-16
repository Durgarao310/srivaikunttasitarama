"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Calendar, Clock } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <footer className="bg-[#0c1e35] text-gray-300">
      {/* Top section with newsletter */}
      <div className="bg-[#0c1e35] border-b border-[#ffa500]/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#ffa500] rounded-full p-2">
                <Mail className="h-5 w-5 text-[#0c1e35]" />
              </div>
              <h3 className="text-lg font-medium text-white">Stay Updated with Temple News</h3>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#172b46] border-[#2a4162] text-white placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-[#ffa500] hover:bg-[#e69500] text-[#0c1e35] font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#ffa500] flex items-center justify-center">
                <span className="text-[#0c1e35] font-bold text-lg">SV</span>
              </div>
              <h2 className="text-xl font-bold text-white">Sri Vaikuntta</h2>
            </div>
            <p className="text-gray-400">
              A sacred space dedicated to Lord Rama, Mother Sitama, and Lord Laxmana in Shah Alam, Malaysia.
            </p>
            <div className="flex items-center gap-6">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-[#ffa500] transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-[#ffa500] transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-[#ffa500] transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-[#ffa500] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white border-b border-[#ffa500] pb-2 inline-block">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/" className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>About Us</span>
              </Link>
              <Link
                href="/vaikuntta-rama"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Vaikuntta Rama</span>
              </Link>
              <Link
                href="/seva-packages"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Seva Packages</span>
              </Link>
              <Link
                href="/devalayamu"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Devalayamu</span>
              </Link>
              <Link
                href="/gallery"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Gallery</span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Contact Us</span>
              </Link>
              <Link
                href="/donation"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Donation</span>
              </Link>
              <Link
                href="/events"
                className="text-gray-400 hover:text-[#ffa500] transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffa500]"></div>
                <span>Events</span>
              </Link>
            </div>
          </div>

          {/* Temple Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white border-b border-[#ffa500] pb-2 inline-block">
              Temple Hours
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#ffa500] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Weekdays</p>
                  <p className="text-gray-400">7:00 AM - 12:00 PM</p>
                  <p className="text-gray-400">5:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[#ffa500] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Weekends & Holidays</p>
                  <p className="text-gray-400">6:00 AM - 1:00 PM</p>
                  <p className="text-gray-400">4:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[#0c1e35] bg-[#ffa500] hover:bg-[#e69500] px-4 py-2 rounded-md transition-colors font-medium"
            >
              <Calendar className="h-4 w-4" />
              <span>View Upcoming Events</span>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white border-b border-[#ffa500] pb-2 inline-block">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#172b46] p-2 rounded-md">
                  <MapPin className="h-5 w-5 text-[#ffa500]" />
                </div>
                <div>
                  <p className="font-medium text-white">SRI VAIKUNTTA SITARAMA DEVALAYAM SHAH ALAM</p>
                  <p className="text-gray-400">Jln 18/49, 40200 Shah Alam, Selangor.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#172b46] p-2 rounded-md">
                  <Phone className="h-5 w-5 text-[#ffa500]" />
                </div>
                <Link href="tel:+60147172779" className="text-gray-400 hover:text-[#ffa500] transition-colors">
                  +60147172779
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#172b46] p-2 rounded-md">
                  <Mail className="h-5 w-5 text-[#ffa500]" />
                </div>
                <Link
                  href="mailto:srivaikunttasitarama@gmail.com"
                  className="text-gray-400 hover:text-[#ffa500] transition-colors break-all"
                >
                  srivaikunttasitarama@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation banner */}
      <div className="bg-[#172b46]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Support Our Temple</h3>
              <p className="text-gray-300 mt-1">Your contributions help us maintain and develop our temple</p>
            </div>
            <Button className="bg-[#ffa500] hover:bg-[#e69500] text-[#0c1e35] font-medium px-6">Donate Now</Button>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-[#172b46]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All Rights Reserved to Srivaikuntta Sitarama Temple
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#ffa500] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#ffa500] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-[#ffa500] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
