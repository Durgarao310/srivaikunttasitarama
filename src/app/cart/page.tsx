"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    if (!isLoading) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setIsDialogOpen(false);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="text-muted-foreground">Loading cart...</p>
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
          alt="Shopping Cart"
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
              className="max-w-3xl space-y-4"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full bg-accent/10 backdrop-blur-sm px-4 py-1.5 border border-accent/20"
              >
                <ShoppingCart className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  Your Cart
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Shopping Cart
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          {cartItems.length === 0 ? (
            // Empty Cart
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center py-16 space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <ShoppingCart className="h-24 w-24 text-muted-foreground/30 mx-auto" />
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-3">
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <p className="text-muted-foreground">
                  Add items from our donation page to get started
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href="/donation">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Browse Donations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            // Cart with Items
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    Cart Items ({cartItems.length})
                  </h2>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                      >
                        Clear Cart
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Clear Cart?</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to remove all items from your
                          cart? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button variant="destructive" onClick={clearCart}>
                          Clear Cart
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-0 gap-0">
                        <CardContent className="p-4">
                          <div className="grid md:grid-cols-[120px_1fr_auto] gap-4">
                            {/* Image */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="120px"
                              />
                            </div>

                            {/* Details */}
                            <div className="space-y-2">
                              <h3 className="font-semibold text-lg">
                                {item.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                              <p className="text-lg font-bold text-accent">
                                RM {item.price.toFixed(2)}
                              </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col items-end justify-between gap-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2 rounded-xl border border-border p-1">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-12 text-center font-semibold">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>

                              {/* Subtotal & Remove */}
                              <div className="text-right space-y-2">
                                <p className="text-sm text-muted-foreground">
                                  Subtotal
                                </p>
                                <p className="text-xl font-bold">
                                  RM {(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-sm text-destructive hover:underline inline-flex items-center gap-1"
                                >
                                  <Trash2 className="h-3 w-3" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="p-0 gap-0 border-accent/20">
                    <CardContent className="p-6 space-y-6">
                      <h2 className="text-xl font-bold">Order Summary</h2>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span className="font-semibold">
                            RM {subtotal.toFixed(2)}
                          </span>
                        </div>

                        <div className="border-t border-border pt-3">
                          <div className="flex justify-between">
                            <span className="font-semibold">Total</span>
                            <span className="text-2xl font-bold text-accent">
                              RM {total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link href="/checkout">
                          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12">
                            Proceed to Checkout
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>

                        <Link href="/donation">
                          <Button variant="outline" className="w-full h-12">
                            Continue Shopping
                          </Button>
                        </Link>
                      </div>

                      {/* Bank Details */}
                      <div className="pt-6 border-t border-border space-y-3">
                        <h3 className="font-semibold text-sm">
                          Payment Information
                        </h3>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p className="font-medium">
                            MALAYAN BANKING BERHAD (MBB)
                          </p>
                          <p>Account: 512277611763</p>
                          <p className="text-[10px]">
                            PERSATUAN PENGANUT HINDU DEWA SITARAMA SHAH ALAM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20 space-y-4"
          >
            <motion.div variants={fadeInUp}>
              <Sparkles className="h-12 w-12 text-accent mx-auto" />
            </motion.div>

            <motion.h3 variants={fadeInUp} className="text-2xl font-bold">
              Thank You for Your Support
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Your generous contribution helps preserve our culture, traditions,
              and provides a spiritual home for future generations.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
