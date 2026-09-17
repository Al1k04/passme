import games from "@/data/games.json";
import GameSearch from "../components/GameSearch";

export default function GameCatalogue() {
  return (
    <div>
      <GameSearch games={games} />
    </div>
  );
}
