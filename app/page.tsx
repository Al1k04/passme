import Slider from "./components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl text-center font-bold mt-4 text-emerald-500">
        🎮 PASSME – Back to the School ! ⚡️
      </h1>
      <Slider />
    </div>
  );
}
