import { prisma } from "@/lib/prisma";
import GameSearch from "../components/GameSearch";
import GenreFilter from "../components/GenreFilter";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function GameCatalogue({
  searchParams,
}: {
  searchParams: Promise<{ genre?: string }>;
}) {
  const params = await searchParams;
  const genre = params.genre;
  console.log(genre);

  const games = await prisma.game.findMany({
    where: genre ? { genres: { has: genre } } : {},
    orderBy: { title: "asc" },
  });

  const allGames = await prisma.game.findMany();
  const genres = [...new Set(allGames.flatMap((game) => game.genres))];

  return (
    <div>
      <GameSearch games={games} genres={genres} selected={genre} />
    </div>
  );
}
