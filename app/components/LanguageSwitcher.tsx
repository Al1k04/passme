"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex justify-between gap-5   py-2 text-2xl rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 transition hover:border-emerald-500/60">
      <button className="cursor-pointer" onClick={() => setLang("ka")}>
        🇬🇪
      </button>
      <button className="cursor-pointer" onClick={() => setLang("ru")}>
        🇷🇺
      </button>
      <button className="cursor-pointer" onClick={() => setLang("en")}>
        🇺🇸
      </button>
    </div>
  );
}
