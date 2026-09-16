import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function Review() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden px-4 py-10 sm:py-16">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <ScrollReveal>
        <section className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
            <span className="animate-pulse">●</span>
            PASSME COMMUNITY
          </div>

          <h1 className="text-3xl font-black leading-tight text-neutral-100 sm:text-5xl">
            შენი აზრი ჩვენთვის
            <span className="block text-emerald-400">
              ძალიან მნიშვნელოვანია ❤️
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            დიდი მადლობელი დაგრჩებით თუ დატოვებთ შეფასებას ჩვენს გვერდზე. შენი
            შეფასება გვეხმარება გავხდეთ კიდევ უფრო უკეთესი.
          </p>

          <div className="group relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.12)]">
            <div className="relative overflow-hidden rounded-xl bg-black">
              <img
                src="/review/review.jpg"
                alt="Review"
                className="mx-auto w-1/2 object-contain transition-all duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>

            <div className="px-4 pb-4 pt-6">
              <div className="mb-5 flex justify-center gap-1 text-2xl">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>

              <p className="text-sm text-neutral-500">
                შენი ერთი შეფასება ჩვენთვის ძალიან მნიშვნელოვანია.
              </p>

              <Link
                href="https://www.facebook.com/profile.php?id=100093207031308"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-emerald-500 px-6 py-3 font-bold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <span className="relative z-10">დატოვე შეფასება ❤️</span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover/button:translate-x-full" />
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs text-neutral-500">
            <span className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2">
              🎮 PlayStation
            </span>

            <span className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2">
              ⚡ Passme
            </span>

            <span className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2">
              ❤️ Community
            </span>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
