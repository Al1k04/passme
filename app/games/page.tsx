import { prisma } from "@/lib/prisma";
import GameSearch from "../components/GameSearch";

export const dynamic = "force-dynamic";
export default async function GameCatalogue() {
  const games = await prisma.game.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <div>
      <GameSearch games={games} />
    </div>
  );
}
