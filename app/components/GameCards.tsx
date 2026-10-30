"use client";

import { useState } from "react";
import { Game } from "@prisma/client";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

type GameCardProps = {
  game: Game;
  showPs4?: boolean;
};

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100093207031308";

export default function GameCards({ game, showPs4 = true }: GameCardProps) {
  const { t } = useLanguage();

  const variants = [
    { key: "primaryPs5", label: "Prim PS5", value: game.pricePrimaryPs5 },
    {
      key: "secondaryPs5",
      label: "Sec PS5",
      value: game.priceSecondaryPs5,
    },
    ...(showPs4
      ? [
          {
            key: "primaryPs4",
            label: "Prim PS4",
            value: game.pricePrimaryPs4,
          },
          {
            key: "secondaryPs4",
            label: "Sec PS4",
            value: game.priceSecondaryPs4,
          },
        ]
      : []),
  ].filter((v) => v.value !== null);

  const regionPrices = [
    { key: "ua", flag: "🇺🇦", value: game.priceUkraine },
    { key: "tr", flag: "🇹🇷", value: game.priceTurkey },
  ].filter((r) => r.value !== null && r.value !== undefined);

  const [selectedKey, setSelectedKey] = useState(variants[0]?.key);
  const selected = variants.find((v) => v.key === selectedKey) ?? variants[0];

  const discount =
    game.oldPrice && game.pricePrimaryPs5
      ? Math.round((1 - game.pricePrimaryPs5 / game.oldPrice) * 100)
      : null;

  return (
    <ScrollReveal>
      <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b0d0c] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_18px_50px_rgba(16,185,129,0.22)] sm:rounded-2xl">
        <div className="relative aspect-square shrink-0 overflow-hidden sm:aspect-[4/5]">
          <Link href={`/games/${game.slug}`} className="absolute inset-0 block">
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              quality={100}
              sizes="(max-width: 639px) 48vw, (max-width: 1023px) 45vw, 240px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0b0d0c]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950/60 to-transparent" />
            <div className="absolute left-2 top-2 z-10 flex flex-wrap gap-1.5 sm:left-3 sm:top-3">
              {game.oldPrice !== null && (
                <span className="rounded-md bg-gradient-to-r from-emerald-400 to-emerald-600 px-1.5 py-0.5 text-[10px] font-black tracking-wide text-neutral-950 shadow-lg shadow-emerald-500/30 sm:rounded-lg sm:px-2.5 sm:py-1 sm:text-xs">
                  SALE{discount !== null ? ` -${discount}%` : ""}
                </span>
              )}
              {game.isTop && (
                <span className="rounded-md border border-amber-300/40 bg-black/50 px-1.5 py-0.5 text-[10px] font-black tracking-wide text-amber-200 backdrop-blur-md sm:rounded-lg sm:px-2.5 sm:py-1 sm:text-xs">
                  ★ TOP
                </span>
              )}
            </div>

            <div className="absolute inset-x-2 bottom-2 z-10 flex flex-col gap-1 sm:inset-x-4 sm:bottom-3 sm:gap-1.5 sm:pr-12">
              <h2 className="line-clamp-2 text-sm font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-lg">
                {game.title}
              </h2>

              {regionPrices.length > 0 && (
                <div className="flex flex-col items-stretch gap-1 sm:items-start">
                  {regionPrices.map((r) => (
                    <span
                      key={r.key}
                      className="flex max-w-full items-center justify-between gap-1 whitespace-nowrap rounded-md border border-white/15 bg-black/55 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300 backdrop-blur-md sm:justify-start sm:gap-1.5 sm:text-xs"
                    >
                      <span className="min-w-0 truncate font-semibold leading-none text-white/90">
                        პირად ექაუნთზე
                      </span>
                      <span className="flex shrink-0 items-center gap-0.5 sm:gap-1">
                        <span className="text-[10px] leading-none sm:text-xs">
                          {r.flag}
                        </span>
                        {r.value} ₾
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("card.contact")}
            title={t("card.contact")}
            className="absolute right-1.5 top-1.5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/50 bg-black/50 text-emerald-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400 hover:text-neutral-950 hover:shadow-[0_0_22px_rgba(16,185,129,0.5)] sm:bottom-3 sm:right-4 sm:top-auto sm:h-10 sm:w-10"
          >
            <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>

        <div className="relative flex flex-1 flex-col gap-2 p-1.5 sm:gap-3 sm:p-3">
          {variants.length > 0 && (
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
              {variants.map((v) => {
                const active = v.key === selected?.key;
                return (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => setSelectedKey(v.key)}
                    className={`flex min-w-0 items-center justify-between gap-0.5 rounded-lg border px-1 py-1.5 text-left transition-all duration-300 sm:gap-1.5 sm:rounded-xl sm:px-2 sm:py-2.5 ${
                      active
                        ? "border-emerald-400/70 bg-emerald-400/[0.12] shadow-[0_0_16px_rgba(16,185,129,0.22)]"
                        : "border-white/[0.07] bg-white/[0.025] hover:border-emerald-400/30"
                    }`}
                  >
                    <span className="whitespace-nowrap text-[9px] leading-tight tracking-tight text-neutral-400 sm:text-[11px] sm:tracking-normal">
                      {v.label}
                    </span>
                    <span
                      className={`shrink-0 whitespace-nowrap text-[10px] font-extrabold leading-tight tracking-tight sm:text-xs sm:tracking-normal ${
                        active ? "text-emerald-300" : "text-neutral-200"
                      }`}
                    >
                      {v.value} ₾
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </li>
    </ScrollReveal>
  );
}
