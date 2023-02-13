import type { BasicPage, ReferencePageData } from '../../content/content.types';

export type NavigationData = {
  allStrapiReferencePage: {
    nodes: ReferencePageData[];
  };
  allStrapiBasicPage: {
    nodes: BasicPage[];
  };
}

export type NavigationProps = {};
