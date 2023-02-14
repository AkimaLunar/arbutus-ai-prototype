import * as React from 'react';
import type { FC } from 'react';
import { mergeClasses } from '@griffel/react';

import type { GridProps } from './grid.types';
import { useGridStyles } from './grid.styles';

export const Grid: FC<GridProps> = ({ children, layout, className, as: Root = 'div' }) => {
  const classes = useGridStyles();

  return <Root className={mergeClasses(classes.root, layout && classes[layout], className)}>{children}</Root>;
};
