"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, ImageIcon, Save, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function CreateGalleryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    images: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Save to API
      console.log("Create gallery event:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/admin/gallery");
    } catch (error) {
      console.error("Error creating gallery event:", error);
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <motion.div {...fadeInUp} className="mb-2">
        <Link
          href="/admin/gallery"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>
        <h1 className="text-4xl font-bold text-foreground">
          Add Gallery Event
        </h1>
        <p className="text-muted-foreground mt-2">
          Create a new gallery event with photos
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="rounded-2xl bg-secondary/30 border border-border/50 p-8"
      >
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Event Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Sri Rama Navami Celebrations 2024"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Grand celebrations of Lord Rama's birth"
            />
          </div>

          {/* Date and Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Event Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Category *
              </label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Festival">Festival</SelectItem>
                  <SelectItem value="Daily Ritual">Daily Ritual</SelectItem>
                  <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="Special Event">Special Event</SelectItem>
                  <SelectItem value="Community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Image URLs *
            </label>
            <textarea
              required
              value={formData.images}
              onChange={(e) =>
                setFormData({ ...formData, images: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent font-mono text-sm"
              placeholder="/devalayamu/1.jpg,/devalayamu/2.jpg,/devalayamu/3.jpg"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter comma-separated image URLs
            </p>
          </div>

          {/* Featured */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="text-sm font-medium">
                Mark as Featured Event
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="flex-1"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Create Gallery Event
                </>
              )}
            </Button>
            <Button type="button" variant="outline" size="lg" asChild>
              <Link href="/admin/gallery">Cancel</Link>
            </Button>
          </div>
        </div>
      </motion.form>
    </div>
  );
}
