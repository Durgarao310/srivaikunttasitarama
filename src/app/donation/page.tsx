"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
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

const donationItems = [
  {
    id: "brc-a7",
    name: "BRC A7",
    price: 200.0,
    image: "/donations/brc-a7.jpg",
    description: "Steel reinforcement mesh for construction",
  },
  {
    id: "cement-bags",
    name: "Cement Bags",
    price: 25.0,
    image: "/donations/cement.jpg",
    description: "High-quality cement for temple construction",
  },
  {
    id: "concrete",
    name: "Concrete",
    price: 300.0,
    image: "/donations/concrete.jpg",
    description: "Ready-mix concrete for foundation",
  },
  {
    id: "pallet-bricks",
    name: "Pallet Bricks",
    price: 300.0,
    image: "/donations/bricks.jpg",
    description: "Traditional bricks for temple structure",
  },
  {
    id: "plywood",
    name: "Plywood",
    price: 60.0,
    image: "/donations/plywood.jpg",
    description: "Quality plywood for temple construction",
  },
  {
    id: "sand",
    name: "Sand",
    price: 750.0,
    image: "/donations/sand.jpg",
    description: "Fine sand for construction purposes",
  },
  {
    id: "lucky-draw",
    name: "Sitarama Lucky Draw",
    price: 10.0,
    image: "/donations/lucky-draw.jpg",
    description: "Support the temple and win prizes",
    featured: true,
  },
  {
    id: "steel-rod",
    name: "Steel Rod",
    price: 400.0,
    image: "/donations/steel-rod.jpg",
    description: "Reinforcement steel rods for structure",
  },
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

interface DonationItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export default function DonationPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const loadCart = () => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };

    loadCart();

    // Listen for storage changes (from other tabs or components)
    window.addEventListener("storage", loadCart);

    // Poll for cart updates (for same-tab updates)
    const interval = setInterval(loadCart, 500);

    return () => {
      window.removeEventListener("storage", loadCart);
      clearInterval(interval);
    };
  }, []);

  const isInCart = (itemId: string) => {
    return cart.some((item) => item.id === itemId);
  };

  const getCartItem = (itemId: string) => {
    return cart.find((item) => item.id === itemId);
  };

  const addToCart = (item: DonationItem) => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const existingItem = existingCart.find((i) => i.id === item.id);

    let newCart: CartItem[];
    if (existingItem) {
      // Update quantity if item exists
      newCart = existingCart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      // Add new item with quantity 1
      newCart = [...existingCart, { ...item, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeFromCart = (itemId: string) => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const newCart = existingCart.filter((item) => item.id !== itemId);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const updateQuantity = (itemId: string, delta: number) => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const newCart = existingCart.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
                Donations
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 leading-relaxed"
              >
                Help us build Sri Vaikuntta Sitarama Devalayam - Your
                contribution makes a difference
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
              Building Materials Donation
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Your generous donation of building materials helps us construct a
              sacred space for worship, cultural activities, and community
              gatherings. Every contribution, no matter the size, brings us
              closer to completing this divine project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Donation Items */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Choose Your Contribution
                  </h2>
                  <p className="text-muted-foreground">
                    Select building materials to donate
                  </p>
                </div>
                {cartItemCount > 0 && (
                  <Link href="/cart">
                    <Button variant="outline" className="gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      View Cart ({cartItemCount})
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationItems.map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <Card
                    className={`p-0 gap-0 h-full ${
                      item.featured
                        ? "border-accent/50 shadow-lg"
                        : "border-border"
                    }`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-secondary rounded-t-2xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={item.featured}
                      />
                      {item.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <div>
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="text-2xl font-bold text-accent">
                            RM {item.price.toFixed(2)}
                          </p>
                        </div>

                        {isInCart(item.id) ? (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="min-w-[2ch] text-center font-semibold">
                                {getCartItem(item.id)?.quantity}
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => removeFromCart(item.id)}
                              className="w-full"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        ) : (
                          <Button
                            size="lg"
                            onClick={() => addToCart(item)}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accent">
                Direct Donation
              </h2>
              <p className="text-muted-foreground">
                You can also make a direct bank transfer
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-0 gap-0 border-accent/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-accent">
                      Bank Details
                    </h3>

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

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20 space-y-4"
            >
              <Sparkles className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold">
                May Your Donation Be Blessed
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your generous contribution helps preserve our culture,
                traditions, and provides a spiritual home for future
                generations. Thank you for your support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
