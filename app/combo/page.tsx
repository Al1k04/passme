import Combos from "../components/Combos";
import combos from "@/data/combo.json";

export default function ComboPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4 mt-4">
        კომბო ექაუნთები
      </h1>

      <Combos combos={combos} />
    </div>
  );
}
