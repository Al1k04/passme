import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "@/app/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Passme — PlayStation Games",
  description: "ციფრული თამაშები PlayStation-ზე",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ka"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-neutral-950">
        <header className="flex items-center justify-between gap-4 px-4 py-3 border-b border-neutral-900">
          <Link
            href="/"
            className="group shrink-0 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <img
              src="/logo/passme.png"
              alt="Passme"
              className="w-[100px] h-[50px] object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden sm:block">
            <nav className="flex items-center gap-3">
              <Link
                href="/subscriptions"
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
              >
                <span className="relative z-10">PS PLUS</span>

                <span className="absolute inset-0 -translate-x-full bg-emerald-500/10 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>

              <Link
                href="/instructions"
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
              >
                <span className="relative z-10">ინსტრუქცია</span>

                <span className="absolute inset-0 -translate-x-full bg-emerald-500/10 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
            </nav>
          </div>

          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </header>

        {children}

        <footer className="mt-auto flex flex-col items-center gap-1 border-t border-neutral-900 py-6 text-sm text-neutral-500">
          <a
            href="https://www.facebook.com/profile.php?id=100093207031308"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-950"
          >
            Our Facebook
          </a>

          <span>© {new Date().getFullYear()} Passme</span>
        </footer>
      </body>
    </html>
  );
}
