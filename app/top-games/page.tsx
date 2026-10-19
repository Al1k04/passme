import { prisma } from "@/lib/prisma";
import GameCards from "../components/GameCards";
import TopGamesHeader from "../components/TopGamesHeader";

export const dynamic = "force-dynamic";

export default async function TopGames() {
  const games = await prisma.game.findMany({
    orderBy: { price: "desc" },
    where: { isTop: true },
  });

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950">
      <section className="relative px-4 pb-16 pt-12 sm:pt-16">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <TopGamesHeader />
          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/30 p-3 shadow-[0_0_60px_rgba(0,0,0,0.3)] sm:p-5">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {games.map((game) => (
                <GameCards key={game.id} game={game} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
