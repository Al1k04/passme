"use client";

import { Game } from "@prisma/client";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import InfoModal from "./InfoModal";

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
    <li className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090b0a] shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_55px_rgba(16,185,129,0.13)]">
      <Link
        href={`/games/${game.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-neutral-900"
      >
        <Image
          src={game.image}
          alt={game.title}
          fill
          quality={90}
          sizes="(max-width: 639px) 48vw, (max-width: 1023px) 45vw, 240px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent via-45% to-black/95" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />

        <div className="absolute left-2 top-2 flex gap-1.5 sm:left-3 sm:top-3 sm:gap-2">
          {game.ps4Stock > 0 && (
            <span className="rounded-lg border border-white/15 bg-black/65 px-2 py-1 text-[9px] font-bold tracking-wide text-white shadow-lg backdrop-blur-xl sm:text-[10px]">
              PS4
            </span>
          )}
          {game.ps5Stock > 0 && (
            <span className="rounded-lg border border-emerald-300/30 bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wide text-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.12)] backdrop-blur-xl sm:text-[10px]">
              PS5
            </span>
          )}
        </div>

        {game.isTop && (
          <span className="absolute right-2 top-2 rounded-lg border border-amber-300/30 bg-black/65 px-2 py-1 text-[9px] font-black tracking-wide text-amber-200 shadow-lg backdrop-blur-xl sm:right-3 sm:top-3 sm:text-[10px]">
            ★ TOP
          </span>
        )}

        <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-5 bg-emerald-400 sm:w-7" />
            <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-emerald-300 sm:text-[10px]">
              PASSME DIGITAL
            </span>
          </div>

          <h2 className="line-clamp-2 text-base font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors duration-300 group-hover:text-emerald-100 sm:text-xl">
            {game.title}
          </h2>

          <div className="mt-3 h-[2px] w-9 rounded-full bg-emerald-400/80 transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-300" />
        </div>
      </Link>

      <div className="relative flex flex-1 flex-col p-2.5 sm:p-4">
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-500/[0.04] blur-2xl" />

        <div className="relative mb-2 space-y-1.5 sm:mb-3 sm:space-y-2">
          {prices.map((p, index) => (
            <div
              key={p.label}
              className={`flex min-w-0 items-center justify-between gap-1.5 rounded-xl border px-2.5 py-2.5 transition-all duration-300 sm:px-3 sm:py-3 ${
                index === 0
                  ? "border-emerald-400/25 bg-gradient-to-r from-emerald-500/[0.13] via-emerald-500/[0.06] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-emerald-400/40"
                  : "border-white/[0.06] bg-white/[0.025] hover:border-white/[0.12] hover:bg-white/[0.04]"
              }`}
            >
              <span className="min-w-0 text-[10px] font-medium leading-tight text-neutral-400 sm:text-xs">
                {p.label}
              </span>

              <span
                className={`shrink-0 text-xs font-extrabold tracking-tight sm:text-sm ${
                  index === 0 ? "text-emerald-300" : "text-neutral-100"
                }`}
              >
                {p.value} ₾
              </span>
            </div>
          ))}
        </div>

        {game.oldPrice !== null && (
          <div className="mb-2 flex justify-end px-1 sm:mb-3">
            <span className="text-xs font-medium text-neutral-500 line-through decoration-neutral-600 sm:text-sm">
              {game.oldPrice} ₾
            </span>
          </div>
        )}

        <div className="relative mb-2 grid grid-cols-2 gap-1.5 sm:mb-3 sm:gap-2">
          <span
            className={`flex items-center justify-center gap-1 rounded-lg border px-1 py-2 text-[9px] font-semibold sm:text-xs ${
              game.ps4Stock > 0
                ? "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-300"
                : "border-white/[0.06] bg-white/[0.025] text-neutral-500"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                game.ps4Stock > 0
                  ? "bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.65)]"
                  : "bg-neutral-600"
              }`}
            />
            PS4: {game.ps4Stock > 0 ? t("card.inStock") : t("card.outStock")}
          </span>

          <span
            className={`flex items-center justify-center gap-1 rounded-lg border px-1 py-2 text-[9px] font-semibold sm:text-xs ${
              game.ps5Stock > 0
                ? "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-300"
                : "border-white/[0.06] bg-white/[0.025] text-neutral-500"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                game.ps5Stock > 0
                  ? "bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.65)]"
                  : "bg-neutral-600"
              }`}
            />
            PS5: {game.ps5Stock > 0 ? t("card.inStock") : t("card.outStock")}
          </span>
        </div>

        <div className="relative mb-2 sm:mb-3">
          <InfoModal />
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=100093207031308"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-auto flex min-h-10 items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-emerald-400/25 bg-gradient-to-r from-emerald-500/[0.12] via-emerald-500/[0.06] to-transparent px-2 py-2.5 text-[10px] font-bold text-emerald-300 transition-all duration-300 hover:border-emerald-400/50 hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-600 hover:text-neutral-950 hover:shadow-[0_0_24px_rgba(16,185,129,0.16)] sm:gap-2 sm:py-3 sm:text-sm"
        >
          <span className="truncate">{t("card.contact")}</span>
          <FaFacebook className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        </a>
      </div>
    </li>
  );
}
