import Slider from "./components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl text-center font-bold mt-4 text-emerald-500">
        🎮 PASSME – Back to the School ! ⚡️
      </h1>
      <Slider />
      <Link
        href="/review"
        className="block w-fit mb-5 mx-auto mt-4 p-2 bg-neutral-800 rounded-lg border border-emerald-500 hover:text-emerald-500 transition-colors"
      >
        შეფასების დატოვება
      </Link>
    </div>
  );
}
