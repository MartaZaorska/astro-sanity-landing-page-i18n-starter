import { CircleXIcon, FileTextIcon, SearchIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { defineSlugForDocument } from '../../utils/define-slug-for-document';
import { getLanguagePreview } from '../../utils/get-language-preview';

const name = 'NotFound_Page';
const title = 'Not Found Page (404)';

export default defineType({
  name,
  title,
  type: 'document',
  icon: CircleXIcon,
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
        pl: '/404',
        en: '/en/404',
      },
    }).map(field => ({ ...field, group: 'content' })),
    defineField({
      name: 'components',
      type: 'components',
      title: 'Page Components',
      group: 'content',
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
