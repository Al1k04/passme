import subscriptions from "@/data/subscriptions.json";
import InfoModal from "../components/InfoModal";
import ScrollReveal from "../components/ScrollReveal";

export default function SubscriptionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950">
      <section className="relative px-4 pb-16 pt-12 sm:pt-16">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              PLAYSTATION PLUS
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              PS Plus გამოწერები
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
              აირჩიე შენთვის სასურველი PS Plus გამოწერა და მიიღე წვდომა
              საუკეთესო თამაშებსა და შესაძლებლობებზე.
            </p>

            <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700">
              <span className="h-px w-10 bg-neutral-800" />
              PASSME DIGITAL STORE
              <span className="h-px w-10 bg-neutral-800" />
            </div>
          </div>

          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/30 p-3 shadow-[0_0_60px_rgba(0,0,0,0.3)] sm:p-5">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <ul className="grid grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {subscriptions.map((sub) => (
                <ScrollReveal key={sub.id}>
                  <div className="h-full">
                    <li className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                      <div className="flex h-full flex-col p-4">
                        <div className="mb-4 flex min-h-[64px] items-start gap-2">
                          <span className="relative flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 text-sm font-bold text-emerald-400">
                            <span className="relative z-10">Passme</span>

                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          </span>

                          <div>
                            <h2 className="text-base font-semibold leading-snug text-neutral-100">
                              {sub.title}
                            </h2>

                            <span className="text-sm text-neutral-400">
                              {sub.duration}
                            </span>
                          </div>
                        </div>

                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img
                            src={sub.images[0]}
                            alt={sub.title}
                            className="h-70 w-full object-cover translate-y-2 scale-[1.02] opacity-90 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100"
                          />
                        </div>

                        <ul className="mb-4 list-inside list-disc space-y-1 text-neutral-300">
                          {sub.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>

                        <div className="mb-4 space-y-1">
                          {sub.prices.map((p) => (
                            <p key={p.label} className="font-bold">
                              {p.label}:{" "}
                              <span className="text-emerald-400">
                                {p.value} ₾
                              </span>
                            </p>
                          ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-2">
                          <a
                            href="https://www.facebook.com/profile.php?id=100093207031308"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]"
                          >
                            <span className="relative z-10">
                              შესაძენად დაგვიკავშირდით
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
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
                              className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-800 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-neutral-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]"
                            >
                              <span className="relative z-10">
                                თამაშების სია
                              </span>

                              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  </div>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
