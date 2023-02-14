import type { ReactNode } from 'react';
import type { gridClasses } from './grid.styles';

export type GridProps = {
  /**
   * Custom class name of the root element.
   */
  className?: string;

  /**
   * Choice of grid layouts.
   */
  layout?: keyof typeof gridClasses;

  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * The HTML element to render.
   * @default 'div'
   */
  as?: keyof JSX.IntrinsicElements;
};
