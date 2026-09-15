import combos from "@/data/combo.json";
import { notFound } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ComboPage({ params }: Props) {
  const { slug } = await params;

  const foundCombo = combos.find((combo) => combo.slug === slug);

  if (!foundCombo) {
    notFound();
  }

  const imagesCount = foundCombo.images.length;

  return (
    <div className="flex flex-col text-center max-w-4xl mx-auto my-20 px-4">
      <div
        className={`grid grid-cols-1 ${
          imagesCount > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
        } ${
          imagesCount > 2 ? "lg:grid-cols-3" : ""
        } gap-4 justify-items-center items-center`}
      >
        {foundCombo.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${foundCombo.title} ${index + 1}`}
            width={448}
            height={252}
            className={`rounded-lg ${
              imagesCount === 1 ? "w-64 sm:w-80" : "w-64 sm:w-full max-w-xs"
            }`}
          />
        ))}
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold mb-5 mt-6">
        {foundCombo.title}
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3 mt-5">
        <span className="text-emerald-400 font-bold text-4xl">
          {foundCombo.price} ₾
        </span>

        {foundCombo.oldPrice && (
          <span className="line-through text-neutral-500 text-xl">
            {foundCombo.oldPrice} ₾
          </span>
        )}

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
        className="bg-neutral-800 p-2 rounded-lg cursor-pointer hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out mt-7"
        href="/combo"
      >
        უკან დაბრუნება
      </Link>
    </div>
  );
}
