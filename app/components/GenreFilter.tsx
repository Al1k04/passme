"use client";
import { useRouter } from "next/navigation";

type Props = {
  genres: string[];
  selected?: string;
};

export default function GenreFilter({ genres, selected }: Props) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "") {
      router.push("/games");
    } else {
      router.push("/games?genre=" + value);
    }
  };
  return (
    <div>
      <select
        value={selected ?? ""}
        onChange={handleChange}
        className="rounded-xl w-full sm:w-auto border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-neutral-100 outline-none cursor-pointer transition-colors focus:border-emerald-500/60"
      >
        <option value="">ყველა ჟანრი</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
