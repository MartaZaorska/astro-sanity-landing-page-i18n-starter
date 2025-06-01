export type Language = 'pl' | 'en';
export type Page = 'PrivacyPolicy_Page' | 'NotFound_Page' | 'page';

export const LANGUAGES: Array<{ id: Language; title: string }> = [
  { id: 'pl', title: 'Polish' },
  { id: 'en', title: 'English' },
];

export const localizedPaths: Record<Page, Record<Language, string>> = {
  PrivacyPolicy_Page: {
    pl: '/polityka-prywatnosci',
    en: '/en/privacy-policy',
  },
  NotFound_Page: {
    pl: '/404',
    en: '/en/404',
  },
  page: {
    pl: '',
    en: '/en',
  },
};

const translations = {
  pl: {
    label: 'Polish',
    settings: 'Ustawienia strony',
    navigation: 'Nawigacja',
    socialMedia: 'Media społecznościowe',
  },
  en: {
    label: 'English',
    settings: 'Site settings',
    navigation: 'Navigation',
    socialMedia: 'Social media',
  },
};

export function useTranslations<T extends keyof typeof translations>(lang: T) {
  return function t<K extends keyof (typeof translations)[T]>(key: K) {
    return translations[lang][key];
  };
}
