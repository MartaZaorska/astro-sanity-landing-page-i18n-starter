export const LANGUAGES = [
  { id: 'pl', title: '🇵🇱 Polish' },
  { id: 'en', title: '🇬🇧 English' },
];

export const translations = {
  pl: {
    settings: 'Ustawienia strony',
    navigation: 'Nawigacja',
    socialMedia: 'Media społecznościowe',
  },
  en: {
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
