import { Combo } from "@/types/combo";
import ComboCard from "./ComboCard";

type Props = {
  combos: Combo[];
};

export default function Combos({ combos }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
      {combos.map((combo) => (
        <ComboCard key={combo.id} combo={combo} />
      ))}
    </ul>
  );
}
