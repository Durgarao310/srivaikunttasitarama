"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
    image: null as File | null,
  });
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  useEffect(() => {
    const loadProduct = async () => {
      const { id } = await params;
      setProductId(id);

      // TODO: Fetch from API /api/donations/[id]
      // Mock data for now
      setTimeout(() => {
        const productData = {
          name: "Sacred Tulsi Plant",
          price: "299",
          stock: "50",
          category: "Plants",
          description: "Holy Tulsi plant for home worship",
          imageUrl: "/donations/tulsi.jpg",
        };
        setFormData({
          name: productData.name,
          price: productData.price,
          stock: productData.stock,
          category: productData.category,
          description: productData.description,
          image: null,
        });
        setCurrentImageUrl(productData.imageUrl);
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

  if (loading) {
    return (
      <div className="w-full p-6 space-y-6">
        {/* Loading Skeleton */}
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-secondary rounded-lg animate-pulse" />
          <div>
            <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-2" />
            <div className="h-4 w-64 bg-secondary rounded animate-pulse" />
          </div>
        </div>
        <div className="rounded-2xl bg-secondary/30 border border-border/50 p-6">
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
    );
  }

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/donations"
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold">Edit Product</h2>
          <p className="text-sm text-muted-foreground">
            Update product details
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl bg-secondary/30 border border-border/50 p-6 space-y-6">
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
                Stock (Optional)
              </label>
              <input
                type="number"
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
                  <SelectItem value="Plants">Plants</SelectItem>
                  <SelectItem value="Pooja Items">Pooja Items</SelectItem>
                  <SelectItem value="Spiritual Items">
                    Spiritual Items
                  </SelectItem>
                  <SelectItem value="Books">Books</SelectItem>
                  <SelectItem value="Idols">Idols</SelectItem>
                  <SelectItem value="Clothing">Clothing</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Image (Optional)
            </label>
            {currentImageUrl && !formData.image && (
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-2">
                  Current image:
                </p>
                <img
                  src={currentImageUrl}
                  alt="Current product"
                  className="h-32 w-32 object-cover rounded-lg border border-border"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-accent-foreground hover:file:bg-accent/90"
            />
            {formData.image && (
              <p className="text-xs text-muted-foreground mt-1">
                New image selected: {formData.image.name}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            <Button type="submit" size="lg" className="flex-1">
              <Save className="h-4 w-4" />
              Update Product
            </Button>
            <Button type="button" variant="outline" size="lg" asChild>
              <Link href="/admin/donations">Cancel</Link>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
