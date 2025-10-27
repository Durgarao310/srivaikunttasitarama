"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Vaikuntta Rama", href: "/vaikuntta-rama" },
  { name: "Devalayamu", href: "/devalayamu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Stay Connected</h3>
            <p className="text-muted-foreground">
              Subscribe to receive updates about temple events, festivals, and
              community news.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-2xl border-border bg-secondary/50 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl h-12 px-8"
            >
              Subscribe
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">SV</span>
                </div>
                <span className="text-lg font-semibold">Sri Vaikuntta</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A sacred space dedicated to Lord Rama, Mother Sita, and Lord
                Laxmana in Shah Alam, Malaysia.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-secondary/50 transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Jln 18/49, 40200 Shah Alam, Selangor
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Link
                    href="tel:+60147172779"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +60147172779
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Link
                    href="mailto:srivaikunttasitarama@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    srivaikunttasitarama@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold">Support Us</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your contributions help us maintain and develop our temple for
                future generations.
              </p>
              <Link href="/donation">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sri Vaikuntta Sitarama Temple. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
