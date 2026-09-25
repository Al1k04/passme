import Slider from "./components/Slider";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import SaleTimer from "./components/SaleTimer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-4 pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            PlayStation Digital Store
          </div>

          <h1 className="text-4xl font-black tracking-tight text-neutral-100 sm:text-6xl">
            PASSME
          </h1>

          <h2 className="mt-3 text-xl font-bold text-emerald-400 sm:text-3xl">
            ⚽️🔥 ახალი EA SPORTS FC 27 უკვე ხელმისაწვდომია! 🚀
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
            შექმენი შენი გუნდი, დაიწყე ახალი სეზონი და ითამაშე ფეხბურთი ისე,
            როგორც არასდროს! ⚽️🏆
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/games"
              className="group relative overflow-hidden rounded-xl bg-emerald-500 px-6 py-3 font-bold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10">ყველა თამაში 🎮</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>

            <Link
              href="/combo"
              className="group relative overflow-hidden rounded-xl border border-emerald-500/40 bg-neutral-900 px-6 py-3 font-bold text-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]"
            >
              <span className="relative z-10">კომბოები ⚡</span>
              <span className="absolute inset-0 -translate-x-full bg-emerald-500/10 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
            <span className="text-sm">🏆</span>
            <Link href="/top-games">TOP თამაშები</Link>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="relative mx-auto max-w-7xl px-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
                Featured
              </p>

              <h2 className="mt-1 text-2xl font-bold text-neutral-100 sm:text-3xl">
                SPECIAL OFFER
              </h2>
            </div>

            <span className="hidden text-sm text-neutral-500 sm:block">
              Passme Collection
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.25)]">
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
              style={{
                backgroundImage: "url('/banners/disc_fc27.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative flex justify-center p-4">
              <div className="w-[75%] sm:w-full">
                <Slider />
              </div>
            </div>
          </div>

          <SaleTimer />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-emerald-400">
              WHY PASSME?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-neutral-100 sm:text-3xl">
              ყველაფერი მარტივად
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                🎮
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-100">
                დიდი არჩევანი
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                აირჩიე თამაშები და კომბოები შენთვის სასურველ ფასად.
              </p>
            </div>

            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                ⚡
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-100">
                სწრაფი შეძენა
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                დაგვიკავშირდი და მიიღე საჭირო ინფორმაცია მარტივად.
              </p>
            </div>

            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                🔒
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-100">
                მარტივი ინსტრუქცია
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                გამოიყენე ჩვენი ვიდეო ინსტრუქციები ანგარიშის დასამატებლად.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              <span className="text-3xl">⭐</span>

              <h2 className="mt-3 text-2xl font-bold text-neutral-100 sm:text-3xl">
                კმაყოფილი ხარ Passme-ით?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400">
                დაგვიტოვე შეფასება და გაუზიარე შენი გამოცდილება სხვებს.
              </p>

              <Link
                href="/review"
                className="group relative mt-6 inline-flex overflow-hidden rounded-xl bg-emerald-500 px-6 py-3 font-bold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <span className="relative z-10">შეფასების დატოვება ⭐</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
