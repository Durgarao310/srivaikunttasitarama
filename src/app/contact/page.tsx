import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[300px] mb-12 rounded-lg overflow-hidden">
         <Image
               src="https://www.srivaikunttasitarama.com/wp-content/uploads/2021/10/External-View-2-scaled.jpg"
               alt="Sri Vaikuntta Sita Rama Devalayammu"
               fill
               className="object-cover"
               priority
             />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-xl text-white/90">{`We'd love to hear from you`}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-6">Get in Touch</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700 mt-1">
                    SRI VAIKUNTTA SITARAMA DEVALAYAM SHAH ALAM
                    <br />
                    Jln 18/49, 40200 Shah Alam, Selangor.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700 mt-1">
                    <a href="tel:+60147172779" className="hover:text-orange-600 transition-colors">
                      +60 14-717 2779
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700 mt-1">
                    <a href="mailto:srivaikunttasitarama@gmail.com" className="hover:text-orange-600 transition-colors">
                      srivaikunttasitarama@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Facebook className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Social Media</h3>
                  <p className="text-gray-700 mt-1">
                    <a
                      href="https://www.facebook.com/srivaikunttasitarama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-orange-600 transition-colors"
                    >
                      Follow us on Facebook
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">Our Location</h3>
              <Card>
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.159090538865!2d101.51091057426947!3d3.052046053743346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc534b6af6abe9%3A0x5cbf9a12cb72ca6c!2sSRI%20VAIKUNTTA%20SITARAMA%20DEVALAYAM%20SHAH%20ALAM!5e0!3m2!1sen!2sin!4v1747403727501!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-2 text-sm text-gray-500">
                <a
                  href="https://maps.app.goo.gl/Ld5Yd9Yd5Yd9Yd5Yd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700"
                >
                  Get Directions
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input id="phone" name="phone" placeholder="Your phone number" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Message subject" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message" rows={6} required />
              </div>

              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                Send Message
              </Button>
            </form>

            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-lg text-orange-600">Temple Visiting Hours</h3>
              <p className="text-gray-700 mt-2">
                The temple is open daily from 7:00 AM to 8:00 PM.
                <br />
                Special ceremonies and events may have different timings.
              </p>
              <p className="text-gray-700 mt-2">
                For inquiries about ceremonies, donations, or other matters, please contact us using the information
                provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
