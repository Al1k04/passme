"use client";

import { useEffect, useState } from "react";

const SALE_END = new Date("2026-09-22T23:59:59");

function getTimeLeft() {
  const diff = Math.max(0, SALE_END.getTime() - Date.now());

  return {
    days: Math.floor(diff / (24 * 60 * 60 * 1000)),
    hours: Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
    minutes: Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)),
    seconds: Math.floor((diff % (60 * 1000)) / 1000),
  };
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="group relative flex min-w-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-emerald-500/20 bg-neutral-900/70 px-2 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] sm:px-4 sm:py-5">
      {" "}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      ```
      <span className="text-2xl font-black tabular-nums tracking-tight text-neutral-100 sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-500 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

export default function SaleTimer() {
  const [time, setTime] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(getTimeLeft());
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return null;
  }

  const isFinished =
    time.days === 0 &&
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0;

  return (
    <section className="relative mt-4 overflow-hidden rounded-2xl border border-emerald-500/20 bg-neutral-950/40 px-4 py-7 sm:px-8 sm:py-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-72 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="relative mx-auto max-w-xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Limited Time Offer
        </div>

        <h3 className="text-xl font-black tracking-tight text-neutral-100 sm:text-2xl">
          Back to the School
        </h3>

        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
          სპეციალური შეთავაზება მთავრდება მალე ⚡
        </p>

        {isFinished ? (
          <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 text-sm font-bold text-neutral-300">
            აქცია დასრულდა 🎮
          </div>
        ) : (
          <div className="mt-6 flex items-center gap-1.5 sm:gap-3">
            <TimeCard value={time.days} label="Days" />

            <span className="text-lg font-black text-emerald-500/50 sm:text-2xl">
              :
            </span>

            <TimeCard value={time.hours} label="Hours" />

            <span className="text-lg font-black text-emerald-500/50 sm:text-2xl">
              :
            </span>

            <TimeCard value={time.minutes} label="Minutes" />

            <span className="text-lg font-black text-emerald-500/50 sm:text-2xl">
              :
            </span>

            <TimeCard value={time.seconds} label="Seconds" />
          </div>
        )}

        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-widest text-neutral-600">
          <span className="h-px w-8 bg-neutral-800" />
          PASSME DIGITAL STORE
          <span className="h-px w-8 bg-neutral-800" />
        </div>
      </div>
    </section>
  );
}
