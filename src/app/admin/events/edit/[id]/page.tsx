"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [eventId, setEventId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    const fetchParams = async () => {
      const { id } = await params;
      setEventId(id);

      // TODO: Fetch event data from API
      // Mock data for now
      setFormData({
        title: "Sri Rama Navami Celebration",
        description: "Grand celebration of Lord Rama's birth anniversary",
        content:
          "Detailed event description with full information about the celebration, timings, rituals, and special arrangements.",
        date: "2025-04-06",
        time: "6:00 AM - 8:00 PM",
        location: "Sri Vaikuntta Sitarama Temple",
        capacity: "500",
        image: "/devalayamu/1.jpg",
        category: "Festival",
      });
      setLoading(false);
    };
    fetchParams();
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update event via API
    console.log("Updating event:", eventId, formData);
    router.push("/admin/events");
  };

  if (loading) {
    return (
      <div className="max-w-4xl space-y-6">
        <div className="h-8 bg-secondary rounded w-48 animate-pulse" />
        <div className="rounded-2xl bg-secondary/30 border border-border/50 p-6 space-y-6">
          <div className="h-10 bg-secondary rounded animate-pulse" />
          <div className="h-10 bg-secondary rounded animate-pulse" />
          <div className="h-32 bg-secondary rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/events"
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold">Edit Event</h2>
          <p className="text-sm text-muted-foreground">Update event details</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl bg-secondary/30 border border-border/50 p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
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
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Festival">Festival</SelectItem>
                  <SelectItem value="Regular">Regular Event</SelectItem>
                  <SelectItem value="Special">Special Occasion</SelectItem>
                  <SelectItem value="Community">Community Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date *</label>
              <input
                type="text"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Time *</label>
              <input
                type="text"
                required
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Capacity (Optional)
              </label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({ ...formData, capacity: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Short Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Image URL (Optional)
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Detailed Content *
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              rows={8}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter detailed event information..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            <Save className="h-4 w-4" />
            Update Event
          </button>
          <Link
            href="/admin/events"
            className="px-6 py-3 text-sm font-medium hover:bg-secondary rounded-full transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
