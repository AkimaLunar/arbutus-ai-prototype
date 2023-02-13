import * as React from 'react';
import type { FC } from 'react';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import type { HomeProps } from './home.types';
import { useHomeStyles } from './home.styles';

export const HomeLayout: FC<HomeProps> = () => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();

  return (
    <div className={classes.root}>
      Hello
    </div>
  );
};
