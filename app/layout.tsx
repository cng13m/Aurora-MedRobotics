import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Aurora MedRobotics | Hospital Robots + AI",
    template: "%s | Aurora MedRobotics",
  },
  description:
    "Robots + AI that watch over every room. Room scanning, vital monitoring, fall-risk alerts, and workflow automation built for clinical reliability.",
  keywords: [
    "medical robots",
    "hospital AI",
    "patient monitoring",
    "clinical automation",
    "healthcare technology",
  ],
  openGraph: {
    title: "Aurora MedRobotics | Hospital Robots + AI",
    description:
      "Robots + AI that watch over every room. Room scanning, vital monitoring, fall-risk alerts, and workflow automation built for clinical reliability.",
    type: "website",
    locale: "en_US",
    siteName: "Aurora MedRobotics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora MedRobotics | Hospital Robots + AI",
    description:
      "Robots + AI that watch over every room. Built for clinical reliability.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
