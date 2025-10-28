"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingBag,
  Package,
  Trash2,
  Edit,
  Plus,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

interface Donation {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

export default function AdminDonationsPage() {
  const [mounted, setMounted] = useState(false);
  const [donations, setDonations] = useState<Donation[]>([
    {
      id: "1",
      name: "Sacred Tulsi Plant",
      price: 299,
      stock: 50,
      category: "Plants",
      description: "Holy Tulsi plant for home worship",
      image: "/donations/tulsi.jpg",
    },
    {
      id: "2",
      name: "Temple Bell (Ghanta)",
      price: 599,
      stock: 30,
      category: "Pooja Items",
      description: "Traditional brass temple bell",
      image: "/donations/bell.jpg",
    },
    {
      id: "3",
      name: "Rudraksha Mala",
      price: 1299,
      stock: 20,
      category: "Spiritual Items",
      description: "Authentic 108 beads Rudraksha mala",
      image: "/donations/rudraksha.jpg",
    },
    {
      id: "4",
      name: "Camphor (Kapur)",
      price: 149,
      stock: 100,
      category: "Pooja Items",
      description: "Pure camphor for aarti",
      image: "/donations/camphor.jpg",
    },
  ]);

  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean;
    productId: string | null;
    productName: string;
  }>({
    isOpen: false,
    productId: null,
    productName: "",
  });

  const openDeleteDialog = (id: string, name: string) => {
    setDeleteDialog({
      isOpen: true,
      productId: id,
      productName: name,
    });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({
      isOpen: false,
      productId: null,
      productName: "",
    });
  };

  const confirmDelete = () => {
    if (deleteDialog.productId) {
      setDonations(
        donations.filter((item) => item.id !== deleteDialog.productId)
      );
      // TODO: Delete from API
      console.log("Delete product:", deleteDialog.productId);
      closeDeleteDialog();
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const totalProducts = donations.length;
  const totalValue = donations.reduce(
    (acc, item) => acc + item.price * item.stock,
    0
  );
  const lowStock = donations.filter((item) => item.stock < 25).length;

  useEffect(() => {
    setMounted(true);
  }, []);

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
                Donations Management
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage donation products and inventory
              </p>
            </div>
            <Link
              href="/admin/donations/create"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add Product
            </Link>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">{totalProducts}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">
                  ₹{totalValue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Package className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">{lowStock}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {donations.length > 0 ? (
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {donations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-2xl bg-secondary/30 border border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-secondary">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-2 right-2">
                    {product.stock < 25 && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Low Stock
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        ₹{product.price}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Stock: {product.stock}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary text-xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/donations/edit/${product.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      Edit
                    </Link>
                    <button
                      onClick={() => openDeleteDialog(product.id, product.name)}
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
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Products</h3>
            <p className="text-muted-foreground mb-6">
              Get started by adding your first donation product
            </p>
            <Link
              href="/admin/donations/create"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add Product
            </Link>
          </motion.div>
        )}

        {/* Delete Confirmation Dialog */}
        {mounted && deleteDialog.isOpen && (
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
                  <h3 className="text-lg font-bold mb-1">Delete Product</h3>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete "{deleteDialog.productName}
                    "? This action cannot be undone.
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
