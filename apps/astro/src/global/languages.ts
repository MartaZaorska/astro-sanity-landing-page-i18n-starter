export const LANGUAGES = ['pl', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'pl';

const translations = {
  pl: {
    language: {
      switcherAriaLabel: 'Zmień język',
      alternativeName: 'Polish',
      names: {
        pl: 'Polski',
        en: 'Angielski',
      },
    },
    breadcrumbsName: 'Strona główna',
    header: {
      skipLink: 'Przejdź do treści głównej',
      logoAriaLabel: 'Przejdź do strony głównej',
      menuButtonAriaLabel: 'Pokaż lub ukryj nawigację',
    },
    footer: {
      navAriaLabel: 'Nawigacja w stopce',
      resetCookiesButton: 'Ustawienia plików cookies',
    },
    form: {
      legal: {
        labelFirst: 'Wyrażam zgodę na',
        labelSecond: 'politykę prywatności',
        required: 'Zgoda jest wymagana',
      },
      email: {
        label: 'E-mail',
        required: 'E-mail jest wymagany',
        pattern: 'Niepoprawny adres e-mail',
      },
      message: {
        label: 'Temat rozmowy',
        required: 'Temat jest wymagany',
        placeholder: 'O czym porozmawiamy?',
      },
      submitButton: 'Wyślij wiadomość',
      tryAgainButton: 'Spróbuj ponownie',
    },
    messageTemplate: {
      emailLabel: 'Adres e-mail',
      fromLabel: 'Formularz kontaktowy NAME',
      subject: 'Wiadomość z formularza kontaktowego NAME',
      userConfirmationHTMLTemplate: `
        <p>Witaj!</p>
        <p>Dziękujemy za skontaktowanie się z NAME. Otrzymaliśmy Twoją wiadomość i wkrótce się z Tobą skontaktujemy.</p>
        <br />
        <p>Z poważaniem,</p>
        <p>Zespół <b>NAME</b></p> 
      `,
      userConfirmationSubject: 'Dziękujemy za kontakt z NAME',
    },
    cookieConsent: {
      title: 'Korzystając ze strony zgadzasz się na użycie plików cookie',
      description:
        'Korzystamy z plików cookie, aby zapewnić prawidłowe funkcjonowanie naszej strony oraz dostosować jej działanie do Twoich potrzeb.',
      learnMore: 'Dowiedz się więcej',
      detailsIntro: 'Poniżej znajdziesz informacje o tym, jakie dane i w jakim celu zbieramy.',
      buttons: {
        acceptAll: 'Zgoda na wszystkie',
        setPreferences: 'Ustaw preferencje',
        deny: 'Odmowa',
      },
      groups: [
        {
          id: 'necessary',
          name: 'Niezbędne',
          description: `Niezbędne pliki cookie pomagają uczynić naszą stronę użyteczną, umożliwiając działanie podstawowych funkcji, takich jak nawigacja po stronie internetowej czy dostęp do bezpiecznych obszarów strony. Bez tych plików cookie niektóre podstawowe funkcje strony nie będą działać prawidłowo.`,
        },
        {
          id: 'analytics',
          name: 'Analityczne',
          description: `Pliki cookie analityczne pomagają nam zrozumieć, w jaki sposób użytkownicy wchodzą w interakcje z naszą stroną internetową, zbierając i raportując informacje anonimowo. Te dane są wykorzystywane do doskonalenia struktury i treści strony.`,
        },
        {
          id: 'preferences',
          name: 'Preferencyjne',
          description: `Pliki cookie preferencyjne pozwalają stronie internetowej zapamiętywać informacje, które zmieniają sposób, w jaki strona się zachowuje lub wygląda, takie jak preferowany język lub region, w którym się znajdujesz.`,
        },
        {
          id: 'marketing',
          name: 'Marketingowe',
          description: `Pliki cookie marketingowe są używane do śledzenia odwiedzających na stronach internetowych. Ich celem jest wyświetlanie reklam, które są istotne i interesujące dla indywidualnych użytkowników, a tym samym bardziej wartościowe dla wydawców i zewnętrznych reklamodawców.`,
        },
      ],
    },
  },
  en: {
    language: {
      switcherAriaLabel: 'Change language',
      alternativeName: 'Angielski',
      names: {
        pl: 'Polish',
        en: 'English',
      },
    },
    breadcrumbsName: 'Homepage',
    header: {
      skipLink: 'Skip to main content',
      logoAriaLabel: 'Go to homepage',
      menuButtonAriaLabel: 'Toggle navigation',
    },
    footer: {
      navAriaLabel: 'Footer navigation',
      resetCookiesButton: 'Cookie settings',
    },
    form: {
      legal: {
        labelFirst: 'I agree to',
        labelSecond: 'privacy policy',
        required: 'Legal consent is required',
      },
      email: {
        label: 'E-mail',
        required: 'E-mail is required',
        pattern: 'Invalid e-mail address',
      },
      message: {
        label: 'Message subject',
        required: 'Subject is required',
        placeholder: 'What would you like to talk about?',
      },
      submitButton: 'Send message',
      tryAgainButton: 'Try again',
    },
    messageTemplate: {
      emailLabel: 'E-mail',
      fromLabel: 'NAME Contact Form',
      subject: 'Message from contact form NAME',
      userConfirmationHTMLTemplate: `
        <p>Hello!</p>
        <p>Thank you for contacting NAME. We have received your message and will contact you soon.</p>
        <br />
        <p>Best regards,</p>
        <p>NAME</p>
      `,
      userConfirmationSubject: 'Thank you for contacting NAME',
    },
    cookieConsent: {
      title: 'By using this site, you agree to the use of cookies',
      description:
        'We use cookies to ensure our website works properly and tailor it to your needs.',
      learnMore: 'Learn more',
      detailsIntro: 'Below you will find information about what data we collect and why.',
      buttons: {
        acceptAll: 'Accept all',
        setPreferences: 'Set preferences',
        deny: 'Decline',
      },
      groups: [
        {
          id: 'necessary',
          name: 'Necessary',
          description: `Necessary cookies help make our website usable by enabling basic functions like page navigation and access to secure areas of the site. Without these cookies, some core features will not function properly.`,
        },
        {
          id: 'analytics',
          name: 'Analytics',
          description: `Analytics cookies help us understand how users interact with our website by collecting and reporting information anonymously. This data is used to improve the structure and content of the site.`,
        },
        {
          id: 'preferences',
          name: 'Preferences',
          description: `Preference cookies allow the website to remember information that changes the way the site behaves or looks, such as your preferred language or the region you are in.`,
        },
        {
          id: 'marketing',
          name: 'Marketing',
          description: `Marketing cookies are used to track visitors across websites. Their purpose is to display ads that are relevant and engaging for individual users and therefore more valuable for publishers and third-party advertisers.`,
        },
      ],
    },
  },
};

export function getLocaleFromSlug(slug: string) {
  const [, lang] = slug.split('/');
  return (LANGUAGES.find(language => lang === language) ? lang : DEFAULT_LANGUAGE) as Language;
}

export function useTranslations<T extends keyof typeof translations>(lang: T) {
  return function t<K extends keyof (typeof translations)[T]>(key: K) {
    return translations[lang][key];
  };
}

/**
 * Returns the language URL prefix for routing purposes.
 *
 * Choose one of the two return statements below depending on your i18n strategy:
 *
 * 1. Require prefix for all languages (e.g. /en, /pl):
 *    return `/${lang}`;
 *
 * 2. Require prefix only for non-default languages (e.g. / for default):
 *    return lang === DEFAULT_LANGUAGE ? '' : `/${lang}`;
 */
export function getLangPrefix(lang: Language): string {
  // Strategy 1: require prefix for all languages
  //return `/${lang}`;

  // Strategy 2: require prefix only for non-default language
  return lang === DEFAULT_LANGUAGE ? '' : `/${lang}`;
}
