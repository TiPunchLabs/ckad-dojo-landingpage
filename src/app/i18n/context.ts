import { createContext, useContext } from 'react';
import { en } from './en';
import { fr } from './fr';
import type { Dictionary } from './en';

export type Lang = 'en' | 'fr';

export const DICTIONARIES: Record<Lang, Dictionary> = { en, fr };

export const LANG_STORAGE_KEY = 'lang';

export interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Resolves the language to show on first load: the user's stored choice
 * if any, otherwise the browser language (French browsers get FR, everyone
 * else gets EN — the default).
 */
export function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') return stored;
  } catch {
    /* storage unavailable — fall through to browser detection */
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

/** Returns the current language, its dictionary `t`, and `setLang`. */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider');
  return ctx;
}
