"use client";

import { useState } from "react";
import { Game } from "@/types/games";
import GameCards from "./GameCards";
import { IoClose, IoSearch } from "react-icons/io5";
import ScrollReveal from "@/app/components/ScrollReveal";

type Props = {
  games: Game[];
};

export default function GameSearch({ games }: Props) {
  const [query, setQuery] = useState("");

  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <ScrollReveal>
        <section className="mx-auto max-w-3xl px-4 pt-6 pb-4">
          <div className="text-center mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
              Passme Collection
            </p>

            <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-neutral-100">
              მოძებნე შენი თამაში 🎮
            </h1>
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-emerald-500/10 opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />

            <div className="relative flex items-center rounded-2xl border border-neutral-800 bg-neutral-900 p-1.5 transition-all duration-300 group-focus-within:border-emerald-500/60 group-focus-within:shadow-[0_0_30px_rgba(16,185,129,0.08)]">
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

          <div className="mt-3 flex items-center justify-between px-1 text-xs">
            <span className="text-neutral-600">
              {query ? `ძიება: "${query}"` : "ყველა ხელმისაწვდომი თამაში"}
            </span>

            <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-neutral-500">
              {filtered.length} თამაში
            </span>
          </div>
        </section>
      </ScrollReveal>

      {filtered.length > 0 ? (
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-7 p-3 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((game: Game) => (
            <GameCards key={game.id} game={game} />
          ))}
        </ul>
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
              className="mt-5 rounded-xl bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-neutral-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              ყველა თამაშის ნახვა
            </button>
          </div>
        </ScrollReveal>
      )}
    </>
  );
}
