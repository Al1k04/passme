import { Combo } from "@/types/combo";
import { FaFacebook } from "react-icons/fa";

type ComboCardProps = {
  combo: Combo;
};

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <li className="flex flex-col gap-1 bg-neutral-900 border border-neutral-800 p-3 rounded-lg hover:border-emerald-500 transition-colors ease-in-out">
      {/* Фотографии в один ряд */}
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

      {/* Название */}
      <div className="flex gap-2 mb-4">
        <span>{combo.id}.</span>

        <h2 className="text-neutral-100">{combo.title}</h2>
      </div>

      {/* Цена + кнопка */}
      <div className="flex items-center justify-between gap-2 mt-auto">
        {/* Цена */}
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

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100093207031308"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-neutral-800 p-2 rounded-lg cursor-pointer hover:bg-emerald-500 hover:text-neutral-900 transition-colors ease-in-out"
        >
          <span>შესაძენად აქ მოგვწერეთ</span>
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </li>
  );
}
