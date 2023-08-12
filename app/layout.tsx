import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Hero } from "@/components/hero-section";
import PricingPage from "@/components/pricing-page";
import Testimonials from "@/components/testimonials";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terapi",
  description: "Davranis Terapisi",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={` bg-[url('/17580.jpg')] antialiased min-h-screen dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="max-w-6xl mx-auto px-4 h-screen">
            <Sidebar />
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
