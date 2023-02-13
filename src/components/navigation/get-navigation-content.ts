import { NavigationItems } from '@microsoft/arbutus.main-navigation';
import type { NavigationData } from '.';
import type { ReferencePageData, BasicPage } from '../../content/content.types';

/* Common utilities. */

const sortAlphabetically = (a: ReferencePageData | BasicPage, b: ReferencePageData | BasicPage) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const sortByIndex = (a: BasicPage, b: BasicPage) => {
  if (!a.orderInNav || !b.orderInNav) {
    return 0;
  }
  if (a.orderInNav < b.orderInNav) {
    return -1;
  }
  if (a.orderInNav > b.orderInNav) {
    return 1;
  }
  return 0;
};

/* Basic page formatting. */

const formatBasicPagesForNavigation = (data: BasicPage[]) =>
  data.reduce((acc, { id, title, slug, path }) => {
    acc[id] = {
      title,
      id: `/${path}/${slug}`,
      linkProps: { to: `/${path}/${slug}` }
    };
    return acc;
  }, {} as NavigationItems) ?? {};

const sortBasicPages = (data: NavigationData['allStrapiBasicPage']['nodes']) => {
  const filtered = data.filter((page) => page.includeInNav);
  const indexedPages = filtered.filter((page) => typeof page.orderInNav === 'number').sort(sortByIndex);
  const restOfPages = filtered.filter((page) => typeof page.orderInNav !== 'number').sort(sortAlphabetically);

  return [...indexedPages, ...restOfPages];
};

const formatBasicPageData = (data: NavigationData, path: 'design' | 'develop') => {
  if (!data['allStrapiBasicPage']) {
    return undefined;
  }

  return data['allStrapiBasicPage']!.nodes.length > 0
    ? formatBasicPagesForNavigation(
        sortBasicPages(data['allStrapiBasicPage']?.nodes.filter((node) => node.path === path))
      )
    : undefined;
};

/* Reference page formatting. */

const formatReferencePagesForNavigation = (data: ReferencePageData[]) =>
  data.reduce((acc, { id, title, slug, path }) => {
    acc[id] = {
      title,
      id: `/library/${path}/${slug}`,
      linkProps: { to: `/library/${path}/${slug}` }
    };
    return acc;
  }, {} as NavigationItems) ?? {};

const sortReferencePages = (data: NavigationData['allStrapiReferencePage']['nodes']) => data.sort(sortAlphabetically);

const formatReferencePageData = (data: NavigationData, path: 'components' | 'themes' | 'utilities') => {
  if (!data['allStrapiReferencePage']) {
    return undefined;
  }

  return data['allStrapiReferencePage']!.nodes.length > 0
    ? formatReferencePagesForNavigation(
        sortReferencePages(data['allStrapiReferencePage']?.nodes.filter((node) => node.path === path))
      )
    : undefined;
};

/* Final navigation object. */

export const getNavigationContent = (data: NavigationData) => ({
  design: formatBasicPageData(data, 'design'),
  develop: formatBasicPageData(data, 'develop'),
  components: formatReferencePageData(data, 'components'),
  themes: formatReferencePageData(data, 'themes'),
  utilities: formatReferencePageData(data, 'utilities')
});
