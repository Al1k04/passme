import { Game } from "@/types/games";
import { FaFacebook } from "react-icons/fa";

type GameCardPros = {
  game: Game;
};

export default function GameCards({ game }: GameCardPros) {
  return (
    <li className="flex flex-col gap-1 bg-neutral-900 border border-neutral-800 p-3 rounded-lg hover:border-emerald-500 transition-colors ease-in-out">
      <div className="mb-4">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-50 object-cover rounded-lg"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <span>{game.id}.</span>

        <h2 className="text-neutral-100">{game.title}</h2>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-2xl">
          {game.price} ₾
        </span>

        {game.oldPrice && (
          <span className="line-through text-neutral-500 text-sm">
            {game.oldPrice} ₾
          </span>
        )}
      </div>

      <a
        href="https://www.facebook.com/profile.php?id=100093207031308"
        target="_blank"
        rel="noopener noreferrer"
        className="self-end flex items-center gap-2 bg-neutral-800 px-3 py-2 rounded-lg text-sm hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out"
      >
        შესაძენად დაგვიკავშირდით
        <FaFacebook className="w-5 h-5" />
      </a>
    </li>
  );
}
