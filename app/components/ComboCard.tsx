import { Combo } from "@/types/combo";
import { FaFacebook } from "react-icons/fa";
import ScrollReveal from "@/app/components/ScrollReveal";

type ComboCardProps = {
  combo: Combo;
};

export default function ComboCard({ combo }: ComboCardProps) {
  const count = combo.images.length;

  return (
    <ScrollReveal>
      <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/40 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.14)]">
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-36 w-44 -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-500/[0.03] via-transparent to-transparent" />

        <div className="relative flex h-full flex-col p-4">
          <div className="relative flex min-h-[64px] items-start gap-2 mb-4">
            <span className="relative flex shrink-0 items-center justify-center px-2 h-8 rounded-lg border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 text-emerald-300 text-sm font-black overflow-hidden shadow-[0_0_18px_rgba(16,185,129,0.1)]">
              <span className="relative z-10 tracking-wide">Passme</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </span>

            <h2 className="relative flex-1 text-base font-black leading-snug tracking-tight text-neutral-100">
              {combo.title}
            </h2>
          </div>

          <div className="relative mb-4 overflow-hidden rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-lg bg-gradient-to-t from-neutral-950/30 via-transparent to-emerald-500/[0.04]" />

            <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

            <div
              className={
                count === 1
                  ? "flex justify-center"
                  : count === 2
                    ? "flex justify-center gap-1.5"
                    : "grid grid-cols-3 gap-1.5"
              }
            >
              {combo.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-[3/4] overflow-hidden rounded-lg ${
                    count === 1 ? "w-1/2" : count === 2 ? "w-1/3" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${combo.title} ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mt-auto">
            <div className="flex items-center gap-2 shrink-0">
              <span className="whitespace-nowrap text-emerald-400 font-black text-2xl drop-shadow-[0_0_8px_rgba(16,185,129,0.15)]">
                {combo.price} ₾
              </span>

              {combo.oldPrice && (
                <span className="line-through text-neutral-500 text-sm whitespace-nowrap">
                  {combo.oldPrice} ₾
                </span>
              )}
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=100093207031308"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 overflow-hidden rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]"
            >
              <span className="relative z-10">შესაძენად აქ მოგვწერეთ</span>
              <FaFacebook className="relative z-10 w-5 h-5" />
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      </li>
    </ScrollReveal>
  );
}
