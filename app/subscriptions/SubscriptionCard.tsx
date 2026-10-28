"use client";

import { Subscription } from "@/types/subscription";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import InfoModal from "../components/InfoModal";

export default function SubscriptionCard({
  sub,
  lang,
}: {
  sub: Subscription;
  lang: "ka" | "ru" | "en";
}) {
  const [selectedMonths, setSelectedMonths] = useState(sub.periods[0].months);
  const { t } = useLanguage();
  const period = sub.periods.find((p) => p.months === selectedMonths);

  return (
    <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      <div className="flex h-full flex-col p-4">
        <div className="mb-4 flex min-h-[64px] items-start gap-2">
          <span className="relative flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 text-sm font-bold text-emerald-400">
            <span className="relative z-10">Passme</span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </span>

          <div>
            <h2 className="text-base font-semibold leading-snug text-neutral-100">
              {sub.title}
            </h2>
          </div>
        </div>

        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={sub.images[0]}
            alt={sub.title}
            className="h-70 w-full translate-y-2 scale-[1.02] object-cover opacity-90 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>

        <ul className="mb-4 list-inside list-disc space-y-1 text-neutral-300">
          {sub.features[lang as "ka" | "ru" | "en"].map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="mb-5 flex justify-center gap-2">
          {sub.periods.map((p) => {
            const isSelected = selectedMonths === p.months;

            return (
              <button
                key={p.months}
                type="button"
                onClick={() => setSelectedMonths(p.months)}
                aria-pressed={isSelected}
                className={`relative overflow-hidden rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-300 ease-out active:scale-95 ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-500/15 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.12)]"
                    : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_4px_14px_rgba(16,185,129,0.1)]"
                }`}
              >
                <span className="relative z-10">{p.months} month</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col mb-3">
          {period?.prices.map((p) => (
            <p key={p.label} className="text-xl">
              {p.label}: {p.value} ₾
            </p>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100093207031308"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]"
          >
            <span className="relative z-10">{t("subs.contact")}</span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </a>

          <InfoModal />

          {sub.slug !== "essential" && (
            <a
              href={
                sub.slug === "ea-play"
                  ? "https://www.ea.com/ea-play"
                  : "https://www.playstation.com/en-us/ps-plus/games/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]"
            >
              <span className="relative z-10">{t("subs.gamesList")}</span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
