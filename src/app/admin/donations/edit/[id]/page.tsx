"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, X } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditDonationPage({ params }: PageProps) {
  const router = useRouter();
  const [productId, setProductId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const loadProduct = async () => {
      const { id } = await params;
      setProductId(id);

      // TODO: Fetch from API /api/donations/[id]
      // Mock data for now
      setTimeout(() => {
        setFormData({
          name: "Sacred Tulsi Plant",
          price: "299",
          stock: "50",
          category: "Plants",
          description: "Holy Tulsi plant for home worship",
          image: "/donations/tulsi.jpg",
        });
        setLoading(false);
      }, 500);
    };

    loadProduct();
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update via API PUT /api/donations/[id]
    console.log("Update donation product:", productId, formData);
    router.push("/admin/donations");
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
              <div className="grid md:grid-cols-3 gap-6">
                <div className="h-10 bg-secondary rounded animate-pulse" />
                <div className="h-10 bg-secondary rounded animate-pulse" />
                <div className="h-10 bg-secondary rounded animate-pulse" />
              </div>
              <div className="h-10 bg-secondary rounded animate-pulse" />
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
            href="/admin/donations"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Donations
          </Link>
          <h1 className="text-4xl font-bold text-foreground">
            Edit Donation Product
          </h1>
          <p className="text-muted-foreground mt-2">Update product details</p>
        </motion.div>

        {/* Form */}
        <motion.form
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-secondary/30 border border-border/50 p-8"
        >
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Product Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Sacred Tulsi Plant"
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
                placeholder="Holy Tulsi plant for home worship"
              />
            </div>

            {/* Price, Stock, Category */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="1"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="299"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Stock *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="1"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="50"
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
                  <option value="">Select Category</option>
                  <option value="Plants">Plants</option>
                  <option value="Pooja Items">Pooja Items</option>
                  <option value="Spiritual Items">Spiritual Items</option>
                  <option value="Books">Books</option>
                  <option value="Idols">Idols</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Image URL *
              </label>
              <input
                type="text"
                required
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="/donations/tulsi.jpg"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Enter the product image URL
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Save className="h-5 w-5" />
                Update Product
              </button>
              <Link
                href="/admin/donations"
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
