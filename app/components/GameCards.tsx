import { Game } from "@/types/games";
import Link from "next/link";
type GameCardPros = { game: Game };

export default function GameCards(props: GameCardPros) {
  return (
    <li className="flex flex-col gap-1 bg-neutral-900 border border-neutral-800 p-3 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors ease-in-out">
      <Link
        href={`/games/${props.game.slug}`}
        className="flex flex-col gap-1 h-full"
      >
        <div className="flex gap-2 mb-4">
          <span>{props.game.id}.</span>
          <h2 className="text-neutral-100">{props.game.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-2xl">
            {props.game.price} ₾
          </span>
          {props.game.oldPrice && (
            <span className="line-through text-neutral-500 text-sm">
              {props.game.oldPrice} ₾
            </span>
          )}
        </div>
      </Link>
    </li>
  );
}
