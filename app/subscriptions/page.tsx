import subscriptions from "@/data/subscriptions.json";
import InfoModal from "../components/InfoModal";
import ScrollReveal from "../components/ScrollReveal";

export default function SubscriptionsPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">PS Plus</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
        {subscriptions.map((sub) => (
          <ScrollReveal key={sub.id}>
            <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
              <div className="p-4">
                <div className="flex items-start gap-2 mb-4 min-h-[64px]">
                  <span className="relative flex shrink-0 items-center justify-center px-2 h-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-bold overflow-hidden">
                    <span className="relative z-10">Passme</span>

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </span>

                  <div>
                    <h2 className="text-base font-semibold text-neutral-100 leading-snug">
                      {sub.title}
                    </h2>

                    <span className="text-sm text-neutral-400">
                      {sub.duration}
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={sub.images[0]}
                    alt={sub.title}
                    className="w-full h-70 object-cover translate-y-2 scale-[1.02] opacity-90 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                <ul className="list-disc list-inside text-neutral-300 space-y-1 mb-4">
                  {sub.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="space-y-1 mb-4">
                  {sub.prices.map((p) => (
                    <p key={p.label} className="font-bold">
                      {p.label}:{" "}
                      <span className="text-emerald-400">{p.value} ₾</span>
                    </p>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100093207031308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    შესაძენად დაგვიკავშირდით
                  </a>

                  <InfoModal />

                  {sub.slug !== "essential" && (
                    <a
                      href={
                        sub.slug === "ea-play"
                          ? "https://www.ea.com/ea-play"
                          : "https://www.playstation.com/en-us/ps-plus/games/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    >
                      თამაშების სია
                    </a>
                  )}
                </div>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </div>
  );
}
