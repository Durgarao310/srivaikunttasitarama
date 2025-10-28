"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditGalleryPage({ params }: PageProps) {
  const router = useRouter();
  const [galleryId, setGalleryId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    images: "",
    featured: false,
  });

  useEffect(() => {
    const loadGallery = async () => {
      const { id } = await params;
      setGalleryId(id);

      // TODO: Fetch from API /api/gallery/[id]
      // Mock data for now
      setTimeout(() => {
        setFormData({
          title: "Sri Rama Navami Celebrations 2024",
          description: "Grand celebrations of Lord Rama's birth",
          date: "2024-04-17",
          category: "Festival",
          images:
            "/devalayamu/1.jpg,/devalayamu/2.jpg,/devalayamu/3.jpg,/devalayamu/4.jpg",
          featured: true,
        });
        setLoading(false);
      }, 500);
    };

    loadGallery();
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update via API PUT /api/gallery/[id]
    console.log("Update gallery event:", galleryId, formData);
    router.push("/admin/gallery");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 w-32 bg-secondary rounded animate-pulse mb-4" />
          <div className="h-12 w-64 bg-secondary rounded animate-pulse mb-8" />
          <div className="rounded-2xl bg-secondary/30 border border-border/50 p-8">
            <div className="space-y-6">
              <div className="h-10 bg-secondary rounded animate-pulse" />
              <div className="h-24 bg-secondary rounded animate-pulse" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-10 bg-secondary rounded animate-pulse" />
                <div className="h-10 bg-secondary rounded animate-pulse" />
              </div>
              <div className="h-32 bg-secondary rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <Link
            href="/admin/gallery"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
          <h1 className="text-4xl font-bold text-foreground">
            Edit Gallery Event
          </h1>
          <p className="text-muted-foreground mt-2">
            Update gallery event details
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
                  <SelectContent>
                    <SelectItem value="Festival">Festival</SelectItem>
                    <SelectItem value="Daily Ritual">Daily Ritual</SelectItem>
                    <SelectItem value="Infrastructure">
                      Infrastructure
                    </SelectItem>
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
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Save className="h-5 w-5" />
                Update Gallery Event
              </button>
              <Link
                href="/admin/gallery"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <X className="h-5 w-5" />
                Cancel
              </Link>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
