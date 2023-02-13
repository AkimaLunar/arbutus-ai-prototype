// NOTE
// Design doesn’t want links ATM, and an empty query to CMS errors out the build.

import * as React from 'react';
import type { FC } from 'react';
// import { Search24Filled } from '@fluentui/react-icons';
// import { graphql, useStaticQuery } from 'gatsby';

// import { Link } from '../link';
import { useHeaderStyles } from './header.styles';

import type { HeaderData } from '../../content/content.types';

type HeaderQuery = {
  strapiHeader: HeaderData;
};

// const getHeaderContent = (data: HeaderQuery) => ({
//   links: data.strapiHeader.links ?? [],
// })

export const Header: FC = () => {
  const classes = useHeaderStyles();
  // const data = useStaticQuery<HeaderQuery>(graphql`
  //   query HeaderQuery {
  //     strapiHeader {
  //       links {
  //         to
  //         text
  //         isExternal
  //       }
  //     }
  //   }
  // `);

  // const { links } = getHeaderContent(data);

  return (
    <nav className={classes.root}>
      {/* {links.map(({ to, text, isExternal }) => (
        <Link key={to} variant="caption" to={to} isExternal={isExternal}>
          {text}
        </Link>
      ))} */}
      {/* <Search24Filled /> */}
    </nav>
  );
};
