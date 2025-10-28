"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  ImageIcon,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

const tabs = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { id: "events", name: "Events", icon: Calendar, href: "/admin/events" },
  { id: "gallery", name: "Gallery", icon: ImageIcon, href: "/admin/gallery" },
  {
    id: "donations",
    name: "Donations",
    icon: ShoppingBag,
    href: "/admin/donations",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Determine active tab based on current path
  const getActiveTab = () => {
    if (pathname === "/admin") return "dashboard";
    if (pathname?.startsWith("/admin/events")) return "events";
    if (pathname?.startsWith("/admin/gallery")) return "gallery";
    if (pathname?.startsWith("/admin/donations")) return "donations";
    return "dashboard";
  };

  const activeTab = getActiveTab();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-secondary/30 border-r border-border/50 backdrop-blur-xl z-50 transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                  Admin Panel
                </h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your temple
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                        : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-border/50">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Website
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          {/* Mobile Header */}
          <div className="lg:hidden sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>
          </div>

          {/* Page Content */}
          <div className="animate-in fade-in duration-300">{children}</div>
        </div>
      </div>
    </div>
  );
}
