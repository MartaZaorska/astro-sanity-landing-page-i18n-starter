### Configuration

Create a `.env` file in the root of the project with your environment variables:

- `SANITY_PROJECT_ID`: Your Sanity project ID.
- `SANITY_API_TOKEN`: Your Sanity API token.
- `RESEND_API_KEY`: Your RESEND API key.

Then, update project-specific values with your project details in the following files:

- `/apps/sanity/constants.ts`
- `/apps/sanity/structure/languages.ts`
- `/apps/astro/src/global/constants.ts`
- `/apps/astro/src/global/languages.ts`
- `/apps/astro/src/pages/api/contact.ts`

### i18n

#### Sanity

- Define supported languages, URL slugs/prefixes, and UI translations in `/apps/sanity/structure/language.ts`
- Slugs and prefixes are automatically updated when adding a translated page, using the `/apps/sanity/utils/document-internationalization-callback.ts` function

#### Astro

- Language configuration and UI translations are handled in `/apps/astro/src/global/languages.ts`
