"use client";

import { useLanguage } from "../context/LanguageContext";

export default function TopGamesHeader() {
  const { t } = useLanguage();
  return (
    <div className="mb-10 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        {t("top.badge")}
      </div>

      <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {t("top.title")}
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
        {t("top.subtitle")}
      </p>

      <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700">
        <span className="h-px w-10 bg-neutral-800" />
        PASSME DIGITAL STORE
        <span className="h-px w-10 bg-neutral-800" />
      </div>
    </div>
  );
}
