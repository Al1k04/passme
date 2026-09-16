import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <header className="flex items-center justify-between gap-2 px-4 py-3">
          <Link
            href="/"
            className="text-xl sm:text-2xl text-emerald-500 font-bold"
          >
            <img
              src="/logo/logo.png"
              alt="Passme"
              className="w-[120px] h-[60px] object-contain"
            />
          </Link>
          <nav className="flex gap-4 sm:gap-2 text-[13px] sm:text-base">
            <Link
              href="/games"
              className="p-1 sm:p-2 bg-neutral-800 rounded-lg border border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              ყველა თამაში
            </Link>

            <Link
              href="/subscriptions"
              className="p-1 sm:p-2 bg-neutral-800 rounded-lg border border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              PS PLUS
            </Link>

            <Link
              href="/combo"
              className="p-1 sm:p-2 bg-neutral-800 rounded-lg border border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              კომბო
            </Link>
          </nav>
        </header>
        {children}

        <footer className="flex flex-col gap-1 items-center mt-auto text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=100093207031308"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer p-2 hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out rounded-lg"
          >
            Our Facebook
          </a>
          {/* <a
            href="https://rawg.io"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer p-2 hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out rounded-lg"
          >
            Game data provided by RAWG
          </a> */}
          <span>© {new Date().getFullYear()} Passme</span>
        </footer>
      </body>
    </html>
  );
}
