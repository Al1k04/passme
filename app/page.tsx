import Slider from "./components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-4 text-emerald-500">
        ☝️ დაზოგე 75% მდე PASSME-ზე და მიიღე ორი 1-ის ნაცვლად
      </h1>
      <Slider />
      <div className="flex justify-center mt-10">
        <button className=" bg-neutral-800 p-2 rounded-lg cursor-pointer hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out6"></button>
      </div>
    </div>
  );
}
