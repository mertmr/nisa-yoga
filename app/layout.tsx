import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Hero } from "@/components/hero-section"
import PricingPage from "@/components/pricing-page"
import Testimonials from "@/components/testimonials"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nefes Koclugu",
  description: "Davranis Terapisi",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-6xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Ana Sayfa</Link>
                  <Link href="/about">Hakkimda</Link>
                </nav>
              </div>
            </header>
              <main>
              <Hero/>
              <Testimonials/>
              <PricingPage/>
              {/* {children} */}
              </main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
