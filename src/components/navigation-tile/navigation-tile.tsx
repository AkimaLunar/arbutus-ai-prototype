import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@fluentui/react-text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import { Link } from '../link';
import { useNavigationTileStyles } from './navigation-tile.styles';
import { Image } from '../image';

import type { NavigationTileProps } from './navigation-tile.types';

export const NavigationTile: FC<NavigationTileProps> = ({ links, title, thumbnail }) => {
  const classes = useNavigationTileStyles();
  const space = useSpaceStyles();
  return (
    <Tile variant="card" className={classes.root}>
      {thumbnail ? <Image image={thumbnail} className={classes.image} /> : <div className={classes.placeholder} />}
      <div className={space.py9}>
        <Text size={600}>{title}</Text>
        <ul className={classes.links}>
          {links.map(({ text, to, isExternal }) => (
            <li key={text} className={classes.link}>
              <Link to={to} isExternal={isExternal} variant="secondary">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Tile>
  );
};
