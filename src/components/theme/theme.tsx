import * as React from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@microsoft/arbutus.theming';
import { useSegoeUI100, useSegoeUI200, useSegoeUI400, useSegoeUI600, useSegoeUI700 } from '@microsoft/arbutus.fonts';
import type { FC } from 'react';
import 'normalize.css';
import { makeStaticStyles } from '@griffel/react';

export const madsBrandRamp = {
  10: '#151515',
  20: '#0E141D',
  30: '#122133',
  40: '#13304B',
  50: '#103F61',
  60: '#0A4F77',
  70: '#00608D',
  80: '#0071A1',
  90: '#0082B5',
  100: '#0093C7',
  110: '#0FA5D9',
  120: '#2AB7E9',
  130: '#44C9F7',
  140: '#75D9FD',
  150: '#A6E7FE',
  160: '#D3F4FE'
};

const useGlobalStyles = makeStaticStyles({
  '*': {
    boxSizing: 'border-box'
  },
  div: {
    width: '100%'
  },
  // This prevents the default link underline on the nav items, but should be removed when MainNavigation passes that
  // style override to the Link component.
  a: {
    textDecoration: 'none'
  }
});

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useGlobalStyles();

  return <ThemeProvider brandVariants={madsBrandRamp}>{children}</ThemeProvider>;
};
