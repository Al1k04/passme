import games from "@/data/games.json";
import GameSearch from "../components/GameSearch";
export default function GameCatalogue() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4 mt-4">
        თამაშების კატალოგი
      </h1>
      <GameSearch games={games} />
    </div>
  );
}
