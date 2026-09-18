import { prisma } from "@/lib/prisma";
import GameCards from "../components/GameCards";

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
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              TOP თამაშები
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              ყველაზე პოპულარული თამაშები
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
              აღმოაჩინე ჩვენი საუკეთესო თამაშების არჩევანი და აირჩიე შენი
              შემდეგი საყვარელი თამაში.
            </p>

            <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700">
              <span className="h-px w-10 bg-neutral-800" />
              PASSME DIGITAL STORE
              <span className="h-px w-10 bg-neutral-800" />
            </div>
          </div>

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
