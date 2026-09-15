import Image from "next/image";

export default function Combo() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">კომბო ექაუნთები</h1>
      <Image
        src="/game-photos/combo.jpg"
        alt="Combo games"
        width={896}
        height={500}
        className="w-full max-w-2xl mx-auto rounded-lg"
      />
    </div>
  );
}
