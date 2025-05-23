import { type FieldDefinition, defineType, defineField } from 'sanity';
import { FileTextIcon, SearchIcon, type LucideIcon } from 'lucide-react';
import { defineSlugForDocument } from '../utils/define-slug-for-document';
import { getLanguagePreview } from '../utils/get-language-preview';
import { localizedPaths, type Page } from '../structure/languages';

type Props = {
  name: Exclude<Page, 'page'>;
  title: string;
  icon: LucideIcon | React.FC | string;
  withComponents?: boolean;
  additionalFields?: FieldDefinition<
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'array'
    | 'block'
    | 'date'
    | 'datetime'
    | 'document'
    | 'file'
    | 'geopoint'
    | 'image'
    | 'reference'
    | 'crossDatasetReference'
    | 'globalDocumentReference'
    | 'slug'
    | 'text'
    | 'url'
    | 'email',
    undefined
  >[];
};

export const defineSingletonPage = ({
  name,
  title,
  icon,
  withComponents = true,
  additionalFields = [],
}: Props) =>
  defineType({
    type: 'document',
    name,
    title,
    icon,
    options: { documentPreview: true },
    fields: [
      defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: true,
      }),
      ...defineSlugForDocument({
        slugs: localizedPaths[name],
      }).map(field => ({ ...field, group: 'content' })),
      ...additionalFields,
      ...(withComponents
        ? [
            defineField({
              name: 'components',
              type: 'components',
              title: 'Page Components',
              group: 'content',
            }),
          ]
        : []),
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
