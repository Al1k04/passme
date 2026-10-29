"use client";

import { useState } from "react";
import { Game } from "@prisma/client";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

type GameCardProps = {
  game: Game;
  showPs4?: boolean;
};

export default function GameCards({ game, showPs4 = true }: GameCardProps) {
  const { t } = useLanguage();

  const variants = [
    { key: "primaryPs5", label: "Primary PS5", value: game.pricePrimaryPs5 },
    {
      key: "secondaryPs5",
      label: "Secondary PS5",
      value: game.priceSecondaryPs5,
    },
    ...(showPs4
      ? [
          {
            key: "primaryPs4",
            label: "Primary PS4",
            value: game.pricePrimaryPs4,
          },
          {
            key: "secondaryPs4",
            label: "Secondary PS4",
            value: game.priceSecondaryPs4,
          },
        ]
      : []),
  ].filter((v) => v.value !== null);

  // Региональные цены: показываются под тайтлом только если указаны в базе
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

  const stockBadge = (label: string, qty: number) => (
    <span
      className={`whitespace-nowrap rounded border px-1 py-px text-[9px] font-semibold sm:rounded-md sm:px-2 sm:py-1 sm:text-[11px] ${
        qty > 0
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
          : "border-white/[0.06] bg-white/[0.03] text-neutral-500"
      }`}
    >
      {label}: {qty > 0 ? t("card.inStock") : t("card.outStock")}
    </span>
  );

  return (
    <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b0d0c] shadow-[0_12px_35px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_20px_55px_rgba(16,185,129,0.22)] sm:rounded-2xl">
      {/* Cover: квадрат на телефоне, 3/4 на десктопе */}
      <Link
        href={`/games/${game.slug}`}
        className="relative block aspect-[3/2] shrink-0 overflow-hidden sm:aspect-[3/4]"
      >
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* gradients: dark top for badges, emerald-tinted bottom into card */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-[#0b0d0c]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950/50 to-transparent" />

        {/* Badges */}
        <div className="absolute left-2 top-2 z-10 flex flex-wrap gap-1.5 sm:left-3 sm:top-3 sm:gap-2">
          {game.oldPrice !== null && (
            <span className="rounded-md bg-gradient-to-r from-emerald-400 to-emerald-600 px-1.5 py-0.5 text-[10px] font-black tracking-wide text-neutral-950 shadow-lg shadow-emerald-500/30 sm:rounded-lg sm:px-2.5 sm:py-1 sm:text-xs">
              SALE{discount !== null ? ` -${discount}%` : ""}
            </span>
          )}
          {game.isTop && (
            <span className="rounded-md border border-amber-300/40 bg-gradient-to-r from-amber-400/25 to-amber-600/20 px-1.5 py-0.5 text-[10px] font-black tracking-wide text-amber-200 shadow-lg backdrop-blur-md sm:rounded-lg sm:px-2.5 sm:py-1 sm:text-xs">
              ★ TOP
            </span>
          )}
        </div>

        {/* Old price bar */}
        {game.oldPrice !== null && (
          <div className="absolute inset-x-3 top-12 z-10 hidden items-center justify-between rounded-lg border border-emerald-400/20 bg-black/55 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur-md sm:flex">
            <span>Old price</span>
            <span className="font-bold text-neutral-400 line-through">
              {game.oldPrice} ₾
            </span>
          </div>
        )}

        {/* Title + region prices */}
        <div className="absolute inset-x-2.5 bottom-2 z-10 flex flex-col gap-1 sm:inset-x-4 sm:bottom-3 sm:gap-2">
          <h2 className="line-clamp-2 text-sm font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-xl">
            {game.title}
          </h2>

          {regionPrices.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {regionPrices.map((r) => (
                <span
                  key={r.key}
                  className="flex items-center gap-1 whitespace-nowrap rounded-md border border-white/15 bg-black/55 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md sm:gap-1.5 sm:rounded-lg sm:px-2 sm:py-1 sm:text-xs"
                >
                  <span className="text-xs leading-none sm:text-sm">
                    {r.flag}
                  </span>
                  <span className="text-emerald-300">{r.value} ₾</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="relative flex flex-1 flex-col gap-1.5 p-2 sm:gap-3 sm:p-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-emerald-500/[0.07] to-transparent sm:h-24" />

        <p className="relative hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400/70 sm:block">
          PlayStation · Passme
        </p>

        {/* Variant selector */}
        {variants.length > 0 && (
          <div className="relative grid grid-cols-2 gap-1 sm:gap-2">
            {variants.map((v) => {
              const active = v.key === selected?.key;
              return (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setSelectedKey(v.key)}
                  className={`rounded-md border px-1.5 py-0.5 text-left transition-all duration-300 sm:rounded-xl sm:px-3 sm:py-2 ${
                    active
                      ? "border-emerald-400/70 bg-emerald-400/[0.12] text-white shadow-[0_0_18px_rgba(16,185,129,0.22)]"
                      : "border-white/[0.07] bg-white/[0.025] text-neutral-400 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05]"
                  }`}
                >
                  <span className="block whitespace-nowrap text-[9px] leading-tight sm:text-xs">
                    {v.label}
                  </span>
                  <span
                    className={`block whitespace-nowrap text-[11px] font-extrabold leading-tight sm:text-sm ${
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

        {/* Stock */}
        <div className="relative flex flex-wrap gap-1.5 sm:gap-2">
          {stockBadge("PS5", game.ps5Stock)}
          {showPs4 && stockBadge("PS4", game.ps4Stock)}
        </div>

        {/* Footer: selected price + action */}
        <div className="relative mt-auto flex items-center justify-between gap-2 pt-0.5 sm:gap-3 sm:pt-2">
          <div className="flex flex-col leading-none">
            {game.oldPrice !== null && (
              <span className="text-[9px] font-bold text-neutral-500 line-through sm:hidden">
                {game.oldPrice} ₾
              </span>
            )}
            <span className="whitespace-nowrap bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-base font-black tracking-tight text-transparent sm:text-2xl">
              {selected?.value ?? "—"} ₾
            </span>
          </div>
          <Link
            href={`/games/${game.slug}`}
            className="flex min-w-0 flex-1 items-center justify-center gap-1 rounded-md border border-emerald-400/30 bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 px-1.5 py-1 text-center text-[9px] font-bold leading-tight text-emerald-300 transition-all duration-300 hover:from-emerald-400 hover:to-emerald-600 hover:text-neutral-950 hover:shadow-[0_0_22px_rgba(16,185,129,0.4)] sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-xs"
          >
            <span>{t("card.contact")}</span>
            <FaFacebook className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </div>
    </li>
  );
}
