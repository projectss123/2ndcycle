import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "2nd Cycle - Turn Trash to Treasure! 🌱♻️",
  description: "Join the eco-revolution with 2nd Cycle - where sustainability meets style!",
  icons: {
    icon: [
      {
        url: "images/logo/eco-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "images/logo/eco-logo.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-gradient-to-br from-mint/30 to-white")}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

