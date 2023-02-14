import * as React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import { MainNavigation, MainNavigationRenderer } from '@microsoft/arbutus.main-navigation';
import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import { useLocation } from '@reach/router';

import type { NavigationProps } from './navigation.types';

const items: NavigationItems = {
  aboutUs: {
    title: 'About us',
    id: '/about',
    linkProps: { to: '/about' },
    hasDivider: true
  },
  design: {
    title: 'Design',
    id: '/design',
    linkProps: { to: '/design' },
  },
  develop: {
    title: 'Develop',
    id: '/develop',
    linkProps: { to: '/develop' },
  },
};

export const Navigation: FC<NavigationProps> = () => {
  const { pathname } = useLocation();

  return (
    <MainNavigation>
      <MainNavigationRenderer items={items} linkAs={Link} activeItemId={pathname} />
    </MainNavigation>
  );
};
