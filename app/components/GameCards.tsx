"use client";

import { Game } from "@prisma/client";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

type GameCardProps = {
  game: Game;
  showPs4?: boolean;
};

export default function GameCards({ game, showPs4 = true }: GameCardProps) {
  const { t } = useLanguage();

  const prices = [
    { label: "Primary PS5", value: game.pricePrimaryPs5 },
    { label: "Primary PS4", value: game.pricePrimaryPs4, hidden: !showPs4 },
    { label: "Secondary PS5", value: game.priceSecondaryPs5 },
  ].filter((p) => p.value !== null && !p.hidden);

  return (
    <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      <div className="flex h-full flex-col p-4">
        <div className="mb-4 flex min-h-[64px] items-start gap-3">
          <span className="relative flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 font-bold text-emerald-400">
            <span className="relative z-10">Passme</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </span>

          <h2 className="text-lg font-semibold leading-snug text-neutral-100">
            {game.title}
          </h2>
        </div>

        <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
          />

          {game.isTop && (
            <span className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/90 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-neutral-950 shadow-[0_0_20px_rgba(16,185,129,0.5)] backdrop-blur">
              ⭐ TOP
            </span>
          )}
        </div>

        <div className="mb-3 space-y-2 text-sm">
          {prices.map((p) => (
            <div
              key={p.label}
              className="flex items-center justify-between gap-2 rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2"
            >
              <span className="text-neutral-400">{p.label}</span>
              <span className="font-bold text-emerald-400">{p.value} ₾</span>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${game.ps4Stock > 0 ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-neutral-700 bg-neutral-800 text-neutral-500"}`}
          >
            PS4: {game.ps4Stock > 0 ? t("card.inStock") : t("card.outStock")}
          </span>
          <span
            className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${game.ps5Stock > 0 ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-neutral-700 bg-neutral-800 text-neutral-500"}`}
          >
            PS5: {game.ps5Stock > 0 ? t("card.inStock") : t("card.outStock")}
          </span>
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=100093207031308"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          {t("card.contact")}
          <FaFacebook className="h-5 w-5" />
        </a>
      </div>
    </li>
  );
}
