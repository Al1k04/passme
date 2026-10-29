"use client";

import { Game } from "@prisma/client";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import InfoModal from "./InfoModal";

export default function GameDetails({ game }: { game: Game }) {
  const { t } = useLanguage();

  const prices = [
    { label: "Primary PS5", value: game.pricePrimaryPs5, stock: game.ps5Stock },
    { label: "Primary PS4", value: game.pricePrimaryPs4, stock: game.ps4Stock },
    {
      label: "Secondary PS5",
      value: game.priceSecondaryPs5,
      stock: game.ps5Stock,
    },
    {
      label: "Secondary PS4",
      value: game.priceSecondaryPs4,
      stock: game.ps4Stock,
    },
  ].filter((p) => p.value !== null);

  const regionPrices = [
    { label: "🇺🇦 Ukraine", value: game.priceUkraine },
    { label: "🇹🇷 Turkey", value: game.priceTurkey },
  ].filter((p) => p.value !== null);

  function formatPrice(value: number | null) {
    return value === null ? "—" : `${value} ₾`;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-[120px]" />
        <div className="absolute right-0 top-[35%] h-72 w-72 rounded-full bg-emerald-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
          <span className="transition-colors hover:text-emerald-400">
            PASSME
          </span>
          <span>/</span>
          <span className="line-clamp-1 text-neutral-300">{game.title}</span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <section className="min-w-0">
            <div className="group relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_20px_80px_rgba(16,185,129,0.08)]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/10" />

                {game.isTop && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-neutral-950/80 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.15)] backdrop-blur-md">
                    <span>⭐</span>
                    TOP GAME
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                    <span className="h-px w-6 bg-emerald-400" />
                    PASSME GAMES
                  </div>

                  <h1 className="text-2xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl">
                    {game.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-4 grid max-w-lg grid-cols-2 gap-3">
              <div
                className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                  game.ps4Stock > 0
                    ? "border-emerald-500/20 bg-emerald-500/[0.05]"
                    : "border-neutral-800 bg-neutral-900/70"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    game.ps4Stock > 0
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-neutral-800 text-neutral-500"
                  }`}
                >
                  <span className="text-xs font-black">PS4</span>
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-neutral-500">PlayStation 4</p>
                  <p
                    className={`text-sm font-semibold ${
                      game.ps4Stock > 0
                        ? "text-emerald-400"
                        : "text-neutral-500"
                    }`}
                  >
                    {game.ps4Stock > 0 ? t("card.inStock") : t("card.outStock")}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                  game.ps5Stock > 0
                    ? "border-emerald-500/20 bg-emerald-500/[0.05]"
                    : "border-neutral-800 bg-neutral-900/70"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    game.ps5Stock > 0
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-neutral-800 text-neutral-500"
                  }`}
                >
                  <span className="text-xs font-black">PS5</span>
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-neutral-500">PlayStation 5</p>
                  <p
                    className={`text-sm font-semibold ${
                      game.ps5Stock > 0
                        ? "text-emerald-400"
                        : "text-neutral-500"
                    }`}
                  >
                    {game.ps5Stock > 0 ? t("card.inStock") : t("card.outStock")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex min-w-0 flex-col gap-6 lg:pt-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Game details
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                {game.title}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">
                {t("gamecard.gameCardTitleLine")}
              </p>
            </div>

            {regionPrices.length > 0 && (
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-xl backdrop-blur-sm sm:p-5">
                <h3 className="mb-4 text-lg font-bold text-white">
                  {t("gamecard.gameCardTitleLine2")}
                </h3>

                <div className="flex flex-col gap-2 min-[420px]:flex-row min-[420px]:flex-wrap">
                  {regionPrices.map((p) => (
                    <div
                      key={p.label}
                      className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-emerald-500/15 bg-neutral-950/60 px-3 py-3 min-[420px]:flex-1 sm:px-4"
                    >
                      <span className="text-sm font-medium text-neutral-300">
                        {p.label}
                      </span>
                      <span className="shrink-0 text-lg font-extrabold text-emerald-400">
                        {p.value} ₾
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-xl backdrop-blur-sm sm:p-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white">
                    {t("gamecard.gameCardOptions")}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    {t("gamecard.gamecardOptionsSubTitle")}
                  </p>
                </div>

                <span className="shrink-0 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-bold text-emerald-400">
                  {prices.length} options
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {prices.map((p) => {
                  const inStock = p.stock > 0;

                  return (
                    <div
                      key={p.label}
                      className={`group/price relative flex min-w-0 flex-col items-start gap-3 overflow-hidden rounded-xl border bg-neutral-950/60 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] hover:shadow-[0_0_20px_rgba(16,185,129,0.07)] sm:p-4 ${
                        inStock
                          ? "border-emerald-500/15"
                          : "border-neutral-800 opacity-70"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover/price:bg-emerald-500/20">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v18m5-14H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                            />
                          </svg>
                        </span>

                        <span className="break-words text-xs font-semibold leading-tight text-neutral-300 transition-colors duration-300 group-hover/price:text-white sm:text-sm">
                          {p.label}
                        </span>
                      </div>

                      <div className="flex w-full flex-col gap-1">
                        <span className="text-lg font-extrabold text-emerald-400 transition-all duration-300 group-hover/price:drop-shadow-[0_0_8px_rgba(16,185,129,0.45)] sm:text-xl">
                          {formatPrice(p.value)}
                        </span>

                        <span
                          className={`flex items-center gap-1.5 text-[11px] font-semibold ${
                            inStock ? "text-emerald-400" : "text-neutral-500"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              inStock
                                ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                                : "bg-neutral-600"
                            }`}
                          />
                          {inStock ? t("card.inStock") : t("card.outStock")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <InfoModal />

            <a
              href="https://www.facebook.com/profile.php?id=100093207031308"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-emerald-500 px-5 py-4 font-bold text-neutral-950 shadow-[0_8px_30px_rgba(16,185,129,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-[0_12px_35px_rgba(16,185,129,0.25)] active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">{t("card.contact")}</span>

              <FaFacebook className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </a>

            <p className="text-center text-xs leading-5 text-neutral-500">
              PASSME · PlayStation Games
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
