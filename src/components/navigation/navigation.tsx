import * as React from 'react';
import type { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { MainNavigation, MainNavigationRenderer } from '@microsoft/arbutus.main-navigation';
import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import { useLocation } from '@reach/router';

import { getNavigationContent } from './get-navigation-content';
import type { NavigationProps, NavigationData } from './navigation.types';

export const Navigation: FC<NavigationProps> = () => {
  const data = useStaticQuery<NavigationData>(graphql`
    query NavigationQuery {
      allStrapiReferencePage {
        nodes {
          id
          title
          slug
          path
        }
      }
      allStrapiBasicPage {
        nodes {
          id
          title
          slug
          path
          orderInNav
          includeInNav
        }
      }
    }
  `);

  const { pathname } = useLocation();

  const { design, develop, components, themes, utilities } = getNavigationContent(data);

  const items: NavigationItems = {
    aboutUs: {
      title: 'About us',
      id: '/about',
      linkProps: { to: '/about' },
      hasDivider: true
    },
    design: {
      title: 'Design',
      items: design ?? {}
    },
    develop: {
      title: 'Develop',
      hasDivider: true,
      items: develop ?? {}
    },
    uiLibrary: {
      title: 'UI Library',
      hasDivider: true,
      items: {
        overview: {
          title: 'Overview',
          id: '/library',
          linkProps: { to: '/library' }
        },
        components: {
          title: 'Components',
          items: components ?? {}
        },
        utilities: {
          title: 'Utilities',
          items: utilities ?? {}
        },
        themes: {
          title: 'Themes',
          items: themes ?? {}
        }
      }
    }
  };

  return (
    <MainNavigation>
      <MainNavigationRenderer items={items} linkAs={Link} activeItemId={pathname} />
    </MainNavigation>
  );
};
