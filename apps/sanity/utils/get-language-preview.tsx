import { type Language, useTranslations } from '../structure/languages';

export const getLanguageIcon = (language: Language) => (
  <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', opacity: '0.8' }}>
    {language || ''}
  </span>
);

export const getLanguagePreview = ({ language, title }: { language: Language; title: string }) => {
  return {
    title,
    subtitle: language ? useTranslations(language)('label') : '',
    media: () => getLanguageIcon(language),
  };
};
