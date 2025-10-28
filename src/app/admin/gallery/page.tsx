"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  ImageIcon,
  Trash2,
  Edit,
  Plus,
  AlertTriangle,
} from "lucide-react";

interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: string;
  featured: boolean;
}

export default function AdminGalleryPage() {
  const [galleryEvents, setGalleryEvents] = useState<GalleryEvent[]>([
    {
      id: "1",
      title: "Sri Rama Navami Celebrations 2024",
      description: "Grand celebrations of Lord Rama's birth",
      date: "2024-04-17",
      images: [
        "/devalayamu/1.jpg",
        "/devalayamu/2.jpg",
        "/devalayamu/3.jpg",
        "/devalayamu/4.jpg",
      ],
      category: "Festival",
      featured: true,
    },
    {
      id: "2",
      title: "Daily Pooja Rituals",
      description: "Morning and evening prayer ceremonies",
      date: "2024-01-15",
      images: ["/devalayamu/5.jpg", "/devalayamu/6.jpg"],
      category: "Daily Ritual",
      featured: false,
    },
    {
      id: "3",
      title: "Hanuman Jayanti 2024",
      description: "Celebrating Lord Hanuman's birthday",
      date: "2024-04-23",
      images: ["/devalayamu/7.jpg", "/devalayamu/8.jpg"],
      category: "Festival",
      featured: true,
    },
    {
      id: "4",
      title: "Temple Renovation",
      description: "Recent temple renovation and beautification",
      date: "2023-12-01",
      images: ["/devalayamu/9.jpg", "/devalayamu/10.jpg"],
      category: "Infrastructure",
      featured: false,
    },
  ]);

  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean;
    eventId: string | null;
    eventTitle: string;
  }>({
    isOpen: false,
    eventId: null,
    eventTitle: "",
  });

  const openDeleteDialog = (id: string, title: string) => {
    setDeleteDialog({
      isOpen: true,
      eventId: id,
      eventTitle: title,
    });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({
      isOpen: false,
      eventId: null,
      eventTitle: "",
    });
  };

  const confirmDelete = () => {
    if (deleteDialog.eventId) {
      setGalleryEvents(
        galleryEvents.filter((event) => event.id !== deleteDialog.eventId)
      );
      // TODO: Delete from API
      console.log("Delete gallery event:", deleteDialog.eventId);
      closeDeleteDialog();
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const totalEvents = galleryEvents.length;
  const featuredEvents = galleryEvents.filter((e) => e.featured).length;
  const totalImages = galleryEvents.reduce(
    (acc, e) => acc + e.images.length,
    0
  );

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <h1 className="text-4xl font-bold text-foreground mt-2">
                Gallery Management
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage temple gallery events and photos
              </p>
            </div>
            <Link
              href="/admin/gallery/create"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add Gallery Event
            </Link>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Events</p>
                <p className="text-2xl font-bold">{totalEvents}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Featured</p>
                <p className="text-2xl font-bold">{featuredEvents}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Images</p>
                <p className="text-2xl font-bold">{totalImages}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Events Grid */}
        {galleryEvents.length > 0 ? (
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-2xl bg-secondary/30 border border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image Preview */}
                <div className="relative h-48 bg-secondary">
                  {event.images[0] && (
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-2 right-2 flex gap-2">
                    {event.featured && (
                      <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <span className="bg-background/90 text-foreground text-xs px-2 py-1 rounded-full">
                      {event.images.length} images
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <span className="px-2 py-1 rounded-full bg-secondary text-xs">
                      {event.category}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/gallery/edit/${event.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      Edit
                    </Link>
                    <button
                      onClick={() => openDeleteDialog(event.id, event.title)}
                      className="px-4 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-center py-16 rounded-2xl bg-secondary/30 border border-border/50"
          >
            <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Gallery Events</h3>
            <p className="text-muted-foreground mb-6">
              Get started by creating your first gallery event
            </p>
            <Link
              href="/admin/gallery/create"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add Gallery Event
            </Link>
          </motion.div>
        )}

        {/* Delete Confirmation Dialog */}
        {deleteDialog.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">
                    Delete Gallery Event
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete "{deleteDialog.eventTitle}"?
                    This will also delete all associated images. This action
                    cannot be undone.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closeDeleteDialog}
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
