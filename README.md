# 🌍 Astro + Sanity Landing Page i18n Starter

This starter combines [**Astro**](https://astro.build/), [**Sanity**](https://www.sanity.io/), and [**Turborepo**](https://turborepo.com/) to build a multi-language, SEO-friendly landing page with modern features and content management.

## Configuration

Create a `.env` file in the root of the project with your environment variables:

- `SANITY_PROJECT_ID`: Your Sanity project ID.
- `SANITY_API_TOKEN`: Your Sanity API token.
- `RESEND_API_KEY`: Your RESEND API key.

Then, update project-specific values with your project details in the following files:

- `/apps/sanity/constants.ts`
- `/apps/sanity/structure/languages.ts`
- `/apps/astro/src/global/constants.ts`
- `/apps/astro/src/global/languages.ts`

Also, make sure to modify `/apps/astro/src/pages/api/contact.ts` with the correct email addresses or endpoints used for handling contact form submissions.

## i18n

### Sanity

- Define supported languages, URL slugs/prefixes, and UI translations in `/apps/sanity/structure/language.ts`
- Slugs and prefixes are automatically updated when adding a translated page, using the `/apps/sanity/utils/document-internationalization-callback.ts` function

### Astro

Language configuration and UI translations are handled in `/apps/astro/src/global/languages.ts`, including URL prefix logic in the `getLangPrefix` function:

```ts
export function getLangPrefix(lang: Language): string {
  // Strategy 1: require prefix for all languages
  // return `/${lang}`;

  // Strategy 2: require prefix only for non-default language
  return lang === DEFAULT_LANGUAGE ? '' : `/${lang}`;
}
```

- Choose **Strategy 1** if all languages (including the default) should include a prefix (e.g. `/pl`, `/en`).
- Choose **Strategy 2** if only non-default languages should have a prefix (e.g. `/` for Polish, `/en` for English).

## Preview

You can view a demo version of the project (with placeholder content) at:

👉 https://astro-sanity-landing-page-i18n-starter-astro.vercel.app/
