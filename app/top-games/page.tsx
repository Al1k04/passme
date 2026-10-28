import { prisma } from "@/lib/prisma";
import GameCards from "../components/GameCards";

export const dynamic = "force-dynamic";

export default async function TopGames() {
  const games = await prisma.game.findMany({
    where: { isTop: true },
    orderBy: { pricePrimaryPs5: "desc" },
  });

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950">
      <section className="relative px-4 pb-16 pt-12 sm:pt-16">
        <div className="relative mx-auto max-w-7xl">
          <h1 className="mb-10 text-center text-3xl font-black text-white sm:text-5xl">
            TOP GAMES
          </h1>
          <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <GameCards key={game.id} game={game} showPs4={false} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
