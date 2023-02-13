import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { navigate, withPrefix } from 'gatsby';

import type { FC } from 'react';
import { Shell as ArbutusShell } from '@microsoft/arbutus.shell';

import { Navigation } from '../navigation';
import { Header } from '../header';
import { Footer } from '../footer';
import { HeaderData } from '../../content/content.types';

type ShellQuery = {
  strapiHeader: HeaderData;
};

export const Shell: FC<PageProps<{}>> = ({ children, location }) => {
  const isHome = location.pathname === withPrefix('/');
  const {
    strapiHeader: { logo }
  } = useStaticQuery<ShellQuery>(graphql`
    query ShellQuery {
      strapiHeader {
        logo {
          alternativeText
          url
        }
      }
    }
  `);

  return (
    <ArbutusShell
      footerArea={<Footer />}
      headerArea={<Header />}
      navigationArea={<Navigation />}
      logoMarkAlt={logo?.alternativeText}
      logoMarkSrc={logo?.url}
      closeTrayLabel="Close navigation"
      openTrayLabel="Open navigation"
      isHeroMode={isHome}
      onLogoClick={() => navigate('/')}
    >
      {children}
    </ArbutusShell>
  );
};
