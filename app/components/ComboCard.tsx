import { Combo } from "@/types/combo";

type ComboCardProps = {
  combo: Combo;
};

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <li className="flex flex-col gap-1 bg-neutral-900 border border-neutral-800 p-3 rounded-lg hover:border-emerald-500 transition-colors ease-in-out">
      <div className="flex justify-center gap-2 mb-4">
        {combo.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${combo.title} ${index + 1}`}
            className="w-35 h-35 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <span>{combo.id}.</span>

        <h2 className="text-neutral-100">{combo.title}</h2>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-2xl">
            {combo.price} ₾
          </span>

          {combo.oldPrice && (
            <span className="line-through text-neutral-500 text-sm">
              {combo.oldPrice} ₾
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
