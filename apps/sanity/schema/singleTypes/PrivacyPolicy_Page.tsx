import { LockKeyholeIcon, FileTextIcon, SearchIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { PortableText } from '../ui/PortableText';
import { defineSlugForDocument } from '../../utils/define-slug-for-document';
import { getLanguagePreview } from '../../utils/get-language-preview';

const name = 'PrivacyPolicy_Page';
const title = 'Privacy Policy';

export default defineType({
  name,
  title,
  icon: LockKeyholeIcon,
  type: 'document',
  options: { documentPreview: true },
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    ...defineSlugForDocument({
      slugs: {
        pl: '/polityka-prywatnosci',
        en: '/en/privacy-policy',
      },
    }).map(field => ({ ...field, group: 'content' })),
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Heading',
      group: 'content',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'PortableText',
      title: 'Paragraph (optional)',
      group: 'content',
    }),
    PortableText({
      name: 'content',
      title: 'Content',
      allowHeadings: true,
      linkTypes: ['external', 'internal'],
      useCustomInput: false,
      components: [],
      additionalFields: {
        group: 'content',
      },
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: () => <FileTextIcon size={18} />,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: () => <SearchIcon size={18} />,
    },
  ],
  preview: {
    select: {
      language: 'language',
      name: 'name',
    },
    prepare: ({ name, language }) => getLanguagePreview({ title: name, language }),
  },
});
