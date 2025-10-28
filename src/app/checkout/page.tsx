"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create order summary
    const orderSummary = {
      ...formData,
      items: cart,
      total: total,
      date: new Date().toISOString(),
    };

    console.log("Order submitted:", orderSummary);

    // Clear cart
    localStorage.removeItem("cart");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center space-y-6 max-w-2xl"
        >
          <motion.div variants={fadeInUp}>
            <CheckCircle className="h-24 w-24 text-green-600 mx-auto" />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl font-bold">
            Thank You for Your Donation!
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground"
          >
            Your contribution of{" "}
            <span className="font-bold text-accent">RM {total.toFixed(2)}</span>{" "}
            has been received. We will contact you shortly with payment
            instructions.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              A confirmation email will be sent to{" "}
              <span className="font-semibold">{formData.email}</span>
            </p>

            <div className="flex gap-4 justify-center">
              <Link href="/">
                <Button variant="outline">Return Home</Button>
              </Link>
              <Link href="/donation">
                <Button className="bg-accent hover:bg-accent/90">
                  Make Another Donation
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <Link href="/donation">
            <Button>Browse Donations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="/devalayamu/1.jpg"
          alt="Checkout"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-12 w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={fadeInUp}>
                <Link
                  href="/cart"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm">Back to Cart</span>
                </Link>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Checkout
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-0 gap-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Your Information</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Enter your name"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+60 123 456 789"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Address</label>
                      <Input
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="Your address (optional)"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Message (Optional)
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Any special message or instructions..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Complete Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-0 gap-0 border-accent/20">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold text-lg">Order Summary</h3>

                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {item.name} x {item.quantity}
                          </span>
                          <span className="font-semibold">
                            RM {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold text-accent">
                          RM {total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-0 gap-0 border-accent/20 bg-accent/5">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      Payment Information
                    </h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p className="font-medium">
                        MALAYAN BANKING BERHAD (MBB)
                      </p>
                      <p>Account: 512277611763</p>
                      <p className="text-[10px]">
                        PERSATUAN PENGANUT HINDU DEWA SITARAMA SHAH ALAM
                      </p>
                      <p className="pt-2 text-[11px]">
                        After submitting, you will receive payment instructions
                        via email.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
