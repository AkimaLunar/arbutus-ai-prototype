import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { HEADER_HEIGHT } from '@microsoft/arbutus.shell';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import { CONTAINER_WIDTH } from '@microsoft/arbutus.shell';

export const useHomeStyles = makeStyles({
  root: {
    position: 'relative',
  },
  container: {
    position: 'relative',
    maxWidth: '980px',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingLeft: tokens.spacingHorizontalL
    },
    [`@media screen and (max-width: ${CONTAINER_WIDTH})`]: {
      paddingRight: tokens.spacingHorizontalL
    }
  },
  hero: {
    display: 'grid',
    paddingTop: '80px',
    paddingBottom: tokens.spacingVerticalXXXL,
    gridTemplateColumns: '1fr 1fr',
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '40px',
      paddingBottom: 0,
      gridTemplateColumns: '1fr'
    }
  },
  heroImage: {
    transform: 'scale(1.50)',
    transformOrigin: 'center center',
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gridTemplateColumns: '1fr',
      transform: 'scale(1)',
    }
  },
  heroBackground: {
    position: 'absolute',
    top: `-${HEADER_HEIGHT}`,
    height: '620px',
    width: '100%'
  },
  heroLogo: {
    height: '68px',
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      height: '40px',
    }
  },
  heroText: {
    paddingTop: tokens.spacingVerticalXXXL,
    paddingBottom: tokens.spacingVerticalXXXL,
    '& > h2': {
      // Design wanted specifically white on all themes, so we can’t use tokens here.
      color: '#FFF',
      marginTop: tokens.spacingVerticalXXXL,
      marginBottom: 0,
      [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        textAlign: 'center',
        marginTop: tokens.spacingVerticalL,
        fontSize: tokens.fontSizeBase400
      }
    },
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      textAlign: 'center',
      paddingBottom: tokens.spacingVerticalL,
    }
  },
  backgroundImage: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  gradientTransition: {
    height: '340px',
    width: '100%',
    position: 'absolute',
    bottom: '0'
  },
  navigationTiles: {
    '@media screen and (max-width: 680px)': {
      gridTemplateColumns: '1fr'
    }
  },
  resources: {
    gridAutoRows: '178px'
  }
});
