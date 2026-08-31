import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { DICTIONARIES, I18nContext, initialLang, LANG_STORAGE_KEY } from './context';
import type { Lang } from './context';

/**
 * Holds the current language, persists explicit choices to localStorage,
 * and keeps `<html lang>` and the document title in sync.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* storage unavailable — the choice just won't persist */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = DICTIONARIES[lang].meta.title;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}
