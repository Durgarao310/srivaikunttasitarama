"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, X } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: string;
  featured?: boolean;
}

export default function GalleryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [event, setEvent] = useState<GalleryEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [eventId, setEventId] = useState<string>("");

  useEffect(() => {
    const fetchParams = async () => {
      const { id } = await params;
      setEventId(id);
    };
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (!eventId) return;

    const fetchGalleryEvent = async () => {
      try {
        const response = await fetch(`/api/gallery/${eventId}`);
        const result = await response.json();

        if (result.success) {
          setEvent(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch gallery event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryEvent();
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen py-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Back Button Skeleton */}
          <div className="mb-8">
            <div className="h-10 w-32 bg-secondary rounded-full animate-pulse" />
          </div>

          {/* Header Skeleton */}
          <div className="mb-12 space-y-4">
            <div className="h-12 bg-secondary rounded w-3/4 animate-pulse" />
            <div className="h-6 bg-secondary rounded w-1/2 animate-pulse" />
            <div className="h-4 bg-secondary rounded w-full animate-pulse" />
          </div>

          {/* Image Grid Skeleton */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-secondary rounded-2xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen py-24 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The gallery event you're looking for doesn't exist.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen py-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Back Button */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-secondary/50 hover:bg-secondary px-6 py-3 text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>

          {/* Event Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-12 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 px-4 py-1.5">
                <span className="text-sm font-semibold text-accent">
                  {event.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{event.date}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {event.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl">
              {event.description}
            </p>

            <div className="text-sm text-muted-foreground">
              {event.images.length} photos in this album
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {event.images.map((image, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${event.title} - Photo ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">
                    Photo {idx + 1} of {event.images.length}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full size image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
