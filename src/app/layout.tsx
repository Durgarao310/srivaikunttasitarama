import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConditionalLayout from "@/components/ConditionalLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Vaikuntta Sitarama Devalayam | Temple in Shah Alam, Malaysia",
  description:
    "A sacred space dedicated to Lord Rama, Mother Sita, and Lord Laxmana. Join us in creating a spiritual home for the community in Shah Alam, Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
