import games from "@/data/games.json";
import { notFound } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function GamePage({ params }: Props) {
  const { slug } = await params;

  const foundGame = games.find((g) => g.slug === slug);

  if (!foundGame) notFound();

  return (
    <div className="flex flex-col text-center max-w-md mx-auto my-20 px-4">
      <Image
        src={foundGame.image}
        alt={foundGame.title}
        width={448}
        height={252}
        className="w-3/4 max-w-md rounded-lg mx-auto mb-2"
      />
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">{foundGame.title}</h2>
      {foundGame.genres.map((genre) => (
        <span className="text-2xl mb-2" key={genre}>
          {genre}
        </span>
      ))}

      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3 mt-5">
        <span className="text-emerald-400 font-bold text-4xl">
          {foundGame.price} ₾
        </span>
        <div>
          {foundGame.oldPrice && (
            <span className="line-through text-neutral-500 text-xl">
              {foundGame.oldPrice} ₾
            </span>
          )}
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=100093207031308"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-neutral-800 p-2 rounded-lg cursor-pointer hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out"
        >
          შესაძენად აქ მოგვწერეთ
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
      <Link
        className=" bg-neutral-800 p-2 rounded-lg cursor-pointer hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out mt-7"
        href="/games"
      >
        უკან დაბრუნება
      </Link>
    </div>
  );
}
