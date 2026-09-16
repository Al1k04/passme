import instructions from "@/data/instructions.json";
import InstructionCard from "./InstructionCard";
export default function Instructions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 mt-15">
      {instructions.map((instruction) => (
        <InstructionCard
          key={instruction.id}
          title={instruction.title}
          url={instruction.url}
        />
      ))}
    </div>
  );
}
