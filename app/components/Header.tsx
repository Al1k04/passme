"use client";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  return (
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
            <span className="relative z-10">{t("header.instructions")}</span>

            <span className="absolute inset-0 -translate-x-full bg-emerald-500/10 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>

      <div className="sm:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
