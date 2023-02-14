import React, { ButtonHTMLAttributes } from 'react';
import type { FC, ReactNode } from 'react';

import { useHeroButtonStyles } from './hero-button.styles';

const styles = {
  background: 'linear-gradient(180deg, #F2F2F2 0%, #E6E6E6 100%)',
  '&:hover': {
    background: 'linear-gradient(180deg, #E6E6E6 0%, #D9D9D9 100%)',
  },
  '&:active': {
    background: 'linear-gradient(180deg, #D9D9D9 0%, #C8C8C8 100%)',
  }
};

export const HeroButton: FC<{ children: ReactNode & ButtonHTMLAttributes<HTMLButtonElement> }> = ({
  children,
  ...rest
}) => {
  const classes = useHeroButtonStyles();

  return (
    <button style={styles} className={classes.root} {...rest}>
      {children}
    </button>
  );
};
