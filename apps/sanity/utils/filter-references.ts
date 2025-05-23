import type { ReferenceFilterResolverContext } from 'sanity';

type Props = {
  additionalFilter?: string;
  includeLanguage?: boolean;
  checkUnique?: boolean;
  checkSelfReference?: boolean;
};

type ReturnTypes = {
  filter?: string;
  params?: {
    selectedIds?: (string | undefined)[];
    lang?: string;
  };
};

export const filterReferences =
  ({
    additionalFilter = '',
    includeLanguage = false,
    checkUnique = false,
    checkSelfReference = false,
  }: Props) =>
  ({ parent, document }: ReferenceFilterResolverContext): ReturnTypes => {
    const filters: string[] = [];
    const params: Record<string, unknown> = {};

    const isParentArray = Array.isArray(parent);

    if (isParentArray && checkUnique) {
      const selectedIds =
        (parent as { _ref?: string }[]).filter(item => item._ref).map(item => item._ref) || [];
      if (selectedIds.length > 0) {
        filters.push('!(_id in $selectedIds) && !(_id in path("drafts.**"))');
        params.selectedIds = selectedIds;
      }
    }

    if (!isParentArray && checkSelfReference) {
      const drafts_id = (parent as { _id?: string })?._id || '';
      if (drafts_id) {
        filters.push('!(_id in $selectedIds) && !(_id in path("drafts.**"))');
        params.selectedIds = [drafts_id, drafts_id.replace(/^drafts\./, '')];
      }
    }

    if (includeLanguage) {
      const language = (document as { language?: string })?.language;
      if (language) {
        filters.push('language == $lang');
        params.lang = language;
      }
    }

    if (additionalFilter) filters.push(additionalFilter);

    return {
      filter: filters.join(' && '),
      params,
    };
  };
