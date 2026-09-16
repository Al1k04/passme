"use client";

import { useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-100 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-400"
      >
        <IoMenu className="h-6 w-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col border-l border-emerald-500/20 bg-neutral-950 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 p-5">
          <span className="text-xl font-bold text-emerald-400">Passme</span>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-100 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-400"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-5">
          <Link
            href="/games"
            onClick={closeMenu}
            className="group flex items-center rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-4 text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <span className="mr-3 h-2 w-2 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            ყველა თამაში
          </Link>

          <Link
            href="/subscriptions"
            onClick={closeMenu}
            className="group flex items-center rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-4 text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <span className="mr-3 h-2 w-2 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            PS PLUS
          </Link>

          <Link
            href="/combo"
            onClick={closeMenu}
            className="group flex items-center rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-4 text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <span className="mr-3 h-2 w-2 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            კომბო
          </Link>

          <Link
            href="/instructions"
            onClick={closeMenu}
            className="group flex items-center rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-4 text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <span className="mr-3 h-2 w-2 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            ინსტრუქციები
          </Link>
        </nav>

        <div className="mt-auto p-5">
          <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4 text-center">
            <span className="text-sm text-neutral-500">
              PlayStation Digital Store
            </span>
            <p className="mt-1 font-semibold text-emerald-400">Passme</p>
          </div>
        </div>
      </aside>
    </>
  );
}
