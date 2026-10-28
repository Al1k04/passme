"use client";
import ka from "@/messages/ka.json";
import ru from "@/messages/ru.json";
import en from "@/messages/en.json";
import { createContext, useState, useContext, ReactNode } from "react";

type LanguageContextType = {
  lang: "ka" | "ru" | "en";
  setLang: (lang: "ka" | "ru" | "en") => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useCart must be used within LanguageProvider");
  }

  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<"ka" | "ru" | "en">("ka");
  const messages = { ka, ru, en };

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = messages[lang as keyof typeof messages];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
