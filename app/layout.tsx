import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "@/app/components/MobileMenu";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Header from "./components/Header";

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
        <LanguageProvider>
          <Header />

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
        </LanguageProvider>
      </body>
    </html>
  );
}
