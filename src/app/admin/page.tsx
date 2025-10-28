"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Image as ImageIcon,
  ShoppingBag,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {
  // Mock data - replace with API calls
  const stats = {
    totalEvents: 12,
    upcomingEvents: 5,
    totalGalleryEvents: 8,
    totalImages: 45,
    totalProducts: 15,
    lowStockProducts: 3,
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="p-8">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Welcome to Sri Vaikuntta Sitarama Temple Admin Panel
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {/* Events Stats */}
        <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-10 w-10 text-accent" />
            <span className="text-sm font-medium text-accent">Events</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">{stats.totalEvents}</h3>
          <p className="text-sm text-muted-foreground mb-4">Total Events</p>
          <div className="flex items-center gap-2 text-sm text-accent">
            <TrendingUp className="h-4 w-4" />
            <span>{stats.upcomingEvents} upcoming</span>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <ImageIcon className="h-10 w-10 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Gallery</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">
            {stats.totalGalleryEvents}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">Gallery Events</p>
          <div className="flex items-center gap-2 text-sm text-blue-500">
            <ImageIcon className="h-4 w-4" />
            <span>{stats.totalImages} total images</span>
          </div>
        </div>

        {/* Donations Stats */}
        <div className="rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <ShoppingBag className="h-10 w-10 text-green-500" />
            <span className="text-sm font-medium text-green-500">Products</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">{stats.totalProducts}</h3>
          <p className="text-sm text-muted-foreground mb-4">Donation Items</p>
          <div className="flex items-center gap-2 text-sm text-orange-500">
            <TrendingUp className="h-4 w-4" />
            <span>{stats.lowStockProducts} low stock</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="rounded-2xl bg-secondary/30 border border-border/50 p-6 mb-8"
      >
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/admin/events/create"
            className="group p-6 rounded-xl bg-background hover:bg-secondary/50 border border-border transition-all hover:shadow-lg hover:border-accent/50"
          >
            <Calendar className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
              Add Event
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Create a new temple event or celebration
            </p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <span>Create now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/admin/gallery/create"
            className="group p-6 rounded-xl bg-background hover:bg-secondary/50 border border-border transition-all hover:shadow-lg hover:border-blue-500/50"
          >
            <ImageIcon className="h-8 w-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors">
              Add Gallery
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Upload new photos and gallery events
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-500">
              <span>Upload now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/admin/donations/create"
            className="group p-6 rounded-xl bg-background hover:bg-secondary/50 border border-border transition-all hover:shadow-lg hover:border-green-500/50"
          >
            <ShoppingBag className="h-8 w-8 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2 group-hover:text-green-500 transition-colors">
              Add Product
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Add new donation items to the store
            </p>
            <div className="flex items-center gap-2 text-sm text-green-500">
              <span>Add now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Manage Sections */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-secondary/30 border border-border/50 p-6"
      >
        <h3 className="text-xl font-bold mb-4">Manage Content</h3>
        <div className="space-y-3">
          <Link
            href="/admin/events"
            className="group flex items-center justify-between p-4 rounded-xl bg-background hover:bg-secondary/50 border border-border transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold group-hover:text-accent transition-colors">
                  Events Management
                </h4>
                <p className="text-sm text-muted-foreground">
                  View and manage all temple events
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/admin/gallery"
            className="group flex items-center justify-between p-4 rounded-xl bg-background hover:bg-secondary/50 border border-border transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <ImageIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold group-hover:text-blue-500 transition-colors">
                  Gallery Management
                </h4>
                <p className="text-sm text-muted-foreground">
                  Organize temple photos and albums
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/admin/donations"
            className="group flex items-center justify-between p-4 rounded-xl bg-background hover:bg-secondary/50 border border-border transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <ShoppingBag className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold group-hover:text-green-500 transition-colors">
                  Donations Management
                </h4>
                <p className="text-sm text-muted-foreground">
                  Manage products and inventory
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
