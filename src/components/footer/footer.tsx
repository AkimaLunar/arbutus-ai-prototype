import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@microsoft/arbutus.text';
import { graphql, useStaticQuery } from 'gatsby';
import { Divider } from '@microsoft/arbutus.divider';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import { Link } from '../link';
import { useFooterStyles } from './footer.styles';

import type { FooterData } from '../../content/content.types';
const getHeaderContent = (data: { strapiFooter: FooterData }) => ({
  primaryLinks: data?.strapiFooter?.primaryLinks ?? [],
  secondaryLinks: data?.strapiFooter?.secondaryLinks ?? []
});

export const Footer: FC = () => {
  const classes = useFooterStyles();
  const space = useSpaceStyles();

  const data = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter {
        primaryLinks {
          to
          text
          isExternal
        }
        secondaryLinks {
          to
          text
          isExternal
        }
      }
    }
  `);

  const { primaryLinks, secondaryLinks } = getHeaderContent(data);

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.links}>
          {primaryLinks.map(({ to, text, isExternal }, index) => (
            <Link key={`${to}${index}`} variant="caption" to={to} isExternal={isExternal}>
              {text}
            </Link>
          ))}
        </div>
      </div>
      <Divider className={space.my6} />
      <div className={classes.root}>
        <div className={classes.links}>
          {secondaryLinks.map(({ to, text, isExternal }, index) => (
            <Link key={`${to}${index}`} variant="secondary" to={to} isExternal={isExternal}>
              {text}
            </Link>
          ))}
          <Text color="secondary">© Microsoft {new Date().getFullYear()}</Text>
        </div>
      </div>
    </div>
  );
};
