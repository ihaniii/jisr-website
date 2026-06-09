import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Lang, type Translations, getTranslation, getDirection, LANGUAGES } from "@/lib/i18n";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("jisr-lang");
    if (stored && ["ar", "en", "sv", "de", "nl", "fr", "no", "da"].includes(stored)) {
      return stored as Lang;
    }
    // Try to detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (["ar", "en", "sv", "de", "nl", "fr", "no", "da"].includes(browserLang)) {
      return browserLang as Lang;
    }
    return "en";
  });

  const t = getTranslation(lang);
  const dir = getDirection(lang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("jisr-lang", newLang);
  };

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
