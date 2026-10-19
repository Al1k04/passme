"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useLanguage();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-neutral-800 hover:bg-emerald-500 transition-colors"
      >
        {t("modal.button")}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-md max-h-[80vh] overflow-y-auto rounded-lg bg-neutral-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-2">Primary / Secondary</h3>
            <p className="text-neutral-300">{t("modal.primary")}</p>
            <p className="text-neutral-300 mt-3">{t("modal.secondary")}</p>
          </div>
        </div>
      )}
    </>
  );
}
