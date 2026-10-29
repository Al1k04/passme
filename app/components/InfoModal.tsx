"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] px-4 py-3 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.12)] active:translate-y-0"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11v5m0-8h.01"
          />
        </svg>

        <span className="relative z-10">{t("modal.button")}</span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14m-6-6 6 6-6 6"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-modal-title"
            className="relative my-auto w-full max-w-md overflow-hidden rounded-2xl border border-emerald-500/20 bg-neutral-950 shadow-[0_0_60px_rgba(16,185,129,0.10)] animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-[70px]" />

            <div className="relative border-b border-neutral-800 px-5 pb-5 pt-6 sm:px-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11v5m0-8h.01"
                    />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    PASSME
                  </p>
                  <h3
                    id="info-modal-title"
                    className="text-xl font-bold tracking-tight text-white"
                  >
                    Primary / Secondary
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close modal"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all duration-200 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18 6-12 12M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-sm leading-6 text-neutral-400">
                Choose the option that works best for you.
              </p>
            </div>

            <div className="relative space-y-4 p-5 sm:p-6">
              <section className="group rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/[0.07]">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3 4.5 7v5c0 4.5 3.2 7.5 7.5 9 4.3-1.5 7.5-4.5 7.5-9V7L12 3Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12 2 2 4-4"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-400">Primary</h4>
                    <p className="text-xs text-neutral-500">
                      Your personal profile
                    </p>
                  </div>

                  <span className="ml-auto rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Main
                  </span>
                </div>

                <p className="text-sm leading-6 text-neutral-300">
                  {t("modal.primary")}
                </p>
              </section>

              <section className="group rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-neutral-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-300 transition-all duration-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h4m-2-2v4m6-3h.01M18 13h.01"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-100">Secondary</h4>
                    <p className="text-xs text-neutral-500">Supplied profile</p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-neutral-300">
                  {t("modal.secondary")}
                </p>
              </section>

              <div className="flex items-center gap-2 rounded-lg border border-neutral-800/80 bg-neutral-900/50 px-3 py-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0 text-emerald-400"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64"
                  />
                  <circle cx="12" cy="12" r="4" />
                </svg>

                <p className="text-xs leading-5 text-neutral-400">
                  PASSME <span className="text-neutral-600">·</span> PlayStation
                  Games
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-neutral-950 transition-all duration-300 hover:bg-emerald-400 active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
