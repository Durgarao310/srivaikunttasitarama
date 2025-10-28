"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateEventPage() {
  const router = useRouter();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to API/database
    console.log("Creating event:", formData);
    router.push("/admin/events");
  };

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
          <h2 className="text-2xl font-bold">Create New Event</h2>
          <p className="text-sm text-muted-foreground">
            Add a new temple event
          </p>
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
                placeholder="Sri Rama Navami Celebration"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select category</option>
                <option value="Festival">Festival</option>
                <option value="Regular">Regular Event</option>
                <option value="Special">Special Occasion</option>
                <option value="Community">Community Event</option>
              </select>
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
                placeholder="2025-04-06 or Every Sunday"
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
                placeholder="6:00 AM - 8:00 PM"
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
                placeholder="Sri Vaikuntta Sitarama Temple"
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
                placeholder="500"
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
              placeholder="Brief description for event card"
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
              placeholder="/devalayamu/1.jpg"
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
              placeholder="Enter detailed event description, rituals, timings, and special arrangements..."
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
            Create Event
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
