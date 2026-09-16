import { Game } from "@/types/games";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "@/app/components/ScrollReveal";

type GameCardPros = {
  game: Game;
};

export default function GameCards({ game }: GameCardPros) {
  return (
    <ScrollReveal>
      <li className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
        <div className="p-4">
          <div className="flex items-start gap-3 mb-4">
            <span className="relative flex items-center justify-center px-3 h-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold overflow-hidden">
              <span className="relative z-10">Passme</span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </span>

            <h2 className="text-lg font-semibold text-neutral-100 leading-snug">
              {game.title}
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src={game.image}
              alt={game.title}
              className="w-full aspect-video object-cover translate-y-3 scale-[1.02] opacity-90 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-emerald-400 font-bold text-2xl">
              {game.price} ₾
            </span>

            {game.oldPrice && (
              <span className="text-sm text-neutral-500 line-through">
                {game.oldPrice} ₾
              </span>
            )}
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=100093207031308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            შესაძენად დაგვიკავშირდით
            <FaFacebook className="h-5 w-5" />
          </a>
        </div>
      </li>
    </ScrollReveal>
  );
}
