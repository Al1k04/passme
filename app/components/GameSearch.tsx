"use client";

import { useState } from "react";
import { Game } from "@/types/games";
import GameCards from "./GameCards";
import { IoClose } from "react-icons/io5";

type Props = { games: Game[] };

export default function GameSearch({ games }: Props) {
  const [query, setQuery] = useState("");

  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="მოძებნე თამაში...."
          className="p-2 rounded-lg bg-neutral-800 text-neutral-100"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-emerald-500 transition-colors"
          >
            <IoClose className="w-5 h-5 text-white" />
          </button>
        )}
      </div>

      <ul className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto p-3">
        {filtered.map((game: Game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
}
