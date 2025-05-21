import { LanguagesIcon } from 'lucide-react';

type Props = {
  language: 'pl' | 'en';
  title: string;
};

const LABELS = {
  pl: '🇵🇱 Polish',
  en: '🇬🇧 English',
};

export const getLanguagePreview = ({ language, title }: Props) => {
  return {
    title,
    subtitle: LABELS[language],
    media: () => <LanguagesIcon size={18} />,
  };
};
