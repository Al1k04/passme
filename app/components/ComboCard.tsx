import { Combo } from "@/types/combo";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "@/app/components/ScrollReveal";

type ComboCardProps = {
  combo: Combo;
};

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <ScrollReveal>
      <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
        <div className="p-4">
          <div className="flex min-h-[64px] items-start gap-2 mb-4">
            <span className="relative flex shrink-0 items-center justify-center px-2 h-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-bold overflow-hidden">
              <span className="relative z-10">Passme</span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </span>

            <h2 className="flex-1 text-base font-semibold text-neutral-100 leading-snug">
              {combo.title}
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-lg mb-4">
            <div className="flex justify-center gap-2 p-2">
              {combo.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${combo.title} ${index + 1}`}
                  className="w-35 h-35 object-cover rounded-lg translate-y-2 scale-[1.02] opacity-90 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mt-auto">
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

            <a
              href="https://www.facebook.com/profile.php?id=100093207031308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-800 px-3 py-2 rounded-lg text-sm hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              შესაძენად აქ მოგვწერეთ
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </li>
    </ScrollReveal>
  );
}
