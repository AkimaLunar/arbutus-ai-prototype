import * as React from 'react';
import { PageProps } from 'gatsby';
import { navigate, withPrefix } from 'gatsby';

import type { FC } from 'react';
import { Shell as ArbutusShell } from '@microsoft/arbutus.shell';

import { Navigation } from '../navigation';

export const Shell: FC<PageProps<{}>> = ({ children, location }) => {
  const isHome = location.pathname === withPrefix('/');

  return (
    <ArbutusShell
      footerArea={<></>}
      headerArea={<></>}
      navigationArea={<Navigation />}
      logoText="Arbutus"
      closeTrayLabel="Close navigation"
      openTrayLabel="Open navigation"
      isHeroMode={isHome}
      onLogoClick={() => navigate('/')}
    >
      {children}
    </ArbutusShell>
  );
};
