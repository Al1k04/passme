"use client";

import { useState } from "react";
import type { Game } from "@prisma/client";
import GameCards from "./GameCards";
import { IoClose, IoSearch } from "react-icons/io5";
import ScrollReveal from "@/app/components/ScrollReveal";
import GenreFilter from "./GenreFilter";
type Props = {
  games: Game[];
  genres: string[];
  selected?: string;
};

export default function GameSearch({ games, genres, selected }: Props) {
  const [query, setQuery] = useState("");

  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950">
      <ScrollReveal>
        <section className="relative px-4 pb-8 pt-12 sm:pt-16">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                PASSME COLLECTION
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                მოძებნე შენი თამაში 🎮
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
                მოძებნე სასურველი თამაში და აღმოაჩინე საუკეთესო შეთავაზებები
                Passme Digital Store-ში.
              </p>

              <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700">
                <span className="h-px w-10 bg-neutral-800" />
                PASSME DIGITAL STORE
                <span className="h-px w-10 bg-neutral-800" />
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="group relative w-full sm:flex-1">
                  <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-emerald-500/10 opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />

                  <div className="relative flex items-center rounded-2xl border border-neutral-800 bg-neutral-900/70 p-1.5 shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-all duration-300 group-focus-within:border-emerald-500/60 group-focus-within:shadow-[0_0_30px_rgba(16,185,129,0.08)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center text-neutral-500 transition-colors duration-300 group-focus-within:text-emerald-400">
                      <IoSearch className="h-5 w-5" />
                    </div>

                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="მოძებნე თამაში..."
                      className="min-w-0 flex-1 bg-transparent px-1 text-sm text-neutral-100 outline-none placeholder:text-neutral-600 sm:text-base"
                    />

                    {query && (
                      <button
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-neutral-500 transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-950"
                      >
                        <IoClose className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
                <GenreFilter genres={genres} selected={selected} />
              </div>

              <div className="mt-3 flex items-center justify-between px-1 text-xs">
                <span className="text-neutral-600">
                  {query ? `ძიება: "${query}"` : "ყველა ხელმისაწვდომი თამაში"}
                </span>

                <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-neutral-500">
                  {filtered.length} თამაში
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {filtered.length > 0 ? (
        <section className="relative mx-auto max-w-7xl px-4 pb-16">
          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/30 p-3 shadow-[0_0_60px_rgba(0,0,0,0.3)] sm:p-5">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <ul className="grid grid-cols-1 gap-7 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((game) => (
                <GameCards key={game.id} game={game} />
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <ScrollReveal>
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-4xl shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              🎮
            </div>

            <h2 className="mt-5 text-xl font-bold text-neutral-200">
              თამაში ვერ მოიძებნა
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              სცადე სხვა სახელით მოძებნა.
            </p>

            <button
              onClick={() => setQuery("")}
              className="group relative mt-5 overflow-hidden rounded-xl bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-neutral-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <span className="relative z-10">ყველა თამაშის ნახვა</span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </button>
          </div>
        </ScrollReveal>
      )}
    </main>
  );
}
