import { makeStyles, shorthands } from '@griffel/react';

export const useHeroButtonStyles = makeStyles({
  root: {
    ...shorthands.border('1px solid #C8C8C8'),
    ...shorthands.borderRadius('4px'),
    color: '#605E5C',
    cursor: 'pointer',
    fontFamily: 'Segoe UI',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    ...shorthands.padding('8px 16px'),
    textAlign: 'center',
    textTransform: 'uppercase',
    transitionProperty: 'background, border, color',
    transitionDuration: '0.1s',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      ...shorthands.border('1px solid #8A8886'),
      color: '#252423'
    },
    '&:active': {
      ...shorthands.border('1px solid #8A8886'),
      color: '#252423'
    }
  }
});
